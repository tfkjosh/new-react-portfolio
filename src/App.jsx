import "./App.css";
import React from 'react'
import { useState } from 'react'
import Porfile from "./assets/Photo.png";
import Project1 from "./assets/Project1.png";
import Project2 from "./assets/Project2.png";
import Project3 from "./assets/Project3.png";
import Project4 from "./assets/Project4.png";
import facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";


function App() {
  const [data, setData] = useState({name: "", email: "", phone: "", message:""});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-xl">Joshua's Portfolio</h1>
            </div>
          </div>
          <ul className="flex gap-4">
            <li>
              <a className="text-gray-400 hover:text-white cursor-pointer" a href="#Projects">
                {" "}
                Projects
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white cursor-pointer" a href="#Experience">
                {" "}
                Experience
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white cursor-pointer" a href="#About-me">
                {" "}
                About Me
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white cursor-pointer" a href="#Contact">
                {" "}
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        {/*Intro Banner Section */}
        <section>
        <div className="container m-auto px-4 py-32 flex gap-6">
          <div>
            <h2 className="font-bold text-4xl">Hey There! I'm Joshua King, </h2>
            <h2 className="font-bold text-4xl mt-1 gradiant-text">A Junior Web Developer</h2>
            <p className="mt-4 text-gray-400">Former general laborer, seeking to apply competent development skills with focus on collaboration, communication and passion.</p>
          </div>
          <div className="relative">
            <img src={Porfile} width={420} className="relative z-10" />
          </div>
        </div>
        </section>
        {/*Projects section */}
        <section className="py-10" section id="Projects" >
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font semi-bold">Projects</h2>
            <div className="flex flex-col sm:flex-col gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5">
                {/*https://github.com/alla0810/Group9*/}
                <a href="https://github.com/alla0810/Group9" target="_blank" class="project 1"></a>
               <img src={Project1} alt="https://github.com/alla0810/Group9" className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  The AMAZON NAVIGATOR is designed for customers to view item reviews and pricing.
                </h3>
              <p className="text-gray-400 text-sm mt-4">https://github.com/alla0810/Group9</p>
              <div className="flex justify-evenly mt-12">
                <button className="px-6 py-3 text-lg bg-gradient-to-t from-orange-500 rounded-full to-yellow-500 hover:from-orange-700 hover:to-yellow-700">
                  Live preview
                </button>
                <button className="px-6 py-3 border rounded-full hover:border-orange-500 hover:text-yellow-500">
                  Checkout github
                </button>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5">
              {/*https://github.com/VictoriaSweet/scary-potato*/}
              <a href="https://github.com/VictoriaSweet/scary-potato" target="_blank" class="project 2"></a>
              <img src={Project2}  alt="https://github.com/VictoriaSweet/scary-potato" className="w-full h-auto"/>
              <h3 className="text-2xl font-semibold mt-8">
              Plant Parenthood is the application to help the those who are new to the hobby or just maybe even a weekend plantsitter or award winning growers. 
              </h3>
              <p className="text-gray-400 text-sm mt-4">https://github.com/VictoriaSweet/scary-potato</p>
              <div className="flex justify-evenly mt-12">
                <button className="px-6 py-3 text-lg bg-gradient-to-t from-orange-500 rounded-full to-yellow-500 hover:from-orange-700 hover:to-yellow-700">
                  Live preview
                </button>
                <button className="px-6 py-3 border rounded-full hover:border-orange-500 hover:text-yellow-500">
                  Checkout github
                </button>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5">
              {/*https://tfkjosh.github.io/Password-generator/*/}
              <a href="https://tfkjosh.github.io/Password-generator/" target="_blank" class="project 3"></a>
              <img src={Project3} alt="https://tfkjosh.github.io/Password-generator/" className="w-full h-auto" />
              <h3 className="text-2xl font-semibold mt-8">
              This application is designed for an employee to generate a random password based on criteria they've selected.
              </h3>
              <p className="text-gray-400 text-sm mt-4">https://github.com/tfkjosh/Password-generator</p>
              <div className="flex justify-evenly mt-12">
                <button className="px-6 py-3 text-lg bg-gradient-to-t from-orange-500 rounded-full to-yellow-500 hover:from-orange-700 hover:to-yellow-700">
                  Live preview
                </button>
                <button className="px-6 py-3 border rounded-full hover:border-orange-500 hover:text-yellow-500">
                  Checkout github
                </button>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5">
              {/*https://pwa-challenge1-b508091ee337.herokuapp.com/*/}
              <a href="https://pwa-challenge1-b508091ee337.herokuapp.com/" target="_blank" class="project 4"></a>
              <img src={Project4} alt="https://pwa-challenge1-b508091ee337.herokuapp.com/" />
              <h3 className="text-2xl font-semibold mt-8">
              This application features a number of data persistence techniques, insuring the application runs regardless of browser supported function. 
              </h3>
              <p className="text-gray-400 text-sm mt-4">https://github.com/tfkjosh/PWA-Challenge</p>
              <div className="flex justify-evenly mt-12">
                <button className="px-6 py-3 text-lg bg-gradient-to-t from-orange-500 rounded-full to-yellow-500 hover:from-orange-700 hover:to-yellow-700">
                  Live preview
                </button>
                <button className="px-6 py-3 border rounded-full hover:border-orange-500 hover:text-yellow-500">
                  Checkout github
                </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technologies */}
        <section className="py-10" section id="Experience">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font semi-bold">Experience</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Tailwind & Bootstrap</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript, TypeScript, JQuery
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">UI design in Figma</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Angular</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React Native</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-orange-500 to-yellow-500 block rounded-md"></span>
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section*/}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies
            </h2>
            <div className="flex justify-between mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Git Flow
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  MySQL
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Express
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Apollo Sever/Graph QL
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Model View Controller
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Server/Client Side API
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                  Node
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" section id="About-me">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font semi-bold">About Me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 before:w-1 before:bg-white">
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute -left-0 text-lg font-semibold">2023</h3>
                <p>
                  Prior to enrolling into the UTA Coding Bootcamp, I was a general laborer. I have 2 years of customer service experience and
                  a proven track record of adaptability, dedication, attentiveness to details, patience and great communication.
                  I am eager to continue learning and buidling my knowledge to implement innovative solutions to challenging local and global issues.
                </p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute -left-0 text-lg font-semibold">2024</h3>
                <p>
                  I graduated UTA (University of Texas at Austin) and have
                  experience in web development for approximately 1 year. I am
                  passionate about creating user-friendly and visually appealing
                  websites. I am self-motivated and a team player to help acheive goals
                  and beyond.
                </p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-orange-500 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute -left-0 text-lg font-semibold">2024</h3>
                <p>
                  Lastly adept at staying up-to-date with the latest web
                  development trends and technologies, and excited to contribute
                  to a dynamic team and deliver high-quality web solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
        <section className="py-8" section id="Contact">
          <div className="container m-auto flex justify-between px-4">
            <form action="https://formspree.io/f/xbjngaap" method="POST">
             <h2 className="text-2xl font semi-bold">Contact Me</h2>
              <input type="text" name="First" placeholder="First Name" autoComplete="off" required></input>
              <input type="text" name="Last" placeholder="Last Name" autoComplete="off" required></input>
              <input type="email" name="Email" placeholder="Email Address" autoComplete="off" required></input>
              <textarea rows="5" cols="60" name="message" placeholder="Enter text" autoComplete="off" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      <footer>
        <div className="container m-auto px-4">
          <div>
            <p className="text-gray-300 text-sm">
            Copyright @ 2024
            </p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a> <img src={facebook} className="w-5"/></a>
              </li>
              <li>
                <a> <img src={LinkedIn} className="w-5"/></a>
              </li>
              <li>
                <a> <img src={Instagram} className="w-5"/></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
 
