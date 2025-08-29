# Max Levene - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing my work as a scientist, software engineer, AI innovator, and entrepreneur. This site demonstrates my expertise in full-stack development and modern web design as well as highlighting my past experiences. 

## 🚀 Live Demo

[View Live Site](https://maxlevene.com) | [GitHub Repository](https://github.com/maxlevene920/)

## ✨ Features

### 🎨 Modern Design & UX
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Built with CSS custom properties for easy theming
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **Performance Optimized**: Fast loading times with Next.js optimizations

### 🛠 Technical Excellence
- **TypeScript**: Full type safety across the entire application
- **Modern React**: Built with React 19 and Next.js 15 App Router
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Component Architecture**: Modular, reusable components with proper separation of concerns
- **SEO Optimized**: Meta tags, structured data, and performance optimizations

### 📱 Interactive Elements
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Hover Effects**: Engaging hover states and micro-interactions
- **Loading Animations**: Progressive content loading with staggered animations
- **Social Integration**: Direct links to professional profiles and contact methods

## 🏗 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global styles and Tailwind imports
├── components/            # Reusable React components
│   ├── Hero.tsx          # Landing section with animated content
│   ├── About.tsx         # Personal introduction section
│   ├── Skills.tsx        # Technical skills showcase
│   ├── Projects.tsx      # Portfolio projects grid
│   ├── Contact.tsx       # Contact information and form
│   └── Navigation.tsx    # Responsive navigation component
└── lib/                  # Utility functions and configurations
    ├── utils.ts          # Helper functions and class utilities
    └── social-links.ts   # Social media and contact links
```

## 🛠 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Utility class merging

### Key Libraries
- **Radix UI** - Accessible component primitives
- **CLSX** - Conditional class name utility
- **Tailwind Line Clamp** - Text truncation utilities

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maxlevene920/personalwebsite.git
   cd personalwebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎯 Key Features Implemented

### 1. Hero Section
- Animated introduction with staggered text reveals
- Interactive featured work preview
- Smooth scroll navigation
- Social media integration
- Responsive grid layout

### 2. Skills Showcase
- Categorized skill display with progress bars
- Animated skill level indicators
- Technology grid with hover effects
- Professional skill assessment

### 3. Project Portfolio
- Featured projects with detailed descriptions
- Technology stack tags
- GitHub and live demo links
- Responsive project grid
- Hover animations and overlays

### 4. Contact Section
- Professional contact information
- Social media links
- Contact form integration ready
- Accessibility optimized

## 🎨 Design System

The website uses a comprehensive design system built with:

- **Color Palette**: Custom CSS variables for consistent theming
- **Typography**: Optimized font hierarchy and spacing
- **Spacing**: Consistent spacing scale using Tailwind utilities
- **Components**: Reusable UI components with variants
- **Animations**: Coordinated animation system with Framer Motion

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Optimized for tablet and desktop
- **Touch Friendly**: Proper touch targets and interactions
- **Performance**: Optimized images and assets for all screen sizes

## 🔧 Customization

### Adding New Projects
Edit `src/components/Projects.tsx` to add new portfolio items:

```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/your-repo',
    live: 'https://your-demo.com',
    featured: true
  }
]
```

### Updating Skills
Modify `src/components/Skills.tsx` to update your skill set:

```typescript
const skillCategories = [
  {
    title: 'Your Category',
    skills: [
      { name: 'Skill Name', level: 85 }
    ]
  }
]
```

### Social Links
Update `src/lib/social-links.ts` with your social media profiles:

```typescript
export const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/your-username',
    label: 'GitHub'
  }
]
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Connect GitHub repository for automatic deployment
- **AWS Amplify**: Full-stack deployment with backend services
- **DigitalOcean App Platform**: Simple container deployment

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for user experience
- **Bundle Size**: Optimized with Next.js tree shaking
- **Image Optimization**: Next.js Image component for optimal loading

## 🤝 Contributing

While this is a personal portfolio, I welcome feedback and suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: max@example.com
- **LinkedIn**: [Max Levene](https://linkedin.com)
- **GitHub**: [@maxlevene920](https://github.com/maxlevene920/)
- **Twitter**: [@yourhandle](https://twitter.com)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
