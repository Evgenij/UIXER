import projects from "./projects";

export default (projectID) =>
	projects.find((project) => project.id == projectID);
