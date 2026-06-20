# Resume Setup Instructions

## Current Setup

The portfolio's "Download Resume" button is now configured to download from a local PDF file stored in the Next.js public folder:

- **File Location:** `/public/resume/Lakshmi_Varsha_Thumati_Resume.pdf`
- **URL Path:** `/resume/Lakshmi_Varsha_Thumati_Resume.pdf`
- **Component:** `components/hero-section.tsx`

## How It Works

The Download Resume button uses the HTML `download` attribute on an anchor tag:

```jsx
<a
  href="/resume/Lakshmi_Varsha_Thumati_Resume.pdf"
  download="Lakshmi_Varsha_Thumati_Resume.pdf"
  className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-6 py-3 font-semibold text-foreground transition-all hover:bg-primary/5"
>
  <FileText className="h-4 w-4" />
  Download Resume
</a>
```

## Replacing the Placeholder Resume

The current PDF is a placeholder. To use your actual resume:

### Local Development

1. Replace the file at `/public/resume/Lakshmi_Varsha_Thumati_Resume.pdf` with your actual resume PDF
2. Keep the filename exactly as `Lakshmi_Varsha_Thumati_Resume.pdf` (or update the paths in `components/hero-section.tsx` if using a different filename)
3. Test locally at `http://localhost:3000/`
4. Click "Download Resume" to verify it works

### Deployment to Vercel

1. Commit and push your actual resume PDF to the repository
2. Deploy to Vercel (no additional configuration needed)
3. The file will be automatically served from `/resume/Lakshmi_Varsha_Thumati_Resume.pdf`

## Why This Approach?

✅ **No external dependencies** - No blob URLs or temporary file references
✅ **Vercel optimized** - Works seamlessly with Vercel's CDN and static file serving
✅ **Production ready** - Files in the public folder are automatically cached and optimized
✅ **Reliable downloads** - HTML download attribute is universally supported
✅ **SEO friendly** - Static files are indexed and cached properly

## File Structure

```
project/
├── public/
│   ├── resume/
│   │   └── Lakshmi_Varsha_Thumati_Resume.pdf  ← Your resume file
│   └── ... (other public assets)
└── components/
    └── hero-section.tsx
```

## Troubleshooting

**"Download doesn't work"**
- Verify the PDF exists at `/public/resume/Lakshmi_Varsha_Thumati_Resume.pdf`
- Check browser console for 404 errors
- Ensure the filename matches exactly (case-sensitive)

**"File returns 404 on Vercel"**
- Make sure you committed the PDF file to Git
- The `public/` folder must be tracked in your repository
- Redeploy after adding the file

## Next Steps

1. Replace the placeholder PDF with your actual resume
2. Test the download button locally
3. Commit the changes to Git
4. Deploy to Vercel
5. Verify the download works in production
