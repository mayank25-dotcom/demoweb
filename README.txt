ZOYA NEXUS WEBSITE - STATIC HTML PACKAGE

CONTENTS
- index.html          Homepage
- products.html       Product catalogue with search and category filters
- product.html        Individual product detail page
- about.html          About page
- assets/style.css    Responsive styling
- assets/app.js       Navigation, product rendering and enquiry form
- data/products.js    Sample product catalogue

HOW TO PREVIEW
1. Extract the ZIP.
2. Open index.html in a modern browser.
3. Internet is required for Google Fonts and the sample product images.

HOW TO UPLOAD TO HOSTING
1. Open your hosting File Manager.
2. Open the domain's public_html folder.
3. Upload the contents of this folder (not the ZIP itself).
4. Ensure index.html is directly inside public_html.

IMPORTANT CUSTOMISATION BEFORE GO-LIVE
- Replace the sample products, descriptions and images in data/products.js with Zoya Nexus's actual catalogue.
- Update sales@zoyanexus.com if a different enquiry email should be used.
- Update the WhatsApp link in index.html with the official number in international format (digits only).
- Add the company's verified address, phone number, legal details and social links.
- The enquiry form uses mailto and opens the visitor's email application. It does not store enquiries. A backend or form service is needed for server-side submissions.
- This is a front-end static website. It does not include an admin panel, login, database, checkout or online payment.
- Product images are sample remote images and require internet access. Replace with licensed product photos before publishing.
- This design is an original Zoya Nexus implementation using a premium B2B technology aesthetic; it does not copy Emratech's proprietary code or assets.

PRODUCT CATALOGUE EDITING
Open data/products.js and edit the objects in window.ZOYA_PRODUCTS. Keep each product id unique. Supported fields:
id, name, category, tag, description, specs (array), image (image URL).
Categories currently used: Computers, Networking, Servers, Security, Accessories.
