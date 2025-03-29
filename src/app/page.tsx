"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    if (canvas) {
      const canvasContext = canvas.getContext("2d")
      setContext(canvasContext)
    }
  }, [])

  useEffect(() => {
    if (context !== null) {
      // キャンバスの初期サイズを設定
      context.canvas.width = window.innerWidth
      context.canvas.height = window.innerHeight

      // リサイズハンドラー
      const handleResize = () => {
        context.canvas.width = window.innerWidth
        context.canvas.height = window.innerHeight
      }

      // マウス移動ハンドラー
      const handleMouseMove = (e: MouseEvent) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        context.fillStyle = "#555"
        context.font = "24px serif"
        context.textAlign = "center"
        context.textBaseline = "middle"
        context.fillText("糞田", e.clientX, e.clientY)
      }

      window.addEventListener("resize", handleResize)
      document.body.addEventListener("mousemove", handleMouseMove)

      // クリーンアップ関数
      return () => {
        window.removeEventListener("resize", handleResize)
        document.body.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [context])

  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center w-full h-full">
        <canvas id="canvas" className="fixed top-0 left-0 w-full h-full z-10" />
        <h1 className="text-6xl z-20 h1-hover-effect">クソだね？</h1>
      </div>

      <div className="fixed bottom-0 left-0 cursor-pointer z-50">
        <a href="https://kuso.domains">kuso.domains</a>
      </div>
    </div>
  )
}
