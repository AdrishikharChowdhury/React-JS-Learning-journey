# 7th Chapter: useForm Custom Hook

This project is a simple React application that demonstrates the use of custom hooks, specifically `useForm` and `useFetch`. It features a basic form that allows users to input their name, email, and password. The submitted data is then displayed below the form in real-time without a page reload.

## Features

*   A simple and clean user interface.
*   A basic form with name, email, and password fields.
*   A custom `useForm` hook to manage the form's state.
*   A custom `useFetch` hook to fetch data from the server and refetch it after a new entry is submitted.
*   Real-time UI updates after form submission.

## Technologies Used

*   **Frontend:**
    *   React
    *   Vite
    *   Tailwind CSS
*   **Backend:**
    *   Express

## Backend

The backend is a simple Express server that provides two API endpoints:

*   `GET /forms`: Fetches all the submitted form data from the `formdata.json` file.
*   `POST /forms`: Adds a new form submission to the `formdata.json` file.

The server uses the `cors` middleware to handle cross-origin requests.

To start the backend server, run the following command:

```bash
node src/js/index.js
```

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd "7th Chapter useForm custom hook"
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```

## Folder Structure

```
/7th Chapter useForm custom hook/
├───.gitignore
├───eslint.config.js
├───index.html
├───package-lock.json
├───package.json
├───README.md
├───tailwind.config.js
├───vite.config.js
├───dist/
├───node_modules/
├───public/
│   └───vite.svg
└───src/
    ├───App.jsx
    ├───index.css
    ├───main.jsx
    ├───assets/
    │   └───react.svg
    ├───components/
    │   ├───Entrysection.jsx
    │   └───Form.jsx
    ├───data/
    │   └───formdata.json
    ├───hooks/
    │   ├───useFetch.jsx
    │   └───useForm.jsx
    └───js/
        └───index.js
```

## Author

*   **Adrishikhar Chowdhury**
    *   GitHub: [https://github.com/AdrishikharChowdhury](https://github.com/AdrishikharChowdhury)
