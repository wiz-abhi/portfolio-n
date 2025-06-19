# 🚀 Abhishek Gupta - Portfolio

A stunning, modern portfolio website built with cutting-edge technologies and beautiful animations inspired by Aceternity UI design principles.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-FF0055)

## ✨ Features

### 🎨 **Stunning Visual Design**

- **Dark & Light Theme**: Modern dark & light themes with beautiful gradients
- **Animated Background**: Floating particles and gradient effects
- **Glass Morphism**: Beautiful glass effects and backdrop blur
- **Gradient Text**: Eye-catching gradient text effects
- **Custom Scrollbar**: Styled scrollbar with gradient colors

### 🎬 **Smooth Animations**

- **Framer Motion**: Sophisticated animations powered by Framer Motion
- **Scroll-triggered Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover animations throughout
- **Loading Animations**: Beautiful loading and transition effects
- **Typing Effects**: Dynamic typing animations

### 📱 **Responsive Design**

- **Mobile-First**: Fully responsive across all devices
- **Touch-Friendly**: Optimized for touch interactions
- **Fast Loading**: Optimized performance and fast loading times
- **SEO Optimized**: Proper meta tags and structured data

### 🧩 **Sections**

1. **Hero Section**: Stunning animated introduction with floating particles
2. **About Me**: Personal information with animated profile card
3. **Projects**: Interactive project showcase with hover effects
4. **Skills**: Animated skill bars with technology categories
5. **Experience**: Professional timeline with achievements
6. **Contact**: Call-to-action section with contact information

## 🛠️ Tech Stack

### **Frontend Framework**

- **Next.js 15.3** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - Latest React features

### **Styling & Animation**

- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations library
- **CSS Custom Properties** - Dynamic theming
- **Custom CSS Animations** - Hand-crafted effects

### **Icons & Assets**

- **Iconify** - Beautiful, customizable icons
- **Google Fonts (Space Grotesk)** - Modern typography

### **Analytics & Monitoring**

- **PostHog** - Privacy-friendly analytics and user behavior tracking
- **Performance Monitoring** - Real-time performance insights
- **Error Tracking** - Automatic exception capture

### **Development Tools**

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/abhishekgupta/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp env-example .env
   ```

   Update the `.env` file with your actual values:
   - EmailJS credentials for contact form
   - PostHog analytics keys

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Easy Customization

### **Quick Configuration**

All portfolio content can be easily updated through the configuration file:

**`src/config/portfolio-data.ts`** - Update this single file to change:

- Personal information (name, contact, social links)
- Projects (add/remove/modify projects)
- Certifications (add your certificates)
- Technology stack (skills and experience levels)
- Experience timeline
- About section content

### **Personal Information**

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... more fields
};
```

### **Projects**

```typescript
export const projects = [
  {
    title: "Your Project Title",
    description: "Project description...",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/repo",
    live: "https://yourproject.com",
    // ... more fields
  }
];
```

### **Certifications**

```typescript
export const certifications = [
  {
    title: "Your Certification",
    provider: "Provider Name",
    issued: "Date",
    skills: ["Skill 1", "Skill 2"],
    // ... more fields
  }
];
```

### **Styling**

- **Colors**: Update color schemes in `tailwind.config.js`
- **Animations**: Customize animations in `src/app/globals.css`
- **Components**: Modify components in the `src/components/` directory

## 📊 Analytics with PostHog

This portfolio includes PostHog analytics for tracking:

- **Page Views**: Monitor visitor traffic
- **User Interactions**: Track how users engage with your portfolio
- **Performance Metrics**: Monitor loading times and user experience
- **Error Tracking**: Automatically capture and track errors

### Benefits:
- **Privacy-Friendly**: First-party data collection
- **GDPR Compliant**: Respects user privacy
- **Real-time Insights**: Live data about your portfolio performance

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles and animations
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main portfolio page
│   │   └── favicon.ico         # Site favicon
│   ├── components/
│   │   ├── portfolio/          # Portfolio-specific components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── ... (other sections)
│   │   ├── PostHogProvider.tsx # Analytics provider
│   │   ├── ThemeProvider.tsx   # Theme context provider
│   │   └── ThemeToggle.tsx     # Dark/light theme toggle
│   ├── config/
│   │   └── portfolio-data.ts   # 🎯 MAIN CONFIG FILE
│   └── lib/
│       ├── posthog.ts         # PostHog configuration
│       └── utils.ts           # Utility functions
├── public/
│   ├── certificates/          # Certificate images
│   ├── CV.pdf                # Resume/CV file
│   └── ... (other assets)
├── .env                      # Environment variables
└── ... (config files)
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/abhishekgupta/portfolio/issues).

## 👨‍💻 Author

**Abhishek Gupta**

- Portfolio: [https://abhishekgupta.dev](https://abhishekgupta.dev)
- GitHub: [@abhishekgupta](https://github.com/abhishekgupta)
- LinkedIn: [LinkedIn](https://linkedin.com/in/abhishek-gupta)
- Email: abhishek@example.com

## 🙏 Acknowledgments

- **Framer Motion** - Amazing animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js Team** - Excellent React framework
- **Iconify** - Beautiful icon library
- **PostHog** - Privacy-friendly analytics platform

---

**Made with ❤️ and cutting-edge web technologies**

_This portfolio demonstrates modern web development practices and showcases the beauty of well-crafted user interfaces._