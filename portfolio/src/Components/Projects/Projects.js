import React from "./node_modules/react";
import "./Projects.css";
import $ from "./node_modules/jquery";

export default function Projects() {
  //pull data from google sheet via API call
  // const sheetUrl =
  //   "https://docs.google.com/spreadsheets/d/1gTe7FxngTNHHzZ62snW1R6GwnuFIoltFxoB_O8UbkIc/edit?usp=sharing";

  const sheetAsJSON =
    "https://spreadsheets.google.com/feeds/list/1gTe7FxngTNHHzZ62snW1R6GwnuFIoltFxoB_O8UbkIc/od6/public/values?alt=json";

  $.ajax({
    url: sheetAsJSON,
  })
    .then((data) => {
      // console.log("data", data);
      const projects = data.feed.entry.map((project) => {
        return {
          title: project.gsx$title.$t,
          image: project.gsx$image.$t,
          description: project.gsx$description.$t,
          url: project.gsx$url.$t,
          livepage: project.gsx$livepage.$t,
        };
      }); //map ends
      manipulate(projects);
      //console.log("projects", projects);
    })
    // .catch is meant to handle/catch errors
    .catch((err) => console.log("err", err));

  function manipulate(projectsArr) {
    // console.log("inside app - projectsArr", projectsArr);
    projectsArr.forEach((project, index) => {
      let $section = $(`<section class="proj_item" id="proj${index + 1}">
                      <h3 class="proj_title">${project.title}</h3>
                      <div class="proj_img" style="background-image:url(${
                        project.image
                      })"></div>
                      <div class="proj_descript">${project.description}</div>
                      <div class="see_code_btn">
                        <a href="${
                          project.url
                        }" target="_blank">Real Codes <i class="fas fa-code"></i></a>
                        <a href="${
                          project.livepage
                        }" target="_blank">Live Page <i class="fas fa-wifi"></i></a>
                      </div>
                    </section>`);
      $(".projects_container").append($section);
      console.log(project);
    });
  }

  return (
    <div className="projects" id="projects">
      <p>Projects</p>
      <div className="projects_container"></div>
    </div>
  );
}
