# HAMZA Beauty APK Build (PhoneGap Build)

This folder contains files ready to build your Android APK using **PhoneGap Build** — a free cloud service.

## Quick Setup

1. **Sign up** (free): https://build.phonegap.com/

2. **Upload this folder** as a ZIP:
   - Zip the entire `cordova-build` folder
   - Upload to PhoneGap Build dashboard
   - Click "Build" → Android

3. **Download APK**:
   - After build completes (2-5 mins), download the `.apk` file
   - Install on Android device or emulator

## What's included

- `config.xml` — App metadata and permissions
- `www/` — Your website files (HTML, CSS, JS, images)
- `res/` — Icons and splash screens (optional; customize if desired)

## Customization

Edit `config.xml` to change:
- `<name>` — App title
- `<description>` — Short app description
- `<author>` — Contact info
- `<icon>` and `<splash>` — Custom branding images

## Notes

- **No local build tools needed** — PhoneGap Build does everything.
- **APK expires after 30 days** if unused; rebuild anytime.
- **Offline features** — App works without internet (static content).
- **PHP backend** — Contact/signup features require internet + your live server (configure in `www/config.js` if needed).

## For Production

1. Generate a signing key (PhoneGap Build prompts this)
2. Store the key securely
3. Update app version in `config.xml` for future releases

## Support

- PhoneGap Docs: https://phonegap.com/getstarted/
- Build status: https://build.phonegap.com/

