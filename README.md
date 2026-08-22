# 💍 Vintage Wedding Invitation Website

A beautifully designed, fully interactive wedding invitation website that feels like an antique French wedding invitation come to life. Built with vanilla HTML, CSS, and JavaScript—no frameworks, no build process.

## ✨ Features

### Design
- **Antique aesthetic**: Warm cream paper, muted sage green, dusty florals
- **Elegant typography**: High-contrast serif fonts with restrained ornamental elements
- **Botanical illustrations**: Hand-drawn style line art and decorative elements
- **Paper texture**: Subtle texture overlay for authentic vintage feel
- **No modern UI**: No bright colors, gradients, or SaaS-style rounded cards

### Animation Sequence
1. **Mansion appears** - Cinematic reveal of the chateau/mansion (0.3s delay)
2. **Decorations bloom** - Botanical frame fades in (1.2s delay)
3. **Couple revealed** - Bride and groom appear at emotional focal point (2.2s delay)
4. **Text transitions** - Names and date elegantly slide in (3s+ delay)
5. **Scroll-triggered reveals** - Sections animate in as user scrolls
6. **Parallax effects** - Subtle image movement on scroll
7. **Hover interactions** - Cards lift gently, gallery images scale smoothly

### Accessibility
- ✅ Respects `prefers-reduced-motion` setting
- ✅ Semantic HTML structure
- ✅ Alt text on all images
- ✅ High contrast for readability
- ✅ Mobile-first responsive design

### Mobile Optimization
- Fully responsive from 320px to 4K
- Touch-friendly interactive elements
- Readable typography at all sizes
- Collapsing decorative borders
- Maintains animation quality on mobile

## 📁 File Structure

```
invitation/
├── index.html              # Main HTML structure
├── styles.css              # Comprehensive styling with animations
├── script.js               # Vanilla JavaScript for interactivity
├── assets/                 # All SVG and image assets
│   ├── mansion.svg         # Chateau/mansion illustration
│   ├── bride-groom.svg     # Couple illustration
│   ├── botanical-frame.svg # Decorative frame with vines & flowers
│   ├── garden.svg          # Garden illustration for "Our Story"
│   ├── ceremony-icon.svg   # Timeline event icon
│   ├── cocktails-icon.svg  # Timeline event icon
│   ├── dinner-icon.svg     # Timeline event icon
│   ├── dancing-icon.svg    # Timeline event icon
│   ├── closing-flowers.svg # Closing section decoration
│   ├── gallery-1.jpg       # Gallery image placeholder
│   ├── gallery-2.jpg       # Gallery image placeholder
│   ├── gallery-3.jpg       # Gallery image placeholder
│   ├── gallery-4.jpg       # Gallery image placeholder
│   ├── gallery-5.jpg       # Gallery image placeholder
│   └── gallery-6.jpg       # Gallery image placeholder
├── README.md               # This file

```

## 🚀 View Online (GitHub Pages)

### Option 1: Enable GitHub Pages (Recommended)

1. **Go to repository settings**
   - Navigate to your repo: `https://github.com/kortul/invitation`
   - Click **Settings** (top right)

2. **Enable GitHub Pages**
   - Scroll to **"Pages"** section (left sidebar)
   - Under "Build and deployment", select:
     - **Source**: `Deploy from a branch`
     - **Branch**: `main` (or your default branch)
     - **Folder**: `/ (root)`
   - Click **Save**

3. **Access your site**
   - Wait 1-2 minutes for deployment
   - Your site will be at: `https://kortul.github.io/invitation/`
   - Share this URL with anyone to view!

### Option 2: View Locally (Without GitHub Pages)

If you want to test locally before deploying:

1. **Clone the repository**
   ```bash
   git clone https://github.com/kortul/invitation.git
   cd invitation
   ```

2. **Start a local server** (choose one)
   
   **Using Python 3:**
   ```bash
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`
   
   **Using Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (http-server):**
   ```bash
   npx http-server
   ```
   
   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   - Visit the URL shown in terminal (usually `http://localhost:8000`)

## 🎨 Customization Guide

### Updating Content

All text can be easily updated in `index.html`:

- **Couple names**: Line 32 in `index.html`
- **Wedding date**: Line 35 in `index.html`
- **Location**: Line 37 in `index.html`
- **Story text**: Line 59 in `index.html`
- **Timeline events**: Lines 83-131 in `index.html`
- **Venue details**: Lines 146-168 in `index.html`
- **Gallery images**: Lines 192-209 in `index.html`

### Updating Illustrations

All illustrations are in the `/assets/` folder. Simply replace these files:

| File | Purpose | Recommended Size |
|------|---------|------------------|
| `mansion.svg` | Main chateau/venue illustration | 500x400px |
| `bride-groom.svg` | Couple portrait | 400x500px |
| `botanical-frame.svg` | Decorative frame around hero | 600x600px |
| `garden.svg` | Garden scene in "Our Story" | 400x300px |
| `closing-flowers.svg` | Closing section decoration | 300x200px |

**Timeline event icons** (ceremony, cocktails, dinner, dancing):
- Each `*-icon.svg` should be simple and 100x100px
- They'll be displayed in 60px circles

**Gallery images** (gallery-1 through gallery-6):
- Should be 1:1 aspect ratio (square)
- Recommended: at least 400x400px
- Can be `.jpg` or `.png`
- Replace the current placeholder SVGs with real photos

### Using JavaScript Functions

The site includes helper functions for dynamic updates. Open browser console and use:

```javascript
// Update couple names
WeddingInvitation.updateCoupleNames('Sarah', 'Michael')

// Update date
WeddingInvitation.updateWeddingDate('June 15th, 2024')

// Update location
WeddingInvitation.updateLocation('Tuscany, Italy')

// Update timeline event (index 0-3)
WeddingInvitation.updateTimelineEvent(0, 'Ceremony', '3:00 PM', 'Garden')

// Update gallery image (index 0-5)
WeddingInvitation.updateGalleryImage(0, 'path/to/photo.jpg', 'alt text')

// Update story text
WeddingInvitation.updateStoryText('Your custom story here...')

// Update single asset
WeddingInvitation.updateAsset('mansion', 'path/to/new-mansion.svg')

// Update multiple assets at once
WeddingInvitation.updateAssets({
  mansion: 'path/to/mansion.svg',
  couple: 'path/to/couple.svg',
  garden: 'path/to/garden.svg'
})
```

### Modifying Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
    /* Color Palette - Antique & Muted */
    --cream: #f5f1e8;              /* Main background */
    --dark-cream: #e8e3d8;         /* Accent background */
    --sage: #8b9c7f;               /* Primary green */
    --dusty-olive: #9d9c7f;        /* Muted olive */
    --muted-rose: #a88a8a;         /* Dusty rose */
    --muted-lavender: #9a8fa8;     /* Dusty purple */
    --charcoal: #2c2c2c;           /* Text color */
}
```

### Adjusting Animations

All animation timings are in `styles.css`. For example:

```css
.mansion {
    animation: revealMansion 1.2s ease-out 0.3s forwards;
    /* Duration: 1.2s, Delay: 0.3s */
}
```

To make animations faster/slower, adjust the duration (first value) and delay (third value).

### Mobile Typography

Adjust breakpoints in `styles.css` mobile media queries (around line 1050):

```css
@media (max-width: 768px) { /* Tablets */
    h1 { font-size: 2.2rem; }
}

@media (max-width: 480px) { /* Phones */
    h1 { font-size: 1.8rem; }
}
```

## 📸 Asset Replacement Instructions

When you receive your custom wedding artwork, follow this checklist:

### Step 1: Prepare Your Artwork
- [ ] Mansion/chateau illustration (SVG or high-res PNG)
- [ ] Bride & groom illustration (SVG or high-res PNG)
- [ ] Botanical frame decoration (SVG or high-res PNG)
- [ ] Garden illustration (SVG or high-res PNG)
- [ ] Closing flowers illustration (SVG or high-res PNG)
- [ ] Timeline event icons × 4 (SVG, simple line art)
- [ ] Gallery photos × 6 (JPG/PNG, 1:1 aspect ratio)

### Step 2: Convert to Web Format
- SVG illustrations: Export from design software as `.svg`
- Photos: Optimize for web (400-600px, compressed)
- Use tools like [TinyPNG](https://tinypng.com/) for compression

### Step 3: Replace Files

**Easiest method - Upload via GitHub web interface:**

1. Go to your repo: `https://github.com/kortul/invitation`
2. Navigate to `/assets/` folder
3. Click "Add file" → "Upload files"
4. Drag and drop your new files
5. Commit with message like "Update wedding artwork"

**Alternative - Replace locally:**

1. Download your repo to computer
2. Replace files in `/assets/` folder
3. Push to GitHub with: `git add . && git commit -m "Update artwork" && git push`

### Step 4: Test

- Visit your GitHub Pages URL
- Refresh browser (Ctrl+Shift+R or Cmd+Shift+R for hard refresh)
- Check all sections load correctly
- Test on mobile device

## 🛠️ Technical Details

### Browser Support
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ⚠️ Limited (no IntersectionObserver)

### Performance
- **Page size**: ~50KB (HTML, CSS, JS combined, uncompressed)
- **Assets**: ~200KB (SVG placeholders, actual artwork varies)
- **Load time**: <1 second on most connections
- **No external dependencies**: All local files

### Accessibility Features
- ✅ Alt text on all images
- ✅ Semantic HTML (nav, section, article, etc.)
- ✅ Color contrast AA compliant
- ✅ Respects `prefers-reduced-motion`
- ✅ Keyboard navigable
- ✅ Screen reader friendly

## 🔧 Troubleshooting

### GitHub Pages not showing
- **Wait longer**: Deployment takes 1-2 minutes
- **Hard refresh**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- **Check settings**: Confirm Pages is enabled and set to `main` branch
- **View deployment logs**: Settings → Pages → scroll down to see status

### Images not loading
- **Check file paths**: All assets must be in `/assets/` folder
- **File names**: Must match exactly (case-sensitive on Linux servers)
- **Check console**: Open DevTools (F12) → Console tab for errors

### Animations not playing
- **Check browser**: Some older browsers don't support all CSS animations
- **Reduce motion setting**: If enabled on your device, animations will be minimal
- **JavaScript errors**: Check console for issues

### Mobile looks broken
- **Viewport meta tag**: Verify it's in `<head>` in index.html (it is)
- **Clear cache**: Browser cache might have old version
- **Test different device**: Use Chrome DevTools responsive mode

## 📝 Notes

- **No RSVP functionality**: This is intentional—it's designed as a beautiful showcase
- **No backend**: Everything runs in the browser, no server needed
- **No frameworks**: Vanilla HTML, CSS, and JavaScript only
- **Git-deployable**: Simply upload to GitHub and it works

## 💡 Tips

- **Custom domain**: GitHub Pages supports custom domains (contact your registrar)
- **Easy sharing**: Send the GitHub Pages URL to guests
- **Update anytime**: Changes to the repo auto-deploy to your site within 1-2 minutes
- **Embed video**: You can add an `<iframe>` to embed a video in any section
- **Print-friendly**: The page has print styles; guests can print if they want

## 🎁 Future Enhancements (Optional)

Want to add more features later? Here are some ideas:

- [ ] Add music/audio in background
- [ ] Create a lightbox for gallery images
- [ ] Add countdown timer to wedding
- [ ] Embed Google Map for venue
- [ ] Add animated scroll progress indicator
- [ ] Create alternate dark theme
- [ ] Add social media share buttons

## 📄 License

This template is yours to customize and use for your wedding. Share the love! 💕

---

**Questions?** Check the code comments in `script.js`, `styles.css`, and `index.html`—they're thoroughly documented.

**Need help?** Visit [GitHub Pages documentation](https://docs.github.com/en/pages) or reach out!

Congratulations on your upcoming wedding! 🎉
