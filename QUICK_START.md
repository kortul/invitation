# 🎊 Quick Start Guide

## Get Your Wedding Invitation Online in 3 Minutes

### Step 1: Enable GitHub Pages (1 minute)

1. Go to your repo settings: https://github.com/kortul/invitation/settings
2. Scroll down to **Pages** (on the left sidebar)
3. Under "Build and deployment":
   - Select **Branch**: `main`
   - Select **Folder**: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes...

✅ **Done!** Your site is now live at: **https://kortul.github.io/invitation/**

---

### Step 2: Customize Your Details (1 minute)

**Easy way - Edit in browser:**

1. Go to: https://github.com/kortul/invitation
2. Click on **index.html**
3. Click the ✏️ **Edit** button
4. Find and replace:
   - `Eleanor & James` → Your names
   - `June 15th, 2024` → Your date
   - `Paris, France` → Your location
5. Scroll down and click **Commit changes...**
6. Click **Commit changes** again

✅ **Your site updates automatically in 1-2 minutes!**

---

### Step 3: Share Your Link (1 minute)

That's it! Share this link with guests:

```
https://kortul.github.io/invitation/
```

They'll see your beautiful vintage wedding invitation! 💍

---

## Next Steps: Replace Artwork

When you get your custom wedding illustrations:

1. **Prepare files**: Get your artist's illustrations as SVG or PNG files
2. **Upload to GitHub**:
   - Go to: https://github.com/kortul/invitation/tree/main/assets
   - Click **Add file** → **Upload files**
   - Select files from `/assets/` folder you want to replace
   - Drag and drop your new artwork
   - Scroll down, click **Commit changes**
3. **Done!** Your site updates with the new artwork

See **README.md** for detailed replacement instructions.

---

## Common Edits

### Update Wedding Details

Edit `index.html` and find:

```html
<span class="name-line">Eleanor & James</span>          <!-- Line 32 -->
<span class="date-line">June 15th, 2024</span>           <!-- Line 35 -->
<p class="location-line">Paris, France</p>              <!-- Line 37 -->
```

### Update Story Text

Find this section (around line 59):

```html
<p>
    In the gardens of a moonlit summer evening...
    <!-- Replace this entire paragraph -->
</p>
```

### Update Venue & Details

Find the Details section (around line 146):

```html
<div class="detail-card">
    <h3>Venue</h3>
    <p>Château de Versailles Gardens</p>  <!-- Edit these -->
    <p class="detail-subtext">Versailles, France</p>
</div>
```

---

## Troubleshooting

### Site not showing up?
- Wait 2-3 minutes after enabling Pages
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check that Pages is enabled in Settings

### Changes not appearing?
- Hard refresh your browser (Ctrl+Shift+R)
- Wait 1-2 minutes for deployment
- Check that you clicked "Commit changes"

### Images not loading?
- Make sure files are in `/assets/` folder
- Check file names match exactly (case-sensitive)
- Look at browser console (F12) for error messages

---

## Want to Do More?

See **README.md** for:
- Detailed customization guide
- How to update all colors and fonts
- How to use JavaScript functions for dynamic updates
- Mobile optimization tips
- Print-friendly setup
- Accessibility features

---

## You're All Set! 🎉

Your vintage wedding invitation is live and ready to impress your guests!

**Questions?** Read the full README.md in your repo.

Happy wedding! 💕
