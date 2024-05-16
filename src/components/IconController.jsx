import { Slider } from "@/components/ui/slider";
import { Smile } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from '../context/UpdateStorageContext';


function IconController() {
  const storageValue = JSON.parse(localStorage.getItem('value'))
  const [size, setSize] = useState(storageValue?storageValue?.iconSize:280)
  const [rotate, setRotate] = useState(storageValue?storageValue?.iconRotate:0)
  const [color, setColor] = useState(storageValue?storageValue?.iconColor:'#fff')
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext)
  
  useEffect(() => {
    const updatedValue={
      ...storageValue,  
      iconSize:size,
      iconRotate:rotate,
      iconColor:color,
      icon:'Smile'
    }
    setUpdateStorage(updatedValue)
    localStorage.setItem('value', JSON.stringify(updatedValue))
  }, [size, rotate, color])

  return (
    <div>
      <div>
        <label>Icon</label>
        <div
          className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px]
        h-[50px] my-5 flex items-center justify-center "
        >
          <Smile />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">Size <span>{size}px</span></label>
          <Slider defaultValue={[size]} max={512} step={1} 
          onValueChange={(value)=>setSize(value[0])}
          />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">Rotate <span>{rotate}°</span></label>
          <Slider defaultValue={[rotate]} max={360} step={1} 
          onValueChange={(value)=>setRotate(value[0])}
          />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">Icon Color</label>
          <ColorPickerController hideController={true}
          selectedColor={(color)=>setColor(color)} />
        </div>
      </div>
    </div>
  );
}

export default IconController;
