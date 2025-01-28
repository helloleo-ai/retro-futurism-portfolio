# Retro-Future Portfolio

A modern portfolio template with a retro-futuristic design, built with React, Vite, Framer Motion, and Styled Components.

![Portfolio Preview](preview.png)

## ✨ Features

- Retro-futuristic design with neon accents
- Animated starry background
- Smooth scrolling animations with Framer Motion
- Responsive layout for all devices
- Interactive skill bars
- Project showcase cards
- Testimonials section
- Contact form with social links
- Modern glassmorphism effects

## 🛠️ Tech Stack

- React 18
- Vite 4
- Framer Motion
- Styled Components
- Font Awesome Icons

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/retro-future-portfolio.git
cd retro-future-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be running at `http://localhost:5173`

## 🎨 Customization

### Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Update name and title
   - Modify introduction text
   - Customize CTA button

2. **Projects** (`src/components/Projects.jsx`)
   - Edit `projects` array to add your own projects
   - Customize project cards with your work
   - Add relevant tech stack tags

3. **Skills** (`src/components/Skills.jsx`)
   - Modify `skillCategories` array
   - Adjust skill levels and categories
   - Add or remove skill items

4. **Testimonials** (`src/components/Testimonials.jsx`)
   - Update `testimonials` array with your references
   - Customize testimonial cards
   - Add client information

5. **Contact** (`src/components/Contact.jsx`)
   - Update social media links
   - Customize contact form
   - Modify email configuration

### Styling

The main theme colors and variables are in `src/index.css`:

```css
:root {
  --primary-dark: #030014;
  --neon-blue: #00f3ff;
  --neon-pink: #ff00ff;
  --neon-purple: #bd00ff;
  --neon-green: #00ff9d;
}
```

Modify these variables to change the color scheme.

## 📦 Building for Production

1. Create a production build:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

## 🌐 Deployment

This portfolio can be deployed to:

- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static site host

Most platforms can deploy directly from your GitHub repository.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💫 Credits

- Fonts: [Google Fonts](https://fonts.google.com) (Orbitron, Inter)
- Icons: [Font Awesome](https://fontawesome.com)
- Animation: [Framer Motion](https://www.framer.com/motion)

## 🎯 Todo

- [ ] Add dark/light theme toggle
- [ ] Add blog section
- [ ] Implement i18n support
- [ ] Add more animation variations
- [ ] Create more project card layouts

## 🤔 Support

If you have any questions or need help customizing the template, feel free to:

1. Open an issue
2. Create a discussion
3. Fork and submit a PR

Don't forget to ⭐ the repo if you like it!
