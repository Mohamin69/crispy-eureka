Deployment options

This repository is a small PHP website with a file-based user store. Below are two recommended deployment approaches:

Option A — Render (Docker)
- Good for: easy continuous deploy from GitHub, runs PHP in a container, supports free trial credits.
- Steps:
  1. Create a GitHub repository and push this project (root contains `hamza.html`, `Dockerfile`, `register.php`, etc.).
     ```bash
     git init
     git add .
     git commit -m "Initial site"
     git branch -M main
     git remote add origin https://github.com/<your-username>/<repo>.git
     git push -u origin main
     ```
  2. Sign in to https://render.com and create a new "Web Service".
     - Choose "Deploy using Docker" (Render will build the Dockerfile).
     - Link your GitHub repo and pick the `main` branch.
     - Set the build and start commands to the defaults (Render will use the Dockerfile).
     - Environment: add any env vars you need later.
  3. Deploy. Render will build the image and give you a public URL.
  4. (Optional) Add a custom domain in Render's dashboard.

Local test with Docker (before pushing):
```powershell
# build
docker build -t hamza-site .
# run
docker run -p 8000:80 hamza-site
# open http://localhost:8000/hamza.html
```

Option B — Shared PHP hosting (cPanel)
- Good for: inexpensive hosting providers that support PHP (Hostinger, Namecheap, Bluehost, 000webhost).
- Steps:
  1. Buy hosting that supports PHP and sFTP or cPanel.
  2. Upload all files to the `public_html` (or `www`) folder via sFTP or the file manager.
  3. Ensure `users.json` is writable by the web server (set permissions to 664 or 666 depending on provider).
  4. Point your domain to the hosting provider.

Security notes
- This project uses a file-based `users.json` store. For production use a database (MySQL / PostgreSQL) and avoid storing credentials in a file.
- Always enable HTTPS (Render provides TLS; for shared hosting use the provider's SSL tools or Let's Encrypt).
- Move `users.json` outside the webroot if possible and adjust paths in the PHP files.

If you'd like, I can:
- Push this repo to a new GitHub repo (I will need your GitHub repo URL or permission to create one).
- Prepare a `docker-compose.yml` for local development (php + optional sqlite or mysql).
- Walk through deploying to Render step-by-step and connect a custom domain.
