# FPS Game Project

## Overview
This is a first-person shooter (FPS) game project built using TypeScript. The game features basic movement controls and a main scene where gameplay occurs.

## Project Structure
```
fps-game-project
├── src
│   ├── main.ts                # Entry point of the game
│   ├── controls
│   │   └── keyboardControls.ts # Handles player input
│   ├── scenes
│   │   └── mainScene.ts       # Represents the main game scene
│   ├── assets
│   │   ├── models             # 3D model files
│   │   ├── textures           # Texture files
│   │   └── sounds             # Sound files
│   └── utils
│       └── helpers.ts         # Utility functions
├── package.json               # npm configuration file
├── tsconfig.json              # TypeScript configuration file
└── README.md                  # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd fps-game-project
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Compile the TypeScript files:
   ```
   npm run build
   ```
5. Start the game:
   ```
   npm start
   ```

## Gameplay
- Use the W key to move forward.
- Use the A key to move left.
- Use the S key to move backward.
- Use the D key to move right.

Enjoy the game!