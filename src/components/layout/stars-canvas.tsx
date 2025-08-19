"use client"

import { useEffect, useRef } from "react"

type Star = { x: number; y: number; r: number; vx: number; vy: number; a: number }

export default function StarsCanvas() {
    const ref = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = ref.current!
        const ctx = canvas.getContext("2d")!
        let animationId = 0
        const dpr = window.devicePixelRatio || 1

        function resize() {
            canvas.width = Math.floor(window.innerWidth * dpr)
            canvas.height = Math.floor(window.innerHeight * dpr)
            canvas.style.width = window.innerWidth + "px"
            canvas.style.height = window.innerHeight + "px"
        }
        resize()
        window.addEventListener("resize", resize)

        const stars: Star[] = Array.from({ length: 90 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.4 + 0.3,
            vx: (Math.random() - 0.5) * 0.05 * dpr,
            vy: (Math.random() - 0.5) * 0.05 * dpr,
            a: Math.random() * Math.PI * 2,
        }))

        function tick() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (const s of stars) {
                s.x += s.vx
                s.y += s.vy
                s.a += 0.02
                if (s.x < 0) s.x = canvas.width
                if (s.x > canvas.width) s.x = 0
                if (s.y < 0) s.y = canvas.height
                if (s.y > canvas.height) s.y = 0

                const twinkle = (Math.sin(s.a) + 1) / 2 // 0..1
                ctx.beginPath()
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(190, 160, 255, ${0.25 + twinkle * 0.5})`
                ctx.shadowBlur = 8
                ctx.shadowColor = "rgba(160,120,255,0.6)"
                ctx.fill()
            }

            animationId = requestAnimationFrame(tick)
        }
        animationId = requestAnimationFrame(tick)
        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener("resize", resize)
        }
    }, [])

    return <canvas ref={ref} className="pointer-events-none fixed inset-0 -z-10" aria-hidden />
}
