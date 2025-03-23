const HeroTitle = () => {
  return (
    <div className="absolute top-35 md:left-5 lg:left-35 
                    sm:w-[100%] md:w-[80%] lg:w-[50%]
                    flex flex-col gap-2 z-30 p-5"
    >
      <p className="bg-gradient-to-r from-[#001f3f] to-[#24b8eb] text-white p-2 
                    rounded-[0.5rem] w-fit"
      >
        JUSTCOLD REFRIGERATION, MAINTENANCE & MORE
      </p>
      <h1 className="text-white md:text-4xl lg:text-7xl font-semibold">
  Revive Your Cold Room&apos;s <span className="text-[#24b8eb]">Beauty</span>
</h1>

<p className="text-white text-lg">
  At JustCold Refrigeration LTD, we put our clients first by upholding the highest industry standards through expertise, courtesy, and professionalism. You&apos;ll be amazed by the results and glad you chose us—here are just some of our services:
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
