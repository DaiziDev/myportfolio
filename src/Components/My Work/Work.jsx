export default function Work() {
  return (
    <div
      id="work"
      className="h-full w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-black">Recent Work</h1>
      <p>A collection of projects i've worked on</p>

      <div className="one w-[70%] flex items-center justify-start mt-5">
        <div className="left w-[35%] h-full ">
          <span className="text-purple-400 font-bold text-[15px]">
            Featured Project
          </span>
          <h2 className="text-2xl font-bold">Javascript Project</h2>
          <div className="border-none p-2 rounded-[12px] my-5 md:translate-x-10 bg-purple-500 text-white">
            A webpage, built with modern JavaScript, features smooth animations
            and interactive effects for an engaging user experience. Designed to
            be responsive and lively, it showcases the power of JavaScript in
            creating dynamic and user-friendly websites.
          </div>
          <div className="icon md:translate-x-10 text-2xl">
            <i class="fa-brands fa-html5 text-orange-600 hover:scale-[1.1] cursor-pointer"></i>
            <i class="fa-brands fa-css text-blue-600 hover:scale-[1.1] cursor-pointer"></i>
            <i class="fa-brands fa-square-js text-yellow-600 hover:scale-[1.1] cursor-pointer"></i>
          </div>
        </div>
        <div className="right h-full w-[30%] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://res.cloudinary.com/dlhevtzle/image/upload/v1761382082/js_qyfqdv.png" alt="" />
        </div>
      </div>

      <div className="one w-[70%] flex items-center justify-end mt-5">
        <div className="left w-[35%] h-full ">
          <span className="text-purple-400 font-bold text-[15px]">
            Featured Project
          </span>
          <h2 className="text-2xl font-bold">Classmates Website</h2>
          <div className="border-none p-2 rounded-[12px] my-5 md:translate-x-10 bg-purple-500 text-white">
            This website, built with html & tailwindcss, is designed for classmates to stay in touch, share updates, and collaborate easily. It features interactive elements and a user-friendly interface to facilitate communication and connection.
          </div>
          <div className="icon md:translate-x-10 text-2xl flex items-center">
            <i class="fa-brands fa-css text-blue-600 hover:scale-[1.1] cursor-pointer"></i>
            <img src="https://res.cloudinary.com/dlhevtzle/image/upload/v1761382341/tailwindcss_illvvz.png" className="h-8 w-8 hover:scale-[1.1] cursor-pointer" alt="" />
            <i class="fa-brands fa-square-js text-yellow-600 hover:scale-[1.1] cursor-pointer"></i>
          </div>
        </div>
        <div className="right h-full w-[30%] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://res.cloudinary.com/dlhevtzle/image/upload/v1761382072/class_dxmlx2.png" alt="" />
        </div>
      </div>

      <div className="one w-[70%] flex items-center justify-start mt-5">
        <div className="left w-[35%] h-full ">
          <span className="text-purple-400 font-bold text-[15px]">
            Featured Project
          </span>
          <h2 className="text-2xl font-bold">Portfolio Website</h2>
          <div className="border-none p-2 rounded-[12px] my-5 md:translate-x-10 bg-purple-500 text-white">
            This portfolio website, built with react framer-motion, showcases your skills, projects, and achievements in an engaging and interactive manner. It is designed to be visually appealing and easy to navigate, highlighting your professional expertise.
          </div>
          <div className="icon md:translate-x-10 text-2xl flex gap-2">
            <img src="https://res.cloudinary.com/dlhevtzle/image/upload/v1761382336/react_acpypb.png" className="h-8 w-8 hover:scale-[1.1] cursor-pointer" alt="" />
            <img src="https://res.cloudinary.com/dlhevtzle/image/upload/v1761382341/tailwindcss_illvvz.png" className="h-8 w-8 hover:scale-[1.1] cursor-pointer" alt="" />
            <img src="https://res.cloudinary.com/dlhevtzle/image/upload/v1761382754/typescript_ljzxwa.png" className="h-8 w-8 hover:scale-[1.1] cursor-pointer" alt="" />
          </div>
        </div>
        <div className="right h-full w-[30%] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://res.cloudinary.com/dlhevtzle/image/upload/v1761382112/portfolio_repfgi.png" alt="" />
        </div>
      </div>
    </div>
  );
}
