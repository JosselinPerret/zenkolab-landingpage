# Navbar1 Usage Guide

## Quick Start

### Basic Usage
```tsx
import { Navbar1 } from "@/components/blocks/navbar1"

export default function Page() {
  return <Navbar1 />
}
```

This will render the navbar with default props.

---

## Custom Configuration

### Complete Example with Custom Data

```tsx
import { Navbar1 } from "@/components/blocks/navbar1"
import { Book, Sunset, Trees, Zap, Code, Users, Rocket } from "lucide-react"

export default function Page() {
  const navbarConfig = {
    logo: {
      url: "/",
      src: "/logo.svg",
      alt: "Company Logo",
      title: "MyCompany",
    },
    menu: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Products",
        url: "/products",
        items: [
          {
            title: "Enterprise",
            description: "For large organizations",
            icon: <Code className="size-5 shrink-0" />,
            url: "/products/enterprise",
          },
          {
            title: "Startup",
            description: "For growing teams",
            icon: <Rocket className="size-5 shrink-0" />,
            url: "/products/startup",
          },
          {
            title: "Personal",
            description: "For individuals",
            icon: <Users className="size-5 shrink-0" />,
            url: "/products/personal",
          },
        ],
      },
      {
        title: "Pricing",
        url: "/pricing",
      },
      {
        title: "Blog",
        url: "/blog",
      },
    ],
    mobileExtraLinks: [
      { name: "GitHub", url: "https://github.com" },
      { name: "Twitter", url: "https://twitter.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
      { name: "Status", url: "/status" },
    ],
    auth: {
      login: { text: "Sign In", url: "/login" },
      signup: { text: "Get Started", url: "/signup" },
    },
  }

  return <Navbar1 {...navbarConfig} />
}
```

---

## Props Reference

### `Navbar1Props` Interface

```typescript
interface Navbar1Props {
  // Logo configuration
  logo?: {
    url: string;        // Logo link destination
    src: string;        // Logo image source (URL or data URI)
    alt: string;        // Alt text for accessibility
    title: string;      // Company/brand name
  };

  // Menu items array
  menu?: MenuItem[];

  // Extra links shown only on mobile (grid layout)
  mobileExtraLinks?: {
    name: string;       // Link text
    url: string;        // Link destination
  }[];

  // Authentication buttons
  auth?: {
    login: {
      text: string;     // Button text (e.g., "Sign In")
      url: string;      // Login page URL
    };
    signup: {
      text: string;     // Button text (e.g., "Get Started")
      url: string;      // Signup page URL
    };
  };
}

interface MenuItem {
  title: string;        // Menu item text
  url: string;          // Link destination
  description?: string; // Description (shown in dropdown)
  icon?: JSX.Element;   // Icon component (shown in dropdown)
  items?: MenuItem[];   // Submenu items (creates dropdown)
}
```

---

## Default Props

If you don't provide custom props, Navbar1 uses these defaults:

```typescript
{
  logo: {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  menu: [
    { title: "Home", url: "#" },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "The latest industry news...",
          icon: <Book />,
          url: "#",
        },
        // ... more items
      ],
    },
    // ... more menu items
  ],
  mobileExtraLinks: [
    { name: "Press", url: "#" },
    { name: "Contact", url: "#" },
    { name: "Imprint", url: "#" },
    { name: "Sitemap", url: "#" },
  ],
  auth: {
    login: { text: "Log in", url: "#" },
    signup: { text: "Sign up", url: "#" },
  },
}
```

---

## Common Customizations

### 1. Logo with SVG Data URI
```tsx
const logo = {
  url: "/",
  src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23217dd6'/%3E%3C/svg%3E",
  alt: "My Logo",
  title: "MyBrand",
}
```

### 2. Logo with External URL
```tsx
const logo = {
  url: "/",
  src: "/images/logo.png",
  alt: "Company Logo",
  title: "Company",
}
```

### 3. Simple Menu Without Dropdowns
```tsx
const menu = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Contact", url: "/contact" },
]
```

### 4. Menu With Dropdowns
```tsx
import { Zap, Book, Users } from "lucide-react"

const menu = [
  { title: "Home", url: "/" },
  {
    title: "Products",
    url: "/products",
    items: [
      {
        title: "Features",
        description: "Explore our features",
        icon: <Zap className="size-5 shrink-0" />,
        url: "/features",
      },
      {
        title: "Documentation",
        description: "Read our docs",
        icon: <Book className="size-5 shrink-0" />,
        url: "/docs",
      },
      {
        title: "Community",
        description: "Join community",
        icon: <Users className="size-5 shrink-0" />,
        url: "/community",
      },
    ],
  },
  { title: "Pricing", url: "/pricing" },
]
```

### 5. Multi-level Navigation
```tsx
const menu = [
  { title: "Home", url: "/" },
  {
    title: "Solutions",
    url: "/solutions",
    items: [
      {
        title: "For Enterprise",
        description: "Large-scale solutions",
        icon: <Building />,
        url: "/solutions/enterprise",
      },
      {
        title: "For Startups",
        description: "Quick setup",
        icon: <Rocket />,
        url: "/solutions/startups",
      },
    ],
  },
  {
    title: "Company",
    url: "/company",
    items: [
      {
        title: "About Us",
        description: "Learn about our company",
        url: "/about",
      },
      {
        title: "Careers",
        description: "Join our team",
        url: "/careers",
      },
      {
        title: "Press",
        description: "Press kit",
        url: "/press",
      },
    ],
  },
  { title: "Blog", url: "/blog" },
  { title: "Pricing", url: "/pricing" },
]
```

---

## Styling & Theming

The Navbar1 component uses Tailwind CSS classes that respect your theme:

### Theme Colors Used
- `bg-background` - Background color
- `text-foreground` - Text color
- `bg-muted` - Hover background
- `text-accent-foreground` - Hover text
- `border-input` - Border color
- `bg-popover` - Dropdown background

### CSS Classes Structure
```
Section
  Container
    Nav (flex, hidden lg:flex)
      Left Side
        Logo (flex items-center gap-2)
        NavigationMenu
      Right Side
        Buttons (flex gap-2)
    Mobile Nav (flex lg:hidden)
      Logo
      Sheet/Hamburger
```

### Customizing Colors
Colors are defined in your `globals.css` with CSS variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --accent: 217 91% 60%;
  /* ... other colors */
}
```

---

## Responsive Behavior

### Desktop (lg and above)
- Full horizontal navigation menu
- Hover-activated dropdowns
- Logo + title on left
- Auth buttons on right
- Mobile menu hidden

### Mobile (below lg)
- Logo + hamburger icon
- Hamburger triggers slide-out sheet
- Accordion-based menu navigation
- Extra links in 2-column grid
- Full-width stacked buttons
- Sheet slides in from right

---

## Icons

The component uses `lucide-react` icons. Common icons used:

```tsx
import { 
  Menu,              // Hamburger icon for mobile
  Book,              // Blog/documentation
  Trees,             // Nature/environment
  Sunset,            // Company/business
  Zap,               // Lightning/support
  // ... many more available
} from "lucide-react"
```

View all available icons at: https://lucide.dev

---

## Integration Examples

### Example 1: E-Commerce Site
```tsx
import { Navbar1 } from "@/components/blocks/navbar1"
import { ShoppingBag, Users, Home, Heart } from "lucide-react"

export default function Page() {
  return (
    <Navbar1
      logo={{
        url: "/",
        src: "/shop-logo.svg",
        alt: "Shop Logo",
        title: "MyShop",
      }}
      menu={[
        { title: "Home", url: "/" },
        {
          title: "Shop",
          url: "/shop",
          items: [
            {
              title: "New Arrivals",
              description: "Latest products",
              icon: <ShoppingBag className="size-5 shrink-0" />,
              url: "/shop/new",
            },
            {
              title: "Bestsellers",
              description: "Customer favorites",
              icon: <Heart className="size-5 shrink-0" />,
              url: "/shop/bestsellers",
            },
          ],
        },
        { title: "About", url: "/about" },
        { title: "Contact", url: "/contact" },
      ]}
      mobileExtraLinks={[
        { name: "Wishlist", url: "/wishlist" },
        { name: "Orders", url: "/orders" },
      ]}
      auth={{
        login: { text: "Sign In", url: "/login" },
        signup: { text: "Register", url: "/register" },
      }}
    />
  )
}
```

### Example 2: SaaS Product
```tsx
import { Navbar1 } from "@/components/blocks/navbar1"
import { Code, Zap, Users, Rocket } from "lucide-react"

export default function Page() {
  return (
    <Navbar1
      logo={{
        url: "/",
        src: "data:image/svg+xml,...",
        alt: "App Logo",
        title: "MyApp",
      }}
      menu={[
        { title: "Home", url: "/" },
        {
          title: "Features",
          url: "/features",
          items: [
            {
              title: "API",
              description: "RESTful API",
              icon: <Code className="size-5 shrink-0" />,
              url: "/features/api",
            },
            {
              title: "Integrations",
              description: "Third-party integrations",
              icon: <Zap className="size-5 shrink-0" />,
              url: "/features/integrations",
            },
            {
              title: "Team Management",
              description: "Collaborate with teams",
              icon: <Users className="size-5 shrink-0" />,
              url: "/features/teams",
            },
          ],
        },
        { title: "Pricing", url: "/pricing" },
        { title: "Docs", url: "/docs" },
        { title: "Blog", url: "/blog" },
      ]}
      auth={{
        login: { text: "Login", url: "/login" },
        signup: { text: "Start Free Trial", url: "/signup" },
      }}
    />
  )
}
```

---

## Accessibility Features

The Navbar1 component includes:

- **Semantic HTML** - Uses proper navigation elements
- **ARIA attributes** - Radix UI provides accessibility out of the box
- **Keyboard Navigation** - Full keyboard support for menus
- **Screen Reader Support** - Proper labels and descriptions
- **Focus Management** - Correct focus states and indicators

---

## Performance Considerations

- **Lightweight** - Minimal JavaScript footprint
- **Code Splitting** - Lazy loads with Next.js
- **CSS-in-JS Free** - Uses Tailwind CSS for styling
- **Optimized** - No unnecessary re-renders
- **Mobile First** - Optimized for mobile devices

---

## Troubleshooting

### Navbar not showing
- Check imports are correct
- Verify component path: `@/components/blocks/navbar1`
- Ensure parent layout includes Providers

### Dropdown not opening
- Check menu items have `items` array for dropdowns
- Verify NavigationMenu component is imported
- Check Tailwind CSS is properly configured

### Mobile menu not working
- Ensure Sheet component is imported
- Check Radix UI dialog is installed
- Verify mobile breakpoint is `lg:`

### Styling issues
- Ensure Tailwind CSS is properly set up
- Check theme colors in `globals.css`
- Verify CSS custom properties are defined

---

## Support & Resources

- Component built from: https://shadcnblocks.com
- Radix UI docs: https://www.radix-ui.com
- Tailwind CSS: https://tailwindcss.com
- lucide-react icons: https://lucide.dev

---

**Ready to customize your navbar? Start by updating the props in your component!**
