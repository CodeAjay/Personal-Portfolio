import PropTypes from "prop-types";
import photo from "../../assets/1.avif";
import photo1 from "../../assets/2.avif";
import photo2 from "../../assets/3.avif";
// import photo from "../../assets/ajay(1).png";
import "../../index.css";

const Project = ({ image, heading, desc, tags, link }) => {
  return (
    <div
      className="project flex flex-col p-5 rounded-3xl "
      style={{ border: "2px solid #bab2b2" }}
    >
      <img src={image} alt={heading} className="rounded-2xl h-full" />
      <h2 className="text-3xl" style={{ lineHeight: 2 }}>
        {heading}
      </h2>
      <p style={{ lineHeight: 2 }}>{desc}</p>
      {tags && tags.length > 0 && (
        <div className="tags flex flex-row gap-2">
          {tags.map((tg, index) => (
            <p
              key={index}
              style={{ border: "2px solid #bab2b2", fontSize: "12px" }}
              className="rounded-3xl p-1"
            >
              {tg}
            </p>
          ))}
        </div>
      )}
      <button href={link} className="w-fit m-auto p-3 rounded-3xl mt-5">
        Live Link
      </button>
    </div>
  );
};

Project.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.string,
  link: PropTypes.string,
};

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="projects flex flex-row p-20 gap-10">
          <Project
            image={photo}
            heading={"Project 1"}
            desc={"This is the first project"}
            tags={["React", "HTML", "JavaScript"]}
            link={""}
          />
          <Project
            image={photo1}
            heading={"Project 2"}
            desc={"This is the first project"}
            tags={""}
            link={""}
          />

          <Project
            image={photo2}
            heading={"Project 3"}
            desc={"This is the first project"}
            tags={""}
            link={""}
          />

          <Project
            image={photo2}
            heading={"Project 3"}
            desc={"This is the first project"}
            tags={""}
            link={""}
          />

          <Project
            image={photo2}
            heading={"Project 3"}
            desc={"This is the first project"}
            tags={""}
            link={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
