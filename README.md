# T-SHIRT STORE

A modern React-based e-commerce application for buying and customizing t-shirts.

## Features

- **Product Browsing**: Browse through a wide collection of t-shirts
- **Product Filtering**: Filter products by size, color, and price
- **Sorting**: Sort products by various criteria
- **Product Customization**: Customize t-shirts with your own designs
- **Shopping Cart**: Add products to cart and manage your orders
- **Wishlist**: Save your favorite products for later
- **Product Details**: View detailed information about each product
- **Responsive Design**: Mobile-friendly interface
- **WhatsApp Integration**: Direct messaging via WhatsApp
- **Contact & Support**: Get in touch with our team

## Project Structure

```
T-SHIRT/
├── public/                 # Static files
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # Reusable components
│   ├── pages/             # Page components
│   ├── context/           # React Context for state management
│   ├── data/              # Mock data
│   ├── styles/            # Global styles
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd T-SHIRT
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling

## Components

### Navbar
Navigation component with links to all pages

### ProductCard
Displays individual product information with add to cart functionality

### Filters
Filter products by size, color, and price range

### SortBar
Sort products by different criteria

### WhatsAppFloat
Floating WhatsApp button for customer support

### Footer
Footer component with links and information

## Pages

- **Home** - Landing page with featured products
- **ProductList** - Browse all products with filters and sorting
- **ProductDetails** - Detailed view of a single product
- **Customize** - Customize t-shirts with your designs
- **Cart** - View and manage shopping cart
- **Wishlist** - View saved products
- **About** - About the store
- **Contact** - Contact form and information

## Context

- **CartContext** - Manages shopping cart state
- **WishlistContext** - Manages wishlist state

## Getting Started

1. Install all dependencies
2. Run the development server
3. Navigate through the pages using the navigation menu
4. Add products to cart or wishlist
5. Customize your own t-shirts
6. Contact us using the WhatsApp button

## License

This project is open source and available under the MIT License.

## Support

For any issues or questions, please contact us using the contact form or WhatsApp button.
