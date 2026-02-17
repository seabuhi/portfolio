# Projects System Documentation

## Overview

The Projects section is a fully data-driven, production-ready system with premium glass morphism design.

## File Structure

```
/data/projects.ts           # All project data (EDIT HERE)
/components/ProjectCard.tsx # Reusable project card component
/public/projects/           # Project images folder
```

## Adding/Editing Projects

### 1. Edit `/data/projects.ts`

```typescript
export const projects: Project[] = [
  {
    id: "unique-id",              // Unique identifier
    title: "Project Name",         // Project title
    description: "Description",    // Brief description
    tags: ["Tag1", "Tag2"],       // Technology tags
    liveUrl: "https://...",       // Optional: Live demo URL
    codeUrl: "https://...",       // Optional: GitHub URL
    image: "/projects/name.png",  // Optional: Image path
    featured: true,               // Optional: Featured flag
  },
];
```

### 2. Add Project Image (Optional)

1. Create a screenshot or mockup (1200x630px recommended)
2. Save as PNG or JPG in `/public/projects/`
3. Reference in `image` field: `/projects/yourimage.png`

**If no image is provided**, a graceful glass placeholder will display automatically.

## Features

### Desktop Layout
- **3-column grid** with even spacing
- **Hover effect**: Card lifts up with subtle glow
- **Large preview images** with gradient overlay
- **Smooth transitions** (300ms)

### Mobile Layout
- **Horizontal scroll** with snap points
- **Tap effect**: Scale down (0.97) then bounce back
- **Hidden scrollbar** for clean look
- **85vw card width** for optimal viewing

### Card Components

**Image Section**
- 192px height (h-48)
- Gradient overlay from bottom
- Graceful fallback if image missing
- Object-fit cover for proper scaling

**Content Section**
- Title (text-xl, bold)
- Description (line-clamp-3 for consistency)
- Technology tags (glass pills)
- Action buttons (Live + Code)

**Buttons**
- Glass pill style with hover glow
- Icons with micro-animations
- Opens in new tab
- Conditional rendering (only show if URL exists)

## Animations

All animations respect `prefers-reduced-motion`:

**Desktop Hover**
```css
hover:-translate-y-1
hover:shadow-2xl
hover:shadow-indigo-500/20
```

**Mobile Tap**
```css
scale-[0.97] on touch
bounce back on release
```

**Button Hover**
```css
Icon translate on hover
Glow shadow effect
```

## Performance

- ✅ No external UI libraries
- ✅ Static export compatible
- ✅ Optimized images with Next.js Image
- ✅ Minimal re-renders
- ✅ CSS-only animations

## Editing Workflow

1. **Add project data** to `/data/projects.ts`
2. **Add image** to `/public/projects/` (optional)
3. **Save** - changes reflect immediately in dev mode
4. **Build** - `npm run build` for production

## Example: Adding Savelya Project

```typescript
{
  id: "savelya",
  title: "Savelya",
  description: "Marketplace + chat + payments built with Spring Boot and Next.js.",
  tags: ["Next.js", "Spring Boot", "PostgreSQL", "WebSocket"],
  liveUrl: "https://savelya.com",
  codeUrl: "https://github.com/seabuhi/savelya",
  image: "/projects/savelya.png",
  featured: true,
}
```

## Troubleshooting

**Image not showing?**
- Check path starts with `/projects/`
- Verify file exists in `/public/projects/`
- Check file extension matches (case-sensitive)
- Fallback placeholder will show if image fails

**Card not hovering?**
- Desktop uses `variant="desktop"`
- Mobile uses `variant="mobile"`
- Check layout component passes correct variant

**Tags overflowing?**
- Tags use `flex-wrap` automatically
- Limit to 4-5 tags for best appearance

## Best Practices

1. **Keep descriptions concise** (2-3 lines max)
2. **Use 4-5 tags** per project
3. **Optimize images** (< 500KB)
4. **Use 16:9 aspect ratio** for images
5. **Test on mobile** after adding projects

---

**All content is editable from `/data/projects.ts` only.**
No hardcoded content in JSX components.
