import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from 'react'
import ColorPickerController from "./ColorPickerController";

function BackgroudController() {
  const [rounded, setRounded] = useState(0)
  const [padding, setPadding] = useState(0)
  const [color, setColor] = useState('rgba(255,255,255,1)')
  const storageValue = JSON.parse(localStorage.getItem('value'))

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color

    }
    localStorage.setItem('value', JSON.stringify(updateValue))
  }, [rounded, padding, color])
  return (
    <div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">Rouded <span>{rounded}px</span></label>
        <Slider defaultValue={[0]} max={512} step={1}
          onValueChange={(value) => setRounded(value[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">Padding <span>{padding}px</span></label>
        <Slider defaultValue={[40]} max={100} step={1}
          onValueChange={(value) => setPadding(value[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">Background Color</label>
        <ColorPickerController hideController={false}
          selectedColor={(color) => setColor(color)} />
      </div>
    </div>
  )
}

export default BackgroudController