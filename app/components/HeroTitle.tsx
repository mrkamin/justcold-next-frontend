const HeroTitle = () => {
  return (
    <div className="absolute top-40 left-35 lg:w-[38%]
                    flex flex-col gap-2 z-30"
    >
      <p className="bg-gradient-to-r from-blue-800 to-[#24b8eb] text-white p-2 rounded-[0.5rem]
                    w-fit"
      >
        JUSTCOLD REFRIGERATION, MAINTENANCE & MORE
      </p>
      <h1 className="text-white text-7xl font-semibold">Restore Your Pool&apos;s <span className="text-[#24b8eb]">Beauty</span></h1>
      <p className="text-white text-lg">Here at JustCold Refrigeration LTD, we strive in making our clients
        a top priority, keeping with high industry standards, knowledge,
        courtesy, and professionalism. You&apos;ll be so Amazed with the results!, 
        and Happy you chose us!
        just some of our services
      </p>
      <div>
      <button className="bg-[#24b8eb] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Get a Free Estimation
      </button>
      </div>
    </div>
  )
}

export default HeroTitle
