# Sonika - Beautiful Rustic Art

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge)](https://github.com/yourusername/sonika)
[![Deploy Status](https://img.shields.io/badge/deploy-ready-blue?style=for-the-badge)](https://vercel.com)

A stunning showcase of beautiful rustic art, built with modern web technologies. Sonika presents a minimalist, elegant design that celebrates the beauty of rustic aesthetics through a contemporary digital lens.

## ✨ Features

- 🎨 **Beautiful Design** - Minimalist aesthetic with rustic art focus
- 🌙 **Dark Mode** - Seamless light/dark theme switching
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- ⚡ **Lightning Fast** - Optimized static site generation
- 🔧 **Type Safe** - Built with TypeScript for reliability
- 🎯 **SEO Optimized** - Meta tags and structured content

## 🛠️ Technology Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with static export
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ESLint](https://eslint.org/)** - Code quality and consistency

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sonika.git
   cd sonika
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser

4. **Build for production**
   ```bash
   npm run build
   ```
   
   Static files will be generated in the `out/` directory.

## 📁 Project Structure

```
sonika/
├── src/
│   └── app/
│       ├── components/        # Reusable components
│       │   ├── Header.tsx    # Site header
│       │   └── Footer.tsx    # Site footer
│       ├── about/
│       │   └── page.tsx      # About page
│       ├── globals.css       # Global styles
│       ├── layout.tsx        # Root layout
│       └── page.tsx          # Home page
├── public/                   # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build and export static site |
| `npm run export` | Same as build (exports to `out/` directory) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🚀 Deployment

This static site can be deployed to any static hosting service:

### Recommended Platforms

- **[Vercel](https://vercel.com)** - Zero-config deployment with automatic builds
- **[Netlify](https://netlify.com)** - Drag and drop deployment
- **[GitHub Pages](https://pages.github.com)** - Free hosting for open source
- **[Cloudflare Pages](https://pages.cloudflare.com)** - Fast global CDN

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the contents of the `out/` directory to your hosting provider

## 🎨 Customization

### Design System
- **Colors**: Edit `tailwind.config.ts` to customize the color palette
- **Typography**: Modify font settings in the same config file
- **Layout**: Update `src/app/layout.tsx` for global layout changes

### Content Management
- **Pages**: Add new pages in `src/app/` directories
- **Components**: Create reusable components in `src/app/components/`
- **Styles**: Modify `src/app/globals.css` for global styles

### Configuration
- **Next.js**: Update `next.config.ts` for build settings
- **Dependencies**: Manage packages in `package.json`

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure responsive design
- Test on multiple devices
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)

---

**Made with ❤️ for beautiful rustic art**

*Sonika - Where tradition meets modern web design*
