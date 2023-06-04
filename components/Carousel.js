'use client'
import Image from "next/image"
import herobg from  "@ericadl/public/assets/img/herobg.png"

export default function Carousel() {
  return (
    // After that, i need to do dynamic component , with the image that state in the API
<div id="gallery" className="relative w-full" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
                src={herobg}
                width={100}
                height={100}
                alt="slice_1"
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />            
            {/* <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""> */}
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
                src={herobg}
                width={100}
                height={100}
                alt="slice_1"
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />            
            {/* <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""> */}
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
                src={herobg}
                width={100}
                height={100}
                alt="slice_1"
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />            
            {/* <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""> */}
        </div>
        
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

  )
}
