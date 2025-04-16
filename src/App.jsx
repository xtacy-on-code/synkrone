import { Sidebar } from "./components/sidebar"
import { ChatSection } from "./components/chat-section"
import { ProductivityZone } from "./components/productivity-zone"

export default function App() {
  return (
    <div className="flex h-screen bg-zinc-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-1 overflow-hidden">
          <ChatSection />
          <ProductivityZone />
        </div>
      </div>
    </div>
  )
}
