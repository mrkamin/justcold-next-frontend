const HeroTitle = () => {
  return (
    <div className="absolute top-50 md:left-5 lg:left-35 
                    sm:w-[100%] md:w-[80%] lg:w-[40%] 
                    bg-gradient-to-r from-[#001f3f] to-[#24b8eb]
                    flex flex-col gap-4 z-30 p-2 rounded-[0.2rem]"
    >
      <p className="bg-gradient-to-r from-[#001f3f] to-[#24b8eb] text-white p-1 
                    rounded-[0.5rem] w-fit text-sm "
      >
        JUSTCOLD REFRIGERATION, MAINTENANCE & MORE
      </p>
      <h1 className="text-white text-l md:text-4xl lg:text-6xl font-semibold">
  Revive Your Cold Room&apos;s <span className="text-[#24b8eb]">Beauty</span>
</h1>

<p
  className="text-white/80 text-md"
  style={{ whiteSpace: "pre-line" }}
>
  At JustCold Refrigeration LTD, we put our clients first by upholding 
  the highest industry standards through expertise, courtesy, and professionalism. 
  You&apos;ll be amazed by the results and glad you 
  chose us—
  here are just some of our services:
</p>


      <div>
        <button className="bg-[#24b8eb] text-white px-4 py-2 rounded-lg 
                           hover:bg-blue-600 transition courser-pointer"
        >
            Get a Free Estimation
        </button>
      </div>
    </div>
  )
}

export default HeroTitle
