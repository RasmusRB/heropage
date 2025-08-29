# TIMEmSYSTEM - Modern Time Registration Software Website

A modern, responsive landing page for TIMEmSYSTEM's time registration and workforce management software. Built with cutting-edge web technologies and featuring smooth animations, internationalization, and theme switching.

## 🌟 Features

### 📱 Modern Landing Page

- **Hero Section**: Engaging welcome page with animated elements and smooth scrolling
- **Services Showcase**: Time tracking, project management, and analytics features
- **Client Testimonials**: Social proof with client logos and testimonials
- **About Section**: Company information, team, and values presentation
- **Contact Footer**: Complete contact information and service links

### 🎨 User Experience

- **Smooth Scroll Navigation**: Seamless section-to-section navigation
- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark/Light Mode**: Toggle between themes with custom brand colors
- **Animated Interactions**: Framer Motion animations throughout
- **Professional Typography**: Clean, readable design with proper hierarchy

### 🌐 Internationalization

- **Bilingual Support**: Danish (default) and English translations
- **Dynamic Content**: All text, titles, and meta descriptions translate
- **SEO Optimized**: Proper meta tags for both languages
- **Cultural Adaptation**: Localized content and formatting

### 🎯 Brand Integration

- **Custom Logos**: Dynamic logo switching for light/dark themes
- **Brand Colors**: Primary (#00A499) and secondary (#5DBBB4) color scheme
- **Consistent Identity**: Professional branding throughout the experience

## 🚀 Technology Stack

### **Frontend Framework**

- **React 19** - Latest React with modern features
- **TypeScript** - Type safety and better developer experience
- **Vite** - Lightning-fast build tool and development server

### **Styling & UI**

- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn UI** - High-quality, accessible component library
- **Framer Motion** - Smooth animations and interactions
- **Lucide React** - Beautiful, customizable icons

### **State Management**

- **Redux Toolkit** - Modern Redux for theme and language state
- **React Redux** - Official React bindings for Redux
- **Typed Hooks** - Custom typed hooks for type-safe state access

### **Internationalization**

- **React i18next** - Internationalization framework
- **i18next** - Translation management and fallback handling
- **Dynamic Translation** - Real-time language switching

### **Development Tools**

- **ESLint** - Code linting and quality assurance
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Plugins** - Enhanced development experience

### **Deployment**

- **AWS Amplify** - Serverless deployment and hosting
- **Git Integration** - Continuous deployment from GitHub
- **Node.js 20** - Modern runtime environment

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components (Shadcn)
│   ├── Header.tsx       # Navigation header with logo
│   ├── HeroSection.tsx  # Landing page hero
│   ├── ServicesSection.tsx    # Features showcase
│   ├── ClientsSection.tsx     # Client testimonials
│   ├── AboutSection.tsx       # Company information
│   └── Footer.tsx       # Contact footer
├── store/               # Redux store configuration
│   ├── slices/         # Redux slices
│   ├── store.ts        # Store configuration
│   └── hooks.ts        # Typed Redux hooks
├── i18n/               # Internationalization
│   └── config.ts       # Translation configuration
├── assets/             # Static assets
│   └── images/         # Logo files and images
└── lib/                # Utility functions
```

## 🎯 Key Sections

### **Hero Section**

- Animated welcome message with time registration focus
- Call-to-action button with smooth scroll
- Floating background elements
- Prominent scroll indicator

### **Services/Features**

- Time Tracking with accuracy focus
- Project Management capabilities
- Analytics & Reporting tools
- Statistical highlights (10,000+ hours tracked daily)

### **Clients & Testimonials**

- Client company showcases
- Professional testimonials
- Trust indicators and social proof

### **About Us**

- Company values and mission
- Team member highlights
- Company statistics and achievements

## 🌈 Color Scheme

- **Primary**: `#00A499` (Teal Green) - Main brand color
- **Secondary**: `#5DBBB4` (Light Teal) - Accent color
- **Background**: White/Dark Gray - Adaptive to theme
- **Text**: Proper contrast ratios for accessibility

## 🔧 Development

### **Prerequisites**

- Node.js 20+
- Yarn or npm
- Git

### **Getting Started**

```bash
# Clone the repository
git clone https://github.com/RasmusRB/heropage.git

# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build
```

### **Available Scripts**

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## 🌍 Internationalization

The website supports:

- **Danish (da)** - Default language
- **English (en)** - Secondary language

All content including page titles, meta descriptions, and UI text is fully translated.

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Enhanced layouts for medium screens
- **Desktop**: Full-featured experience with animations
- **Touch Friendly**: Proper touch targets and interactions

## ⚡ Performance

- **Fast Loading**: Optimized bundle sizes with Vite
- **Code Splitting**: Lazy loading where appropriate
- **Image Optimization**: Proper image formats and sizes
- **SEO Ready**: Meta tags, semantic HTML, and proper structure

## 🎨 Design Philosophy

- **Clean & Modern**: Minimalist design with focus on content
- **Professional**: Business-appropriate styling and interactions
- **Accessible**: WCAG compliant color contrasts and navigation
- **User-Centric**: Intuitive navigation and clear call-to-actions

## 📄 License

This project is part of TIMEmSYSTEM's digital presence.

---

**Built with ❤️ using modern web technologies for optimal user experience.**
