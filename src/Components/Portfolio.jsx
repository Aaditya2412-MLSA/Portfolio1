/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pixelclouds.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Detecting cancerous CT scan images of the chest using Computer Vision",
    description:
      "Developed a deep learning model that can detect cancerous CT scan images of the chest using PyTorch.",
    url: "https://github.com/FreshPrince99/Cancer-detection-through-CT-scan-imaging",
  },
  {
    title: "Bedwetting System made using Arduino",
    description:
      "A system that detects bedwetting for elderly people and alerts the caretakers using a buzzer and a text message.",
    url: "https://github.com/FreshPrince99/Moisture-Sensor-Using-Arduino",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://cdn1.crevado.com/artists/1507602/pages/35546-1_AadityaNairCVFinal.pdf",
  },
  {
    title: "Student Ambassador Content Creation for LanguageCert",
    description:
      "Created content for LanguageCert's social media platforms and blog.",
    url: "https://www.youtube.com/playlist?list=PL4NtfFi4VoEwZLwFnL9u5AVVMa0ErNEEY",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
