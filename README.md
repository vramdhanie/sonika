# Sonika - Static Next.js Site

A beautiful static website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **Static Site Generation** - Optimized for performance
- 🎨 **Tailwind CSS** - Beautiful, responsive design
- 🔧 **TypeScript** - Type-safe development
- 🌙 **Dark Mode** - Built-in dark mode support
- 📱 **Responsive** - Works on all devices

## 🛠️ Technology Stack

- **Next.js 15** - React framework with static export
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation & Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   
   Visit [http://localhost:3000](http://localhost:3000)

3. **Build for production**
   ```bash
   npm run build
   ```
   
   Static files will be generated in the `out/` directory.

## 📁 Project Structure

```
sonika/
├── src/
│   └── app/
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

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build and export static site
- `npm run export` - Same as build (exports to `out/` directory)
- `npm run start` - Start production server (not needed for static export)
- `npm run lint` - Run ESLint

## 🚀 Deployment

Since this is a static site, you can deploy the `out/` directory to any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `out/` directory
- **GitHub Pages**: Use the generated static files
- **Cloudflare Pages**: Connect your repository
- **AWS S3**: Upload the `out/` directory contents

## 🎨 Customization

### Colors & Styling
- Edit `tailwind.config.ts` to customize the design system
- Modify `src/app/globals.css` for global styles
- Update individual pages in `src/app/` for content changes

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file in that directory
3. The route will be automatically available

### Configuration
- Update `next.config.ts` for build settings
- Modify `package.json` for dependencies and scripts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Made with ❤️ using Next.js, TypeScript, and Tailwind CSS**
