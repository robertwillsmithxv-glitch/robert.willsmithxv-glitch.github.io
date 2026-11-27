# Da SMP on GitHub

This folder is prepared for a GitHub Pages website and a separate GitHub
Release download. The original `server website` folder is not modified.

## Publish the website with GitHub Pages

1. Create a **public** GitHub repository. GitHub Pages on the free plan requires
   a public repository.
2. Upload the **contents of the `site` folder** to the root of that repository.
   Keep `index.html`, `styles.css`, and `script.js` at the repository root, and
   preserve the `images` folder alongside them. Do not upload the `site` folder
   itself as a nested directory.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**,
   choose **Deploy from a branch**, select the `main` branch and `/ (root)`,
   then save.
4. Wait for the Pages deployment to finish. The site URL will look like
   `https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY/`.

The HTML refers to images using relative paths, so GitHub Pages serves them
from the repository automatically.

## Attach the ZIP to a GitHub Release

Do **not** add the ZIP to the repository or GitHub Pages site. It is in
`release-assets` for attaching to a release, and is larger than GitHub's 25 MiB
browser file-upload limit for repository files.

1. On the repository page, open **Releases → Draft a new release**.
2. Create the tag `v1.0` (or use another tag and keep the link in the next step
   consistent).
3. Drag `release-assets/eaglercraft-26.2-fe8f1237-d6714264.zip` into the release
   assets area and publish the release.
4. Copy the asset's download link. It will look like:
   `https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPOSITORY/releases/download/v1.0/eaglercraft-26.2-fe8f1237-d6714264.zip`.
5. In the repository's `script.js`, replace the placeholder value of
   `GITHUB_RELEASE_ASSET_URL` with the copied asset link, then commit that
   `script.js` change. GitHub Pages will redeploy.

The ZIP is about 55 MiB. GitHub release assets allow individual files under
2 GiB, so it fits. GitHub documents release limits at
https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases.

For general upload and Pages instructions, see
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
and
https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits.
