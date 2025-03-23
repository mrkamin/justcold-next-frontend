export default function PricingPremiumSection() {
    return (
      <div className="w-full flex flex-col items-center px-4  bg-white">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
          Affordable Pricing for Premium Cold Room Care
        </h2>
        {/* Subheading */}
        <p className="text-center text-gray-600 max-w-2xl mb-10">
          Why choose inexperience? Trust JustCold Referigeration & Maintainence will
          competitively satisfy all of your Referigeration needs.
        </p>
  
        {/* Container for the line and items */}
        <div className="relative w-full max-w-5xl flex items-center justify-between mx-auto">
          {/* Horizontal line (behind icons) */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-200 -z-10" />
  
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center w-1/5 px-2">
            {/* Icon wrapper */}
            <div className="relative z-10 w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-3">
              {/* Replace with your icon (e.g., an SVG or react-icons) */}
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M..." />
              </svg>
            </div>
            {/* Title */}
            <h3 className="font-semibold text-md md:text-lg text-gray-800">
              Advance Technology &amp; Process
            </h3>
          </div>
  
          {/* Item 2 */}
          <div className="flex flex-col items-center text-center w-1/5 px-2">
            <div className="relative z-10 w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-3">
              {/* Your icon */}
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M..." />
              </svg>
            </div>
            <h3 className="font-semibold text-md md:text-lg text-gray-800">
              100% Customer Satisfaction Guarantee
            </h3>
          </div>
  
          {/* Item 3 */}
          <div className="flex flex-col items-center text-center w-1/5 px-2">
            <div className="relative z-10 w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-3">
              {/* Your icon */}
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M..." />
              </svg>
            </div>
            <h3 className="font-semibold text-md md:text-lg text-gray-800">
              Over 10 Years of Experience
            </h3>
          </div>
  
          {/* Item 4 */}
          <div className="flex flex-col items-center text-center w-1/5 px-2">
            <div className="relative z-10 w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-3">
              {/* Your icon */}
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M..." />
              </svg>
            </div>
            <h3 className="font-semibold text-md md:text-lg text-gray-800">
              Safe &amp; Eco-Friendly Cleaning Methods
            </h3>
          </div>
  
          {/* Item 5 */}
          <div className="flex flex-col items-center text-center w-1/5 px-2">
            <div className="relative z-10 w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-3">
              {/* Your icon */}
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M..." />
              </svg>
            </div>
            <h3 className="font-semibold text-md md:text-lg text-gray-800">
              Licensed &amp; Insured Professionals
            </h3>
          </div>
        </div>
      </div>
    );
  }
  