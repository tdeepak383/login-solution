import React from "react";
import portfolioImg1 from '../assets/portfolio-1.jpg'
import portfolioImg2 from '../assets/portfolio-2.jpg'
import video1 from '../assets/portfolio-video1.mp4'
import video2 from '../assets/portfolio-video2.mp4'
import video3 from '../assets/portfolio-video7.mp4'
import video4 from '../assets/portfolio-video4.mp4'
import video5 from '../assets/portfolio-video5.mp4'
import video6 from '../assets/portfolio-video6.mp4'

const PortfolioGrid = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div>
        <div className="flex flex-col gap-10">
          <div className="relative grid max-h-[640px] grid-cols-4 grid-rows-4 gap-1 md:gap-4">

            {/* Image 1 */}
            <div className="bg-gray-100 flex shrink-0 items-center justify-center overflow-hidden rounded-md md:rounded-2xl">
              <div className="relative overflow-hidden bg-white h-full w-full object-cover rounded-none md:rounded-2xl transition-opacity duration-300 ease-in-out aspect-video">
                <video
                  src={video6}
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  loop
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Video 1 */}
            <div className="bg-gray-100 flex shrink-0 items-center justify-center overflow-hidden rounded-md md:rounded-2xl col-span-2 row-span-2">
              {/* <div className="relative overflow-hidden bg-white h-full w-full object-cover rounded-none md:rounded-2xl transition-opacity duration-300 ease-in-out aspect-video">
                <video
                  src={video2}
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  loop
                  className="h-full w-full object-cover"
                />
              </div> */}
              <img
                alt="media-4"
                src={portfolioImg1}
                width="459"
                height="297"
                decoding="async"
                className="h-full border w-full object-cover rounded-none md:rounded-2xl transition-opacity duration-300 ease-in-out aspect-auto"
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>

            {/* Video 2 */}
            <div className="bg-gray-100 flex shrink-0 items-center justify-center overflow-hidden rounded-md md:rounded-2xl row-span-2">
              <div className="relative overflow-hidden bg-white h-full w-full object-cover rounded-none md:rounded-2xl transition-opacity duration-300 ease-in-out aspect-video">
                <video
                  src={video3}
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  loop
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-gray-100 flex shrink-0 items-center justify-center overflow-hidden rounded-md md:rounded-2xl row-span-2">
              <div className="relative overflow-hidden bg-white h-full w-full object-cover rounded-none md:rounded-2xl transition-opacity duration-300 ease-in-out aspect-video">
                <video
                  src={video4}
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  loop
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div className="bg-gray-100 flex shrink-0 items-center justify-center overflow-hidden rounded-md md:rounded-2xl">
              {/* <img
                alt="media-4"
                src="https://rhapsody-staging.fra1.cdn.digitaloceanspaces.com/419d324f1920c42136728033fb12cd52.webp"
                width="459"
                height="297"
                decoding="async"
                className="h-full w-full object-cover rounded-none md:rounded-2xl transition-opacity duration-300 ease-in-out aspect-auto"
                loading="lazy"
                style={{ color: "transparent" }}
              /> */}
              <div className="relative overflow-hidden bg-white h-full w-full object-cover rounded-none md:rounded-2xl transition-opacity duration-300 ease-in-out aspect-video">
                <video
                  src={video1}
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  loop
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Video 4 */}
            <div className="bg-gray-100 flex shrink-0 items-center justify-center overflow-hidden rounded-md md:rounded-2xl col-span-2 row-span-2">
               <div className="relative overflow-hidden bg-white h-full w-full object-cover rounded-none md:rounded-2xl transition-opacity duration-300 ease-in-out aspect-video">
                <video
                  src={video2}
                  muted
                  playsInline
                  autoPlay
                  preload="auto"
                  loop
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Video 5 */}
            <div className="bg-gray-100 flex shrink-0 items-center justify-center overflow-hidden rounded-md md:rounded-2xl col-span-2">
               <img
                alt="media-4"
                src={portfolioImg2}
                width="459"
                height="297"
                decoding="async"
                className="h-full w-full object-cover rounded-none md:rounded-2xl transition-opacity duration-300 ease-in-out aspect-auto"
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
