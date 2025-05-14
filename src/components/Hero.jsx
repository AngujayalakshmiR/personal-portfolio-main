import styles from "../style";
import LetsConnect from "./LetsConnect";
import { aboutMe } from "../constants";
import animation from "../assets/animation.mp4";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Hero text */}
        <div className="flex flex-row justify-between items-center w-full text-white">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[80px]">
            Hi there!
            <br className="sm:block hidden" /> I am
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <LetsConnect />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full">
          <span className="text-gradient ss:text-[52px] text-[42px]">{aboutMe.name}</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {aboutMe.intro}
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="relative z-index-[5] w-[300px] h-[300px] md:w-[550px] md:h-[550px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[50%]"
          >
            <source src={animation} type="video/mp4" />
          </video>
        </div>
        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Hero;
