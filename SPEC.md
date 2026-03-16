# Calculator Website Specification

## 1. Project Overview

**Project Name:** Nexus Calculator  
**Type:** Single-page web application  
**Core Functionality:** A scientific calculator with standard operations, advanced math functions, history, and memory features  
**Target Users:** Anyone needing a modern, feature-rich calculator

## 2. UI/UX Specification

### Layout Structure

- **Container:** Centered card (max-width: 420px) with generous padding
- **Display Section:** Top portion showing current expression and result
- **Mode Toggle:** Switch between Basic and Scientific modes
- **Button Grid:** 5-column grid for basic, 6-column for scientific
- **History Panel:** Slide-out panel from right side

### Visual Design

**Theme:** Dark glassmorphism with neon accents - inspired by cyberpunk/synthwave

**Color Palette:**
- Background: `#0a0a0f` (deep dark)
- Card Background: `rgba(20, 20, 35, 0.85)` with backdrop blur
- Primary Accent: `#00ffaa` (neon cyan-green)
- Secondary Accent: `#ff3366` (neon pink)
- Tertiary Accent: `#ffaa00` (neon orange)
- Text Primary: `#ffffff`
- Text Secondary: `#8888aa`
- Button Background: `rgba(30, 30, 50, 0.8)`
- Button Hover: `rgba(50, 50, 80, 0.9)`

**Typography:**
- Display Font: 'Orbitron' (Google Fonts) - futuristic
- Button Font: 'Rajdhani' (Google Fonts) - clean tech
- Display Numbers: 48px (result), 20px (expression)
- Button Text: 22px

**Spacing:**
- Card padding: 24px
- Button gap: 10px
- Button padding: 16px

**Visual Effects:**
- Card: 20px border-radius, box-shadow with neon glow
- Buttons: 12px border-radius, subtle gradient
- Display: Glassmorphism with blur
- Glow effects on hover using box-shadow
- Button press animation (scale down)
- Smooth transitions (0.2s ease)

### Components

**Display:**
- Expression line (smaller, secondary color)
- Result line (large, primary color)
- Cursor blink animation

**Buttons:**
- Number buttons (0-9, .)
- Operator buttons (+, -, ×, ÷)
- Clear buttons (C, CE, ⌫)
- Equals button (accent highlight)
- Scientific functions (sin, cos, tan, log, ln, √, ^, π, e, etc.)
- Memory buttons (MC, MR, M+, M-)

**Mode Toggle:**
- Pill-shaped toggle switch
- Basic / Scientific labels
- Smooth sliding animation

**History Panel:**
- Slide-in from right
- List of past calculations
- Click to recall result
- Clear history button

## 3. Functionality Specification

### Core Features

**Basic Operations:**
- Addition, subtraction, multiplication, division
- Percentage calculations
- Decimal support
- Clear (C) - clears all
- Clear Entry (CE) - clears current input
- Backspace - removes last digit
- +/- toggle for negative numbers

**Scientific Functions:**
- Trigonometry: sin, cos, tan (with angle mode toggle: DEG/RAD)
- Inverse trig: asin, acos, atan
- Powers: x², x³, xʸ, √, ∛
- Logarithms: log, ln
- Constants: π, e
- Factorial
- Exponent (EE)

**Memory Functions:**
- MC: Clear memory
- MR: Recall memory
- M+: Add to memory
- M-: Subtract from memory

**History:**
- Auto-save last 50 calculations
- Click to paste result
- Persists in localStorage

**Edge Cases:**
- Division by zero → display "Error"
- Overflow numbers → scientific notation
- Invalid operations → "Error"
- Decimal precision: 10 decimal places display

### User Interactions

- Click buttons to input
- Keyboard support (0-9, +, -, *, /, Enter, Escape, Backspace)
- Touch-friendly for mobile

## 4. Acceptance Criteria

1. Calculator displays and accepts input correctly
2. All basic operations work (add, subtract, multiply, divide)
3. Scientific functions calculate correctly
4. Memory buttons function properly
5. History saves and recalls previous calculations
6. Keyboard input works
7. Error handling displays "Error" appropriately
8. Responsive design works on mobile
9. Animations are smooth
10. No console errors