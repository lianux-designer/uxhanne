import { SimplexNoise } from "./simplex-noise"

export function setupAnimatedBackground(
  canvas: HTMLCanvasElement,
  colors: string[] = ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#DCEDC8", "#4ade80"],
) {
  const ctx = canvas.getContext("2d")
  if (!ctx) return () => {}

  // Set canvas dimensions
  const setCanvasDimensions = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  setCanvasDimensions()
  window.addEventListener("resize", setCanvasDimensions)

  // Create SimplexNoise instance
  const simplex = new SimplexNoise()

  // Time variables for animation
  let time = 0
  const timeStep = 0.002

  // Create gradient background
  const createGradient = () => {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#FFFFFF")
    gradient.addColorStop(1, "#E8F5E9")
    return gradient
  }

  // Animation loop
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw gradient background
    ctx.fillStyle = createGradient()
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw organic shapes
    const numLayers = 3

    for (let layer = 0; layer < numLayers; layer++) {
      const layerOpacity = 0.1 - layer * 0.02
      const scale = 0.003 + layer * 0.001
      const yOffset = layer * 100
      const speed = 1 + layer * 0.2
      const color = colors[layer % colors.length]

      ctx.fillStyle = color
      ctx.globalAlpha = layerOpacity

      ctx.beginPath()

      // Create flowing, organic shapes with noise
      for (let x = 0; x <= canvas.width; x += 5) {
        // Use noise to create natural, flowing curves
        const y1 = simplex.noise2D(x * scale, time * speed) * 200 + canvas.height * 0.4 + yOffset
        const y2 = simplex.noise2D(x * scale + 10, (time + 10) * speed) * 200 + canvas.height * 0.6 + yOffset

        if (x === 0) {
          ctx.moveTo(x, y1)
        } else {
          ctx.lineTo(x, y1)
        }

        // Connect to the bottom of the canvas to create a filled shape
        if (x === canvas.width) {
          ctx.lineTo(x, canvas.height)
          ctx.lineTo(0, canvas.height)
          ctx.closePath()
        }
      }

      ctx.fill()
    }

    // Draw floating organic blobs
    const numBlobs = 5
    for (let i = 0; i < numBlobs; i++) {
      const blobTime = time + i * 100
      const x = (simplex.noise2D(i * 0.5, blobTime * 0.1) * 0.5 + 0.5) * canvas.width
      const y = (simplex.noise2D(i * 0.5 + 10, blobTime * 0.1) * 0.5 + 0.5) * canvas.height * 0.8
      const size = 50 + simplex.noise2D(i, blobTime * 0.2) * 30
      const color = colors[Math.floor(i % colors.length)]

      ctx.globalAlpha = 0.1
      ctx.fillStyle = color

      // Draw organic blob
      ctx.beginPath()

      // Create irregular, organic shape
      const numPoints = 12
      for (let j = 0; j < numPoints; j++) {
        const angle = (j / numPoints) * Math.PI * 2
        const radius = size * (0.8 + simplex.noise2D(i + j, blobTime * 0.1) * 0.3)
        const bx = x + Math.cos(angle) * radius
        const by = y + Math.sin(angle) * radius

        if (j === 0) {
          ctx.moveTo(bx, by)
        } else {
          // Use quadratic curves for smoother shapes
          const prevAngle = ((j - 1) / numPoints) * Math.PI * 2
          const prevX = x + Math.cos(prevAngle) * radius
          const prevY = y + Math.sin(prevAngle) * radius

          const cpX = prevX + (bx - prevX) * 0.5 + simplex.noise2D(i + j, blobTime * 0.05) * 20
          const cpY = prevY + (by - prevY) * 0.5 + simplex.noise2D(i + j + 10, blobTime * 0.05) * 20

          ctx.quadraticCurveTo(cpX, cpY, bx, by)
        }
      }

      ctx.closePath()
      ctx.fill()
    }

    // Update time for animation
    time += timeStep

    // Reset global alpha
    ctx.globalAlpha = 1

    const animationId = requestAnimationFrame(animate)
    return animationId
  }

  const animationId = animate()

  // Return cleanup function
  return () => {
    window.removeEventListener("resize", setCanvasDimensions)
    cancelAnimationFrame(animationId)
  }
}
