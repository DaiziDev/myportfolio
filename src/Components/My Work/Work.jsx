export default function Work() {
  return (
    <div
      id="work"
      className="h-full w-full flex flex-col items-center justify-center px-5 mt-5"
    >
      <h1 className="text-4xl font-black">Recent Work</h1>
      <p className="mb-10">A collection of projects i've worked on</p>

      <div
        data-aos="fade-right"
        className="w-[100%] h-90 sm:w-[80%] sm:h-80 relative sm:px-5 flex flex-col items-center justify-start mt-5 mb-5 "
      >
        <div className="absolute bottom-0 h-[40%] text-[15px] sm:tex-xl  sm:w-[35%] sm:h-full sm:left-15 z-10">
          <span className="text-accent font-bold text-[15px]">
            Featured Project
          </span>
          <h2 className="text-2xl font-bold cursor-pointer hover:text-3xl transition-all duration-300 text-primary">
            <a href="https://gracebilingual.com/">Grace Bilingual Plateform</a>
          </h2>
          <div className="border-none p-2 rounded-[12px] my-5 md:translate-x-10 bg-accent/90 text-white">
            A webpage, built with modern JavaScript, features smooth animations
            and interactive effects for an engaging user experience. Website
            design to ease teachers experience through out the year enter marks
            manage presence and more.
          </div>
          <div className="icon md:translate-x-10 text-2xl">
            <i class="fa-brands fa-php text-accent hover:scale-[1.1] cursor-pointer"></i>
            <i class="fa-brands fa-css text-blue-600 hover:scale-[1.1] cursor-pointer"></i>
            <i class="fa-brands fa-square-js text-yellow-600 hover:scale-[1.1] cursor-pointer"></i>
          </div>
        </div>
        <div className="right absolute sm:right-0 top-0 sm:h-full h-[60%] bg-red-400 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
          <img
            className="h-full w-full"
            src="https://res.cloudinary.com/dlhevtzle/image/upload/v1769015188/Capture_d_%C3%A9cran_2026-01-21_143956_lf4lpe.png"
            alt="grace bilingual image loading"
          />
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="one w-[100%] h-130 sm:w-[80%] sm:h-80 relative sm:px-5 flex items-center justify-start mt-40 sm:my-20 "
      >
      <div className="top-0 w-[100%] sm:w-[35%] h-[60%] sm:h-full absolute sm:right-20 z-10">
          <div className="text-start sm:text-end">
            <span className="text-accent text-start font-bold text-[15px]">
              Featured Project
            </span>
            <h2 className="text-2xl font-bold cursor-pointer hover:text-3xl transition-all duration-300 text-primary">
              <a href="https://gbhs-students.onrender.com/">GBHS Website</a>
            </h2>
          </div>
          <div className="border-none p-2 rounded-[12px] my-5 md:translate-x-10 bg-accent/90 text-white">
            This website, built with html & tailwindcss, is designed for
            classmates to stay in touch, share updates, and collaborate easily.
            It features interactive elements and a user-friendly interface to
            facilitate communication and connection.
          </div>
          <div className="icon md:translate-x-10 text-2xl flex items-center justify-end">
            <i class="fa-brands fa-css text-blue-600 hover:scale-[1.1] cursor-pointer"></i>
            <img
              src="https://res.cloudinary.com/dlhevtzle/image/upload/v1761382341/tailwindcss_illvvz.png"
              className="h-8 w-8 hover:scale-[1.1] cursor-pointer"
              alt=""
            />
            <i class="fa-brands fa-square-js text-yellow-600 hover:scale-[1.1] cursor-pointer"></i>
          </div>
        </div>
        <div className="absolute bottom-0 h-[40%] sm:left-20 sm:h-full bg-red-400 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://res.cloudinary.com/dlhevtzle/image/upload/v1761382072/class_dxmlx2.png"
            alt="Gbhs image loading"
            className="h-full w-full"
          />
        </div>
      </div>

      <div
        data-aos="fade-right"
        className=" w-[100%] h-150 sm:w-[80%] sm:h-80 relative sm:px-5 flex items-center justify-start mt-5 "
      >
        <div className="sm:w-[35%] w-full h-[60%] sm:h-full absolute sm:left-15 bottom-0 z-10">
          <span className="text-accent font-bold text-[15px]">
            Featured Project
          </span>
          <h2 className="text-2xl font-bold cursor-pointer hover:text-3xl transition-all duration-300 text-primary">
            <a href="https://kotaflix-rca.onrender.com/">Kotaflix-RCA</a>
          </h2>
          <div className="border-none p-2 rounded-[12px] my-5 md:translate-x-10 bg-accent/80 text-white">
            HD Streaming platform built with react and tailwindcss, offering a
            vast library of movies and TV shows. Enjoy seamless streaming with a
            user- friendly interface, personalized recommendations, and
            high-quality content for an immersive entertainment experience.
          </div>
          <div className="icon md:translate-x-10 text-2xl">
            <i class="fa-brands fa-react text-blue-400 hover:scale-[1.1] cursor-pointer"></i>
            <i class="fa-brands fa-java text-red-400 hover:scale-[1.1] cursor-pointer" ></i>
            <i class="fa-brands fa-square-js text-yellow-600 hover:scale-[1.1] cursor-pointer"></i>
          </div>
        </div>
        <div className="absolute sm:right-0 top-0 h-[40%] sm:h-full bg-red-400 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
          <img
            className="h-full w-full"
            src="https://res.cloudinary.com/dlhevtzle/image/upload/v1769015188/Capture_d_%C3%A9cran_2026-01-21_152627_ss8je0.png"
            alt="kotaflix image loading"
          />
        </div>
      </div>

    </div>
  );
}
