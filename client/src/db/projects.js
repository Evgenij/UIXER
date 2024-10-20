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

const projectsData = [
	{
		name: "Infurtex",
		poster: getImage(typeImage.previews, "infurtex.jpg"),
		category: categoriesProjects.frontend.system,
		type: typesProjects.webApp,
		date: "July 2022",
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
			{
				type: typeElementDescription.p,
				data: "As part of my graduation project at university, I developed a system for testing design solutions",
			},
			{
				type: typeElementDescription.p,
				data: "The system allows to connect potential clients or users of any service to get feedback on the design, while design developers get a complete analysis of user behavior when interacting with the design",
			},
			{
				type: typeElementDescription.modalImg,
				data: getImage(typeImage.projects, "1.png", "infurtex"),
			},
		],
	},
	{
		name: "SEO-X",
		poster: getImage(typeImage.previews, "seo-x.jpg"),
		category: "Concept",
		type: "Mobile App",
		technologies: [],
	},
	{
		name: "Mining Fusion",
		poster: getImage(typeImage.previews, "mining-fusion.jpg"),
		category: "Concept",
		type: "Mobile App",
		technologies: [],
	},
	{
		name: "Upgrade",
		poster: getImage(typeImage.previews, "upgrade.jpg"),
		category: "Concept",
		type: "Mobile App",
		technologies: [],
	},
	{
		name: "FNX",
		poster: getImage(typeImage.previews, "fnx.jpg"),
		category: "Concept",
		type: "Mobile App",
		technologies: [],
	},
];

export default factoryObjectsDB(projectsData, 1);
