# Serene Roots – Therapy & Counseling Center

Professional, calm, and modern website built with React + TypeScript.

## 📌 Tech Stack
- **Framework**: React 18 + TypeScript (Vite)
- **Routing**: React Router DOM v6
- **Styling**: CSS Modules + Global CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: @emailjs/browser (integrated structure)

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure
- `src/components`: Reusable UI components (Button, Card, Navbar, etc.)
- `src/sections`: Page sections (Hero, Mission, Footer, etc.)
- `src/pages`: Main pages (Home, About, Services, Leadership, Workshops, Contact)
- `src/styles`: Global styles and CSS variables
- `src/constants`: Configuration constants

## 🎨 Design System
The project uses a calm, pastel color palette defined in `src/styles/variables.css`.
- **Primary**: Sage Green (`#8A9A5B`)
- **Secondary**: Light Blue (`#B0C4DE`)
- **Accent**: Beige (`#E6DCC3`)
- **Typography**: Inter / Playfair Display

## 📧 Email Integration
The contact form is set up to use EmailJS. To make it functional:
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Update `src/pages/Contact.tsx` with your `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY`.
3. Uncomment the `emailjs.send` call.

## 🛠 Deployment
Ready for deployment on Vercel or Netlify.
1. Connect your repository.
2. Set build command: `npm run build`
3. Set output directory: `dist`
