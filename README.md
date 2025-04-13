# Clothify - Admin Panel (Frontend)

This is the **React-based frontend** for the Category Management Module of the Clothify admin dashboard. It allows authenticated users to manage clothing categories — create, edit, delete, and view category listings.

---

## Tech Stack

- **React.js** (with Hooks)
- **React Router DOM**
- **Axios** for API calls
- **JWT Authentication**
- **CSS Modules / Custom Styling**
- **Deployment:** Vercel / Netlify

---

##  Features

-  **User Authentication**
  - Login and JWT-based session persistence
-  **Category Management**
  - View list of categories with image, name, and item count
  - Add a new category
  - Edit existing category
  - Delete a category
  - Delete all categories (optional)
- **Responsive UI**
  - Flexbox layout for dashboard
  - Avatar from username
  - Conditional rendering based on auth state

---

##  UI Preview

| Dashboard View | Add/Edit Form |
|----------------|----------------|
| ![Dashboard](./screenshots/dashboard.png) | ![Form](./screenshots/add-form.png) |

---

## Installation & Running

```bash
# Clone the repo
git clone https://github.com/Surya413413/revisit-category-management-assignment-frontend.git
cd revisit-category-management-assignment-frontend

# Install dependencies
npm install

# Start the development server
npm start

