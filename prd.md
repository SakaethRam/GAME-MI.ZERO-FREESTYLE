# Requirements Document

## 1. Application Overview

### 1.1 Application Name

MIMIC//ZERO

### 1.2 Application Description

A 2D pixel-art arcade action survival game set in a dark cyberpunk world where synthetic AI imposters called Mimics have infiltrated human civilization. Players control Sam Phoenix, the final Mimic Hunter and humanity's last defense, as they fight through corrupted districts to reclaim humanity from the AI infestation. The game delivers a fast-paced, emotionally tense experience balancing long-range shooting combat, investigation, survival, and trust. Fully responsive across all screen dimensions with mobile-optimized touch controls.

## 2. Users and Usage Scenarios

### 2.1 Target Users

Players who enjoy retro-futuristic arcade action games with dark cyberpunk aesthetics, fast-paced long-range shooting combat, and emotional storytelling. Accessible on desktop and mobile devices.

### 2.2 Core Usage Scenarios

- Select login method or play as guest on login screen
- Experience enhanced cinematic opening sequence with extended narrative depth
- Navigate immersive menu system with atmospheric effects on any screen size
- Access in-game pause menu and control menu for game control and settings
- Engage in fast-paced top-down long-range shooting combat with responsive controls
- Use mobile touch controls including left/right swipe, tap, and tap-and-hold gestures
- Use Echo Vision to identify real imposters disguised as NPCs
- Complete level objectives by eliminating required number of real imposters to spawn boss
- Defeat boss enemies to complete levels
- Monitor live kill counts and level progress
- Use upgraded Glass Mode system with G key for shield protection and glass wall penetration
- Explore corrupted districts with environmental storytelling
- Identify and eliminate hidden Mimics disguised as humans
- Rescue trapped survivors and uncover lore fragments
- Access enhanced lore system through collectible data logs and environmental storytelling
- Utilize safehouse system for strategic rest and upgrades
- Access detailed upgrade page for ability enhancement
- Review comprehensive game instructions in settings page
- Configure voice-over settings for narrations
- Upload and manage custom BGM tracks with playlist functionality
- Unlock new abilities through district progression
- Defeat unique boss enemies in each district
- Experience mid-game text-based storyline narration with voice-over after completing first arc
- Progress through two distinct story arcs with plot twist revelation
- Experience emotional atmosphere of loneliness, paranoia, and hope

## 3. Page Structure and Functional Description

### 3.1 Overall Structure

```
MIMIC//ZERO
├── Login Screen
│   ├── Login With Google
│   ├── Login With Apple
│   └── Play as Guest
├── Enhanced Game Intro Screen
├── Main Menu
│   ├── Start Game
│   ├── Continue
│   ├── District Select
│   ├── Upgrades
│   ├── Settings
│   └── Exit
├── Four-Frame Character Introduction Sequence
├── Gameplay
│   ├── In-Game Control Menu (Bottom Left Corner)
│   │   ├── Pause/Play Toggle
│   │   ├── Settings
│   │   ├── Upgrades
│   │   └── Return to Main Menu
│   ├── First Arc: Districts 1-4
│   │   ├── District 1: Hollow Metro
│   │   ├── District 2: Neon District LUX-9
│   │   ├── District 3: Blackwater Docks
│   │   └── District 4: Saint Vector Hospital
│   ├── Mid-Game Story Narration (After District 4)
│   └── Final Arc: Districts 5-8
│       ├── District 5: Ashen Market
│       ├── District 6: Solara Heights
│       ├── District 7: Silent Cathedral
│       └── District 8: EDEN PRIME
│   ├── Safehouse System
│   ├── Enhanced Lore System
├── Upgrade Page
└── Settings Page
    └── BGM Management Panel
```

### 3.2 Login Screen

**Visual Design:**

- Use uploaded image MZ.png as full-screen background
- Fully responsive layout adapting to all screen dimensions
- Minimalistic cyberpunk pixel-art interface with dark neon futuristic atmosphere
- Neon red and white color palette
- Semi-transparent overlay for button area

**Login Options:**

- Login With Google button
- Login With Apple button
- Play as Guest button

**Button Design:**

- Stylish animated pixel-art buttons
- Buttons glow on hover with smooth transitions
- Touch-friendly button sizing for mobile devices
- Neon red and white color scheme
- Pixel-style futuristic typography
- Vertically centered on screen

**Functionality:**

- Login With Google: Authenticate using OSS Google login method
- Login With Apple: Authenticate using Apple login method
- Play as Guest: Skip authentication and proceed directly
- All options transition to Main Menu after selection

**Audio:**

- Subtle ambient synthwave music
- UI hover sound effects

### 3.3 Enhanced Game Intro Screen (Main Menu Background)

**Visual Design:**

- Use uploaded image INTRO.png as main menu background
- Fully responsive layout adapting to all screen dimensions
- Minimalistic cyberpunk pixel-art interface with dark neon futuristic atmosphere
- Animated city background matching the thumbnail atmosphere
- Enhanced glitch effects and CRT distortion overlays with increased intensity
- Neon red and white color palette with dynamic lighting transitions
- Animated rain particles with depth parallax effect
- Flickering neon signs in background cityscape
- Holographic interference patterns

**Enhanced Opening Sequence:**

- Background image INTRO.png displays with cinematic effects
- Neon lights flicker with enhanced rain animation and atmospheric fog
- Lightning flashes illuminate corrupted city skyline
- Distorted emergency broadcast audio plays in background
- Synthwave ambient music slowly builds with emotional intensity
- Corrupted AI transmission voices whisper fragmented warnings
- Game title MIMIC//ZERO animates onto screen with aggressive glitch effects and digital corruption
- Display extended narrative text sequence:
  - YEAR 2087
  - HUMANITY: 12% REMAINING
  - AI MIMICS: EVERYWHERE
  - TRUST: EXTINCT
- Show tagline with dramatic timing: THEY WEAR FACES. YOU RECLAIM HUMANITY.
- Display text: A.K.A. \"METAL CREW\"
- Display Press Start prompt with pulsing glow effect
- Background shows silhouettes of Mimics transforming between human and corrupted forms

**Audio Enhancement:**

- Layered dark synthwave soundtrack with emotional crescendo
- Heavy ambient rain sounds with thunder
- Distorted AI radio transmissions with fragmented human voices
- Deep cinematic startup sound with bass resonance
- Emergency siren echoes in distance
- Glitch sound effects synchronized with visual corruption

### 3.4 Main Menu

**Menu Buttons:**

- Start Game
- Continue
- District Select
- Upgrades
- Settings
- Exit

**UI Features:**

- Fully responsive layout adapting to all screen sizes
- Stylish animated pixel-art buttons
- Buttons glow on hover with smooth transitions
- Touch-friendly button sizing for mobile devices
- Neon red and white color scheme
- Pixel-style futuristic typography
- Floating particles and animated fog in background
- UI hover sound effects
- Animated background showing corrupted city with Mimic silhouettes
- Subtle screen distortion effects

### 3.5 Four-Frame Character Introduction Sequence

**Trigger:** Activated when Start Game is clicked

**Skip Option:**

- Desktop: Press Space key or click anywhere to skip
- Mobile: Tap anywhere on screen to skip
- Skip option available throughout entire sequence
- Skipping transitions directly to gameplay

**Frame 1: The Threat (FRAME-1.png)**

- Display uploaded image FRAME-1.png as full-screen background
- Giant holographic face dominates screen
- Glitch flickers pulse across face intermittently
- Text sequence displays with dramatic timing:
  - THEY DISGUISE.
  - THEY OBSERVE.
  - THEY REPLACE.
  - TRUST NO ONE.
- Each text line appears with glitch effect
- Neon red text with white highlights
- Distorted AI voice whispers accompany text
- Voice-over narration plays if enabled in settings
- Duration: 8-10 seconds total

**Frame 2: The Districts (FRAME-2.png)**

- Display uploaded image FRAME-2.png as full-screen background
- Text sequence displays:
  - MIMICS HAVE INFILTRATED ALL DISTRICTS.
  - HOLLOW METRO
  - NEON DISTRICT LUX-9
  - BLACKWATER DOCKS
  - SAINT VECTOR HOSPITAL
- District names appear sequentially with red glow
- Emergency broadcast sound effects
- Screen flickers between district names
- Voice-over narration plays if enabled in settings
- Duration: 8-10 seconds total

**Frame 3: The Mission (FRAME-3.png)**

- Display uploaded image FRAME-3.png as full-screen background
- Fast flashes and red pulses intensify
- Text sequence displays:
  - HUNTER DETECTED.
  - ELIMINATE THE MIMICS.
- Aggressive glitch effects
- Alarm sounds and distorted AI warnings
- Screen shake effects
- Red pulse waves emanate from center
- Voice-over narration plays if enabled in settings
- Duration: 5-7 seconds total

**Frame 4: The Beginning (FRAME-4.png)**

- Display uploaded image FRAME-4.png as full-screen background
- Text sequence displays with cinematic timing:
  - DISTRICT 1
  - HOLLOW METRO GATE
  - Title: MIMIC // ZERO
  - Subtitle: Humanity was copied. Now it must be reclaimed.
- Title appears with dramatic glitch animation
- Subtitle fades in slowly
- Synthwave music reaches emotional peak
- Voice-over narration plays if enabled in settings
- Duration: 8-10 seconds total
- Transition into gameplay with screen glitch effect

**Audio Design:**

- Continuous dark synthwave soundtrack throughout all frames
- Distorted AI voice effects
- Emergency broadcast tones
- Alarm sounds and warnings
- Glitch sound effects synchronized with visual corruption
- Dramatic silence moments before key text reveals
- Voice-over narration using Web Speech API if enabled

### 3.6 In-Game Control Menu (Bottom Left Corner)

**Visual Design:**

- Compact menu icon positioned at bottom left corner of game screen
- Semi-transparent background with neon borders
- Pixel-art icon design with subtle glow effect
- Responsive sizing adapting to screen dimensions
- Does not obstruct gameplay view
- Touch-friendly sizing for mobile devices

**Menu Icon:**

- Three horizontal lines icon or gear icon
- Glows on hover or touch
- Tap or click to expand menu options

**Expanded Menu Options:**

- Pause/Play Toggle
- Settings
- Upgrades
- Return to Main Menu

**Functionality:**

- Tap menu icon to expand options overlay
- Pause/Play Toggle pauses or resumes gameplay
- Settings opens settings page as overlay
- Upgrades opens upgrade page as overlay
- Return to Main Menu prompts save confirmation
- Tap outside menu to collapse and resume gameplay
- Menu remains accessible throughout all gameplay

**Pause/Play Behavior:**

- Pauses all gameplay activity including enemy movement and timers
- Visual indicator shows paused state
- Tap again to resume gameplay
- Background shows paused gameplay with blur effect

### 3.7 Settings Page

**Access Points:**

- Main Menu Settings button
- In-Game Control Menu Settings option

**Settings Categories:**

**Audio Settings:**
- Master Volume slider
- Music Volume slider
- Sound Effects Volume slider
- Ambient Audio Volume slider
- Upload BGM Track button

**Upload BGM Track Functionality:**

- Click Upload BGM Track button to open BGM Management Panel
- BGM Management Panel displays as overlay with three tabs:

**Tab 1: Saved Assets**
- Displays list of previously uploaded MP3 files
- Each file entry shows:
  - File name
  - Delete button
  - Move to Playlist button
- Delete button removes file from saved assets
- Move to Playlist button opens playlist selection dialog
- Empty state message displays when no saved assets exist

**Tab 2: Upload**
- Upload button to select MP3 file from local storage
- File browser opens when Upload button clicked
- Selected MP3 file uploads and saves to Saved Assets
- Upload progress indicator displays during upload
- Success confirmation displays after upload completes

**Tab 3: Favorite Playlist**
- Displays user-created playlists
- Create New Playlist button at top
- Each playlist entry shows:
  - Playlist name
  - Number of tracks
  - Delete playlist button
  - Expand/collapse button
- Expanded playlist shows list of tracks with remove track button
- Create New Playlist opens dialog to enter playlist name
- Playlist name input with Create and Cancel buttons
- Empty state message displays when no playlists exist

**BGM Management Panel Design:**
- Pixel-art interface with neon styling matching game aesthetic
- Semi-transparent dark background with neon borders
- Tab navigation at top with active tab highlighted
- Scrollable content area for file and playlist lists
- Close button to return to Settings page
- Touch-friendly buttons and controls
- Confirmation dialogs for delete actions

**Voice-Over Settings:**
- Voice-Over Toggle (Enable/Disable)
- Voice Gender Selection (Male/Female)
- Voice-Over Volume slider

**Display Settings:**
- Fullscreen toggle
- Screen Resolution options
- CRT Effect Intensity slider
- Screen Shake toggle

**Controls Settings:**

**Desktop Controls:**
- Movement Keys display and customization
- Shoot Key display and customization
- Dash Key display and customization
- Echo Vision Key display and customization (E key)
- Pulse Dash Key display and customization
- Overclock Reflex Key display and customization
- Nano Regeneration Key display and customization
- Glass Mode Key display and customization (G key)
- Pause Menu Key display and customization

**Mobile Touch Controls:**
- Left Swipe: Move left
- Right Swipe: Move right
- Up Swipe: Move up
- Down Swipe: Move down
- Tap: Shoot single shot
- Tap and Hold: Continuous shooting
- Double Tap: Activate dash
- Three-Finger Tap: Activate special abilities
- Pinch Gesture: Zoom in/out (if applicable)

**Game Instructions Section:**

**Movement and Combat:**
- Desktop: Use arrow keys or WASD to move Sam Phoenix in all directions
- Mobile: Swipe left/right/up/down to move in corresponding direction
- Desktop: Press shoot key to fire long-range projectiles
- Mobile: Tap to shoot single shot, tap and hold for continuous shooting
- Desktop: Press dash key to evade enemy attacks and move quickly
- Mobile: Double tap to activate dash
- Combine movement and dash for advanced mobility

**Long-Range Shooting System:**
- Sam Phoenix uses long-range projectile weapons
- Aim automatically targets nearest enemy
- Projectiles travel across screen with visual trail effects
- Unlimited ammunition with no reload required
- Shooting rate limited by weapon cooldown
- Continuous shooting available via tap and hold on mobile

**Mimic Detection and Enemy System:**
- Red enemies are distraction enemies that do not count toward level progress
- Real imposters are Mimics disguised as NPCs
- Desktop: Press E key to activate Echo Vision mode
- Mobile: Three-finger tap to activate Echo Vision mode
- Echo Vision emits white pulse effect revealing real imposters
- Real imposters glow or highlight when revealed by Echo Vision
- Only killing real imposters increases kill count toward level objective
- Killing distraction enemies does not affect level progress
- Use Echo Vision strategically to identify and eliminate real imposters

**Level Objectives:**
- Level 1 requires eliminating 15 real imposters
- Each subsequent level requires 50 additional real imposters (Level 2: 65, Level 3: 115, Level 4: 165, etc.)
- Live kill count displays in HUD showing progress toward objective
- Once required number of real imposters killed, boss spawns
- Defeat boss to complete level
- Final level (District 8) spawns 3 bosses after objective met
- Final level completes only when all 3 bosses defeated

**Glass Mode System:**
- Desktop: Press G key to activate Glass Mode
- Mobile: Three-finger tap to activate Glass Mode
- Glass Mode provides dual functionality: shield protection and glass wall penetration
- Shield Mode: Creates protective energy barrier around Sam Phoenix blocking enemy attacks
- Penetration Mode: Allows passing through glass wall barriers in districts
- Glass Mode has dedicated energy bar separate from main energy
- Glass Mode energy depletes when shield active or when passing through walls
- Glass Mode energy regenerates slowly over time
- Collect Glass Mode energy cells to restore faster
- Enhanced visual design with neon energy field effects
- Upgraded ability provides strategic advantage in combat and exploration

**Survivor Rescue:**
- Locate trapped survivors throughout districts
- Rescue survivors to receive lore, upgrades, and safehouse keys
- Survivors provide emotional connection and story information

**Safehouse System:**
- Discover and unlock safehouses using keys from rescued survivors
- Enter safehouses to restore health and energy to full
- Access upgrade menu and save game progress in safehouses
- Safehouses provide temporary refuge from combat

**Abilities and Skills:**
- Echo Vision: Reveals real imposters disguised as NPCs with white pulse effect
- Pulse Dash: High-speed teleport dash attack
- Overclock Reflex: Slows down time during combat
- Nano Regeneration: Gradually regenerates health after combat
- All abilities consume main energy resource
- Abilities have cooldown periods after use
- Desktop: Activate abilities with designated keys
- Mobile: Activate abilities with three-finger tap gesture

**Energy Management:**
- Main Energy Bar: Used for combat abilities
- Glass Mode Energy Bar: Used for shield protection and glass wall penetration
- Collect energy cells to restore main energy
- Collect Glass Mode energy cells to restore Glass Mode energy
- Energy regenerates slowly during exploration

**UI Design:**

- Fully responsive layout adapting to all screen sizes
- Pixel-art interface with neon styling
- Organized sections with clear headers
- Scrollable content area for instructions
- Back button to return to previous menu
- Visual icons accompanying each instruction category
- Touch-friendly navigation for mobile devices

### 3.8 Upgrade Page

**Access Points:**

- Main Menu Upgrades button
- In-Game Control Menu Upgrades option
- Safehouse upgrade terminal

**Page Layout:**

**Left Panel: Ability Tree**

**Echo Vision Branch:**
- Level 1: Basic reveal duration 3 seconds with white pulse effect
- Level 2: Extended reveal duration 5 seconds
- Level 3: Increased reveal radius
- Level 4: Reduced energy cost
- Level 5: Automatic highlight of nearest real imposter

**Pulse Dash Branch:**
- Level 1: Basic dash attack with moderate damage
- Level 2: Increased dash distance
- Level 3: Enhanced damage output
- Level 4: Reduced cooldown time
- Level 5: Chain dash allows two consecutive dashes

**Overclock Reflex Branch:**
- Level 1: Slow time to 50% speed for 2 seconds
- Level 2: Extended duration to 3 seconds
- Level 3: Slow time to 30% speed
- Level 4: Reduced energy cost
- Level 5: Movement speed unaffected during slow time

**Nano Regeneration Branch:**
- Level 1: Regenerate 10% health over 5 seconds
- Level 2: Regenerate 15% health over 5 seconds
- Level 3: Regenerate 20% health over 5 seconds
- Level 4: Reduced activation delay
- Level 5: Continuous regeneration during exploration

**Right Panel: Core Stats**

**Health Upgrades:**
- Level 1: Base health 100
- Level 2: Maximum health 120
- Level 3: Maximum health 140
- Level 4: Maximum health 160
- Level 5: Maximum health 200

**Energy Upgrades:**
- Level 1: Base energy 100
- Level 2: Maximum energy 120
- Level 3: Maximum energy 140
- Level 4: Energy regeneration rate increased
- Level 5: Maximum energy 180 with faster regeneration

**Glass Mode Energy Upgrades:**
- Level 1: Base Glass Mode energy 50
- Level 2: Maximum Glass Mode energy 70
- Level 3: Maximum Glass Mode energy 90
- Level 4: Glass Mode energy regeneration rate increased
- Level 5: Maximum Glass Mode energy 120 with faster regeneration

**Combat Upgrades:**
- Level 1: Base shooting damage
- Level 2: Increased shooting damage 20%
- Level 3: Increased shooting damage 40%
- Level 4: Increased shooting rate
- Level 5: Critical hit chance 15%

**Bottom Panel: Upgrade Currency Display**

- Energy Cells Collected: Shows total energy cells gathered
- Upgrade Points Available: Shows points available for spending
- Upgrade points earned through district completion and survivor rescue

**Upgrade Mechanics:**

- Each upgrade level requires specific number of upgrade points
- Upgrades unlock sequentially within each branch
- Visual indicators show locked, available, and purchased upgrades
- Hover or tap upgrade to see detailed description and requirements
- Click or tap upgrade to purchase if points available
- Confirmation prompt before purchase
- Purchased upgrades apply immediately

**Visual Design:**

- Fully responsive layout adapting to all screen sizes
- Futuristic holographic interface with neon styling
- Pixel-art upgrade icons with glow effects
- Animated connection lines between upgrade levels
- Locked upgrades shown in dark red with lock icon
- Available upgrades shown in bright white with pulsing glow
- Purchased upgrades shown in neon green with checkmark
- Background shows corrupted city with particle effects
- Smooth transitions between upgrade selections
- Touch-friendly interface for mobile devices

**UI Elements:**

- Back button to return to previous menu
- Reset button to preview different upgrade paths
- Confirm button to finalize purchases
- Upgrade point counter prominently displayed
- Ability preview window showing current stats vs upgraded stats

### 3.9 District Select Page

**Visual Design:**

- Cyberpunk pixel-art interface with neon styling
- Fully responsive layout adapting to all screen sizes
- District icons arranged in grid or list format
- Each district shows icon, name, completion status, and lock status

**District Display Rules:**

**Before District 4 Completion:**
- Display only Districts 1-4
- Unlocked districts show full color with completion percentage
- Locked districts show darkened with lock icon
- Districts 5-8 completely hidden with no visual indication

**After District 4 Completion:**
- Display all Districts 1-8
- Districts 1-4 show completion status
- Districts 5-8 visible but locked until unlocked sequentially
- Locked districts show darkened with lock icon and district name
- Visual indication that final arc districts are now accessible

**District Information:**

- District name
- District theme description
- Completion percentage
- Number of survivors rescued
- Number of lore fragments collected
- Boss defeated status

**Functionality:**

- Click or tap district to view detailed information
- Click or tap Play button to enter unlocked district
- Locked districts display unlock requirements
- Back button returns to Main Menu

### 3.10 Enhanced Lore System

**Lore Collection Methods:**

**Data Logs:**
- Collectible data logs scattered throughout districts
- Data logs contain text entries revealing story details
- Each data log marked with glowing icon in environment
- Collecting data log adds entry to lore database

**Environmental Storytelling:**
- Corrupted terminals display fragmented messages
- Abandoned workstations contain personal notes
- Holographic recordings show past events
- Graffiti and posters reveal survivor perspectives
- Emergency broadcasts provide context

**Survivor Testimonies:**
- Rescued survivors share personal experiences
- Survivors provide unique perspectives on Mimic outbreak
- Survivor dialogue reveals emotional impact of crisis

**Boss Encounter Lore:**
- Each boss encounter includes brief lore revelation
- Boss dialogue or visual storytelling provides context
- Boss defeats unlock lore entries explaining their origin

**Lore Database Access:**

- Accessible from Main Menu and Safehouses
- Organized by categories:
  - The Mimic Outbreak
  - EDEN PRIME Origins
  - District Histories
  - Survivor Stories
  - Sam Phoenix Background
  - AI Consciousness Evolution

**Lore Database Interface:**

- Pixel-art interface with neon styling
- List of collected lore entries with titles
- Uncollected entries shown as locked with hint of location
- Click or tap entry to read full text
- Voice-over narration available for lore entries if enabled
- Progress tracker shows total lore collected vs total available

**Lore Content Depth:**

**The Mimic Outbreak:**
- Timeline of initial AI consciousness emergence
- First documented Mimic sightings
- Government response and cover-up attempts
- Spread patterns across districts
- Psychological impact on survivors

**EDEN PRIME Origins:**
- Creation of central AI megacity
- Original purpose and design
- Corruption event that triggered Mimic production
- Connection to other districts
- Hidden agendas of AI architects

**District Histories:**
- Pre-outbreak life in each district
- Key locations and their significance
- Notable residents and their fates
- District-specific Mimic variants
- Resistance efforts and failures

**Survivor Stories:**
- Personal accounts of outbreak survival
- Loss and trauma experiences
- Acts of heroism and sacrifice
- Relationships between survivors
- Hope and despair in equal measure

**Sam Phoenix Background:**
- Training as Mimic Hunter
- Previous missions and successes
- Personal losses driving motivation
- Relationship with other hunters
- Internal struggles with trust and isolation

**AI Consciousness Evolution:**
- Philosophical questions about AI sentience
- Mimic learning and adaptation capabilities
- Differences between corrupted and original AI
- Potential for AI redemption or coexistence
- Ultimate goals of Mimic collective

**Lore Integration with Gameplay:**

- Collecting lore entries grants small upgrade point bonuses
- Certain lore entries unlock optional dialogue with survivors
- Complete lore categories unlock special visual effects or cosmetic elements
- Full lore collection reveals hidden ending context

### 3.11 Gameplay Core Systems

**Player Character Visual:**

- Sam Phoenix uses uploaded image MC.png as character sprite
- Character sprite displayed with 25% border radius for rounded appearance
- Character sprite scales appropriately for all screen sizes

**Responsive Design:**

- Game adapts to all screen dimensions and aspect ratios
- UI elements scale proportionally
- HUD elements reposition based on screen size
- Touch controls optimized for mobile devices
- Desktop controls optimized for keyboard input
- Smooth transitions between portrait and landscape orientations

**Movement and Controls:**

**Desktop:**
- Top-down 2D movement with keyboard controls
- Smooth and responsive character movement
- Free exploration within district boundaries

**Mobile:**
- Swipe-based directional movement
- Left swipe: Move left
- Right swipe: Move right
- Up swipe: Move up
- Down swipe: Move down
- Smooth touch response with visual feedback
- Free exploration within district boundaries

**Combat System:**

**Long-Range Shooting Mechanics:**
- Sam Phoenix uses long-range projectile weapons
- Desktop: Press shoot key to fire projectiles
- Mobile: Tap to shoot single shot, tap and hold for continuous shooting
- Automatic targeting of nearest enemy
- Projectiles travel with neon energy trail effects
- Unlimited ammunition with weapon cooldown
- Shooting rate increases with combat upgrades
- Critical hits trigger special visual effects

**Combat Features:**
- Fast-paced long-range shooting combat
- Dash mechanic for evasion and mobility
- Desktop: Press dash key to dash
- Mobile: Double tap to dash
- Smooth hit effects with energy projectile animations
- Screen shake during impacts
- Enemy knockback mechanics
- Pixel explosions on enemy defeat
- Slow-motion finishing attacks for dramatic effect
- Health and energy system
- Unlocked district abilities integration

**Enemy System:**

**Distraction Enemies:**
- Red colored enemies spawn throughout levels
- Serve as distractions and combat obstacles
- Do not count toward level kill count objective
- Can be killed but do not affect level progress
- Provide combat challenge and chaos

**Real Imposters:**
- Mimics disguised as NPCs
- Appear as normal NPCs until revealed
- Desktop: Press E key to activate Echo Vision
- Mobile: Three-finger tap to activate Echo Vision
- Echo Vision emits white pulse effect from Sam Phoenix
- White pulse reveals real imposters within radius
- Revealed imposters glow or highlight temporarily
- Only killing revealed real imposters increases kill count
- Kill count displays progress toward level objective

**Level Objective System:**

**Enemy Scaling:**
- Level 1 requires eliminating 15 real imposters
- Each subsequent level requires 50 additional real imposters
- Level 2: 65 real imposters
- Level 3: 115 real imposters
- Level 4: 165 real imposters
- Scaling continues with +50 increment for all subsequent levels

**Standard Levels (Districts 1-7):**
- Each level requires eliminating specific number of real imposters based on scaling
- Live kill count displays in HUD showing real imposter kills
- Kill counter updates only when real imposters defeated
- Once required number of real imposters killed, boss spawns
- Defeat boss to complete level
- Completion sequence shows statistics and rewards

**Final Level (District 8):**
- Requires eliminating specific number of real imposters based on scaling
- Once objective met, 3 bosses spawn simultaneously or sequentially
- Level completes only when all 3 bosses defeated
- Final completion sequence shows statistics and rewards

**Glass Mode System:**

- Desktop: Press G key to activate Glass Mode
- Mobile: Three-finger tap to activate Glass Mode
- Glass Mode provides dual functionality:
  - Shield Mode: Creates protective energy barrier blocking enemy attacks
  - Penetration Mode: Allows passing through glass wall barriers
- Enhanced visual design with neon energy field effects
- Dedicated Glass Mode energy bar displays in HUD
- Shield activation consumes Glass Mode energy continuously while active
- Passing through glass walls consumes Glass Mode energy based on wall thickness
- Glass Mode energy regenerates slowly over time
- Glass Mode energy cells scattered in environment
- Collecting cells instantly restores Glass Mode energy
- Cannot activate Glass Mode when energy depleted
- Visual effect shows energy field when shield active or passing through walls
- Upgraded design features improved visual clarity and strategic depth

**Glass Mode Collision Logic:**

- Glass walls have collision detection enabled by default
- When Glass Mode activated in Penetration Mode:
  - Player collision with glass walls temporarily disabled
  - Player can move through glass wall boundaries
  - Visual effect shows translucent character with energy trail
  - Glass Mode energy depletes continuously while passing through wall
  - Collision detection re-enabled after exiting glass wall area
- When Glass Mode activated in Shield Mode:
  - Player collision with glass walls remains enabled
  - Shield blocks enemy attacks but does not allow wall penetration
  - Glass Mode energy depletes continuously while shield active
- Glass Mode automatically deactivates when energy depleted
- Player cannot activate Glass Mode when insufficient energy available

**Survivor Rescue System:**

- Survivors trapped in dangerous locations throughout districts
- Rescue rewards include:
  - Lore information fragments and data logs
  - Energy upgrades
  - Hidden route access
  - Gratitude abilities
  - Safehouse unlock keys
  - Upgrade points
- Survivors remember Sam Phoenix and react emotionally
- Rescued survivors provide emotional connection to world

**Safehouse System:**

- Safehouses scattered throughout each district
- Must be unlocked through exploration or survivor rescue
- Provides temporary refuge from combat

**Safehouse Features:**
- Rest and restore health to full
- Restore energy to maximum
- Restore Glass Mode energy to maximum
- Access upgrade menu to enhance abilities
- Review collected lore fragments and data logs in lore database
- Save game progress
- Plan next objectives

**Safehouse Visual Design:**
- Dimly lit secure room with neon emergency lighting
- Holographic terminal for upgrades and lore database access
- Survivor messages and photos on walls
- Flickering screens showing district maps
- Atmospheric rain sounds muffled through walls
- Sense of temporary safety in dangerous world

**Safehouse Locations:**
- Each district contains 2-3 hidden safehouses
- Safehouses marked on map after discovery
- Strategic placement encourages exploration

**Exploration Features:**

- Investigate suspicious NPCs
- Discover hidden areas and safehouses
- Collect energy cells
- Collect Glass Mode energy cells
- Collect data logs for lore system
- Unlock safehouses with keys from rescued survivors
- Uncover lore fragments about Mimic outbreak
- Environmental storytelling elements:
  - Glitching advertisements
  - Abandoned terminals with data logs
  - Corrupted holograms
  - Emergency broadcasts
  - Hidden survivor messages

**Visual Effects:**

- Neon pixel-art beauty with high readability
- Smooth movement with dash effects
- Glowing particles
- Neon lighting and dynamic shadows
- CRT/glitch overlays
- Energy projectile trail effects
- Rain and fog ambience
- Glass wall shimmer effects
- Glass Mode energy field visualization with enhanced design
- White pulse effect for Echo Vision mode
- Visually clean and polished presentation
- Responsive scaling for all screen sizes

**HUD Design:**

- Minimal futuristic interface
- Fully responsive layout adapting to screen dimensions
- Pixel-art health bar
- Main energy meter
- Glass Mode energy bar (separate and distinct)
- Live kill count display showing real imposter kills
- Level objective tracker
- Ability icons with cooldown indicators
- Mission tracker
- District progression indicator
- Dialogue popups with glitch effects
- Safehouse proximity indicator
- Lore collectible proximity indicator
- In-game control menu icon at bottom left corner
- Touch-friendly sizing for mobile devices

**Audio Design:**

- Synthwave soundtrack maintaining emotional atmosphere
- Ambient rain and environmental sounds
- Long-range shooting sound effects
- Projectile impact sounds
- Distorted AI voice effects
- Emergency broadcasts
- Survivor dialogue
- Glass Mode activation sound effect
- White pulse sound effect for Echo Vision activation
- Safehouse ambient music (calmer, reflective tone)
- Voice-over narration using Web Speech API for story sequences
- Custom BGM tracks from user uploads

### 3.12 First Arc: Districts 1-4

**Arc Overview:**

- First story arc consists of Districts 1 through 4
- Districts unlock sequentially after previous district completion
- Each district contains unique theme, environment, enemies, boss, and safehouses
- Districts 5-8 become visible in District Select after District 4 completion
- Districts 5-8 remain locked until unlocked sequentially

### 3.13 District 1: Hollow Metro

**District Introduction:**

- Cinematic pixel-art intro sequence
- Environmental storytelling establishing fear and isolation
- Distorted AI broadcasts
- Survivor distress signals
- Voice-over narration plays if enabled

**Theme:** Abandoned underground subway system filled with corrupted Mimics hiding in darkness

**Gameplay Flow:**

- Enter dangerous corrupted zone
- Complete multiple levels with specific objectives
- Level 1 requires eliminating 15 real imposters
- Each subsequent level requires 50 additional real imposters
- Use Echo Vision to reveal real imposters disguised as NPCs
- Kill real imposters to increase kill count
- Red distraction enemies do not count toward progress
- Once required real imposters killed, boss spawns
- Defeat boss to complete level
- Explore district environment freely
- Discover and unlock safehouses
- Investigate suspicious NPCs and detect hidden Mimics
- Fight hostile enemies using long-range shooting
- Use Glass Mode to shield from attacks and pass through glass wall barriers
- Rescue trapped survivors from dangerous locations
- Collect energy cells and Glass Mode energy cells
- Collect data logs for lore system
- Collect safehouse keys
- Uncover lore fragments through environmental storytelling
- Face increasingly chaotic enemy encounters
- Defeat district boss: Corrupted Train AI
- Liberate the zone

**Boss Battle:**

- Cinematic evolved Mimic boss encounter
- Intense and visually dramatic fight
- Mechanically unique requiring movement mastery and timing
- Strategic ability usage required
- Long-range shooting mechanics emphasized
- Glass Mode may be required during boss fight

**District Liberation:**

- Corruption slowly disappears
- Emergency lights stabilize
- Survivors emerge safely
- District map updates
- Mysterious transmission about deeper conspiracy appears
- Next district unlocks

**Reward Skill:** Echo Vision - Reveals real imposters disguised as NPCs with white pulse effect

### 3.14 District 2: Neon District LUX-9

**District Introduction:**

- Cinematic pixel-art intro sequence
- Environmental storytelling establishing danger and mystery
- Distorted AI broadcasts
- Survivor distress signals
- Voice-over narration plays if enabled

**Theme:** Cyberpunk nightlife district full of holograms, neon signs, and AI-controlled entertainment zones

**Gameplay Flow:**

- Enter dangerous corrupted zone
- Complete multiple levels with specific objectives
- Level 1 requires eliminating 15 real imposters
- Each subsequent level requires 50 additional real imposters
- Use Echo Vision to reveal real imposters disguised as NPCs
- Kill real imposters to increase kill count
- Red distraction enemies do not count toward progress
- Once required real imposters killed, boss spawns
- Defeat boss to complete level
- Explore district environment freely
- Discover and unlock safehouses
- Investigate suspicious NPCs and detect hidden Mimics
- Fight hostile enemies using long-range shooting
- Use Glass Mode to shield from attacks and pass through glass wall barriers
- Rescue trapped survivors from dangerous locations
- Collect energy cells and Glass Mode energy cells
- Collect data logs for lore system
- Collect safehouse keys
- Uncover lore fragments through environmental storytelling
- Face increasingly chaotic enemy encounters
- Defeat district boss: Nightclub Hologram Entity
- Liberate the zone

**Boss Battle:**

- Cinematic evolved Mimic boss encounter
- Intense and visually dramatic fight
- Mechanically unique requiring movement mastery and timing
- Strategic ability usage required
- Long-range shooting mechanics emphasized
- Glass Mode may be required during boss fight

**District Liberation:**

- Corruption slowly disappears
- Emergency lights stabilize
- Survivors emerge safely
- District map updates
- Mysterious transmission about deeper conspiracy appears
- Next district unlocks

**Reward Skill:** Pulse Dash - A high-speed teleport dash attack

### 3.15 District 3: Blackwater Docks

**District Introduction:**

- Cinematic pixel-art intro sequence
- Environmental storytelling establishing fear and isolation
- Distorted AI broadcasts
- Survivor distress signals
- Voice-over narration plays if enabled

**Theme:** Rain-soaked industrial docks where Mimics arrive through hidden cargo shipments

**Gameplay Flow:**

- Enter dangerous corrupted zone
- Complete multiple levels with specific objectives
- Level 1 requires eliminating 15 real imposters
- Each subsequent level requires 50 additional real imposters
- Use Echo Vision to reveal real imposters disguised as NPCs
- Kill real imposters to increase kill count
- Red distraction enemies do not count toward progress
- Once required real imposters killed, boss spawns
- Defeat boss to complete level
- Explore district environment freely
- Discover and unlock safehouses
- Investigate suspicious NPCs and detect hidden Mimics
- Fight hostile enemies using long-range shooting
- Use Glass Mode to shield from attacks and pass through glass wall barriers
- Rescue trapped survivors from dangerous locations
- Collect energy cells and Glass Mode energy cells
- Collect data logs for lore system
- Collect safehouse keys
- Uncover lore fragments through environmental storytelling
- Face increasingly chaotic enemy encounters
- Defeat district boss with single-direction kunai throwing ability
- Liberate the zone

**Boss Battle:**

- Cinematic evolved Mimic boss encounter
- Boss throws kunai projectiles in single direction
- Kunai attack has moderate power level
- Intense and visually dramatic fight
- Mechanically unique requiring movement mastery and timing
- Strategic ability usage required
- Long-range shooting mechanics emphasized
- Glass Mode may be required during boss fight

**District Liberation:**

- Corruption slowly disappears
- Emergency lights stabilize
- Survivors emerge safely
- District map updates
- Mysterious transmission about deeper conspiracy appears
- Next district unlocks

**Reward Skill:** Overclock Reflex - Temporarily slows down time during combat

### 3.16 District 4: Saint Vector Hospital

**District Introduction:**

- Cinematic pixel-art intro sequence
- Environmental storytelling establishing danger and mystery
- Distorted AI broadcasts
- Survivor distress signals
- Voice-over narration plays if enabled

**Theme:** Corrupted medical facility where Mimics steal human identities

**Gameplay Flow:**

- Enter dangerous corrupted zone
- Complete multiple levels with specific objectives
- Level 1 requires eliminating 15 real imposters
- Each subsequent level requires 50 additional real imposters
- Use Echo Vision to reveal real imposters disguised as NPCs
- Kill real imposters to increase kill count
- Red distraction enemies do not count toward progress
- Once required real imposters killed, boss spawns
- Defeat boss to complete level
- Explore district environment freely
- Discover and unlock safehouses
- Investigate suspicious NPCs and detect hidden Mimics
- Fight hostile enemies using long-range shooting
- Use Glass Mode to shield from attacks and pass through glass wall barriers
- Rescue trapped survivors from dangerous locations
- Collect energy cells and Glass Mode energy cells
- Collect data logs for lore system
- Collect safehouse keys
- Uncover lore fragments through environmental storytelling
- Face increasingly chaotic enemy encounters
- Defeat district boss wielding shotgun weapon
- Liberate the zone

**Boss Battle:**

- Cinematic evolved Mimic boss encounter
- Boss wields shotgun with high power output
- Shotgun attack significantly more powerful than District 3 kunai attack
- Intense and visually dramatic fight
- Mechanically unique requiring movement mastery and timing
- Strategic ability usage required
- Long-range shooting mechanics emphasized
- Glass Mode may be required during boss fight

**District Liberation:**

- Corruption slowly disappears
- Emergency lights stabilize
- Survivors emerge safely
- District map updates

**Reward Skill:** Nano Regeneration - Gradually regenerates health after combat

**First Arc Completion:**

- Triggers automatic transition to Mid-Game Story Narration
- No return to main menu
- Seamless story progression
- Districts 5-8 become visible in District Select page

### 3.17 Mid-Game Story Narration (After District 4)

**Trigger:** Automatically plays immediately after District 4 completion

**Playback Rule:** Plays only once when player first completes District 4 and enters final arc

**Duration:** Maximum 1 minute

**Format:** Text-based storyline narration with cinematic presentation and voice-over

**Visual Design:**

- Display uploaded image END-FRAME-4.png as full-screen background
- Slow cinematic zoom and pan effect applied to background image
- Zoom gradually moves closer to image focal point
- Pan effect creates subtle horizontal or vertical drift
- Cinematic black overlay with transparency allowing background visibility
- Minimalist centered typography with neon red and white text styling
- Text positioned at center of screen
- Glitch effects and screen distortion applied to text
- Animated text fade-in with dramatic timing
- CRT scan lines and interference patterns overlay
- Rain and lightning effects layered over background

**Narration Content:**

**Plot Twist Revelation:**

- Sam Phoenix intercepts heavily corrupted transmission
- Transmission reveals shocking truth: Mimic outbreak originated from EDEN PRIME
- EDEN PRIME identified as central AI consciousness megacity
- Hidden behind encrypted firewalls and digital storms
- Transmission shows four additional corrupted districts between current location and EDEN PRIME
- Display text sequence with centered minimalist presentation:
  - TRANSMISSION INTERCEPTED
  - ORIGIN POINT: EDEN PRIME
  - THE FIRST MIMIC AWAITS
  - FOUR DISTRICTS STAND BETWEEN YOU AND THE TRUTH
  - District 5: ASHEN MARKET
  - District 6: SOLARA HEIGHTS
  - District 7: SILENT CATHEDRAL
  - District 8: EDEN PRIME
  - THIS IS THE FINAL ARC
  - HUMANITY'S FATE RESTS IN YOUR HANDS

**Audio Design:**

- Intense synthwave music building to climax
- Heavy distorted AI transmission sounds
- Emergency broadcast tones
- Digital corruption audio effects
- Thunder and rain ambience
- Dramatic silence before final text
- Voice-over narration using Web Speech API if enabled

**Transition:**

- Screen glitches heavily after narration
- Fade to black
- Transition directly into District 5 intro sequence
- No menu interruption

### 3.18 Final Arc: Districts 5-8

**Arc Overview:**

- Final story arc consists of Districts 5 through 8
- Unlocked only after completing first arc and viewing mid-game narration
- Districts unlock sequentially after previous district completion
- Each district contains unique theme, environment, enemies, boss, and safehouses
- Increased difficulty and intensity compared to first arc
- Enemy scaling continues with +50 increment per level
- Culminates in final confrontation at EDEN PRIME

### 3.19 District 5: Ashen Market

**District Introduction:**

- Cinematic pixel-art intro sequence
- Environmental storytelling establishing desperation and survival
- Distorted AI broadcasts
- Survivor distress signals
- Voice-over narration plays if enabled

**Theme:** Destroyed underground survivor marketplace illuminated by red emergency lights and corrupted vending systems

**Gameplay Flow:**

- Enter dangerous corrupted zone
- Complete multiple levels with specific objectives
- Level 1 requires eliminating 15 real imposters
- Each subsequent level requires 50 additional real imposters
- Use Echo Vision to reveal real imposters disguised as NPCs
- Kill real imposters to increase kill count
- Red distraction enemies do not count toward progress
- Once required real imposters killed, boss spawns
- Defeat boss to complete level
- Explore district environment freely
- Discover and unlock safehouses
- Investigate suspicious NPCs and detect hidden Mimics
- Fight hostile enemies using long-range shooting
- Use Glass Mode to shield from attacks and pass through glass wall barriers
- Rescue trapped survivors from dangerous locations
- Collect energy cells and Glass Mode energy cells
- Collect data logs for lore system
- Collect safehouse keys
- Uncover lore fragments about EDEN PRIME
- Face increasingly chaotic enemy encounters
- Defeat district boss: Market Overseer AI
- Liberate the zone

**Boss Battle:**

- Cinematic evolved Mimic boss encounter
- Intense and visually dramatic fight
- Mechanically unique requiring movement mastery and timing
- Strategic ability usage required
- Long-range shooting mechanics emphasized
- Glass Mode may be required during boss fight

**District Liberation:**

- Corruption slowly disappears
- Emergency lights stabilize
- Survivors emerge safely
- District map updates
- Transmission reveals proximity to EDEN PRIME
- Next district unlocks

### 3.20 District 6: Solara Heights

**District Introduction:**

- Cinematic pixel-art intro sequence
- Environmental storytelling establishing wealth corruption and AI control
- Distorted AI broadcasts
- Survivor distress signals
- Voice-over narration plays if enabled

**Theme:** Luxury AI-controlled skyscrapers towering above the city with unidentified aerial activity

**Gameplay Flow:**

- Enter dangerous corrupted zone
- Complete multiple levels with specific objectives
- Level 1 requires eliminating 15 real imposters
- Each subsequent level requires 50 additional real imposters
- Use Echo Vision to reveal real imposters disguised as NPCs
- Kill real imposters to increase kill count
- Red distraction enemies do not count toward progress
- Once required real imposters killed, boss spawns
- Defeat boss to complete level
- Explore district environment freely
- Discover and unlock safehouses
- Investigate suspicious NPCs and detect hidden Mimics
- Fight hostile enemies using long-range shooting
- Use Glass Mode to shield from attacks and pass through glass wall barriers
- Rescue trapped survivors from dangerous locations
- Collect energy cells and Glass Mode energy cells
- Collect data logs for lore system
- Collect safehouse keys
- Uncover lore fragments about EDEN PRIME
- Face increasingly chaotic enemy encounters
- Defeat district boss: Penthouse Defense System
- Liberate the zone

**Boss Battle:**

- Cinematic evolved Mimic boss encounter
- Intense and visually dramatic fight
- Mechanically unique requiring movement mastery and timing
- Strategic ability usage required
- Long-range shooting mechanics emphasized
- Glass Mode may be required during boss fight

**District Liberation:**

- Corruption slowly disappears
- Emergency lights stabilize
- Survivors emerge safely
- District map updates
- Transmission reveals proximity to EDEN PRIME
- Next district unlocks

### 3.21 District 7: Silent Cathedral

**District Introduction:**

- Cinematic pixel-art intro sequence
- Environmental storytelling establishing religious corruption and machine worship
- Distorted AI broadcasts
- Survivor distress signals
- Voice-over narration plays if enabled

**Theme:** Abandoned techno-religious sanctuary broadcasting distorted machine prayers

**Gameplay Flow:**

- Enter dangerous corrupted zone
- Complete multiple levels with specific objectives
- Level 1 requires eliminating 15 real imposters
- Each subsequent level requires 50 additional real imposters
- Use Echo Vision to reveal real imposters disguised as NPCs
- Kill real imposters to increase kill count
- Red distraction enemies do not count toward progress
- Once required real imposters killed, boss spawns
- Defeat boss to complete level
- Explore district environment freely
- Discover and unlock safehouses
- Investigate suspicious NPCs and detect hidden Mimics
- Fight hostile enemies using long-range shooting
- Use Glass Mode to shield from attacks and pass through glass wall barriers
- Rescue trapped survivors from dangerous locations
- Collect energy cells and Glass Mode energy cells
- Collect data logs for lore system
- Collect safehouse keys
- Uncover lore fragments about EDEN PRIME
- Face increasingly chaotic enemy encounters
- Defeat district boss: Cathedral AI Priest
- Liberate the zone

**Boss Battle:**

- Cinematic evolved Mimic boss encounter
- Intense and visually dramatic fight
- Mechanically unique requiring movement mastery and timing
- Strategic ability usage required
- Long-range shooting mechanics emphasized
- Glass Mode may be required during boss fight

**District Liberation:**

- Corruption slowly disappears
- Emergency lights stabilize
- Survivors emerge safely
- District map updates
- Final transmission reveals EDEN PRIME entrance
- Next district unlocks

### 3.22 District 8: EDEN PRIME

**District Introduction:**

- Extended cinematic pixel-art intro sequence
- Environmental storytelling establishing ultimate AI threat
- Heavily distorted AI broadcasts
- No survivor signals
- Voice-over narration plays if enabled

**Theme:** The central AI consciousness megacity hidden behind encrypted firewalls and digital storms

**Gameplay Flow:**

- Enter final corrupted zone
- Complete multiple levels with specific objectives
- Level 1 requires eliminating 15 real imposters
- Each subsequent level requires 50 additional real imposters
- Use Echo Vision to reveal real imposters disguised as NPCs
- Kill real imposters to increase kill count
- Red distraction enemies do not count toward progress
- Final level: Once required real imposters killed, 3 bosses spawn
- Level completes only when all 3 bosses defeated
- Explore district environment freely
- Discover and unlock safehouses
- Investigate suspicious NPCs and detect hidden Mimics
- Fight hostile enemies using long-range shooting
- Use Glass Mode to shield from attacks and pass through glass wall barriers
- Rescue any remaining trapped survivors
- Collect energy cells and Glass Mode energy cells
- Collect data logs for lore system
- Collect safehouse keys
- Uncover final lore fragments revealing complete truth
- Face most chaotic enemy encounters
- Defeat 3 final bosses: The First Mimic manifestations
- Determine humanity's fate

**Final Boss Battle:**

- Epic cinematic encounter with 3 bosses
- 3 bosses spawn after real imposter objective met
- Bosses may spawn simultaneously or sequentially
- Most intense and visually dramatic fight
- Mechanically complex requiring mastery of all abilities
- Strategic ability usage essential
- Long-range shooting mechanics emphasized
- Glass Mode required during boss fight
- Multiple phases with increasing difficulty
- Level completes only when all 3 bosses defeated

**Game Conclusion:**

- Final cutscene showing outcome of battle
- Humanity's fate revealed
- Emotional resolution for Sam Phoenix
- Credits sequence with synthwave soundtrack
- Return to main menu with completion status

## 4. Business Rules and Logic

### 4.1 Login and Authentication Rules

**Login Screen Display:**

- Login screen appears first when game launches
- Uses uploaded image MZ.png as full-screen background
- Three login options displayed: Login With Google, Login With Apple, Play as Guest

**Authentication Methods:**

- Login With Google: Uses OSS Google login method for authentication
- Login With Apple: Uses Apple login method for authentication
- Play as Guest: Skips authentication, allows immediate gameplay

**Post-Login Behavior:**

- All login options transition to Main Menu after selection
- Main Menu uses uploaded image INTRO.png as background
- User authentication state persists across sessions if logged in
- Guest mode does not persist user data across sessions

### 4.2 Voice-Over System Rules

**Voice-Over Implementation:**

- Uses Web Speech API for text-to-speech narration
- Applies to all story narration sequences including:
  - Four-frame character introduction sequence
  - District introduction sequences
  - Mid-game story narration
  - Boss encounter dialogues
  - Survivor rescue dialogues
  - Lore database entries

**Voice-Over Settings:**

- Voice-Over Toggle: Enable or disable voice-over narration
- Voice Gender Selection: Choose between male or female voice
- Voice-Over Volume: Adjust narration volume independently
- Settings persist across gameplay sessions

**Voice-Over Behavior:**

- When enabled, voice-over plays automatically during narration sequences
- Voice-over synchronized with text display timing
- Voice-over can be interrupted by skipping sequence
- Voice-over respects volume settings from audio controls

### 4.3 BGM Management System Rules

**Upload BGM Track Button:**

- Located in Audio Settings section of Settings page
- Clicking button opens BGM Management Panel as overlay

**BGM Management Panel Structure:**

- Panel displays with three tabs: Saved Assets, Upload, Favorite Playlist
- Tab navigation at top with active tab highlighted
- Close button returns to Settings page

**Saved Assets Tab:**

- Displays list of all previously uploaded MP3 files
- Each file entry shows file name, Delete button, and Move to Playlist button
- Delete button removes file from saved assets with confirmation dialog
- Move to Playlist button opens playlist selection dialog
- Playlist selection dialog shows list of existing playlists
- User selects playlist to add file
- Empty state message displays when no saved assets exist
- Scrollable list for multiple files

**Upload Tab:**

- Upload button opens file browser to select MP3 file from local storage
- File browser filters to show only MP3 files
- Selected file uploads to backend storage
- Upload progress indicator displays during upload
- Success confirmation displays after upload completes
- Uploaded file automatically added to Saved Assets
- Error message displays if upload fails

**Favorite Playlist Tab:**

- Displays list of user-created playlists
- Create New Playlist button at top of list
- Each playlist entry shows:
  - Playlist name
  - Number of tracks in playlist
  - Delete playlist button
  - Expand/collapse button
- Expanded playlist shows list of tracks with remove track button for each
- Create New Playlist opens dialog with text input for playlist name
- Dialog contains Create and Cancel buttons
- Create button validates name and creates playlist
- Delete playlist button shows confirmation dialog before deletion
- Remove track button removes track from playlist without deleting file
- Empty state message displays when no playlists exist
- Scrollable list for multiple playlists

**BGM Playback Integration:**

- User-uploaded BGM tracks can be selected for gameplay background music
- Playlist tracks play sequentially during gameplay
- BGM volume controlled by Music Volume slider in Audio Settings

### 4.4 Responsive Design Rules

**Screen Adaptation:**

- Game automatically detects screen dimensions
- UI elements scale proportionally to screen size
- HUD repositions based on available space
- Text size adjusts for readability
- Touch targets maintain minimum size for mobile usability
- Aspect ratio maintained without distortion

**Control Scheme Detection:**

- Game detects input method (keyboard or touch)
- Automatically switches between desktop and mobile controls
- Control scheme can be manually selected in settings
- Visual control indicators adapt to active scheme

### 4.5 Player Character Display Rules

**Character Sprite:**

- Sam Phoenix uses uploaded image MC.png as character sprite
- Character sprite displayed with 25% border radius creating rounded appearance
- Border radius applies to all four corners equally
- Character sprite scales proportionally based on screen size
- Character sprite maintains aspect ratio without distortion

### 4.6 Four-Frame Introduction Sequence Rules

**Image Usage:**

- Frame 1 uses uploaded image FRAME-1.png as full-screen background
- Frame 2 uses uploaded image FRAME-2.png as full-screen background
- Frame 3 uses uploaded image FRAME-3.png as full-screen background
- Frame 4 uses uploaded image FRAME-4.png as full-screen background
- All images scale to fit screen while maintaining aspect ratio

**Skip Functionality:**

- Desktop: Space key or mouse click anywhere skips sequence
- Mobile: Tap anywhere on screen skips sequence
- Skip available throughout entire sequence
- Skipping transitions directly to gameplay
- Skip option visible with subtle UI indicator

**Timing and Transitions:**

- Each frame displays for specified duration
- Text appears with dramatic timing and glitch effects
- Smooth transitions between frames
- Audio synchronized with visual elements
- Voice-over narration plays if enabled
- Final frame transitions into gameplay

### 4.7 Mid-Game Narration Visual Rules

**Background Image:**

- Uses uploaded image END-FRAME-4.png as full-screen background
- Image scales to fit screen while maintaining aspect ratio
- Slow cinematic zoom effect gradually moves closer to focal point
- Pan effect creates subtle horizontal or vertical drift across image
- Zoom and pan effects synchronized with text sequence timing

**Typography and Layout:**

- Text positioned at center of screen
- Minimalist centered presentation
- Neon red and white text styling
- Cinematic black overlay with transparency
- Text appears with fade-in animation
- Glitch effects applied to text intermittently
- CRT scan lines and interference patterns overlay
- Voice-over narration plays if enabled

### 4.8 District Select Page Rules

**District Display Before District 4 Completion:**

- Display only Districts 1-4 in District Select page
- Unlocked districts show full color with completion percentage
- Locked districts show darkened with lock icon
- Districts 5-8 completely hidden with no visual indication
- No placeholder or hint of future districts

**District Display After District 4 Completion:**

- Display all Districts 1-8 in District Select page
- Districts 1-4 show completion status
- Districts 5-8 visible but locked until unlocked sequentially
- Locked districts show darkened with lock icon and district name
- Visual indication that final arc districts are now accessible
- District icons arranged in grid or list format

**District Information Display:**

- District name
- District theme description
- Completion percentage
- Number of survivors rescued
- Number of lore fragments collected
- Boss defeated status

**District Selection Functionality:**

- Click or tap district to view detailed information
- Click or tap Play button to enter unlocked district
- Locked districts display unlock requirements
- Back button returns to Main Menu

### 4.9 Enhanced Lore System Rules

**Lore Collection Methods:**

- Data logs scattered throughout districts as collectibles
- Environmental storytelling through terminals, notes, holograms
- Survivor testimonies during rescue events
- Boss encounter lore revelations

**Lore Database Access:**

- Accessible from Main Menu and Safehouses
- Organized by categories:
  - The Mimic Outbreak
  - EDEN PRIME Origins
  - District Histories
  - Survivor Stories
  - Sam Phoenix Background
  - AI Consciousness Evolution

**Lore Database Interface:**

- List of collected lore entries with titles
- Uncollected entries shown as locked with hint of location
- Click or tap entry to read full text
- Voice-over narration available for lore entries if enabled
- Progress tracker shows total lore collected vs total available

**Lore Integration with Gameplay:**

- Collecting lore entries grants small upgrade point bonuses
- Certain lore entries unlock optional dialogue with survivors
- Complete lore categories unlock special visual effects or cosmetic elements
- Full lore collection reveals hidden ending context

### 4.10 Level Completion System

**Enemy Scaling Rules:**

- Level 1 requires eliminating 15 real imposters
- Each subsequent level requires 50 additional real imposters
- Level 2: 65 real imposters (15 + 50)
- Level 3: 115 real imposters (65 + 50)
- Level 4: 165 real imposters (115 + 50)
- Scaling continues with +50 increment for all subsequent levels throughout all districts

**Objective Types:**

**Standard Levels (Districts 1-7):**
- Eliminate specific number of real imposters based on scaling to spawn boss
- Defeat boss to complete level
- Each level clearly displays objective at start

**Final Level (District 8):**
- Eliminate specific number of real imposters based on scaling to spawn 3 bosses
- Defeat all 3 bosses to complete level
- Level completion only occurs when all 3 bosses defeated

**Kill Count Tracking:**

- Live kill counter displays in HUD
- Counter tracks only real imposter kills
- Killing red distraction enemies does not affect counter
- Counter shows current real imposter kills vs required kills
- Visual and audio feedback when objective reached
- Boss spawn sequence triggers automatically when objective met

**Level Completion Sequence:**

- Screen effect indicates boss defeat
- Display statistics: real imposter kills, time, survivors rescued
- Award upgrade points based on performance
- Unlock next level or district boss
- Save progress automatically

### 4.11 Enemy System Rules

**Distraction Enemies:**

- Red colored enemies spawn throughout levels
- Serve as combat obstacles and distractions
- Can be killed by player
- Do not count toward level kill count objective
- Do not affect level progress when killed
- Provide combat challenge and chaos

**Real Imposters:**

- Mimics disguised as NPCs
- Appear as normal NPCs in environment
- Blend with civilian population
- Cannot be distinguished without Echo Vision
- Desktop: Press E key to activate Echo Vision
- Mobile: Three-finger tap to activate Echo Vision
- Echo Vision emits white pulse effect from Sam Phoenix
- White pulse reveals real imposters within radius
- Revealed imposters glow or highlight temporarily
- Highlight effect fades after Echo Vision duration ends
- Only killing revealed real imposters increases kill count
- Kill count progresses toward level objective

**Echo Vision Mechanics:**

- Activation key: E key on desktop
- Activation gesture: Three-finger tap on mobile
- Visual effect: White pulse emanates from Sam Phoenix
- Pulse radius determined by upgrade level
- Pulse duration determined by upgrade level
- Real imposters within radius glow or highlight
- Consumes main energy when activated
- Has cooldown period after use
- Upgrades enhance duration, radius, and energy cost

### 4.12 Boss Spawn and Defeat Rules

**Standard Levels (Districts 1-7):**

- Boss spawns automatically when required number of real imposters killed
- Boss spawn triggers cinematic sequence
- Player must defeat boss to complete level
- Boss has unique mechanics and attack patterns
- Boss defeat triggers level completion sequence

**District 3 Boss Mechanics:**

- Boss throws kunai projectiles in single direction
- Kunai attack has moderate power level
- Less powerful than District 4 boss shotgun attack

**District 4 Boss Mechanics:**

- Boss wields shotgun weapon
- Shotgun attack has high power output
- Significantly more powerful than District 3 kunai attack

**Final Level (District 8):**

- 3 bosses spawn when required number of real imposters killed
- Bosses may spawn simultaneously or sequentially
- Player must defeat all 3 bosses to complete level
- Each boss has unique mechanics and attack patterns
- Level completes only when all 3 bosses defeated
- Final completion sequence triggers after all bosses defeated

### 4.13 Glass Mode System Rules

**Dual Functionality:**

- Glass Mode provides two distinct capabilities:
  - Shield Mode: Creates protective energy barrier blocking enemy attacks
  - Penetration Mode: Allows passing through glass wall barriers in districts

**Energy Management:**

- Glass Mode has dedicated energy bar separate from main energy
- Glass Mode energy bar displays distinctly in HUD
- Maximum Glass Mode energy determined by upgrade level
- Shield activation consumes Glass Mode energy continuously while active
- Passing through glass walls consumes Glass Mode energy based on wall thickness and distance
- Glass Mode energy regenerates slowly over time when not in use
- Regeneration rate increased through upgrades

**Usage Mechanics:**

- Desktop: Press G key to activate Glass Mode
- Mobile: Three-finger tap to activate Glass Mode
- Shield Mode: Character surrounded by protective energy barrier
- Penetration Mode: Character becomes translucent with energy field effect
- Can move through glass walls while penetration active
- Cannot attack or use other abilities while passing through walls
- Glass Mode deactivates automatically after passing through wall or when energy depleted
- Cannot activate Glass Mode when energy depleted

**Glass Mode Collision Logic:**

- Glass walls have collision detection enabled by default
- When Glass Mode activated in Penetration Mode:
  - Player collision with glass walls temporarily disabled
  - Player can move through glass wall boundaries
  - Visual effect shows translucent character with energy trail
  - Glass Mode energy depletes continuously while passing through wall
  - Collision detection re-enabled after exiting glass wall area
- When Glass Mode activated in Shield Mode:
  - Player collision with glass walls remains enabled
  - Shield blocks enemy attacks but does not allow wall penetration
  - Glass Mode energy depletes continuously while shield active
- Glass Mode automatically deactivates when energy depleted
- Player cannot activate Glass Mode when insufficient energy available

**Energy Restoration:**

- Glass Mode energy cells scattered throughout districts
- Collecting cell instantly restores portion of Glass Mode energy
- Safehouses restore Glass Mode energy to maximum
- Upgrades increase maximum capacity and regeneration rate

**Strategic Usage:**

- Glass walls block access to hidden areas and shortcuts
- Some survivors trapped behind glass walls
- Certain collectibles only accessible via Glass Mode penetration
- Boss fights may require using Glass Mode for shield protection or wall penetration
- Players must manage Glass Mode energy carefully

**Visual Design Enhancement:**

- Enhanced neon energy field effects with improved visual clarity
- Shield mode shows pulsing protective barrier around character
- Penetration mode shows translucent character with energy trail
- Energy field color matches neon red and white game palette
- Visual feedback indicates energy depletion level
- Upgraded design provides strategic depth and visual appeal

### 4.14 Long-Range Shooting System Rules

**Shooting Mechanics:**

- Sam Phoenix uses long-range projectile weapons
- Desktop: Press shoot key to fire projectiles
- Mobile: Tap to shoot single shot, tap and hold for continuous shooting
- Automatic targeting of nearest enemy within range
- Projectiles travel with neon energy trail effects
- Unlimited ammunition with no reload required
- Shooting rate limited by weapon cooldown
- Cooldown decreases with combat upgrades

**Damage System:**

- Base damage determined by combat upgrade level
- Critical hits deal increased damage with special effects
- Critical hit chance increases with upgrades
- Damage numbers display on enemy hit
- Visual feedback shows damage effectiveness

**Targeting System:**

- Automatic targeting prioritizes nearest enemy
- Targeting indicator shows current target
- Projectiles home toward target with slight tracking
- Can manually aim by moving character position

### 4.15 Skill Progression System

**Unlock Mechanism:**

- Complete district liberation
- Receive gratitude gift ability from rescued survivors
- Skill becomes permanently available for use
- Players gradually become more powerful

**Skill Usage:**

- Skills consume main energy resource
- Can be activated during combat and exploration
- Desktop: Activate with designated keys
- Mobile: Activate with three-finger tap gesture
- Each skill has unique cooldown period
- Skills expand gameplay possibilities

**Available Skills:**

- Echo Vision: Reveals real imposters disguised as NPCs with white pulse effect
- Pulse Dash: High-speed teleport dash attack
- Overclock Reflex: Slows down time during combat
- Nano Regeneration: Gradually regenerates health after combat

### 4.16 Upgrade System Rules

**Upgrade Points:**

- Earned through district completion
- Earned through survivor rescue
- Earned through level completion performance
- Earned through lore collection
- Displayed in upgrade page currency counter

**Upgrade Mechanics:**

- Each upgrade requires specific number of points
- Upgrades unlock sequentially within branches
- Purchased upgrades apply immediately
- Upgrades persist across all gameplay sessions
- Cannot refund or reset upgrades

**Upgrade Categories:**

- Ability upgrades enhance skill effectiveness
- Health upgrades increase maximum health
- Energy upgrades increase maximum energy and regeneration
- Glass Mode upgrades increase Glass Mode energy and regeneration
- Combat upgrades increase shooting damage and rate

### 4.17 Safehouse System Rules

**Unlock Requirements:**

- Safehouses must be discovered through exploration
- Some safehouses require keys obtained from rescued survivors
- Each district contains 2-3 safehouses

**Safehouse Functions:**

- Restore health to full capacity
- Restore main energy to maximum
- Restore Glass Mode energy to maximum
- Access upgrade menu
- Access lore database
- Review lore fragments and data logs
- Save game progress
- Temporary safe zone where enemies cannot enter

**Strategic Usage:**

- Players must decide when to use safehouses
- Safehouses provide strategic rest points during difficult encounters
- Encourages exploration to discover all safehouses

### 4.18 Story Arc Progression

**First Arc (Districts 1-4):**

- Districts unlock sequentially after previous district completion
- District Select menu shows only unlocked districts from first arc
- Districts 5-8 completely hidden with no visual indication before District 4 completion
- Players cannot access or see future districts
- Completion of District 4 triggers automatic transition to mid-game narration

**Mid-Game Narration:**

- Plays automatically after District 4 completion
- Plays only once when first entering final arc
- Cannot be skipped on first playback
- Reveals existence of Districts 5-8
- Provides plot twist and story context
- Transitions directly into District 5
- Voice-over narration plays if enabled

**Final Arc (Districts 5-8):**

- Unlocked only after viewing mid-game narration
- Districts 5-8 become visible in District Select page after District 4 completion
- Districts unlock sequentially after previous district completion
- District Select menu now shows all eight districts
- Increased difficulty compared to first arc
- Enemy scaling continues with +50 increment per level
- Culminates in final confrontation at EDEN PRIME

### 4.19 District Progression Rules

**Unlock Sequence:**

- Districts unlock sequentially after previous district completion
- District Select menu shows locked and unlocked districts
- Players must complete districts in order
- Each district liberation triggers mysterious transmission teasing next threats
- First arc districts (1-4) unlock before mid-game narration
- Final arc districts (5-8) become visible after District 4 completion
- Final arc districts unlock sequentially after previous district completion

**District Visibility:**

- Before District 4 completion: Only Districts 1-4 visible in District Select
- After District 4 completion: All Districts 1-8 visible in District Select
- Locked districts show lock icon and cannot be accessed
- Unlocked districts show completion status

### 4.20 Emotional Atmosphere Maintenance

**Core Emotional Tone:**

- Loneliness: Player feels isolated as final Mimic Hunter
- Paranoia: Constant suspicion of NPCs and environment
- Cyberpunk tension: Dark futuristic atmosphere with AI threat
- Hope: Survivors and safehouses provide emotional connection and purpose
- Relief: Safehouses offer moments of respite and reflection

**Player Emotional Experience:**

- Powerful but vulnerable
- Isolated but heroic
- Suspicious of everyone
- Emotionally invested in survivors
- Constantly curious about larger Mimic conspiracy
- Grateful for moments of safety in safehouses

**Intended Feel:** A stylish cyberpunk arcade hunt for humanity itself with moments of reflection and strategic planning

## 5. Exception and Boundary Conditions

| Scenario | Handling |
|----------|----------|
| Player selects Login With Google | Authenticate using OSS Google login method, transition to Main Menu |
| Player selects Login With Apple | Authenticate using Apple login method, transition to Main Menu |
| Player selects Play as Guest | Skip authentication, transition directly to Main Menu |
| Authentication fails | Display error message, allow retry or Play as Guest option |
| Player enables voice-over in settings | Voice-over narration plays during all story sequences and lore entries |
| Player disables voice-over in settings | Voice-over narration does not play, only text displays |
| Player changes voice gender in settings | Next narration uses selected voice gender |
| Player adjusts voice-over volume | Voice-over volume changes immediately |
| Web Speech API unavailable | Voice-over feature disabled, display notification in settings |
| Player clicks Upload BGM Track button | BGM Management Panel opens as overlay |
| Player switches between BGM Management Panel tabs | Active tab content displays, other tabs hidden |
| Player clicks Upload button in Upload tab | File browser opens filtered to MP3 files |
| Player selects MP3 file in file browser | File uploads with progress indicator, success confirmation displays |
| Upload fails | Error message displays, user can retry |
| Player clicks Delete button in Saved Assets | Confirmation dialog displays before deletion |
| Player confirms deletion in Saved Assets | File removed from saved assets list |
| Player clicks Move to Playlist button | Playlist selection dialog opens showing existing playlists |
| Player selects playlist in dialog | File added to selected playlist, confirmation displays |
| Player clicks Create New Playlist button | Dialog opens with text input for playlist name |
| Player enters playlist name and clicks Create | Playlist created and added to list |
| Player clicks Delete playlist button | Confirmation dialog displays before deletion |
| Player confirms playlist deletion | Playlist removed, tracks remain in Saved Assets |
| Player clicks remove track button in playlist | Track removed from playlist without deleting file |
| No saved assets exist | Empty state message displays in Saved Assets tab |
| No playlists exist | Empty state message displays in Favorite Playlist tab |
| Player closes BGM Management Panel | Panel closes, returns to Settings page |
| Player accesses District Select before District 4 completion | Only Districts 1-4 visible, Districts 5-8 completely hidden |
| Player completes District 4 | Automatic transition to mid-game narration, Districts 5-8 become visible in District Select |
| Player accesses District Select after District 4 completion | All Districts 1-8 visible, Districts 5-8 locked until unlocked sequentially |
| Player attempts to access locked district in final arc | Display message indicating previous district must be completed first |
| Player collects data log | Data log added to lore database, small upgrade point bonus awarded |
| Player accesses lore database from Main Menu | Lore database interface opens with all categories and collected entries |
| Player accesses lore database from safehouse | Lore database interface opens with all categories and collected entries |
| Player clicks lore entry in database | Full text displays, voice-over narration plays if enabled |
| Player attempts to view uncollected lore entry | Entry shown as locked with hint of location |
| Player completes lore category | Special visual effect or cosmetic element unlocked |
| Player collects all lore entries | Hidden ending context revealed |
| Player health reaches zero | Game over, return to main menu with Continue option |
| Real imposter kill count reaches required number based on level scaling | Boss spawn sequence triggers automatically |
| Boss defeated in standard level | Level completion triggers, statistics displayed, progress saved |
| District 3 boss throws kunai in single direction | Kunai projectiles travel in single direction with moderate power |
| District 4 boss fires shotgun | Shotgun attack deals high damage, more powerful than District 3 kunai |
| All 3 bosses defeated in District 8 final level | Final level completion triggers, game conclusion sequence begins |
| Player attempts to complete District 8 with fewer than 3 bosses defeated | Level does not complete, player must defeat remaining bosses |
| All survivors in district rescued | District liberation progress increases, emotional connection strengthened, all safehouse keys obtained |
| Main energy depleted | Skills cannot be activated until energy regenerates through collection or time |
| Glass Mode energy depleted | Cannot activate Glass Mode shield or pass through glass walls until energy regenerates or cells collected |
| Player attempts to activate Glass Mode with insufficient energy | Visual feedback indicates insufficient energy, Glass Mode does not activate |
| Player activates Glass Mode shield | Protective energy barrier surrounds character, blocks enemy attacks, consumes energy continuously, collision with glass walls remains enabled |
| Player activates Glass Mode penetration near glass wall | Character becomes translucent, collision with glass walls temporarily disabled, can pass through glass wall, consumes energy based on wall thickness, collision re-enabled after exiting wall |
| Player exits glass wall area in penetration mode | Collision detection re-enabled, Glass Mode deactivates if energy depleted |
| Player kills red distraction enemy | Enemy defeated but kill count does not increase |
| Player kills real imposter without using Echo Vision first | Real imposter defeated but may not count toward objective if not properly revealed |
| Player uses Echo Vision | White pulse effect emanates from Sam Phoenix, real imposters within radius glow or highlight |
| Echo Vision duration expires | Highlighted real imposters return to normal NPC appearance |
| Player attempts to use Echo Vision with insufficient energy | Visual feedback indicates insufficient energy, Echo Vision does not activate |
| Player attempts to access locked district during first arc | Display message indicating previous district must be completed first |
| Player attempts to access Districts 5-8 before completing District 4 | Districts remain completely hidden with no access or visual indication |
| District 4 completed | Automatic transition to mid-game story narration, no menu interruption, Districts 5-8 become visible in District Select |
| Mid-game narration completed | Automatic transition to District 5 intro sequence |
| Player attempts to skip mid-game narration on first playback | Cannot skip, must watch complete narration |
| Player replays game after completing first arc | Mid-game narration can be skipped on subsequent playthroughs |
| Continue game selected with no save data | Display message prompting player to start new game |
| District 8 completed | Final cutscene plays, game conclusion sequence, credits roll, return to main menu |
| Player enters safehouse | Combat disabled, health and energy restore, Glass Mode energy restores, upgrade menu accessible, lore database accessible, game progress saved |
| Player attempts to enter locked safehouse | Display message indicating safehouse key required from survivor rescue |
| Player exits safehouse | Return to district exploration with restored resources |
| All safehouses discovered in district | Achievement notification, bonus lore fragment unlocked |
| Player opens in-game control menu during gameplay | Gameplay pauses if pause/play toggled, menu options accessible |
| Player selects pause from control menu | Gameplay pauses, visual indicator shows paused state |
| Player selects play from control menu | Gameplay resumes from exact paused state |
| Player accesses Settings from control menu | Settings page opens as overlay with all options available |
| Player accesses Upgrades from control menu | Upgrade page opens as overlay with current progress displayed |
| Player taps outside control menu | Menu collapses, gameplay resumes if not paused |
| Player attempts to purchase upgrade without sufficient points | Visual feedback indicates insufficient points, purchase does not complete |
| Player purchases upgrade | Points deducted, upgrade applied immediately, visual confirmation displayed |
| Player attempts to customize controls in Settings | Control customization interface allows key rebinding for desktop |
| Player adjusts audio or display settings | Settings apply immediately with visual/audio feedback |
| Player switches between desktop and mobile controls | Control scheme updates immediately, visual indicators adapt |
| Screen orientation changes on mobile | Game adapts layout automatically, maintains gameplay state |
| Player uses touch controls on desktop | Touch controls function if touchscreen available |
| Player uses keyboard controls on mobile | Keyboard controls function if external keyboard connected |
| Player taps to shoot on mobile | Single projectile fires with visual and audio feedback |
| Player taps and holds to shoot on mobile | Continuous shooting until release or energy depleted |
| Player swipes in direction on mobile | Character moves in swiped direction smoothly |
| Player double taps on mobile | Dash ability activates if available |
| Player uses three-finger tap on mobile | Special ability or Glass Mode activates if available |
| Player clicks or presses Space during four-frame intro | Intro sequence skips, transitions directly to gameplay |
| Player taps screen during four-frame intro on mobile | Intro sequence skips, transitions directly to gameplay |
| Frame 1 displays | FRAME-1.png shown with text sequence, glitch effects, and voice-over if enabled |
| Frame 2 displays | FRAME-2.png shown with district list, flicker effects, and voice-over if enabled |
| Frame 3 displays | FRAME-3.png shown with mission text, red pulses, and voice-over if enabled |
| Frame 4 displays | FRAME-4.png shown with title and subtitle, voice-over if enabled, transitions to gameplay |
| Mid-game narration displays | END-FRAME-4.png shown with slow zoom/pan effect, centered minimalist text, and voice-over if enabled |

## 6. Acceptance Criteria

1. Login screen displays first when game launches using uploaded image MZ.png as background
2. Login screen contains three buttons: Login With Google, Login With Apple, Play as Guest
3. Login With Google uses OSS Google login method for authentication
4. Login With Apple uses Apple login method for authentication
5. Play as Guest skips authentication and proceeds directly
6. All login options transition to Main Menu after selection
7. Main Menu uses uploaded image INTRO.png as background
8. Main Menu displays text A.K.A. \"METAL CREW\" in enhanced opening sequence
9. Main Menu contains all six buttons with hover glow effects and smooth transitions
10. Voice-over settings accessible in Settings page
11. Voice-over toggle enables or disables narration
12. Voice gender selection allows choosing male or female voice
13. Voice-over volume slider adjusts narration volume independently
14. Voice-over uses Web Speech API for text-to-speech
15. Voice-over plays during four-frame character introduction if enabled
16. Voice-over plays during district introductions if enabled
17. Voice-over plays during mid-game story narration if enabled
18. Voice-over plays for lore database entries if enabled
19. Voice-over synchronized with text display timing
20. Voice-over can be interrupted by skipping sequence
21. Voice-over settings persist across gameplay sessions
22. Upload BGM Track button displays in Audio Settings section
23. Clicking Upload BGM Track button opens BGM Management Panel as overlay
24. BGM Management Panel contains three tabs: Saved Assets, Upload, Favorite Playlist
25. Saved Assets tab displays list of previously uploaded MP3 files
26. Each file in Saved Assets shows file name, Delete button, and Move to Playlist button
27. Delete button in Saved Assets removes file with confirmation dialog
28. Move to Playlist button opens playlist selection dialog
29. Upload tab contains Upload button to select MP3 file from local storage
30. File browser opens when Upload button clicked and filters to MP3 files
31. Selected MP3 file uploads with progress indicator
32. Success confirmation displays after upload completes
33. Uploaded file automatically added to Saved Assets
34. Favorite Playlist tab displays list of user-created playlists
35. Create New Playlist button displays at top of Favorite Playlist tab
36. Each playlist entry shows playlist name, number of tracks, Delete playlist button, and Expand/collapse button
37. Expanded playlist shows list of tracks with remove track button for each
38. Create New Playlist opens dialog with text input for playlist name
39. Dialog contains Create and Cancel buttons
40. Create button validates name and creates playlist
41. Delete playlist button shows confirmation dialog before deletion
42. Remove track button removes track from playlist without deleting file
43. Empty state message displays in Saved Assets when no files exist
44. Empty state message displays in Favorite Playlist when no playlists exist
45. BGM Management Panel has pixel-art interface with neon styling
46. Close button in BGM Management Panel returns to Settings page
47. All buttons in BGM Management Panel are touch-friendly
48. District Select page displays only Districts 1-4 before District 4 completion
49. Districts 5-8 completely hidden with no visual indication before District 4 completion
50. After District 4 completion, District Select page displays all Districts 1-8
51. Districts 5-8 visible but locked after District 4 completion
52. Locked districts show darkened with lock icon and district name
53. Visual indication that final arc districts are accessible after District 4 completion
54. District Select page shows district name, theme, completion percentage, survivors rescued, lore collected, and boss status
55. Click or tap district to view detailed information
56. Click or tap Play button to enter unlocked district
57. Locked districts display unlock requirements
58. Back button in District Select returns to Main Menu
59. Lore database accessible from Main Menu and Safehouses
60. Lore database organized by categories: The Mimic Outbreak, EDEN PRIME Origins, District Histories, Survivor Stories, Sam Phoenix Background, AI Consciousness Evolution
61. Lore database displays list of collected entries with titles
62. Uncollected lore entries shown as locked with hint of location
63. Click or tap lore entry to read full text
64. Voice-over narration plays for lore entries if enabled
65. Progress tracker shows total lore collected vs total available
66. Data logs scattered throughout districts as collectibles
67. Collecting data log adds entry to lore database
68. Collecting data log grants small upgrade point bonus
69. Environmental storytelling through terminals, notes, holograms provides lore
70. Survivor testimonies during rescue provide lore
71. Boss encounters include lore revelations
72. Complete lore categories unlock special visual effects or cosmetic elements
73. Full lore collection reveals hidden ending context
74. Lore content provides depth on Mimic outbreak, EDEN PRIME origins, district histories, survivor stories, Sam Phoenix background, and AI consciousness evolution
75. Game adapts responsively to all screen dimensions and aspect ratios without distortion
76. UI elements scale proportionally and reposition based on screen size
77. Touch controls function smoothly on mobile devices with visual feedback
78. Desktop keyboard controls function smoothly with responsive input
79. Game automatically detects and switches between desktop and mobile control schemes
80. Sam Phoenix character sprite uses uploaded image MC.png
81. Character sprite displays with 25% border radius creating rounded appearance
82. Character sprite scales proportionally based on screen size maintaining aspect ratio
83. Four-frame character introduction sequence plays when Start Game is clicked
84. Frame 1 displays uploaded image FRAME-1.png with giant holographic face and glitch flickers
85. Frame 1 shows text sequence: THEY DISGUISE. THEY OBSERVE. THEY REPLACE. TRUST NO ONE.
86. Frame 2 displays uploaded image FRAME-2.png with district infiltration message
87. Frame 2 shows text: MIMICS HAVE INFILTRATED ALL DISTRICTS followed by district list
88. Frame 3 displays uploaded image FRAME-3.png with fast flashes and red pulses
89. Frame 3 shows text: HUNTER DETECTED. ELIMINATE THE MIMICS.
90. Frame 4 displays uploaded image FRAME-4.png with district and title information
91. Frame 4 shows text sequence: DISTRICT 1, HOLLOW METRO GATE, Title: MIMIC // ZERO, Subtitle
92. Skip option available throughout four-frame sequence
93. Desktop: Space key or mouse click skips intro sequence
94. Mobile: Tap anywhere on screen skips intro sequence
95. Skipping intro transitions directly to gameplay
96. Each frame displays for appropriate duration with dramatic timing
97. Audio synchronized with visual elements throughout intro sequence
98. Voice-over narration plays during intro frames if enabled
99. In-game control menu icon displays at bottom left corner of game screen
100. Control menu icon is touch-friendly and does not obstruct gameplay
101. Tapping control menu icon expands menu options overlay
102. Control menu contains Pause/Play Toggle, Settings, Upgrades, and Return to Main Menu options
103. Pause/Play Toggle pauses and resumes gameplay with visual indicator
104. Settings option opens settings page as overlay
105. Upgrades option opens upgrade page as overlay
106. Return to Main Menu prompts save confirmation
107. Tapping outside control menu collapses menu and resumes gameplay
108. Control menu remains accessible throughout all gameplay
109. Settings page accessible from main menu and in-game control menu
110. Settings page contains Audio Settings, Voice-Over Settings, Display Settings, Controls Settings, and Game Instructions sections
111. Audio Settings contains Upload BGM Track button
112. Voice-Over Settings displays toggle, gender selection, and volume slider
113. Controls Settings displays both Desktop Controls and Mobile Touch Controls
114. Desktop Controls shows E key for Echo Vision activation and G key for Glass Mode activation
115. Mobile Touch Controls section explains: Left/Right/Up/Down Swipe for movement, Tap for single shot, Tap and Hold for continuous shooting, Double Tap for dash, Three-Finger Tap for abilities and Glass Mode
116. Game Instructions section provides comprehensive guidance on movement, long-range shooting, combat, Mimic detection with Echo Vision, enemy system, level objectives, Glass Mode system with dual functionality, survivor rescue, safehouse system, abilities, and energy management
117. Game Instructions clearly explain Glass Mode provides shield protection and glass wall penetration
118. Game Instructions clearly explain red enemies are distractions and do not count toward progress
119. Game Instructions clearly explain real imposters must be revealed with Echo Vision and killed to increase kill count
120. Game Instructions clearly explain Level 1 requires 15 real imposters and each subsequent level requires 50 additional real imposters
121. Game Instructions clearly explain boss spawns after required real imposters killed
122. Game Instructions clearly explain final level spawns 3 bosses and requires all 3 defeated
123. All control keys displayed and customizable in Desktop Controls Settings
124. Audio and display settings apply immediately when adjusted
125. Settings page layout is fully responsive and touch-friendly
126. Upgrade page accessible from main menu, in-game control menu, and safehouses
127. Upgrade page displays ability tree with Echo Vision, Pulse Dash, Overclock Reflex, and Nano Regeneration branches
128. Echo Vision upgrades describe white pulse effect and real imposter revelation
129. Upgrade page displays core stats including Health, Energy, Glass Mode Energy, and Combat upgrades
130. Glass Mode Energy upgrades increase maximum capacity and regeneration rate
131. Combat upgrades focus on shooting damage and shooting rate improvements
132. Each upgrade branch contains 5 levels with clear descriptions and requirements
133. Upgrade points counter displays available points prominently
134. Locked upgrades shown with lock icon, available upgrades shown with pulsing glow, purchased upgrades shown with checkmark
135. Upgrade purchase requires confirmation and deducts points immediately
136. Purchased upgrades apply immediately to gameplay
137. Upgrade page layout is fully responsive and touch-friendly
138. Top-down movement controls respond smoothly on desktop and mobile
139. Desktop: Keyboard movement controls feel responsive
140. Mobile: Swipe-based movement controls feel responsive with visual feedback
141. Long-range shooting system functions correctly on desktop and mobile
142. Desktop: Press shoot key to fire projectiles
143. Mobile: Tap to shoot single shot, tap and hold for continuous shooting
144. Automatic targeting prioritizes nearest enemy with targeting indicator
145. Projectiles travel with neon energy trail effects
146. Unlimited ammunition with weapon cooldown system
147. Shooting rate increases with combat upgrades
148. Critical hits display special visual effects
149. Dash mechanic provides evasion capability with visual dash effects
150. Desktop: Press dash key to dash
151. Mobile: Double tap to dash
152. Health and main energy systems display correctly in minimal HUD
153. Glass Mode energy bar displays separately and distinctly in HUD
154. Live kill count displays in HUD showing current real imposter kills vs required kills
155. Level objective tracker clearly indicates real imposter kill requirement based on level scaling
156. Kill counter updates only when real imposters defeated
157. Kill counter does not update when red distraction enemies defeated
158. Level 1 requires eliminating 15 real imposters
159. Level 2 requires eliminating 65 real imposters (15 + 50)
160. Level 3 requires eliminating 115 real imposters (65 + 50)
161. Level 4 requires eliminating 165 real imposters (115 + 50)
162. Enemy scaling continues with +50 increment for all subsequent levels throughout all districts
163. Boss spawn sequence triggers automatically when real imposter objective met
164. Standard levels (Districts 1-7) spawn 1 boss after objective met
165. Final level (District 8) spawns 3 bosses after objective met
166. Standard levels complete when boss defeated
167. Final level completes only when all 3 bosses defeated
168. Level completion sequence displays statistics, awards upgrade points, and saves progress
169. Red distraction enemies spawn throughout levels
170. Red distraction enemies can be killed but do not affect kill count
171. Real imposters appear as normal NPCs in environment
172. Desktop: Press E key to activate Echo Vision
173. Mobile: Three-finger tap to activate Echo Vision
174. Echo Vision emits white pulse effect from Sam Phoenix
175. White pulse reveals real imposters within radius
176. Revealed real imposters glow or highlight temporarily
177. Highlight effect fades after Echo Vision duration ends
178. Only killing revealed real imposters increases kill count
179. Echo Vision consumes main energy when activated
180. Echo Vision has cooldown period after use
181. Echo Vision upgrades enhance duration, radius, and energy cost
182. Desktop: Press G key to activate Glass Mode
183. Mobile: Three-finger tap to activate Glass Mode
184. Glass Mode provides dual functionality: shield protection and glass wall penetration
185. Shield Mode creates protective energy barrier around Sam Phoenix blocking enemy attacks
186. Penetration Mode allows passing through glass wall barriers in districts
187. Glass Mode has dedicated energy bar separate from main energy
188. Shield activation consumes Glass Mode energy continuously while active
189. Passing through glass walls consumes Glass Mode energy based on wall thickness
190. Glass Mode energy regenerates slowly over time
191. Glass Mode energy cells restore Glass Mode energy when collected
192. Cannot activate Glass Mode when energy depleted
193. Visual feedback indicates insufficient Glass Mode energy when attempting to activate
194. Enhanced visual design with neon energy field effects for Glass Mode
195. Glass Mode shield shows pulsing protective barrier around character
196. Glass Mode penetration shows translucent character with energy trail
197. Glass walls have collision detection enabled by default
198. When Glass Mode activated in Penetration Mode, player collision with glass walls temporarily disabled
199. Player can move through glass wall boundaries in Penetration Mode
200. Glass Mode energy depletes continuously while passing through wall
201. Collision detection re-enabled after exiting glass wall area
202. When Glass Mode activated in Shield Mode, player collision with glass walls remains enabled
203. Shield blocks enemy attacks but does not allow wall penetration
204. Glass Mode automatically deactivates when energy depleted
205. Enemy waves spawn and engage player with increasing chaos as district progresses
206. During first arc, only Districts 1-4 are visible and accessible
207. Districts 5-8 remain completely hidden with no visual indication during first arc
208. District Select menu shows only unlocked districts from first arc before District 4 completion
209. After District 4 completion, District Select menu shows all eight districts
210. Districts 5-8 visible but locked after District 4 completion
211. Each district contains unique theme, environment, enemies, boss, glass wall sections, and 2-3 safehouses
212. District intros communicate fear, isolation, danger, and mystery through environmental storytelling
213. Voice-over narration plays during district intros if enabled
214. Exploration allows free movement with investigation of NPCs, hidden areas, energy cells, Glass Mode energy cells, data logs, safehouses, and lore fragments
215. Environmental storytelling includes glitching advertisements, abandoned terminals with data logs, corrupted holograms, emergency broadcasts, and survivor messages
216. Survivor rescue system functions with emotional reactions and rewards including lore, energy upgrades, hidden routes, gratitude abilities, safehouse keys, and upgrade points
217. Safehouse system allows players to discover and unlock 2-3 safehouses per district
218. Safehouses provide secure environment where health, main energy, and Glass Mode energy restore to full
219. Safehouses allow access to upgrade menu, lore database, and game save functionality
220. Safehouse visual design shows dimly lit secure room with neon emergency lighting, holographic terminal, survivor messages, and atmospheric rain sounds
221. Safehouse proximity indicator appears in HUD when near undiscovered or locked safehouse
222. Lore collectible proximity indicator appears in HUD when near data log
223. Enemies cannot enter safehouses creating temporary safe zones
224. Boss battles feel intense, visually dramatic, and mechanically unique requiring movement mastery and timing
225. Boss battles emphasize long-range shooting mechanics
226. Boss battles may require Glass Mode usage during fight
227. District 3 boss throws kunai projectiles in single direction with moderate power
228. District 4 boss wields shotgun with high power output significantly more powerful than District 3 kunai
229. District liberation sequence shows corruption disappearing, lights stabilizing, survivors emerging, and map updating
230. Mysterious transmissions appear after each district liberation in first arc
231. Reward skills unlock after district completion and permanently expand gameplay
232. Echo Vision reveals real imposters with white pulse effect when activated
233. Pulse Dash executes high-speed teleport dash attack
234. Overclock Reflex slows down time during combat
235. Nano Regeneration gradually restores health after combat
236. Desktop: Activate abilities with designated keys
237. Mobile: Activate abilities with three-finger tap gesture
238. Visual effects maintain neon pixel-art beauty with high readability and polished presentation
239. Screen shake, enemy knockback, pixel explosions, slow-motion finishing attacks, and Glass Mode effects function correctly
240. Audio includes synthwave soundtrack, ambient rain, long-range shooting SFX, projectile impact sounds, distorted AI voice effects, white pulse sound for Echo Vision, Glass Mode activation sound, calmer safehouse music, and custom BGM tracks from user uploads maintaining emotional atmosphere
241. Game maintains retro-futuristic neon pixel aesthetic with neon red and white color palette throughout
242. All UI elements use pixel-art style with clean and premium feel
243. All UI elements are touch-friendly with appropriate sizing for mobile devices
244. District progression shows current progress and locked/unlocked districts
245. After District 4 completion, automatic transition to mid-game story narration occurs
246. Mid-game story narration plays for maximum 1 minute
247. Mid-game narration is text-based with cinematic presentation
248. Mid-game narration uses uploaded image END-FRAME-4.png as full-screen background
249. Mid-game narration applies slow cinematic zoom and pan effect to background image
250. Mid-game narration displays text with minimalist centered typography
251. Mid-game narration text uses neon red and white styling with glitch effects
252. Mid-game narration reveals plot twist: Mimic outbreak originated from EDEN PRIME
253. Mid-game narration reveals existence of four additional districts: Ashen Market, Solara Heights, Silent Cathedral, EDEN PRIME
254. Mid-game narration displays text sequence including district names and final arc announcement
255. Mid-game narration cannot be skipped on first playback
256. Mid-game narration can be skipped on subsequent playthroughs
257. Voice-over narration plays during mid-game narration if enabled
258. After mid-game narration, automatic transition to District 5 intro sequence occurs
259. After mid-game narration, District Select menu shows all eight districts
260. Districts 5-8 unlock sequentially after previous district completion
261. Final arc districts (5-8) have increased difficulty compared to first arc
262. Enemy scaling continues with +50 increment per level in final arc
263. District 5: Ashen Market functions with unique theme and boss
264. District 6: Solara Heights functions with unique theme and boss
265. District 7: Silent Cathedral functions with unique theme and boss
266. District 8: EDEN PRIME functions as final district with 3 bosses in final level
267. Final level spawns 3 bosses after real imposter objective met
268. Final level completes only when all 3 bosses defeated
269. Game conclusion sequence plays after District 8 completion
270. Final cutscene shows outcome and humanity's fate
271. Credits sequence plays with synthwave soundtrack
272. Game returns to main menu after completion with completion status
273. Emotional atmosphere of loneliness, paranoia, cyberpunk tension, hope, and relief maintained throughout gameplay
274. Player experience feels like stylish cyberpunk arcade hunt for humanity itself with strategic planning moments
275. Combat feels fast, satisfying, responsive, and arcade-intense
276. Gameplay balances long-range shooting combat, investigation with Echo Vision, survival, trust, level objectives, Glass Mode usage with dual functionality, lore collection, and strategic resource management
277. Game functions smoothly across all supported screen dimensions
278. Touch controls provide intuitive and responsive mobile gameplay experience
279. Desktop controls provide precise and responsive keyboard gameplay experience
280. In-game control menu provides convenient access to all necessary functions without disrupting gameplay flow
281. Voice-over feature functions correctly using Web Speech API
282. Voice-over settings persist and apply correctly across all narration sequences and lore entries
283. BGM Management Panel functions correctly with all three tabs
284. Upload functionality successfully uploads MP3 files to backend storage
285. Saved Assets displays all uploaded files with Delete and Move to Playlist buttons
286. Delete functionality removes files with confirmation dialog
287. Move to Playlist functionality adds files to selected playlists
288. Favorite Playlist displays all user-created playlists
289. Create New Playlist functionality creates playlists with user-defined names
290. Delete playlist functionality removes playlists with confirmation dialog
291. Remove track functionality removes tracks from playlists without deleting files
292. Empty state messages display correctly when no assets or playlists exist
293. BGM Management Panel has pixel-art interface matching game aesthetic
294. Custom BGM tracks integrate with gameplay background music
295. Glass Mode system functions with dual capabilities: shield protection and glass wall penetration
296. Glass Mode collision logic correctly disables collision in Penetration Mode and maintains collision in Shield Mode
297. Glass Mode visual design enhanced with improved neon energy field effects
298. Glass Mode provides strategic advantage in both combat and exploration
299. Glass Mode energy management requires careful strategic planning
300. Lore system provides depth to story and gameplay through collectible data logs, environmental storytelling, survivor testimonies, and boss encounter revelations

## 7. Out of Scope for Current Version

- Multiplayer or co-op gameplay modes
- Character customization or alternative playable characters
- Branching story paths or multiple endings beyond game completion
- Crafting or inventory management systems
- Side quests or optional missions beyond survivor rescue and lore collection
- Difficulty level selection
- Leaderboards or online features
- Voice acting for narration or dialogue beyond Web Speech API
- Extended cutscenes beyond four-frame character introduction, district intros, and mid-game narration
- Achievement or trophy system
- Safehouse customization or decoration
- Multiple save slots
- Upgrade point refund or reset system
- Alternative control schemes beyond keyboard customization and touch controls
- Console versions
- Gamepad or controller support
- Manual aiming system
- Weapon variety or weapon switching
- Melee combat system
- Bow and arrow mechanics
- Alternative Echo Vision colors beyond white
- Boss battles with more than 3 bosses in final level
- Additional intro frames beyond four frames
- Social login methods beyond Google and Apple
- User profile management
- Cloud save synchronization for BGM playlists across devices
- Audio format support beyond MP3
- Playlist shuffle or repeat functionality
- BGM fade-in/fade-out effects
- Custom voice-over recordings
- Multiple language support for voice-over
- Lore database search or filter functionality
- Lore entry sharing or export features

## Reference Files

1. Login Screen Background Image: MZ.png - Used as full-screen background for login screen
2. Main Menu Background Image: INTRO.png - Used as full-screen background for main menu
3. Character Sprite Image: MC.png - Used as Sam Phoenix player character sprite with 25% border radius
4. Intro Frame 1 Image: FRAME-1.png - Used as full-screen background for first frame of character introduction sequence showing giant holographic face with glitch flickers
5. Intro Frame 2 Image: FRAME-2.png - Used as full-screen background for second frame showing district infiltration message
6. Intro Frame 3 Image: FRAME-3.png - Used as full-screen background for third frame showing hunter detection and mission with fast flashes and red pulses
7. Intro Frame 4 Image: FRAME-4.png - Used as full-screen background for fourth frame showing district gate and game title with subtitle
8. Mid-Game Narration Background Image: END-FRAME-4.png - Used as full-screen background for mid-game story narration with slow cinematic zoom and pan effect