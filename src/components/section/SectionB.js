import React from "react";
import "./Section.scss";
const SectionB = () => {
  return (
    <section id="home-b" class="text-center py-2">
      <div class="stats">
        <div>
          <ul>
            <li>
              <i class="fas fa-users fa-3x"></i>
            </li>
            <li class="stats-title">Clients</li>
            <li class="stats-number">100</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <i class="fas fa-award fa-3x"></i>
            </li>
            <li class="stats-title">Awards</li>
            <li class="stats-number">3</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <i class="fas fa-hourglass-start fa-3x"></i>
            </li>
            <li class="stats-title">Hours Worked</li>
            <li class="stats-number">3500</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <i class="fas fa-code-branch fa-3x"></i>
            </li>
            <li class="stats-title">Projects Completed</li>
            <li class="stats-number">135</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionB;
