const projects = {
  project1: {
    name: "Project 1",
    description: "This is a detailed description of Project 1.",
    image: "project1-image.jpg",
    github: "https://github.com/your-username/project1",
  },
  project2: {
    name: "Project 2",
    description: "This is a detailed description of Project 2.",
    image: "project2-image.jpg",
    github: "https://github.com/your-username/project2",
  },
};

function displayProject(projectId) {
  const project = projects[projectId];
  const projectDetails = `
    <h3>${project.name}</h3>
    <img src="${project.image}" alt="${project.name}" style="width: 100%; max-width: 400px;">
    <p>${project.description}</p>
    <a href="${project.github}" target="_blank">View on GitHub</a>
  `;
  document.getElementById("project-details").innerHTML = projectDetails;
  document.getElementById("project-info").style.display = "block";
}
