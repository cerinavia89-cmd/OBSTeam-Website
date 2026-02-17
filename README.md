# Site Update — Image Asset Swap

## What was changed
The following image files in `assets/img/` were replaced **in-place** (same filenames as expected by existing CSS/HTML):

1. **Notary page hero background**
   - Replaced: `assets/img/notary-hero-bg.png`

2. **Strategic Planning page background**
   - Replaced: `assets/img/strategy-bg.png`

3. **Homepage / Contact / Policy hero**
   - Replaced: `assets/img/home-hero.png`

4. **About page background**
   - Replaced: `assets/img/about-bg.png`

No other files were modified.

## QA Gate
- ✔ No layout/structure changes (no HTML/CSS edits made)
- ✔ Filenames preserved exactly as referenced by existing CSS
- ✔ Changes applied consistently (direct file replacement in `assets/img/`)
- ✔ No navigation logic or components altered
- ✔ Only the requested assets were changed

## Notes
If your deployment pipeline uses caching/CDN, you may need to purge cache so the new images appear immediately.

## Additional update
- 2026-02-17: Updated `assets/img/strategy-bg.png` again per request (filename unchanged).
