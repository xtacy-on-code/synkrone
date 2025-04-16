"use client"

import { useState, useEffect } from "react"
import { Play, Pause, RefreshCw } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Progress } from "./ui/progress"

export function ProductivityZone() {
  const [isActive, setIsActive] = useState(false)
  const [isPomodoroActive, setIsPomodoroActive] = useState(false)
  const [time, setTime] = useState(25 * 60) // 25 minutes in seconds
  const [progress, setProgress] = useState(100)
  const [mode, setMode] = useState("pomodoro") // pomodoro, shortBreak, longBreak

  useEffect(() => {
    let interval = null

    if (isPomodoroActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime - 1
          const totalTime = mode === "pomodoro" ? 25 * 60 : mode === "shortBreak" ? 5 * 60 : 15 * 60
          setProgress((newTime / totalTime) * 100)
          return newTime
        })
      }, 1000)
    } else if (time === 0) {
      setIsPomodoroActive(false)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPomodoroActive, time, mode])

  const toggleTimer = () => {
    setIsPomodoroActive(!isPomodoroActive)
  }

  const resetTimer = () => {
    setIsPomodoroActive(false)
    if (mode === "pomodoro") {
      setTime(25 * 60)
    } else if (mode === "shortBreak") {
      setTime(5 * 60)
    } else {
      setTime(15 * 60)
    }
    setProgress(100)
  }

  const changeMode = (newMode) => {
    setMode(newMode)
    setIsPomodoroActive(false)

    if (newMode === "pomodoro") {
      setTime(25 * 60)
    } else if (newMode === "shortBreak") {
      setTime(5 * 60)
    } else {
      setTime(15 * 60)
    }
    setProgress(100)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="w-96 bg-white border-l border-zinc-200 p-4 flex flex-col h-full">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-zinc-800">Productivity Zone</h2>
      </div>

      <Card className="p-4 mb-6">
        <h3 className="text-md font-medium mb-4">Pomodoro Timer</h3>

        <div className="flex justify-center mb-6">
          <div className="text-4xl font-bold text-emerald-600">{formatTime(time)}</div>
        </div>

        <Progress value={progress} className="mb-4" />

        <div className="flex justify-center space-x-2 mb-4">
          <Button
            variant={mode === "pomodoro" ? "default" : "outline"}
            onClick={() => changeMode("pomodoro")}
            className={mode === "pomodoro" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
          >
            Pomodoro
          </Button>
          <Button
            variant={mode === "shortBreak" ? "default" : "outline"}
            onClick={() => changeMode("shortBreak")}
            className={mode === "shortBreak" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
          >
            Short Break
          </Button>
          <Button
            variant={mode === "longBreak" ? "default" : "outline"}
            onClick={() => changeMode("longBreak")}
            className={mode === "longBreak" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
          >
            Long Break
          </Button>
        </div>

        <div className="flex justify-center space-x-2">
          <Button onClick={toggleTimer} className="bg-emerald-500 hover:bg-emerald-600">
            {isPomodoroActive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            {isPomodoroActive ? "Pause" : "Start"}
          </Button>
          <Button variant="outline" onClick={resetTimer}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </Card>

      <Card className="p-4 mb-6">
        <h3 className="text-md font-medium mb-3">Tasks</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">Work on Synkrone</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">Apply for CCPS</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">Study</span>
          </div>
        </div>
        <Button variant="ghost" className="w-full mt-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
          + Add Task
        </Button>
      </Card>

      <Card className="p-4">
        <h3 className="text-md font-medium mb-3">Focus Mode</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm">Enable Focus Mode</span>
          <Button
            variant="outline"
            size="sm"
            className={isActive ? "bg-emerald-500 text-white hover:bg-emerald-600" : ""}
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? "On" : "Off"}
          </Button>
        </div>
      </Card>
    </div>
  )
}
