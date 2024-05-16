import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { iconList } from "@/constants/icons"

import { Smile, icons, } from "lucide-react"
import { useState } from "react"


function IconList({ selectedIcon }) {
    const [openDialog, setOpenDialog] = useState(false)
    const Icon = ({ name, color, size }) => {
        const LucidIcon = icons[name];
        if (!LucidIcon) {
            return;
        }
        return <LucidIcon color={color} size={size}
        />

    }
    return (
        <div>
            <label>Icon</label>
            <div
                onClick={() => setOpenDialog(true)}
                className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px]
        h-[50px] my-5 flex items-center justify-center "
            >
                <Smile />
            </div>
            <Dialog open={openDialog}>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Pic your favorite icon</DialogTitle>
                        <DialogDescription>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4
                            overflow-auto ma-w-lg min-w-md h-[400px] p-6">
                                {iconList.map((icon, index) => (
                                    <div className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                                     
                                     onClick={() => {selectedIcon(icon);setOpenDialog(false)}}>
                                        <Icon key={index} name={icon} color='#000' size={20} />
                                    </div>
                                ))}
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>

    )
}

export default IconList