# 6th Chapter React Router

This project is a learning exercise for the 6th chapter of a React course, focusing on React Router. It's a simple website with several pages and nested routes to demonstrate the core concepts of client-side routing in a React application.

## Features

*   **Routing:** Utilizes `react-router-dom` for navigation between different pages.
*   **Pages:** Includes the following pages:
    *   Home
    *   About
    *   Contact
    *   Courses
        *   Course Details (dynamic route)
    *   Product (with nested routes)
        *   Product Home
        *   Men
        *   Women
        *   Kids
*   **Components:**  Reusable components for the Navbar, Footer, and Navigation.
*   **Styling:** Styled with Tailwind CSS.
*   **Icons:** Uses `lucide-react` for icons.
*   **Build Tool:** Uses Vite for a fast development experience.

## Getting Started

### Prerequisites

*   Node.js and npm (or yarn) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd "6th Chapter React Router"
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will start the Vite development server and you can view the application in your browser at `http://localhost:5173` (or another port if 5173 is in use).

## Technologies Used

*   [React](https://react.dev/)
*   [React Router DOM](https://reactrouter.com/en/main)
*   [Vite](https://vitejs.dev/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [lucide-react](https://lucide.dev/guide/react)
*   [ESLint](https://eslint.org/)

## Folder Structure

```
.
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Footer.jsx       # Footer component for the website
│   │   ├── Navbar.jsx       # Navigation bar with links to pages
│   │   └── Navigation.jsx   # Back, Forward and Home navigation
│   ├── pages/
│   │   ├── About.jsx        # About page
│   │   ├── Contact.jsx      # Contact page
│   │   ├── Home.jsx         # Home page
│   │   ├── NotFound.jsx     # Page for handling 404 errors
│   │   ├── Courses/
│   │   │   ├── CourseDetails.jsx # Page to show details of a course
│   │   │   └── Courses.jsx       # Page to list all courses
│   │   └── Product/
│   │       ├── Kids.jsx         # Kids product page
│   │       ├── Men.jsx          # Men product page
│   │       ├── Product.jsx      # Main product page with nested routes
│   │       ├── ProductHome.jsx  # Default page for products
│   │       └── Women.jsx        # Women product page
│   ├── App.jsx              # Main application component with routing setup
│   ├── index.css            # Main CSS file
│   └── main.jsx             # Entry point of the application
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```
