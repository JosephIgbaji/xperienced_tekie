import Image from "next/image"
import X from "../../../public/assets/images/X.png"

type Props = {}

export default function DashboardNavbar({}: Props) {
  return (<nav className="flex justify-between py-4 items-center ">
    <div>
        <h1 className="font-bol">Welcome Intern</h1>
    </div>
    <div className="bg-blue-950 rounded-full w-10 h-10 px-2 flex items-center justify-center font-bold text-white">
        logo
    </div>
  </nav>
  )
}