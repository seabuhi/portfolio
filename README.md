# Seabuhi Portfolio

Premium Next.js portfolio website with Apple-style glass morphism design.

## 🚀 Features

- **Premium Glass Morphism Design** - iPhone notification-style frosted glass effects
- **Dual Layout System** - Separate component trees for mobile and desktop
- **Fully Static** - Optimized for static hosting with `next export`
- **Data-Driven** - Easy content updates through data files
- **Performance Optimized** - Smooth animations with `prefers-reduced-motion` support
- **SEO Ready** - Proper metadata and semantic HTML

## 📁 Project Structure

```
seabuhi-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with breakpoint detection
│   └── globals.css         # Glass morphism styles & animations
├── components/
│   ├── layout/
│   │   ├── DesktopLayout.tsx   # Desktop-specific layout
│   │   └── MobileLayout.tsx    # Mobile-specific layout
│   ├── GlassCard.tsx       # Reusable glass card component
│   ├── AvatarRing.tsx      # Avatar with glowing ring
│   ├── ProjectCard.tsx     # Project showcase card
│   ├── SkillChips.tsx      # Desktop skills grid
│   ├── SkillsAccordion.tsx # Mobile skills accordion
│   ├── ContactCard.tsx     # Contact information
│   ├── Navbar.tsx          # Desktop navigation
│   └── BottomBar.tsx       # Mobile navigation
├── data/
│   ├── profile.ts          # Personal information
│   ├── projects.ts         # Project showcase data
│   └── skills.ts           # Skills by category
├── public/
│   ├── photo.jpeg          # Profile photo (add your own)
│   └── cv.pdf              # CV file (add your own)
└── next.config.ts          # Next.js configuration
```

## 🛠️ Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## ✏️ Editing Content

All content is easily editable through data files:

### Personal Information
Edit `data/profile.ts`:
```typescript
export const profile = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  cvUrl: "/cv.pdf",
  avatar: "/photo.jpeg",
  status: "Available for work",
};
```

### Projects
Edit `data/projects.ts` to add/modify projects:
```typescript
{
  id: "unique-id",
  title: "Project Name",
  description: "Project description",
  tags: ["Tech1", "Tech2"],
  liveUrl: "https://example.com",
  codeUrl: "https://github.com/...",
  featured: true,
}
```

### Skills
Edit `data/skills.ts` to update skills:
```typescript
{
  category: "Category Name",
  skills: ["Skill 1", "Skill 2", "Skill 3"],
}
```

## 📸 Adding Your Photo

1. Place your photo in the `public/` folder as `photo.jpeg`
2. The avatar component will automatically use it
3. If the image is missing, a graceful fallback will display

## 📄 Adding Your CV

1. Place your CV PDF in the `public/` folder as `cv.pdf`
2. The download button will automatically link to it

## 🏗️ Building for Production

```bash
# Build static export
npm run build
```

This creates an `out/` directory with static files ready for deployment.

## 🚀 Deployment

### Using Nginx

1. Copy the contents of `out/` to your web server:
```bash
scp -r out/* user@server:/var/www/seabuhi.com/
```

2. Use the provided `nginx.conf` configuration:
```bash
sudo cp nginx.conf /etc/nginx/sites-available/seabuhi.com
sudo ln -s /etc/nginx/sites-available/seabuhi.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Other Hosting Options

The static export works with any static hosting provider:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop the `out/` folder
- **GitHub Pages**: Push `out/` contents to `gh-pages` branch
- **AWS S3**: Upload `out/` to S3 bucket with static hosting

## 🎨 Design System

### Glass Morphism Classes

- `.glass` - Light glass effect
- `.glass-strong` - Stronger glass effect
- `.glass-card` - Card with glass effect and hover states

### Color Scheme

The design uses a dark background with vibrant gradient blobs and translucent white glass layers.

### Animations

All animations respect `prefers-reduced-motion` for accessibility.

## 📱 Responsive Design

- **Desktop (≥768px)**: Split hero, 3-column projects grid, skills chips
- **Mobile (<768px)**: Compact hero, horizontal swipe projects, accordion skills

Different component trees are rendered based on breakpoint, not just CSS changes.

## 🔧 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Static Export

## 📝 License

This is a personal portfolio template. Feel free to use and modify for your own portfolio.

## 🤝 Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ by Seabuhi
