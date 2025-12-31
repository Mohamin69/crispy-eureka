# HAMZA Beauty – APK Build Guide

Your website is now ready to build as an Android APK using **PhoneGap Build**, a cloud service that requires no local Android SDK installation.

---

## 📱 Quick Setup (5 Minutes)

### Step 1: Prepare the ZIP File
1. Open a file manager
2. Navigate to: `C:\Users\Mohamin\Desktop\Project\cordova-build\`
3. Select all items in the `cordova-build` folder (config.xml, www/, README.md, etc.)
4. **Right-click → Send to → Compressed (zipped) folder**
5. Save as: `hamza-beauty-app.zip`

**Alternative (Command Line):**
```powershell
# In PowerShell, from the Desktop/Project folder:
Compress-Archive -Path cordova-build -DestinationPath cordova-build.zip -Force
```

---

### Step 2: Sign Up for PhoneGap Build
1. Visit: **https://build.phonegap.com/**
2. Click **"Sign up"**
3. Create free account (email + password)
4. **Verify your email** (check inbox)
5. Log in to dashboard

---

### Step 3: Upload Your APP
1. On PhoneGap Build dashboard, click **"Create new app"** or **"Upload"**
2. Select **"Upload a .zip file"**
3. Choose the `hamza-beauty-app.zip` you created in Step 1
4. Click **"Upload"**

---

### Step 4: Build APK
1. PhoneGap Build automatically starts building for Android
2. Wait for the Android build to complete (usually 2-5 minutes)
3. You'll see a **green checkmark** ✅ when ready
4. Click the **download** button next to Android build

---

### Step 5: Install on Phone or Emulator
**Option A: Email yourself the APK**
- Click "Share" → get a link → email it to your phone
- Open email on Android phone → tap link → install

**Option B: Use Android Emulator**
- Download [Android Studio](https://developer.android.com/studio) (includes emulator)
- Open the APK with Android Emulator

---

## 📋 What's Included

```
cordova-build/
├── config.xml          # App metadata (name, version, permissions, icon)
├── www/                # Your website (served as app)
│   ├── index.html      # Main page (hamza.html renamed)
│   ├── hamza.css       # Styling
│   ├── hamza.js        # Interactivity
│   ├── *.php           # Backend endpoints (register, login, contact)
│   └── images/         # Product & logo images
├── README.md           # Original instructions
└── SETUP_INSTRUCTIONS.md  # This file
```

---

## 🔐 Security Notes

### Backend Access
Your PHP backend (register.php, login.php, contact.php) is now **embedded in the APK**.

**Important:** APKs deployed on users' phones cannot access `localhost:8000`. You have two options:

#### Option A: Host Backend Online (Recommended)
1. Deploy your PHP backend to a web server (e.g., Bluehost, Hostinger, DigitalOcean)
2. Update `hamza.js` to point to your online server:
   ```javascript
   const API_BASE = 'https://yourdomain.com';  // Change from localhost:8000
   ```
3. Rebuild and redeploy APK

**Example deployment options:**
- **Bluehost** ($2.95/mo): Easy WordPress/PHP hosting
- **DigitalOcean** ($4-6/mo): VPS with full control
- **Vercel/Netlify** (Free): Serverless functions for API routes
- **Firebase** (Free tier): Backend-as-a-service

#### Option B: Local Testing Only
Keep `localhost:8000` for testing on your development machine. The app will work on your emulator/phone only if on the same WiFi network.

---

## 🔄 Rebuild After Changes

To update your app after making changes to the website:

1. **Modify** your HTML/CSS/JS as needed
2. **Copy** updated files to `cordova-build/www/`
3. **Recreate** `cordova-build.zip`
4. **Re-upload** to PhoneGap Build dashboard
5. **Rebuild** → Download new APK

---

## ⚙️ Customization (Optional)

### Change App Icon
1. Replace `www/images/hamza-logo.svg` with your icon (1024x1024px or larger, PNG recommended)
2. Update `config.xml` to reference the new icon file
3. Rebuild

### Change App Name
1. Edit `config.xml`:
   ```xml
   <name>Your App Name</name>
   ```
2. Rebuild

### Add Android Permissions
1. Edit `config.xml` to add permissions:
   ```xml
   <permission name="android.permission.CAMERA" />
   <permission name="android.permission.WRITE_EXTERNAL_STORAGE" />
   ```
2. Rebuild

### Change App Version
1. Edit `config.xml`:
   ```xml
   <widget id="com.hamzabeauty.app" version="1.0.1">
   ```
2. Increment version when pushing updates

---

## 🌐 Offline Capability

The APK includes all images, CSS, and HTML — so your app **works offline**. However:
- Auth endpoints (register, login) will fail offline **unless** you set up a local sync mechanism
- Static pages (About, FAQ) will display fine offline

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails after upload | Check `config.xml` syntax. Download build log from PhoneGap dashboard. |
| "Cannot find localhost:8000" on phone | Backend not reachable. Deploy PHP to online server (see Option A above). |
| Images not showing in app | Ensure `www/images/` folder is included in ZIP. Check file paths in HTML. |
| App crashes on startup | Open Chrome DevTools (if Android device is connected via USB) to see console errors. |
| Can't install APK on phone | Enable "Unknown sources" in Android Settings → Security. |

---

## 📞 Support

- **PhoneGap Build Help**: https://build.phonegap.com/docs
- **Cordova Documentation**: https://cordova.apache.org/
- **Android App Troubleshooting**: https://developer.android.com/docs

---

## ✅ Next Steps

1. ✅ ZIP the `cordova-build` folder
2. ✅ Sign up for PhoneGap Build (free)
3. ✅ Upload ZIP to dashboard
4. ✅ Download APK
5. ✅ Install on Android device or emulator
6. 🔄 (Optional) Deploy PHP backend online for production use

Enjoy your HAMZA Beauty app! 🎉
