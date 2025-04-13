# Clothify - Category Management (Frontend)

##  Title

Clothify - Admin Panel: Category Management Module (Frontend)

---

##  Objective

The goal of this assignment is to build a **React-based Admin Panel** that allows authenticated users to manage product categories (view, add, edit, delete) in a clothing e-commerce platform. The app consumes a secure backend API and displays category data in a structured UI.

---

##  Tech Stack

- **Frontend:** React.js (Hooks, JSX, Functional Components)
- **Routing:** React Router DOM
- **API Calls:** Axios
- **Auth:** JWT-based authentication with route protection
- **Styling:** CSS Modules / Custom CSS / Flexbox
- **Deployment:** Vercel

---

## Completion Instructions

###  Functionality

####  Must Have

- Login and Registration forms
- JWT token-based login and session management
- Protected route setup for dashboard and create form
- Categories dashboard:
  - View all categories
  - Each category shows name, image, and item count
  - Option to delete a category
- Create category form with:
  - Name, item count, and image URL inputs
  - API call to save to backend
- Conditional rendering based on authentication
- Not Found (404) route setup

####  Nice to Have

- Edit category form (pre-filled with category data)
- Delete all categories button
- User avatar from username
- Toast notifications for feedback

---

###  Guidelines to develop the project

####  Must Have

- JWT must be stored securely (localStorage or httpOnly cookie if set)
- Use `axios` to make backend requests with proper auth headers
- Consistent component structure and styling
- Folder separation for components, styles, and utilities
- Error handling for failed login/register or category actions

####  Nice to Have

- Code modularity with reusable components
- Responsive design
- Use of loading states or spinners for API requests
- Fallback UI for empty categories

---

###  Submission Instructions

####  Must Have

- Frontend code hosted on GitHub with a proper README
- Hosted link (Vercel or Netlify)
- All routes functional
- Login credentials mentioned (or register new user)
- Backend hosted and connected

####  Nice to Have

- Screenshots or screen recording of working UI
- Deployed backend URL added in `.env` or config
- Deployment details or logs added in README

---

##  Resources

###  Design files

- No specific Figma given — custom design implemented with clean UI

###  APIs

- Backend URL: https://revisit-assignment-backend-myl6.onrender.com
- API Endpoints used:
  - `POST /users/register`
  - `POST /users/login`
  - `GET /categories` *(auth required)*
  - `GET /categories/:id`
  - `POST /categories/create`
  - `PUT /categories/:id`
  - `DELETE /categories/:id`

###  Third-party packages

- `react-router-dom`
- `jwt-decode` *(if decoding tokens on client)*
- `classnames` *(optional)*

---

##  App Routes (Summary)

```jsx
<Route exact path="/login" component={Loginpage} />
<Route exact path="/register" component={Registerpage} />
<ProtectedRoutePage exact path="/" component={CategoriesPage} />
<ProtectedRoutePage exact path="/categories/create" component={CreateItemsCategori} />
<Route exact path="/not-found" component={NotFoundPage} />
<Redirect to="not-found" />


## Installation & Running

```bash
# Clone the repo
git clone https://github.com/Surya413413/revisit-category-management-assignment-frontend.git
cd revisit-category-management-assignment-frontend

# Install dependencies
npm install

# Start the development server
npm start

