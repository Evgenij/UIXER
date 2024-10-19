import factoryObjectsDB from "./factoryObjectsDB";
import categoriesProjects from "./properties projects/categoriesProjects";
import technologies from "./properties projects/technologies";
import typesProjects from "./properties projects/typesProjects";
import { typeImage } from "@/helpers/consts";
import { typeElementDescription } from "@/helpers/consts";

const getImage = (typeImage, image, folder) => {
	if (folder) {
		return new URL(
			`../images/${typeImage}/${folder}/${image}`,
			import.meta.url
		).href;
	}

	return new URL(`../images/${typeImage}/${image}`, import.meta.url).href;
};
console.log(getImage(typeImage.projects, "1.png", "infurtex"));

const projectsData = [
	{
		name: "Infurtex",
		poster: getImage(typeImage.previews, "preview.png"),
		category: categoriesProjects.frontend.system,
		type: typesProjects.webApp,
		sources: {
			demo: null,
			code: null,
			design: null,
		},
		technologies: [
			technologies.figma,
			technologies.html5,
			technologies.javaScript,
			technologies.vue,
			technologies.vuex,
			technologies.vuesax,
			technologies.openServer,
			technologies.mysql,
			technologies.tailwind,
			technologies.php,
			technologies.laravel,
			technologies.mvc,
			technologies.scss,
		],
		targets: [
			"To develop a system that allows to conduct remote design tests of several types",
			"To realize creation of tests for various objects of commercial and non-commercial sector for interaction with potential clients and users",
			"Automate the process of test passing and statistics collection",
			"Implement a mechanism for sending out tests by specified data of respondents, from age to employment status",
			"The system should provide detailed statistics on tests, on the basis of which it is easy to draw conclusions and correct in the shortest possible time",
		],

		tasks: [
			"Create a workable service that provides the moderator with a toolkit for flexible creation of tests with the realization of creating questions and answer options, with the possibility of choosing the correct one or several of them",
			"The moderator is also provided with functionality for analyzing test results",
			"Respondent is given the opportunity to take tests with system coins, which gives additional motivation to pass",
		],
		description: [
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "1.png", "infurtex"),
			},
			{ type: typeElementDescription.p, data: "dfgdfg" },
			{ type: typeElementDescription.p, data: "dfgdfg" },
			{
				type: typeElementDescription.modalImg,
				data: getImage(typeImage.projects, "1.png", "infurtex"),
			},
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
