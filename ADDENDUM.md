# ADDENDUM — Read before building page.tsx!

## 🌙☀️ Dark / Light Mode — REQUIRED

The site MUST support full dark/light mode toggle via a button in the nav.

### Implementation
1. Install `next-themes`: `npm install next-themes`
2. Create `src/components/providers.tsx` — wraps children with `<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>`
3. Update `layout.tsx`:
   - Import and wrap with `<Providers>`
   - Add `suppressHydrationWarning` to `<html>`
   - Add `class="dark"` default via ThemeProvider
4. Create `src/components/ThemeToggle.tsx` — a button that calls `useTheme()` and toggles between sun/moon icon (use lucide-react `Sun` and `Moon` icons)
5. Add ThemeToggle to the navbar (top right)

### CSS Variables for both modes
In `globals.css`, define CSS custom properties for both themes:

```css
:root {
  /* Light mode */
  --bg-primary: #f8f8f8;
  --bg-secondary: #ffffff;
  --text-primary: #0a0a0a;
  --text-secondary: #444444;
  --accent: #cc0000;
  --card-bg: rgba(255,255,255,0.8);
  --border: rgba(0,0,0,0.1);
}

.dark {
  /* Dark mode (default) */
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --text-primary: #f0f0f0;
  --text-secondary: #aaaaaa;
  --accent: #FF3131;
  --card-bg: rgba(255,255,255,0.05);
  --border: rgba(255,255,255,0.1);
}
```

### Design Notes
- **Dark mode** (default): Black/carbon background, neon red accent, white text — racing feel
- **Light mode**: Clean white/light gray, deep red accent, dark text — professional feel
- All sections, cards, nav, footer must respond to theme
- Glassmorphism cards should adjust opacity for both modes
- Magic UI components use `useTheme()` where applicable (MagicCard already supports it)
- The toggle button should animate smoothly (rotate or fade transition)

### Tailwind Config
Make sure `tailwind.config.ts` has `darkMode: 'class'` set.
