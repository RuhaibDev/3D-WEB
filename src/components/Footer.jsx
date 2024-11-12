import { github, linkedin, twitter } from "../assets";
import Tilt from "react-parallax-tilt";
function Footer() {
  return (
    <footer className="bg-primary flex flex-col md:flex-row items-center justify-center md:justify-around py-6 gap-4 flex-wrap shadow-lg shadow-white">
      <div>
        {" "}
        <p className="text-sm text-white">
          Email:{" "}
          <a
            href="mailto:mruhaibmustafa@gmail.com"
            className="underline text-secondary hover:text-white cursor-pointer"
          >
            mruhaibmustafa@gmail.com
          </a>
        </p>
        <p className="text-sm text-white">
          Phone:{" "}
          <a
            href="tel:+923004919272"
            className="underline text-secondary cursor-pointer hover:text-white"
          >
            +92 3004919272
          </a>
        </p>
      </div>
      <div className="flex gap-4">
        <Tilt
          options={{
            max: 50,
            scale: 1,
            speed: 450,
          }}
        >
          {" "}
          <a
            href="https://github.com/RuhaibDev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="w-10 h-10" />
          </a>
        </Tilt>
        <Tilt
          options={{
            max: 50,
            scale: 1,
            speed: 450,
          }}
        >
          <a
            href="https://www.linkedin.com/in/m-ruhaib-qureshi-5a17a722a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="w-10 h-10" />
          </a>
        </Tilt>
      </div>
      <p className="text-sm text-secondary">
        &copy; 2024 Ruhaib Mustafa. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
