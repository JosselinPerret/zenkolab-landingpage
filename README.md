# Zenkolab - Innovation and Technology Hub

A modern React-based landing page featuring an interactive WebGL-powered background with the PrismaticBurst animation component.

## 🎯 Overview

Zenkolab is a cutting-edge landing page built with React and featuring a custom WebGL animation component. The site showcases an innovative, visually striking front page with smooth animations and modern design patterns.

## ✨ Features

- **Interactive WebGL Background**: Custom PrismaticBurst component using OGL (WebGL renderer)
- **Responsive Design**: Fully responsive layout for desktop and mobile devices
- **Smooth Animations**: CSS animations with entrance effects
- **Modern Tech Stack**: Built with React 18 and Create React App
- **Production Ready**: Includes .htaccess for proper deployment and routing

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) 18.2.0
- **Build Tool**: [Create React App](https://create-react-app.dev/) (react-scripts 5.0.1)
- **WebGL Renderer**: [OGL](https://ogl.dev/) 1.0.0
- **Styling**: CSS with responsive design

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JosselinPerret/zenkolab-landingpage.git
cd zenkolab-landingpage
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000` in your default browser. The page will reload when you make changes.

### Building for Production

Build the application for production:
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 📁 Project Structure

```
zenkolab-landingpage/
├── public/
│   ├── index.html
│   └── favicon.ico (optional)
├── src/
│   ├── components/
│   │   ├── PrismaticBurst.js      # WebGL burst animation component
│   │   └── PrismaticBurst.css     # Component styles
│   ├── pages/
│   │   ├── Home.js               # Landing page
│   │   └── Home.css              # Page styles
│   ├── App.js                    # Main application component
│   ├── App.css                   # Global styles
│   ├── index.js                  # React entry point
│   └── index.css                 # Global styles
├── .gitignore
├── .htaccess                     # Apache routing configuration
├── package.json
└── README.md
```

## 🎨 Key Components

### PrismaticBurst

Interactive WebGL-based animation component featuring:

- **Animation Types**: 
  - `rotate`: 2D rotation animation
  - `rotate3d`: 3D rotation animation
  - `hover`: Mouse-interactive hover effect

- **Customizable Properties**:
  - `intensity`: Control the brightness (default: 2)
  - `speed`: Animation playback speed (default: 0.5)
  - `distort`: Distortion effect intensity (default: 0)
  - `colors`: Array of hex colors for the gradient (default: ['#ff007a', '#4d3dff', '#ffffff'])
  - `rayCount`: Number of rays to display (default: 24)
  - `hoverDampness`: Dampening effect for hover interaction (default: 0.25)
  - `mixBlendMode`: Canvas blend mode (default: 'lighten')
  - `paused`: Pause/resume animation (default: false)
  - `offset`: X/Y offset for the animation center

### Home

Landing page component that displays:
- The PrismaticBurst animation background
- Hero section with title and tagline
- Responsive layout

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App configuration |
| `npm run dev` | Alias for npm start |

## 🌐 Deployment

### Important: .htaccess File

The `.htaccess` file is included in the public directory and ensures proper routing when deployed on Apache servers.

### Manual Deployment

1. Run `npm run build`
2. Upload the contents of the `build/` folder to your hosting provider
3. Copy the `.htaccess` file to the deployment directory

## 🚀 Customization

### Modifying the PrismaticBurst Animation

Edit `src/pages/Home.js` to adjust the animation parameters:

```javascript
<PrismaticBurst
  animationType="rotate3d"    // Change animation type
  intensity={2}              // Adjust brightness
  speed={0.5}               // Control speed
  colors={['#ff007a', '#4d3dff', '#ffffff']}  // Change colors
  rayCount={24}             // Adjust ray count
  // ... other props
/>
```

### Adding New Pages

1. Create a new file in `src/pages/`
2. Create a corresponding CSS file
3. Update `src/App.js` to include routing (when React Router is added)

## 📄 License

See the LICENSE file for details.

## 👤 Author

[Josselin Perret](https://github.com/JosselinPerret)

## 📧 Contact

For more information about Zenkolab, visit the repository on GitHub.