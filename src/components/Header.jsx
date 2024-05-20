import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

function Header({ DownloadIcon }) {
  return (
    <div className="p-4 shadow-sm border flex justify-between items-center">
      <div className="flex gap-2 items-center justify-center ">
        <img src="/logo-of.png" alt="logo" className="h-10 w-10" />
        <h2 className="font-bold text-4xl text-[#F15757]">ELOGO</h2>
        
      </div>

      <Button
        className="flex gap-2 items-center "
        onClick={() => DownloadIcon(Date.now())}
      >
        <Download className="h-4 w-4" />
        Dowload
      </Button>
    </div>
  );
}

export default Header;
