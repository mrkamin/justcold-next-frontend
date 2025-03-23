import { GiBubbles } from "react-icons/gi"
import { PiPhoneCall } from "react-icons/pi"
import { TfiEmail } from "react-icons/tfi"

const NavUpperHead = () => {
  return (
    <nav className="bg-gradient-to-r from-[#001f3f] to-[#24b8eb] h-[12rem] md:h-[2rem]
                    hidden md:flex justify-center w-full">
        <div className="flex flex-col sm:flex-row justify-between h-[12rem] md:h-[2rem] items-center 
                        md:w-[90%] lg:w-[80%]">
            <div className="text-white text-xl">
                <GiBubbles className="" />
            </div>
            <div className="flex flex-col sm:flex-row gap-5 items-center text-white">
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <div className="border border-white rounded-[50%] p-1">
                        <PiPhoneCall  />
                    </div>
                    <p>+44 7891 673331</p>
                </div>
                <hr className="transform rotate-90 w-[1.5rem] h-[1px]"/>
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <div className="border border-white rounded-[50%] p-1">
                     <TfiEmail />
                    </div>
                    <p>info@justcold.co.uk</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavUpperHead
