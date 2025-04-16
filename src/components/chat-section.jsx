"use client"

import { useState } from "react"
import { Send, Mic } from "lucide-react"
import { Button } from "./ui/button"
import { Avatar } from "./ui/avatar"
import { Card } from "./ui/card"

export function ChatSection() {
  const [messages, setMessages] = useState([{ id: 1, text: "Hello! How can I help you today?", isUser: false }])
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="flex-1 flex flex-col border-r border-zinc-200 h-full">
      <div className="p-4 border-b border-zinc-200">
        <h2 className="text-lg font-semibold text-zinc-800">AI Assistant</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
            <Card className={`max-w-[80%] p-3 ${message.isUser ? "bg-emerald-100" : "bg-white"}`}>
              {!message.isUser && (
                <div className="flex items-center mb-2">
                  <Avatar className="h-6 w-6 mr-2">
                    <div className="bg-emerald-500 h-full w-full flex items-center justify-center text-white text-xs">
                      AI
                    </div>
                  </Avatar>
                  <span className="text-xs font-medium">Assistant</span>
                </div>
              )}
              <p className="text-sm">{message.text}</p>
            </Card>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-zinc-200">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 pr-10 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Mic className="h-4 w-4 text-zinc-500" />
            </Button>
          </div>
          <Button size="icon" className="bg-emerald-500 hover:bg-emerald-600">
            <Send className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center mt-3 space-x-2">
          <Button variant="outline" size="sm" className="text-xs">
            Summarize
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Translate
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Explain
          </Button>
        </div>
      </div>
    </div>
  )
}
