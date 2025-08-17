# Car Rental React App

A modern React application for a premium car rental service, converted from the original HTML/CSS project.

## Features

- **Responsive Design**: Mobile-first approach with tablet and desktop layouts
- **Car Details**: Detailed view of each vehicle with specifications and equipment
- **Vehicle Gallery**: Browse all available cars with filtering options
- **Contact Form**: Interactive contact form for customer inquiries
- **Modern UI**: Clean, professional design with smooth animations

## Pages

- **Home**: Landing page with featured cars
- **Vehicles**: Complete catalog of available vehicles
- **Details**: Individual car details with specifications
- **About**: Company information and mission
- **Contact**: Contact form and company information

## Technologies Used

- React 18
- React Router DOM
- Font Awesome Icons
- CSS3 with CSS Grid and Flexbox
- Responsive design principles

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   ├── CarCard.js      # Individual car display card
│   └── SpecCard.js     # Car specification card
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── Vehicles.js     # Vehicles listing page
│   ├── Details.js      # Car details page
│   ├── About.js        # About page
│   └── Contact.js      # Contact page
├── data/               # Data files
│   └── cars.js         # Car information and specifications
├── assets/             # Static assets
│   ├── images/         # Image files
│   └── icons/          # Icon files
├── App.js              # Main application component
└── index.css           # Global styles
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Features

### Car Details
- Technical specifications with icons
- Equipment list with checkmarks
- Image gallery for each vehicle
- Related cars suggestions

### Responsive Design
- Mobile-first approach
- Tablet and desktop layouts
- Flexible grid systems
- Touch-friendly interactions

### Navigation
- Active page highlighting
- Smooth transitions
- Breadcrumb navigation
- Search functionality ready

## Customization

### Adding New Cars
Edit `src/data/cars.js` to add new vehicles with their specifications.

### Styling
Modify `src/index.css` to customize the appearance and layout.

### Icons
The app uses Font Awesome icons. Replace icon classes in components to change icons.

## Deployment

To build the app for production:

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## License

This project is for educational purposes and demonstration of React development skills.
