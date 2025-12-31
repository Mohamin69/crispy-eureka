# StepStyle - Shoe Business Website

A modern, responsive React website for a shoe business built with Vite, React, and TypeScript.

## Features

- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Product Showcase**: Display of 6 different shoe categories with emoji placeholders
- **Contact Form**: Functional contact form for customer inquiries
- **Modern UI**: Clean, professional design with gradient backgrounds and smooth animations
- **Performance**: Built with Vite for fast development and optimized production builds

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation and branding
│   ├── Hero.tsx            # Featured hero section
│   ├── Products.tsx        # Product grid display
│   ├── About.tsx           # Company information
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer links
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
├── index.css               # Global styles
└── App.css                 # App layout styles
```

## Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn

### Installation

1. Navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Customization

### Adding Product Images

Replace the emoji placeholders in `Products.tsx` with actual image URLs:

```tsx
// Example: Instead of emoji
<img src="/path/to/shoe-image.jpg" alt={product.name} />
```

### Updating Colors

Modify the gradient colors in the CSS files to match your brand:
- Header: Edit `Header.css`
- Hero section: Edit `Hero.css`
- Products: Edit `Products.css`

### Business Information

Update contact information in `Contact.tsx` with your actual business details:
- Address
- Phone number
- Email
- Business hours

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **CSS3** - Styling with gradients and animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- E-commerce functionality with shopping cart
- Product detail pages
- Customer reviews and ratings
- Blog section
- Inventory management
- Payment integration

## License

This project is open source and available under the MIT License.
