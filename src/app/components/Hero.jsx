import "../globals.css";
import Image from "next/image";
import heroImage from "../../../public/assets/images/main-hero.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="space-y-5">
        <h2 className="text-5xl font-extrabold text-blue-950">
          Xperience. Build. Collaborate.
        </h2>
        <p className="text-2xl">
          Xperience an internship that bridges the gap between you and your next
          job as a developer!
        </p>
        <p className="text-2xl">
          Work as an intern on a fast-paced start-up that provides you real
          world Xperience, mentorship, collaboration, and certification.
        </p>
        <Button
          name={"Sign Up Now"}
          svg={
            <svg
              className="inline"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6.5 12H17"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
                <path
                  d="M12.9117 8L17.5 12L12.9117 16"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </g>
            </svg>
          }
          link={"/sign-up"}
        />
      </div>
      <div className="relative">
        <Image src={heroImage} width={800} height={800} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
