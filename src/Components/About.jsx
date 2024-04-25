/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/blue.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Computer Systems Engineering Student (BEng) currently studying at the University of Warwick. I am currently working as a Microsoft Student Ambassador and I am also the Vice President of the Warwick Data Science Society.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Computer Vision",
  "Python",
  "Java",
  "SQL",
  "C",
  "MATLAB",
  "Simulink",
  "Communications",
  "Public Speaking",
  "PyTorch"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Dedicated, tenacious, and self-motivated, I am passionate about technology and excited about working in AI and product development. While possessing excellent communication skills, my forte is having a creative bent of mind. Demonstrated success both as a leader as well as a team player, in the several class projects that I have been part of.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
