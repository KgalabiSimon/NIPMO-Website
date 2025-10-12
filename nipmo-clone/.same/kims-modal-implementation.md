# KIMS Launch Modal Implementation

## Overview
A reusable, accessible modal pop-up that opens whenever any button with the visible label "Access KIMS Now" is clicked (case-insensitive match).

## Components Created

### 1. Dialog Component (`src/components/ui/dialog.tsx`)
- Standard shadcn/ui dialog component
- Built on Radix UI primitives
- Includes accessibility features (focus trap, keyboard navigation, ARIA labels)
- Exports: Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, etc.

### 2. KIMS Launch Modal (`src/components/KIMSLaunchModal.tsx`)
Main modal component with:
- **Title**: "KIMS Launch Update"
- **Message**: "The countdown has begun — a fresh, new-looking KIM System is launching soon."
- **Preview Image**: https://ext.same-assets.com/4026891959/1299496361.png
- **Primary Button**: "Access Current KIMS" linking to the current KIMS system
- **Close Controls**:
  - X icon button in top-right corner
  - Close text button in footer

### 3. useKIMSModal Hook
Custom hook that automatically attaches modal behavior to buttons:
- Listens for clicks on any button/link containing "Access KIMS Now" text
- Supports `data-kims-access` attribute for explicit triggering
- Prevents default link behavior and opens modal instead
- Prevents duplicate modals (single instance)

## Integration

The modal is globally integrated via `src/app/ClientBody.tsx`:
```tsx
import { KIMSLaunchModal, useKIMSModal } from "@/components/KIMSLaunchModal";

const { isOpen, onClose } = useKIMSModal();
return (
  <>
    <div className="antialiased">{children}</div>
    <KIMSLaunchModal isOpen={isOpen} onClose={onClose} />
  </>
);
```

This makes the modal available on all pages without any additional setup.

## How It Works

1. The `useKIMSModal` hook attaches a global click listener to the document
2. When a click occurs, it checks if the target (or closest button/link) has:
   - `data-kims-access` attribute, OR
   - Text content that includes "access kims now" (normalized, case-insensitive)
3. If either condition is met:
   - Default action is prevented
   - Event propagation is stopped
   - Modal opens
4. User can close modal via:
   - X button
   - Close button
   - Clicking outside the modal
   - Pressing Escape key

## Trigger Methods

### Method 1: Text Matching (Automatic)
Any button or link with text containing "Access KIMS Now" will automatically trigger the modal:

```tsx
<Button>Access KIMS Now</Button>
<a href="#">Access KIMS Now</a>
```

### Method 2: data-kims-access Attribute (Explicit)
For more control, add the `data-kims-access` attribute:

```tsx
<Button data-kims-access>Click Me</Button>
<a data-kims-access href="#">Custom Text</a>
```

## Accessibility Features

- ✅ Keyboard navigation (Tab, Shift+Tab)
- ✅ Escape key to close
- ✅ Focus trap (focus stays within modal)
- ✅ Screen reader support with ARIA labels
- ✅ Backdrop click to close
- ✅ Proper semantic HTML structure

## Testing

To test the modal:
1. Navigate to the home page (/)
2. Click the "Access KIMS Now" button in the hero section
3. Modal should open showing the preview image
4. Try all close methods (X button, Close button, Escape, backdrop click)
5. Also test on the About KIMS page (/about-kims)

## Customization

The modal URL can be customized by passing a prop:
```tsx
<KIMSLaunchModal
  isOpen={isOpen}
  onClose={onClose}
  kimsUrl="https://custom-url.com"
/>
```

Default URL: `https://www.kim.nipmo.org.za/authentication/login?returnUrl=%2Fdashboard`

## Files Modified/Created

### Created:
- `src/components/ui/dialog.tsx` - Dialog component
- `src/components/KIMSLaunchModal.tsx` - Main modal + hook

### Modified:
- `src/app/ClientBody.tsx` - Added global modal integration
- `src/app/page.tsx` - Removed old custom modal code
- `package.json` - Added @radix-ui/react-dialog dependency

## Dependencies Added
- `@radix-ui/react-dialog@1.1.15`
