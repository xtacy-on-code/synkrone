import { Home, Calendar, Settings, BarChart2, Users, FileText } from "lucide-react"
import { Button } from "./ui/button"

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-zinc-200 p-4 flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-zinc-800">Dashboard</h1>
      </div>

      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Calendar className="mr-2 h-4 w-4" />
          Calendar
        </Button>
        
      </div>

      <div className="mt-auto">
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
    </div>
  )
}
