# Plug-'N'-Play Audio Module

## Overview

This module provides a controlled interface for managing a custom background music track within the application.

It includes:

1. BGM upload trigger panel
2. Playback control system
3. Volume adjustment interface
4. Audio state display and clearing mechanism

This module behaves as a conditional UI segment tied to tab state and audio runtime state.

---

# System Architecture

## Component Placement

```id="arch1"
[ Parent Tab System ]
          |
          |-- Active Tab Check (tab === 'audio')
                      |
                      |-- AudioModule
                              |
                              |-- BGM Trigger Panel
                              |-- Audio Control Panel (conditional)
```

---

## Runtime State Flow

```id="arch2"
          +----------------------+
          |         Tab          |
          +----------+-----------+
                     |
              tab === 'audio'
                     |
          +----------+-----------+
          |                      |
   No Audio Loaded         Audio Loaded
          |                      |
   Show Upload Panel     Show Control Panel
                              |
                +-------------+-------------+
                |                           |
            Play/Pause                 Volume Control
                |
            Audio State
```

---

# Activation Condition

```tsx id="cond1"
tab === 'audio'
```

---

# State Dependencies

Required state bindings:

```ts id="state1"
customAudio
isCustomAudioPlaying
customAudioVolume
setCustomAudio
setIsCustomAudioPlaying
setCustomAudioVolume
setIsBgmPanelOpen
```

---

# Where It Breaks

## 1. Tab State Mismatch

```id="break1"
tab !== 'audio'
```

Problem:
Component never renders.

---

## 2. Missing Audio State

Problem:
`customAudio` is null or undefined when expected.

Result:
Control panel never appears.

---

## 3. Playback Desync

```id="break2"
isCustomAudioPlaying !== actual audio state
```

Problem:
UI shows playing while audio is paused or vice versa.

Cause:
No binding to actual Audio instance.

---

## 4. Volume Control Ineffectiveness

```id="break3"
customAudioVolume changes
```

Problem:
Slider updates state but not actual audio output.

Cause:
Missing linkage to audio element volume property.

---

## 5. Panel Trigger Isolation

```id="break4"
setIsBgmPanelOpen(true)
```

Problem:
No modal or panel connected to this state.

Result:
Button appears non-functional.

---

## 6. Layout Constraint Issues

```id="break5"
max-w-xl
```

Problem:
Improper parent width or flex constraints.

Result:
UI compression or overflow.

---

# Correct Integration

## Placement

```id="place1"
<TabContainer>
    {tab === 'audio' && <AudioModule />}
</TabContainer>
```

---

## Required External Systems

### 1. Audio Engine Binding

```ts id="fix1"
const audioRef = useRef<HTMLAudioElement | null>(null);
```

Bind state to actual audio:

```ts id="fix2"
useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = customAudioVolume;
  }
}, [customAudioVolume]);
```

---

### 2. Playback Sync

```ts id="fix3"
useEffect(() => {
  if (!audioRef.current) return;

  if (isCustomAudioPlaying) {
    audioRef.current.play();
  } else {
    audioRef.current.pause();
  }
}, [isCustomAudioPlaying]);
```

---

### 3. Audio Injection

```tsx id="fix4"
<audio
  ref={audioRef}
  src={customAudio?.url}
  loop
/>
```

---

### 4. BGM Panel Hook

Ensure this exists:

```tsx id="fix5"
{isBgmPanelOpen && <BgmUploadModal />}
```

---

# UI Layer Structure

```id="ui1"
[ AudioModule ]
      |
      |-- Upload Trigger Button
      |
      |-- Conditional:
            |
            |-- Track Info Header
            |-- Play/Pause Button
            |-- Volume Slider
            |-- Clear Button
```

---

# Behavioral Logic

| State        | UI Output         |
| ------------ | ----------------- |
| No Audio     | Upload Panel      |
| Audio Loaded | Control Panel     |
| Playing      | PLAYING indicator |
| Paused       | PAUSED indicator  |

---

# Plug-and-Play Rules

1. Must be inside a tab system
2. Must have audio state management
3. Must bind to real audio element
4. Must include upload panel handler
5. Must not rely on UI state alone for playback

---

# Failure Matrix

| Issue Type       | Cause                 | Fix                       |
| ---------------- | --------------------- | ------------------------- |
| No Render        | Tab mismatch          | Verify tab state          |
| No Audio UI      | Missing customAudio   | Ensure upload flow        |
| Desync           | UI not bound to audio | Add audioRef sync         |
| Volume No Effect | No audio binding      | Connect volume to element |
| Button Dead      | Missing modal         | Implement BGM panel       |

---

# System Insight

This module is not just UI.

It is a state-driven audio controller layer that:

* Bridges UI and media playback
* Maintains playback state consistency
* Controls runtime audio environment

---

# Status

| Module       | Plug-and-Play Status |
| ------------ | -------------------- |
| Audio Module | Stable with binding  |

---

End of Document
