// Stores project data and dynamically renders project cards to the DOM
const projects = [
  {
    id: 1,
    title: "GLSL Shaders",
    description: "Shaders created using GLSL for various visual effects and interactive experiences.",
    githubLink: "https://github.com/jinu2ID/Shaders",
  },
  {
    id: 2,
    title: "Machine Learning Projects",
    description: "Implementation of machine learning algorithms in Matlab (Classification, Clustering, Data Reduction, and Linear Regression).",
    githubLink: "https://github.com/jinu2ID/Machine-Learning",
  },
  {
    id: 3,
    title: "AI Search Algorithms",
    description: "Implementations of AI search algorithms in C++ and Java (BFS, DFS, A*, Minimax, and Monte Carlo).",
    githubLink: "https://github.com/jinu2ID/AI",
  },
];

function renderProjects() {
  const projectsContainer = document.querySelector(".projects-grid");

  projectsContainer.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-links">
                <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="project-link">
                    View on GitHub
                </a>
            </div>
        </div>
    `;

    projectsContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderProjects);
