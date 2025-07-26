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
SessionID-Public/
├── icons/
│   ├── 48.png                  # Toolbar icon (48x48)
│   └── 128.png                 # Chrome Web Store icon (128x128)
│
├── background.js              # Core logic to extract and save session cookies
├── wake.js                    # Keeps the service worker alive (optional)
├── firebase-init.js           # Firebase config + initialization
├── firebase-firestore.js      # Modular Firestore SDK import
├── manifest.json              # Chrome extension config (Manifest V3)
├── utils.js                   # Utility functions (if any)
└── readme.md                  # You're reading this!

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
