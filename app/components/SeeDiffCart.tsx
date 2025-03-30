import Image from "next/image"

const SeeDiffCart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
          <div className="flex gap-2 p-2 w-full shadow-md bg-white">
          <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726726/5_zwlia7.png"
          alt="ourserviceimg"
          fill // fills parent container
          objectFit="cover" // maintains aspect ratio while covering container
          className="rounded"
        />
      </div>
      <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726725/6_pwaz1q.jpg"
          alt="ourserviceimg"
          fill
          objectFit="cover"
          className="rounded"
        />
      </div>  
          </div>
          <div className="flex gap-2 p-2 w-full shadow-md bg-white">
          <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726724/7_zbtimi.jpg"
          alt="ourserviceimg"
          fill // fills parent container
          objectFit="cover" // maintains aspect ratio while covering container
          className="rounded"
        />
      </div>
      <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726725/8_tkgo9t.jpg"
          alt="ourserviceimg"
          fill
          objectFit="cover"
          className="rounded"
        />
      </div>  
          </div>
          <div className="flex gap-2 p-2 w-full shadow-md bg-white">
          <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726724/2_zibvmn.jpg"
          alt="ourserviceimg"
          fill // fills parent container
          objectFit="cover" // maintains aspect ratio while covering container
          className="rounded"
        />
      </div>
      <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726723/4_vbrd4v.avif"
          alt="ourserviceimg"
          fill
          objectFit="cover"
          className="rounded"
        />
      </div>  
          </div>
          <div className="flex gap-2 p-2 w-full shadow-md bg-white">
          <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726724/3_f4o1ka.jpg"
          alt="ourserviceimg"
          fill // fills parent container
          objectFit="cover" // maintains aspect ratio while covering container
          className="rounded"
        />
      </div>
      <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726620/WhatsApp_Image_2024-10-12_at_01.24.57_34f8328f_oygbpc.jpg"
          alt="ourserviceimg"
          fill
          objectFit="cover"
          className="rounded"
        />
      </div>  
          </div>
        </div>
  )
}

export default SeeDiffCart
