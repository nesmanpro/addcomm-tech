# ADDCOMM Dashboard

This project implements a responsive and dynamic dashboard based on a provided Figma design. It showcases aggregated data and includes interactive elements for filtering and data visualization.

## Features

- Overview section displaying email, SMS, and print counts with corresponding icons.
- Filter section with a dropdown menu and apply button for dynamic data updates.
- Status section with a pie chart showing record statuses (Running, Scheduled, Success, Error).
- Batches section listing batches with columns for Name, ID, Status, Processed, and Total.

## Technologies Used

- HTML5, CSS3
- JavaScript (Vanilla)
- Vite (for development)
- Chart.js (for data visualization)
- GSAP (for animations)
- Split-Type (for typography)

## Installation

1. Clone the repository:

   git clone https://github.com/nesmanpro/addcomm-tech.git
   cd addcomm

2. Install dependencies:

   npm install

## Usage

1. Start the development server:

   npm run dev

2. Open your browser and go to the link http://localhost:5173/ (or the link in the terminal is suggested after starting the server).

## JavaScript Functionality

- Dynamically updates data displayed on the page based on selected filters.
- Uses predefined data to simulate different filter results.

## Assumptions Made

- The design was implemented as closely as possible to the provided Figma design.
- Basic hover effects and GSAP transitions were added for interactive elements.

## Notes

- Ensure all dependencies are installed before running the project.
- This project uses Chart.js for data visualization, GSAP for animations, and Split-Type for typography.
