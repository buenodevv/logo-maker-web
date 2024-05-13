
import Header from "./components/Header"
import SideNav from "./components/SideNav"
import IconController from './components/IconController';
import BackgroudController from "./components/BackgroudController";
import { useState } from "react";
function App() {
  const [selectedIndex, setSelectedIndex] = useState()
  return (
    <>
      <Header />
      <div className="w-64 fixed">
        <SideNav selectedIndex={(value)=>setSelectedIndex(value)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
        <div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
          {selectedIndex==0?<IconController />:<BackgroudController />}
        </div>
        <div className="md:col-span-3 bg-red-300">
          Preview
        </div>
        <div className="bg-blue-300">
    Ads
        </div>
      </div>
    </>
  )
}

export default App
