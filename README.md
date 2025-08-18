# Car Rental UI Project

This project is a responsive and interactive user interface for a car rental service, built with React and styled with Tailwind CSS. It allows users to browse a catalog of vehicles and view detailed information about each car.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
- [Project Structure](#project-structure)
- [Core Concepts](#core-concepts)
  - [Component Breakdown](#component-breakdown)
  - [Routing](#routing)
  - [Data Flow](#data-flow)
  - [Styling](#styling)

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (Node Package Manager) installed on your system. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/hanora123/React-Reental-Car-App
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd tailwindcss
    ```
3.  **Install the dependencies:**
    ```sh
    npm install
    ```

---

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload if you make edits.

### `npm test`

This launches the test runner in interactive watch mode. It's used for running automated tests to ensure the code is working correctly.

### `npm run build`

This builds the app for production into the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

---

## Project Structure

The project follows a standard React application structure. Here's an overview of the key directories:

```
/
├── public/           # Contains the main index.html file and static assets
├── src/              # Contains all the React source code
│   ├── components/   # Reusable UI components (e.g., Header, CarCard)
│   ├── data/         # Static data files (e.g., cars.js)
│   ├── pages/        # Page-level components (e.g., Home, Details)
│   ├── App.js        # The main application component and router setup
│   ├── index.css     # Global styles and Tailwind CSS configuration
│   └── index.js      # The entry point of the React application
├── package.json      # Project metadata and dependencies
└── tailwind.config.js # Tailwind CSS theme and configuration
```

---

## Core Concepts

### Component Breakdown

- **`App.js`**: The root component that orchestrates the entire application. It sets up the main layout (Header, Footer) and manages the routing.

- **`Header.js` / `Footer.js`**: These are layout components that appear on every page, providing consistent navigation and information.

- **`Vehicles.js`**: A page component that fetches the list of all cars from `src/data/cars.js` and renders a `CarCard` for each one.

- **`CarCard.js`**: A reusable component that displays a summary of a single car (image, brand, model, price). It links to the car's dedicated details page.

- **`Details.js`**: A page component that displays the full information for a single car. It is a dynamic page that changes based on the car's ID in the URL.

- **`SpecCard.js`**: A small, reusable component used on the `Details` page to display a single technical specification with an icon.

### Routing

The project uses `react-router-dom` to handle navigation. The routing logic is defined in `src/App.js`.

- The application uses a URL structure like `/vehicles` to show the list of cars and `/details/:id` for individual car pages.
- The `:id` in the URL is a **parameter**. The `Details.js` page uses the `useParams` hook to get this ID, fetch the correct car's data, and display it.
- A default route to `/details` is also set up to show the details for the first car.

### Data Flow

1.  **Data Source**: All car information is stored in a static array in `src/data/cars.js`. This file exports the `cars` array and a helper function, `getCarById(id)`.
2.  **List View**: The `Vehicles.js` page imports the `cars` array and uses the `.map()` method to pass each car's data down to a `CarCard` component as props.
3.  **Detail View**: When a user clicks on a `CarCard`, they are navigated to `/details/:id`. The `Details.js` page then uses the `id` from the URL to call `getCarById(id)` and retrieve the data for that specific car.

### Styling

The project is styled using **Tailwind CSS**.

- Global styles and Tailwind's base layers are configured in `src/index.css`.
- Custom hover effects (`btn-hover`, `card-hover`, `link-hover`) have been added to `src/index.css` to enhance interactivity.
- Styling is applied directly in the components using Tailwind's utility classes (e.g., `bg-white`, `font-bold`, `rounded-lg`). This makes it easy to style components without writing separate CSS files.
- The `tailwind.config.js` file can be used to customize the default theme (colors, fonts, spacing, etc.).
