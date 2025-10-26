import WaterFillCircle from "./Loading";

const skills = [
  {
    logo: "https://res.cloudinary.com/dlhevtzle/image/upload/v1761382312/html_ki18ky.png",
    loading: "laoding",
    text: "HTML",
    paragraph: "Building solid, accessible websites from the ground up",
    circleData: { percentage: 100, number: 100 },
  },
  {
    logo: "https://res.cloudinary.com/dlhevtzle/image/upload/v1761382285/css_dobsqk.png",
    loading: "Loading....",
    text: "CSS",
    paragraph: "Designing visually appealing and user-friendly interfaces.",
    circleData: { percentage: 99, number: 99 },
  },
  {
    logo: "https://res.cloudinary.com/dlhevtzle/image/upload/v1761382278/bootstrap_yakpvx.png",
    loading: "Loading....",
    text: "BootStrap",
    paragraph: "Creating responsive sites quickly and efficiently.",
    circleData: { percentage: 97, number: 97 },
  },
  {
    logo: "https://res.cloudinary.com/dlhevtzle/image/upload/v1761382322/js_dnzwlh.png",
    loading: "Loading....",
    text: "JavaScript",
    paragraph: "Adding interactivity that engages users.",
    circleData: { percentage: 70, number: 70 },
  },
  {
    logo: "https://res.cloudinary.com/dlhevtzle/image/upload/v1761382318/jquery_c0br2n.png",
    loading: "Loading....",
    text: "JQuery",
    paragraph: "Simplifying JavaScript for smooth functionality.",
    circleData: { percentage: 50, number: 50 },
  },
  {
    logo: "https://res.cloudinary.com/dlhevtzle/image/upload/v1761382341/tailwindcss_illvvz.png",
    loading: "Loading....",
    text: "Tailwind",
    paragraph: "Crafting modern, customizable designs fast.",
    circleData: { percentage: 90, number: 90 },
  },
  {
    logo: "https://res.cloudinary.com/dlhevtzle/image/upload/v1761382336/react_acpypb.png",
    loading: "Loading....",
    text: "React",
    paragraph: "Building dynamic, scalable web apps.",
    circleData: { percentage: 60, number: 60 },
  },
  {
    logo: "https://res.cloudinary.com/dlhevtzle/image/upload/v1761382297/git_zbs01z.png",
    loading: "Loading....",
    text: "Git",
    paragraph: "Ensuring organized and collaborative version control.",
    circleData: { percentage: 60, number: 60 },
  },
  {
    logo: "https://res.cloudinary.com/dlhevtzle/image/upload/v1761382303/github_bdvt9m.png",
    loading: "Loading....",
    text: "GitHub",
    paragraph: "Sharing and managing code seamlessly.",
    circleData: { percentage: 80, number: 80 },
  },
  {
    logo: "https://res.cloudinary.com/dlhevtzle/image/upload/v1761382293/figma_tv1pn4.png",
    loading: "Loading....",
    text: "Figma",
    paragraph: "Designing intuitive interfaces collaboratively",
    circleData: { percentage: 55, number: 55 },
  },
];
  
export default function About() {
  return (
    <div className="flex flex-col h-full" id="about">
      <div className="flex md:gap-15 flex-col relative w-full h-[70%] md:flex-row md:h-[60%] items-center justify-center pt-5">
        {/* imgage of about me */}
        <div className="h-[50%] w-full md:h-full flex flex-col gap-10 relative ">
          <div className="hidden md:flex self-center md:self-end md:mr-20 mr-0 w-60 h-80 rounded-2xl overflow-hidden">
            <img
              className="filter-[saturate(0)] w-full h-auto object-center"
              src="https://res.cloudinary.com/dlhevtzle/image/upload/v1761381889/20251007_122302_uktazt.jpg"
              alt=""
            />
          </div>
          <div className="w-60 h-80 rounded-2xl self-center md:self-end overflow-hidden">
            <img
              className="filter-[saturate(0)] w-full h-auto object-center"
              src="https://res.cloudinary.com/dlhevtzle/image/upload/v1761381880/IMG_0924_teonhg.jpg"
              alt=""
            />
          </div>
        </div>

        {/* text of about me  */}
        <div className="w-full h-[50%] md:h-full flex items-center justify-center flex-col text-2xl">
          <div className="text-center md:text-start">
            <h1 className="font-bold md:mb-1">ABOUT ME</h1>
            <p className="text-gray-600 text-[15px] md:text-2xl">
              I am a passionate and innovative developer dedicated to creating
              clean, efficient, and scalable solutions. Committed to continuous
              learning, collaboration, and delivering high-quality code that
              drives successful project outcomes
            </p>
            <button className="my-2 md:my-10 rounded p-2 text-[20px] bg-purple-500 hover:bg-purple-100 rounded-br-3xl shadow-xl/30 cursor-pointer transition-all duration-700">
              <a href="https://www.facebook.com/share/1Bgo9E37Xe/">Explore Me</a>
            </button>
          </div>
        </div>
      </div>

      <div className="skills h-[50%] md:h-[40%] w-full flex flex-col items-center justify-center">
        <hr className="border w-full mt-1 bg-gray-300"/>

        <div class="cut-text text-5xl" data-text="My Skills">My Skills</div>
        
        <div className="skills-container w-full h-[80%] md:h-[90%] pt-2 grid grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-center relative flex flex-col items-center justify-center"
            >
              <div className="logo">
                <img className=" h-[2.5rem] md:h-[3rem] md:w-[3rem] object-contain " src={skill.logo} alt="" />
              </div>
              {/* 
                  
              <div className="absolute right-5 top-12">
                <WaterFillCircle
                  percentage={skill.circleData.percentage}
                  number={skill.circleData.number}
                />
              </div>

               */}
              <div className="">
                <h1 className="text-bold">{skill.text}</h1>
                <p className="text-gray-500 text-[13px] hidden md:block">{skill.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
