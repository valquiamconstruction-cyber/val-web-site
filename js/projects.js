let allProjects = [];

async function loadProjects() {
  const response = await fetch("data/projects.json");
  allProjects = await response.json();
  renderProjects(allProjects);
}

function renderProjects(projectList) {
  const grid = document.getElementById("projects-grid");
  let allCardsHTML = "";

  projectList.forEach(function (project) {
    const cardHTML = `
    <div class="card project-card">
      <img src="${project.image}" alt="${project.title}" class="project-image">
      <div class="project-details">
      <h3>${project.title}</h3>
      <p>${project.location}</p>
      <p>${project.description}</p>
      <span class="badge badge-${project.status}">${project.status}</span>
      </div>
    </div>
    `;
    allCardsHTML += cardHTML;
  });

  grid.innerHTML = allCardsHTML;
}

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const chosenFilter = button.dataset.filter;

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    if (chosenFilter === "all") {
      renderProjects(allProjects);
    } else {
      const filtered = allProjects.filter(function (project) {
        return project.status === chosenFilter;
      });
      renderProjects(filtered);
    }
  });
});

loadProjects();
