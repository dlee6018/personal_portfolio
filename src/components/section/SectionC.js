import React from "react";
import "./Section.scss";
const SectionC = () => {
  return (
    <section id="home-c" class="text-center py-2">
      <div class="container">
        <h2 class="section-title">My Creative Process</h2>
        <div class="bottom-line"></div>
        <p class="lead">
          All of my UI/UX and design projects are based off of a practiced
          formula to get the result that I am looking for
        </p>
        <div class="process">
          <div>
            <i class="fas fa-file-alt fa-4x process-icon my-2">
              <div class="process-step">1</div>
            </i>
            <h3>Discuss The Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate.
            </p>
          </div>
          <div>
            <i class="fas fa-desktop fa-4x process-icon my-2">
              <div class="process-step">2</div>
            </i>
            <h3>Brainstorming ^ Concept</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate.
            </p>
          </div>
          <div>
            <i class="fas fa-object-ungroup fa-4x process-icon my-2">
              <div class="process-step">3</div>
            </i>
            <h3>UI/UX Planning</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate.
            </p>
          </div>
          <div>
            <i class="fas fa-thumbs-up fa-4x process-icon my-2">
              <div class="process-step">4</div>
            </i>
            <h3>Interaction</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptas laborum repellendus dolorum! Harum, cupiditate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionC;
