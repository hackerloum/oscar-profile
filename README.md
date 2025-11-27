# Oscar Portfolio - Ultra-Modern Portfolio Website

A high-end, ultra-modern portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Ultra-Modern Design** - Sleek, premium design with gradient accents and smooth animations
- ⚡ **Performance Optimized** - Built with Next.js 14 App Router for optimal performance
- 📱 **Fully Responsive** - Beautiful on all devices from mobile to desktop
- 🎭 **Smooth Animations** - Powered by Framer Motion with spring physics
- 🎯 **Custom Cursor** - Interactive custom cursor for enhanced UX
- 🌈 **Gradient System** - Beautiful gradient color palette throughout
- ♿ **Accessible** - Built with accessibility in mind

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Scroll Detection**: React Intersection Observer
- **Image Optimization**: Sharp

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and utilities
│   ├── layout.tsx            # Root layout with fonts
│   └── page.tsx             # Home page
├── components/
│   ├── Navigation.tsx        # Navigation bar with mobile menu
│   ├── Hero.tsx             # Hero section with animations
│   ├── About.tsx            # About section with skills
│   ├── Work.tsx             # Projects showcase
│   ├── Services.tsx         # Services section
│   ├── Testimonials.tsx     # Testimonials carousel
│   ├── Contact.tsx          # Contact form and info
│   ├── Footer.tsx           # Footer with links
│   ├── LoadingScreen.tsx    # Loading animation
│   └── CustomCursor.tsx     # Custom cursor component
└── public/                  # Static assets
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  background: {
    primary: "#0a0a0a",
    secondary: "#111111",
  },
  accent: {
    1: "#6366f1",
    2: "#8b5cf6",
    3: "#ec4899",
  },
}
```

### Content

- Update personal information in each component
- Replace placeholder images in the `Work` component
- Modify project data in `components/Work.tsx`
- Update contact information in `components/Contact.tsx`

## Build for Production

```bash
npm run build
npm start
```

## License

This project is open source and available under the MIT License.

