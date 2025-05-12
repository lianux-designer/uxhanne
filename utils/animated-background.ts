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

  // Time variables for animation
  let time = 0
  const timeStep = 0.01

  // Animation loop
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Create gradient background for the entire canvas
    const fullGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    fullGradient.addColorStop(0, "#FFFFFF")
    fullGradient.addColorStop(0.5, "#E8F5E9")
    fullGradient.addColorStop(1, "#FFFFFF")
    ctx.fillStyle = fullGradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Only animate the top 50% of the canvas
    const animationHeight = canvas.height * 0.5

    // Draw the animated waves only in the top 50%
    const waveConfigs = [
      { amplitude: 30, frequency: 0.01, speed: 0.05, color: colors[0], opacity: 0.2 },
      { amplitude: 20, frequency: 0.02, speed: 0.03, color: colors[1], opacity: 0.2 },
      { amplitude: 40, frequency: 0.008, speed: 0.07, color: colors[2], opacity: 0.2 },
      { amplitude: 25, frequency: 0.015, speed: 0.04, color: colors[3], opacity: 0.2 },
    ]

    // Draw the waves
    waveConfigs.forEach((config, index) => {
      const { amplitude, frequency, speed, color, opacity } = config

      ctx.beginPath()
      ctx.moveTo(0, animationHeight)

      // Draw the wave
      for (let x = 0; x <= canvas.width; x++) {
        // Create a wave that's anchored at the bottom of the animation area
        // and waves upward with decreasing amplitude as it goes down
        const baseY = animationHeight
        const waveY = Math.sin(x * frequency + time * speed + index) * amplitude

        // Apply a vertical gradient to the wave amplitude (stronger at top, weaker at bottom)
        const normalizedY = baseY - waveY * (1 - (baseY / animationHeight) * 0.5)

        ctx.lineTo(x, normalizedY)
      }

      // Complete the shape by drawing to the bottom corners
      ctx.lineTo(canvas.width, animationHeight)
      ctx.lineTo(0, animationHeight)

      // Fill the wave
      ctx.fillStyle = color
      ctx.globalAlpha = opacity
      ctx.fill()
    })

    // Draw a subtle line at the bottom of the animation area
    ctx.beginPath()
    ctx.moveTo(0, animationHeight)
    ctx.lineTo(canvas.width, animationHeight)
    ctx.strokeStyle = "#E8F5E9"
    ctx.lineWidth = 1
    ctx.globalAlpha = 0.3
    ctx.stroke()

    // Reset global alpha
    ctx.globalAlpha = 1

    // Update time for animation
    time += timeStep

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
