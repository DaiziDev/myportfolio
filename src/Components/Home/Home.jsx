import { useState } from "react";
import Navbar from "./Navbar";

export default function Home() {
  const [isFullImage, setIsFullImage] = useState(false);

  const handleImageClick = () => {
    setIsFullImage(true);
  };
  const handleClose = () => {
    setIsFullImage(false);
  };
  return (
    <div id="home">
      <Navbar />
      <div className="h-[100vh] flex flex-col items-center justify-center text-2xl relative overflow-hidden">
        {/* Text Content */}

        <div className="text-content text-center h-[60%] w-[100%] sm:w-[90%] absolute top-20 sm:top-30 flex flex-col items-center justify-center">
          <p className="">👋My name is daizi and i am a freelance</p>
          <h1 className="work1">Webdesigner</h1>
          <h1 className="work2">& Fullstack Developer</h1>
          <div className="location w-full flex flex-col md:flex-row justify-between mt-10">
            <div>Located in Cameroon, Yaounde</div>
            <div>trusted to deliver excellence worldwide.</div>
          </div>
        </div>

        {/* Image Content */}
        <div className="h-[50%] w-[100%] sm:w-[90%] absolute top-[45%] sm:top-[45%] flex items-center justify-center">
          <img
            onClick={handleImageClick}
            className="h-40 border-2 rounded-2xl p-1 md:h-100 lg:h-140 sm:border-0 sm:rounded-none sm:h-70 cursor-pointer"
            src="/src/assets/Me.png"
            alt=""
          />

          {/* Optional: Button or instructions */}
          {isFullImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={handleClose}
            >
              <div className="relative max-w-4xl max-h-full p-4">
                <button
                  className="absolute top-2 right-2 text-white text-3xl z-50"
                  onClick={handleClose}
                >
                  &times;
                </button>
                <img
                  src="/src/assets/Me2.jpg"
                  alt="Full View"
                  className="max-w-full max-h-full rounded-lg"
                />
              </div>
            </div>
          )}
                <div className="buttons w-full sm:w-fit absolute bottom-0 sm:bottom-2  z-50 flex items-center justify-center flex-col sm:flex-row gap-4">
        <button className="firstB cursor-pointer w-70 sm:w-90 transition duration-500 border py-2 px-4 rounded text-white text-[19px] sm:text-4xl border-none">
          You need a designer
        </button>
        <button className="secondB text-[18px] sm:w-90 sm:text-3xl cursor-pointer transition duration-500 p-2 border-2 rounded border-white">
          You need a developper
        </button>
      </div>
        </div>
      </div>
    </div>
  );
}
