# Implementation Plan - Gaia Consultores Brand Refresh

This plan outlines the steps to align the landing page with the new Gaia Consultores brand guidelines, focusing on the "Applications" visual style (organic shapes, topographic lines, earth tones).

## User Review Required

> [!IMPORTANT]
> **Visual Assets**: The brand manual shows specific "topographic line" patterns. Since we don't have these SVG assets, I will use CSS to create organic shapes and clean layouts. If you have the specific pattern assets (SVGs/PNGs), please upload them.

## Proposed Changes

### 1. Global Styles (`src/index.css`) - **COMPLETED**
- **Typography**: Switched to `Poppins` (Light, Regular, Medium, Bold, Black).
- **Colors**:
    - Primary: `#665a50` (Dark Earth)
    - Secondary: `#b09882` (Earthy Beige)
    - Tertiary: `#cecac8` (Stone Gray)
    - Backgrounds: White & Off-white `#F8F7F6`.
- **Radius**: Increased border radius for a more organic feel.

### 2. Header Component (`src/components/Header.jsx` & CSS)
- **Goal**: Clean, minimal navigation.
- **Changes**:
    - Background: White or very light stone (`var(--color-surface)`).
    - Text: Primary color (`#665a50`).
    - Active State: Underline or subtle color change to Secondary (`#b09882`).
    - Mobile Menu: Ensure it uses the new palette.

### 3. Hero Section (`src/components/Hero.jsx` & CSS)
- **Goal**: Replicate the "Web Banner" style from the manual (Image + Organic Overlay).
- **Changes**:
    - **Layout**: Split layout (Text Left / Image Right) or Full background with overlay.
    - **Visuals**:
        - Implement a large, organic border-radius for the main container or image mask (like the curved shape in the reference).
        - Use the Primary color (`#665a50`) for the text background/overlay.
        - Typography: Large, Bold Poppins for the headline.

### 4. Services Section (`src/components/ServicesSection.jsx` & CSS)
- **Goal**: Clean cards with organic touches.
- **Changes**:
    - **Cards**: White background, soft shadow, large border radius (`--radius-lg`).
    - **Icons/Images**: Ensure they sit comfortably within the organic shapes.
    - **Hover**: Subtle lift or border color change to Secondary (`#b09882`).

### 5. Buttons & UI Elements
- **Style**: Pill-shaped (fully rounded) buttons with a **3D/Tactile effect**.
- **Implementation**:
    - Use `box-shadow` to create a solid depth (e.g., `0 4px 0 #...`).
    - Active state: `transform: translateY(2px)` and reduced shadow to simulate pressing.
- **Colors**:
    - Primary Button: `#665a50` text on `#b09882` background with a darker beige shadow.

### 6. Cards & Borders (Relief Effect)
- **Style**: Cards should have a sense of depth and relief.
- **Implementation**:
    - Use layered shadows or distinct borders to create a "lifted" look.
    - Soft inner borders or highlights to suggest volume.
