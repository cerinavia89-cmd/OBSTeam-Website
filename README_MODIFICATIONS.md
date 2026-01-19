# Website Modifications – O'Neill Business Solutions Team

This package contains targeted edits requested for the static HTML site. Layout/structure was preserved; only the specified copy, images, and small supporting styles were updated.

## Files Updated

### `index.html` (Homepage)
- Updated company name to **O'Neill Business Solutions Team** (title, header, and footer).
- Added header logo image:
  - `assets/images/OBST Logo.png`
  - Alt text: `O'Neill Business Solutions Team Logo`
- Services cards:
  - "Life & Health Insurance" → "Life Insurance" and removed the phrase “and manage healthcare costs”.
  - "Annuities" → "Notary" (card copy updated to match).
  - "Estate Planning" → "Professional Network" (card copy updated to match).

### `services.html`
- "Life & Health Insurance" → "Life Insurance"; removed the last bullet and health-related wording.
- "Annuities" → "Notary" and replaced the section summary with the provided notary description.
- Replaced the annuities image with:
  - `assets/images/ChatGPT Image Jan 17, 2026, 01_04_35 PM.png`
  - Alt text: `Notary public stamp on document`
- "Estate Planning" → "Professional Network" and replaced the section summary with the provided partner-network description.
- Financial Planning section:
  - "Tax and Risk Management" → "Investment Strategy"
  - Removed the "Debt Reduction" bullet
- Removed all `&` symbol usage on this page (replaced with “and” where needed).

### `education.html`
- "Life & Health Insurance" → "Life Insurance"
- Removed the second paragraph under the health insurance content.
- Added "Request Info" buttons beneath:
  - Annuities
  - Estate Planning (Wills and Trusts)
  - Buttons link to `#request-info` and use consistent styling (page-scoped CSS).
- Financial Planning:
  - Removed bullet points 2, 3, and 5.
- Removed the phrase “or market conditions” where it appeared.

### `about.html`
- Replaced the entire "Who We Are" section with the provided copy for **Tachary O’Neill**.
- Credentials and Experience:
  - Removed the word “Licensed” from existing bullets.
  - Updated “Expertise in life & health insurance” → “Expertise in life insurance”.
  - Added credentials:
    - Notary Public (TX) / RON
    - Loan Signing Experience
    - Life Insurance Licensed Agent (TX/NY/GA)

## Assets Added
- `assets/images/OBST Logo.png` (provided logo)
- `assets/images/ChatGPT Image Jan 17, 2026, 01_04_35 PM.png` (provided notary image)

## QA Checklist
- No navigation, footer structure, or page layout logic was altered.
- Changes are limited to the requested text, images, and small page-scoped styles required for the new logo/button elements.
- Image paths resolve relative to the site root.


## January 2026 Updates

- Updated company name globally to **O'Neill Business Solutions Team** across all pages (header, footer, and page titles/metadata where present).
- Replaced header logo across all pages with:
  - `assets/images/OBST Logo.png`
  - Added/ensured supporting CSS for consistent header alignment (matches the homepage).
- Homepage (`index.html`):
  - Updated the Notary service card image to:
    - `assets/images/ChatGPT Image Jan 17, 2026, 01_04_35 PM.png`
  - Added a **Request Info** button to the Professional Network card linking to the contact form.
- Education page (`education.html`):
  - Updated the **Request Info** buttons (Annuities, Wills & Trusts) to link to `contact.html#contact-form`.
  - Updated `.request-info` styling to match the homepage button style.
- Added `contact.html` with a contact form (`id="contact-form"`).  
  - The form action uses a **Formspree placeholder** (`https://formspree.io/f/your-form-id`). Replace with your real endpoint to enable submissions.
- About page (`about.html`):
  - Updated header/logo + company name.
  - Updated the portrait image by replacing `images/portrait.png` with the provided updated portrait.
