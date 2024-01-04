import { NavBar } from "./components"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="  w-full bg-slate-900 min-h-screen  ">
      <NavBar />
      <div className="h-[calc(100dvh-70px)] w-full ">
        <Outlet />
      </div>
    </div>
  )
}

export default App
