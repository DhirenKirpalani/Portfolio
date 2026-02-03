# 🚀 Dhiren Kirpalani - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, showcasing product management expertise in fintech and payment systems. Features beautiful animations, dark/light theme support, and comprehensive SEO optimization.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38bdf8)

## ✨ Features

### 🎨 Design & UX
- **Responsive Design** - Fully responsive across all devices
- **Dark/Light Theme** - Smooth theme toggle with persistent preferences
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Modern UI** - Clean, professional design with gradient effects
- **Interactive Elements** - Hover effects, micro-interactions, and smooth scrolling

### 📧 Contact Form
- **Email Integration** - Powered by Resend API
- **Real-time Validation** - Client-side validation with clear error messages
- **Security Features** - XSS protection, CSRF protection, input sanitization
- **Character Counter** - Visual feedback for message length
- **Success/Error States** - Clear feedback for form submissions

### 🔒 Security
- **Input Sanitization** - DOMPurify for XSS prevention
- **Email Validation** - Validator.js for proper email format checking
- **CSRF Protection** - Origin verification for API requests
- **Security Headers** - Comprehensive HTTP security headers
- **Rate Limiting Ready** - Infrastructure for Upstash Redis integration

### 🔍 SEO Optimization
- **Meta Tags** - Comprehensive Open Graph and Twitter Card support
- **Structured Data** - JSON-LD schema for Person, ProfessionalService, Website
- **Sitemap** - Dynamic XML sitemap generation
- **Robots.txt** - Proper crawler instructions
- **PWA Support** - Web app manifest for mobile installation
- **Performance** - Optimized for Core Web Vitals

### 📱 Sections
- **Hero** - Eye-catching introduction with animated gradients
- **About** - Professional background and expertise
- **Experience** - Work history and achievements
- **Skills** - Technical and product management skills
- **Content** - TikTok content creation showcase
- **Contact** - Interactive contact form with validation

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/)
- **Email:** [Resend](https://resend.com/)
- **Security:** DOMPurify, Validator.js
- **Font:** [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/dhirenkirpalani/portfolio-website.git
cd portfolio-website/portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:
```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Required:
- `RESEND_API_KEY` - Your Resend API key
- `CONTACT_EMAIL` - Email to receive contact form submissions
- `NEXT_PUBLIC_SITE_URL` - Your production URL

Optional:
- `ALLOWED_ORIGINS` - Comma-separated allowed origins for CORS
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` - Google Search Console verification
- `UPSTASH_REDIS_REST_URL` - For rate limiting
- `UPSTASH_REDIS_REST_TOKEN` - For rate limiting

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts          # Contact form API endpoint
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Main page
│   ├── globals.css                # Global styles
│   ├── manifest.ts                # PWA manifest
│   ├── sitemap.ts                 # Dynamic sitemap
│   └── robots.txt                 # Crawler instructions
├── components/
│   ├── About.tsx                  # About section
│   ├── Contact.tsx                # Contact form with validation
│   ├── Content.tsx                # Content creation showcase
│   ├── Experience.tsx             # Work experience
│   ├── Hero.tsx                   # Hero section
│   ├── Navbar.tsx                 # Navigation bar
│   ├── Skills.tsx                 # Skills section
│   ├── StructuredData.tsx         # SEO JSON-LD schemas
│   └── ThemeWrapper.tsx           # Theme provider wrapper
├── contexts/
│   └── ThemeContext.tsx           # Theme context provider
├── public/
│   └── robots.txt                 # Public robots file
├── .env.example                   # Environment variables template
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind configuration
└── package.json                   # Dependencies
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details** - Edit `components/Contact.tsx`
2. **Social Links** - Update `components/Hero.tsx` and `components/Contact.tsx`
3. **Experience** - Modify `components/Experience.tsx`
4. **Skills** - Update `components/Skills.tsx`
5. **About** - Edit `components/About.tsx`

### Theme Colors

Edit `app/globals.css` to customize theme colors:
```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ffffff;
}
```

### SEO Metadata

Update `app/layout.tsx` with your information:
- Site URL
- Social media handles
- Meta descriptions
- Open Graph images

## 🔐 Security Features

- ✅ XSS Protection with DOMPurify
- ✅ CSRF Protection with origin verification
- ✅ Input validation with Validator.js
- ✅ Security headers (HSTS, X-Frame-Options, CSP-ready)
- ✅ Email format validation
- ✅ Message length limits (10-5000 characters)
- ✅ Rate limiting infrastructure ready

## 📊 SEO Features

- ✅ Comprehensive meta tags
- ✅ Open Graph for social media
- ✅ Twitter Card support
- ✅ JSON-LD structured data (Person, ProfessionalService, Website, BreadcrumbList)
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ PWA manifest
- ✅ Semantic HTML
- ✅ Optimized for Core Web Vitals

## 🧪 Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Dhiren Kirpalani**
- Email: dhirenkirpalani2308@gmail.com
- LinkedIn: [linkedin.com/in/dhirenkirpalani](https://linkedin.com/in/dhirenkirpalani)
- GitHub: [github.com/dhirenkirpalani](https://github.com/dhirenkirpalani)
- TikTok: [@your.product.guy](https://www.tiktok.com/@your.product.guy)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Vercel](https://vercel.com/) - Hosting platform
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icon library
- [Resend](https://resend.com/) - Email API

---

Built with ❤️ by Dhiren Kirpalani
