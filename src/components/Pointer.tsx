import Image from "next/image";
import mousePointerImage from '@/assets/images/mouse-pointer.svg'
import { twMerge } from "tailwind-merge";
export default function Pointer (props: {name: string; color?: 'red' | 'blue';}) {
  const { name, color } = props
  return (
    <div className="relative">
        <Image src={mousePointerImage} alt="mouse-pointer-image" className="filter invert size-5" />
        <div className="absolute top-full left-full">
            <div className={twMerge("inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none", color === 'red' && 'bg-red-500' )}>{name}</div>
        </div>
    </div>
  )
}