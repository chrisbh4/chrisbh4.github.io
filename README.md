# Personal Portfolio

A modern, responsive personal portfolio website built with React and Chakra UI.

## 🚀 Features

- Modern and responsive design
- Built with React 18
- Styled with Chakra UI
- Smooth animations with Framer Motion
- Optimized for performance
- Docker support for containerization
- Continuous deployment with GitHub Actions and Fly.io

## 🛠️ Technologies Used

- React.js
- Chakra UI
- Framer Motion
- Docker
- GitHub Actions
- Fly.io

## 📦 Dependencies

- React 18.2.0
- Chakra UI 2.8.0
- Framer Motion 6.5.1
- React Icons 3.11.0
- And more (see package.json for full list)

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

The application will start running at `http://localhost:3000`

## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
```

## 🐳 Docker Support

Build the Docker image:
```bash
docker build -t portfolio .
```

Run the container:
```bash
docker run -p 3000:3000 portfolio
```

## 📝 Scripts

- `npm start` - Starts the development server
- `npm build` - Creates a production build
- `npm test` - Runs the test suite
- `npm run deploy` - Deploys to GitHub Pages

## 🚀 Deployment

This project is configured for deployment to Fly.io using GitHub Actions for CI/CD.

## 👤 Author

Christian Brown
- Website: https://christianbrown.io
- GitHub: @chrisbh4
- LinkedIn: https://www.linkedin.com/in/christian-brown-8770311ba
