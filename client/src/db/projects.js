import factoryObjectsDB from "./factoryObjectsDB";
import categoriesProjects from "./properties projects/categoriesProjects";
import technologies from "./properties projects/technologies";
import typesProjects from "./properties projects/typesProjects";

const typeImage = {
	previews: "previews",
	projects: "projects",
};
const getImage = (typeImage, image) => {
	return new URL(`../images/${typeImage}/${image}`, import.meta.url).href;
};

const projectsData = [
	{
		name: "Some name project 1",
		poster: getImage(typeImage.previews, "preview.png"),
		category: categoriesProjects.frontend.newApp,
		type: typesProjects.webApp,
		technologies: [
			technologies.figma,
			technologies.html5,
			technologies.jquery,
		],
	},
	{
		name: "Some different name project 2",
		poster: getImage(typeImage.projects, "modal_image.png"),
		category: "Concept",
		type: "Mobile App",
		technologies: [],
	},
	{
		name: "Some name project 3",
		poster: "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		category: "Redesign",
		type: "Web-application",
		technologies: [],
	},
	{
		name: "Some name project 4",
		poster: "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		category: "Redesign",
		type: "Web-application",
		technologies: [],
	},
];

export default factoryObjectsDB(projectsData, 1);
