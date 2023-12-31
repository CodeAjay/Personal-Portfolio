import "../../index.css";
import image from "../../assets/3.avif";

const About = () => {
  return (
    <>
      <div className="about bg-white border-gray-200 dark:bg-white-900 min-h-screen p-20">
        <div className="container  flex justify-between items-center">
          {/* <h1 className="text-5xl">About Section</h1> */}
          <p className="text-5xl text-center" style={{ lineHeight: 1.5 }}>
            👋Hello! I'm Ajay, ___ a creative and driven web developer with 3
            YEARS OF EXPERIENCE in the field. I thrive on turning imaginative
            ideas into digital realities, constantly seeking innovative ways to
            blend design and technology. I possess a strong foundation in
            FRONT-END and BACK-END development, as well as a keen eye for
            responsive design and user-centered interfaces.
          </p>
          {/* <img src={image} alt="" width="400px" /> */}
        </div>
      </div>
    </>
  );
};

export default About;
