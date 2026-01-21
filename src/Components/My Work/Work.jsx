export default function Work() {
  return (
    <div
      id="work"
      className="h-full w-full flex flex-col items-center justify-center px-5"
    >
      <h1 className="text-4xl font-black">Recent Work</h1>
      <p className="mb-10">A collection of projects i've worked on</p>

      <div
        data-aos="fad-left"
        className="one w-[80%] h-80 relative px-5 flex flex-col items-center justify-start mt-5 "
      >
        <div className="left w-[35%] h-full absolute left-15 z-10">
          <span className="text-purple-700 font-bold text-[15px]">
            Featured Project
          </span>
          <h2 className="text-2xl font-bold cursor-pointer hover:text-3xl transition-all duration-300">
            <a href="https://gracebilingual.com/">Grace Bilingual Plateform</a>
          </h2>
          <div className="border-none p-2 rounded-[12px] my-5 md:translate-x-10 bg-purple-700 text-white">
            A webpage, built with modern JavaScript, features smooth animations
            and interactive effects for an engaging user experience. Website
            design to ease teachers experience through out the year enter marks
            manage presence and more.
          </div>
          <div className="icon md:translate-x-10 text-2xl">
            <i class="fa-brands fa-php text-purple-700 hover:scale-[1.1] cursor-pointer"></i>
            <i class="fa-brands fa-css text-blue-600 hover:scale-[1.1] cursor-pointer"></i>
            <i class="fa-brands fa-square-js text-yellow-600 hover:scale-[1.1] cursor-pointer"></i>
          </div>
        </div>
        <div className="right absolute right-0 h-full bg-red-400 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
          <img
            className="h-full w-full"
            src="/src/assets/images/Capture d'écran 2026-01-21 143956.png"
            alt="grace bilingual image loading"
          />
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="one w-[80%] h-80 relative px-5 flex items-center justify-start my-20 "
      >
        <div className="left w-[35%] h-full absolute right-15 z-10">
          <div className="text-end">
            <span className="text-purple-700 text-start font-bold text-[15px]">
              Featured Project
            </span>
            <h2 className="text-2xl font-bold cursor-pointer hover:text-3xl transition-all duration-300">
              <a href="https://gbhs-students.onrender.com/">GBHS Website</a>
            </h2>
          </div>
          <div className="border-none p-2 rounded-[12px] my-5 md:translate-x-10 bg-purple-700 text-white">
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
        <div className="right absolute left-15 h-full bg-red-400 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://res.cloudinary.com/dlhevtzle/image/upload/v1761382072/class_dxmlx2.png"
            alt="Gbhs image loading"
            className="h-full w-full"
          />
        </div>
      </div>

      <div
        data-aos="fad-left"
        className="one w-[80%] h-80 relative px-5 flex items-center justify-start mt-5 "
      >
        <div className="left w-[35%] h-full absolute left-15 z-10">
          <span className="text-purple-700 font-bold text-[15px]">
            Featured Project
          </span>
          <h2 className="text-2xl font-bold cursor-pointer hover:text-3xl transition-all duration-300">
            <a href="https://kotaflix-rca.onrender.com/">Kotaflix-RCA</a>
          </h2>
          <div className="border-none p-2 rounded-[12px] my-5 md:translate-x-10 bg-purple-500 text-white">
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
        <div className="right absolute right-0 h-full bg-red-400 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
          <img
            className="h-full w-full"
            src="/src/assets/images/kota.png"
            alt="kotaflix image loading"
          />
        </div>
      </div>

    </div>
  );
}
