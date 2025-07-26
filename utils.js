import { getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function isDuplicateData(colRef, data) {
  const entries = Object.entries(data).filter(([key, value]) => typeof value === "string" || typeof value === "number");

  if (entries.length === 0) return false;

  let q = colRef;
  entries.forEach(([key, value]) => {
    q = query(q, where(key, "==", value));
  });

  try {
    const snapshot = await getDocs(q);
    return !snapshot.empty;
  } catch (err) {
    console.warn("⚠️ Duplicate check failed:", err);
    return false;
  }
}
