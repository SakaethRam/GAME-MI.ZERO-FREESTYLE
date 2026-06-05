# Plug-'N'-Play Overlay Modules

## Overview

This document defines two overlay modules used as hard UX gates:

1. Pac-Man Under Construction Overlay (Mobile/Tablet Blocker)
2. Forced Landscape Orientation Prompt

Both are designed to be drop-in but require correct placement and environment control to function reliably.

---

# System Architecture

## Root Layer Composition

```
[ Root Container ]
        |
        |-- ForceLandscapeOverlay   (Highest Priority)
        |
        |-- UnderConstructionOverlay
        |
        |-- AppContent (Main UI)
```

---

## Runtime Decision Flow

```
                +----------------------+
                |   Device Detected    |
                +----------+-----------+
                           |
        +------------------+------------------+
        |                                     |
   Desktop                              Mobile / Tablet
        |                                     |
   Show App                         +----------+----------+
                                   |                     |
                              Portrait              Landscape
                                   |                     |
                    ForceLandscapeOverlay     UnderConstructionOverlay
```

---

# 1. Mobile/Tablet Pac-Man Under Construction Overlay

## Purpose

Blocks access for non-desktop devices and displays a system-level message.

---

## Activation Condition

```tsx
deviceType !== 'desktop' && uiState !== 'cover'
```

---

## Where It Breaks

### 1. Layout Containment Failure

```
[ Parent Container (relative + overflow hidden) ]
                |
         [ Overlay (absolute) ]
```

Problem:
Overlay is bounded by parent instead of viewport.

Cause:

* position: relative on parent
* overflow: hidden

Result:
Overlay does not cover full screen.

---

### 2. Z-Index Collision

```
Layer Stack:

z-100  Modal / Loader
z-90   Overlay
z-0    App
```

Problem:
Overlay rendered behind other UI layers.

---

### 3. Device Detection Failure

Problem:
`deviceType` is undefined or misclassified.

Result:
Overlay fails to trigger or triggers incorrectly.

---

### 4. Viewport Unit Instability

```
min-h-[100dvh]
```

Problem:
Older browsers miscalculate dynamic viewport height.

Result:
Visible gaps or incorrect vertical centering.

---

## Correct Integration

### Placement

```
<AppRoot>
    UnderConstructionOverlay
    AppContent
</AppRoot>
```

---

### Required Fixes

#### Positioning

```tsx
fixed inset-0
```

#### Z-Index

```tsx
z-[9999]
```

#### Device Detection Example

```ts
const deviceType =
  /Mobi|Android/i.test(navigator.userAgent)
    ? 'mobile'
    : window.innerWidth < 1024
    ? 'tablet'
    : 'desktop';
```

---

## Final Behavior

```
Desktop          -> Full application
Mobile Landscape -> Blocked
Mobile Portrait  -> Blocked (unless overridden by landscape layer)
```

---

# 2. Forced Landscape Orientation Prompt

## Purpose

Guides or enforces users to switch to landscape orientation.

---

## Activation Condition

```tsx
hidden max-md:portrait:flex
```

---

## Where It Breaks

### 1. Viewport Coverage Failure

Same issue as overlay:

```
absolute inset-0
```

Result:
Does not cover full screen.

---

### 2. Orientation Lock Limitation

```
screen.orientation.lock('landscape')
```

Support:

* Android Chrome (fullscreen only)
* Not supported on iOS Safari
* Not supported on most mobile browsers

Result:
Cannot rely on programmatic rotation.

---

### 3. Fullscreen Restriction

```
document.documentElement.requestFullscreen()
```

Constraints:

* Must be triggered by user interaction
* May be blocked by browser policies

---

### 4. Tailwind Variant Support

```
max-md:portrait:flex
```

Breaks if:

* Tailwind config does not enable orientation variants

---

## Correct Integration

### Placement

```
<AppRoot>
    ForceLandscapeOverlay
    AppContent
</AppRoot>
```

---

### Required Fixes

#### Positioning

```tsx
fixed inset-0
```

#### Z-Index

```tsx
z-[9999]
```

---

### Enforcement Strategy

Do not depend on orientation APIs.

Use overlay as a visual gate:

```
Portrait  -> Block UI
Landscape -> Allow UI
```

---

## Final Behavior

```
Mobile Portrait  -> Landscape Prompt
Mobile Landscape -> Pass-through
Desktop          -> No effect
```

---

# Integration Strategy

## Layer Priority

```
z-[9999]  ForceLandscapeOverlay
z-[9998]  UnderConstructionOverlay
z-[0]     Application
```

---

## Combined Logic

| Device State     | Active Layer               |
| ---------------- | -------------------------- |
| Desktop          | None                       |
| Mobile Portrait  | Landscape Prompt           |
| Mobile Landscape | Under Construction Overlay |

---

## Rendering Order

```tsx
<Root>
  <ForceLandscapeOverlay />
  <UnderConstructionOverlay />
  <AppContent />
</Root>
```

---

# Plug-and-Play Rules

1. Always use `fixed inset-0`
2. Always use high z-index (`>= 9999`)
3. Mount at root level only
4. Do not nest inside layout containers
5. Do not rely on orientation lock APIs
6. Treat overlays as environment gates, not UI components

---

# Failure Summary Matrix

| Issue Type      | Module Affected    | Root Cause                |
| --------------- | ------------------ | ------------------------- |
| Clipping        | Both               | Parent layout constraints |
| Layering        | Both               | Low z-index               |
| Detection       | Under Construction | deviceType failure        |
| Orientation API | Landscape Prompt   | Browser limitations       |
| Viewport Units  | Both               | dvh inconsistency         |

---

# System Insight

These overlays function as control layers above the application.

They enforce:

* Device eligibility
* Orientation constraints
* Experience readiness

They should be treated as part of the runtime environment, not as reusable UI widgets.

---

# Status

| Module             | Plug-and-Play Status |
| ------------------ | -------------------- |
| Pac-Man Under Construction | Stable with fixes    |
| Landscape Prompt   | Stable with limits   |

---

End of Document
