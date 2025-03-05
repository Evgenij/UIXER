import projects from "./projects";

export default (projectName) =>
	projects.find((project) => project.name == projectName);
