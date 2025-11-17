# Zenkolab Landing Page

A modern, responsive landing page built with Next.js, React, TypeScript, and Tailwind CSS. Features a beautiful hero section component with animations and theme support.

## 📋 Project Setup

This project uses the following technologies:

- **Framework**: Next.js 14+
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Components**: shadcn/ui components
- **Theming**: next-themes (Light/Dark mode)
- **Icons**: lucide-react

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
zenkolab-landingpage/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page with hero section demo
│   └── globals.css         # Global styles with Tailwind directives
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── glow.tsx
│   │   ├── mockup.tsx
│   │   └── icons.tsx
│   └── blocks/             # Complex components
│       └── hero-section.tsx
├── lib/
│   └── utils.ts            # Utility functions (cn classname merger)
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🎨 Component Directory Structure

### Why `/components/ui`?

The `/components/ui` directory is a standard convention in shadcn/ui projects:

- **Separation of Concerns**: Keeps reusable UI primitives separate from business logic
- **Easy Discovery**: All atomic components in one place
- **Scalability**: Makes it simple to add new components
- **Import Paths**: Clean and consistent import paths using path aliases
- **Community Standard**: Follows established patterns in the React ecosystem

### Component Organization

- **`/components/ui`**: Atomic components (Button, Badge, etc.) - building blocks
- **`/components/blocks`**: Complex sections (HeroSection, etc.) - composed from UI components
- **`/lib`**: Utility functions and helpers

## 🎯 Key Features

### Hero Section Component

The `HeroSection` component includes:

- **Responsive Design**: Adapts beautifully from mobile to desktop
- **Theme Support**: Automatically switches between light and dark images
- **Animations**: Staggered entrance animations for visual appeal
- **Badge**: Optional badge with action link
- **Actions**: Multiple call-to-action buttons with variants
- **Mockup Frame**: Displays preview images with glassmorphic styling
- **Glow Effect**: Dynamic glow backdrop for visual depth

### Usage Example

```tsx
import { HeroSection } from "@/components/blocks/hero-section";
import { Icons } from "@/components/ui/icons";

export function HeroDemo() {
  return (
    <HeroSection
      badge={{
        text: "New feature",
        action: {
          text: "Learn more",
          href: "/docs",
        },
      }}
      title="Build faster"
      description="With beautiful components"
      actions={[
        {
          text: "Get Started",
          href: "/docs",
          variant: "default",
        },
        {
          text: "GitHub",
          href: "https://github.com",
          variant: "glow",
          icon: <Icons.gitHub className="h-5 w-5" />,
        },
      ]}
      image={{
        light: "https://example.com/light.png",
        dark: "https://example.com/dark.png",
        alt: "Preview",
      }}
    />
  );
}
```

## 🎨 Theming

The project includes a comprehensive theming system:

### CSS Variables

All colors are defined as CSS custom properties in `globals.css`:

- `--background`, `--foreground`: Main colors
- `--primary`, `--primary-foreground`: Primary action colors
- `--secondary`, `--secondary-foreground`: Secondary colors
- `--accent`, `--accent-foreground`: Accent colors
- `--brand`, `--brand-foreground`: Brand colors
- And more...

### Theme Provider

Dark mode is handled by `next-themes` with the theme provider in the root layout:

```tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

Users can toggle themes using:

```tsx
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // ...
}
```

## 📦 Dependencies

### Core
- `next`: React framework
- `react` & `react-dom`: UI library
- `typescript`: Type safety

### UI & Styling
- `tailwindcss`: Utility-first CSS
- `class-variance-authority`: Component variant management
- `@radix-ui/react-slot`: Component composition utility
- `lucide-react`: Icon library

### Theme & Utils
- `next-themes`: Theme management
- `clsx`: Classname merging utility

## 🛠️ Configuration Files

### `tailwind.config.js`

Configured with:
- Custom color palette with CSS variables
- Extended theme values (spacing, sizes)
- Animation keyframes (appear, appear-zoom)
- Custom utilities for animation delays

### `tsconfig.json`

- Path aliases: `@/*` points to root directory
- Strict mode enabled
- Modern JavaScript target (ES2020)

### `next.config.js`

Basic Next.js configuration with React strict mode enabled.

## 🚀 Deployment

This project is ready to deploy on:

- **Vercel**: Recommended for Next.js apps
- **Azure Static Web Apps**: Included workflow in `.github/workflows`
- **Netlify**: Standard Next.js deployment
- **Any Node.js hosting**: Build and run commands in package.json

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.
