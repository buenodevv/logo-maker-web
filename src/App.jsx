import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroudController from "./components/BackgroudController";
import { useState } from "react";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";
function App() {
  const [selectedIndex, setSelectedIndex] = useState();
  const [updateStorage, setUpdateStorage] = useState({});
  return (
    <UpdateStorageContext.Provider value={{updateStorage, setUpdateStorage}} >
      <div>
        <Header />
        <div className="w-64 fixed">
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>
        <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
          <div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
            {selectedIndex == 0 ? <IconController /> : <BackgroudController />}
          </div>
          <div className="md:col-span-3">
            <LogoPreview />
          </div>
          <div className="bg-blue-300 md:col-span-1">Ads</div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}

export default App;
