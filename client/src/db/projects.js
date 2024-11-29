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
		name: "Mining Fusion",
		poster: getImage(typeImage.previews, "mining-fusion.jpg"),
		category: categoriesProjects.frontend.system,
		type: typesProjects.webApp,
		date: "May 2022",
		sources: {
			demo: null,
			code: null,
			design: null,
		},
		technologies: [],
		targets: [],
		tasks: [],
		description: [
			{
				type: typeElementDescription.p,
				data: "p",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "88.jpg", "infurtex"),
			},
		],
	},
	{
		name: "Infurtex",
		poster: getImage(typeImage.previews, "infurtex.jpg"),
		category: categoriesProjects.frontend.system,
		type: typesProjects.webApp,
		date: "May 2022",
		sources: {
			demo: null,
			code: "https://github.com/Evgenij/Infurtex",
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
				type: typeElementDescription.p,
				data: "A login page was developed, as well as a registration page for each type of system user",
			},
			{
				type: typeElementDescription.p,
				data: "Login page",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "auth.jpg", "infurtex"),
			},
			{
				type: typeElementDescription.p,
				data: "Respondent registration page",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "reg-res.jpg", "infurtex"),
			},
			{
				type: typeElementDescription.p,
				data: "Moderator registration page",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "reg-mod.jpg", "infurtex"),
			},
			{
				type: typeElementDescription.p,
				data: "After logging in to the moderator workspace, the user is presented with an opportunity to create a test or a command for test distribution, which can be used later when customizing the test.",
			},
			{
				type: typeElementDescription.p,
				data: "The first stage - entering the basic test data, selecting the test object and setting up the questions and answers",
			},
			{
				type: typeElementDescription.p,
				data: "The second stage is choosing the method of sending invitations to take the test. There are several types of mailing such as:",
			},
			{
				type: typeElementDescription.p,
				data: "1. General mailing",
			},
			{
				type: typeElementDescription.p,
				data: "2. Link access",
			},
			{
				type: typeElementDescription.p,
				data: "3. Team mailing",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "11.jpg", "infurtex"),
			},
			{
				type: typeElementDescription.p,
				data: "The moderator can also create teams for sending invitations to tests, this functionality is presented on the “Teams” page of the workspace.",
			},
			{
				type: typeElementDescription.p,
				data: "On the same page there is a panel for creating a team with all necessary criteria of respondents.",
			},
			{
				type: typeElementDescription.p,
				data: "This mechanism allows you to flexibly customize the criteria to cover a narrow audience for tests. ",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "22.jpg", "infurtex"),
			},
			{
				type: typeElementDescription.p,
				data: "After entering the respondent workspace, the user is presented with a list of all possible tests to take. The tests are divided into several categories:",
			},
			{
				type: typeElementDescription.p,
				data: "1. New",
			},
			{
				type: typeElementDescription.p,
				data: "2. Active",
			},
			{
				type: typeElementDescription.p,
				data: "3. Favorites",
			},
			{
				type: typeElementDescription.p,
				data: "4. Passed",
			},
			{
				type: typeElementDescription.p,
				data: "New tests include tests to which he has received an invitation either through the team to which he belongs or through the general mailing list. ",
			},
			{
				type: typeElementDescription.p,
				data: "Tests that have access through a link are not displayed here, it is assumed that the moderator himself will conduct the event to organize the test. The link can only be provided to certain persons via individual communication channels, such as messengers.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "33.jpg", "infurtex"),
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "44.jpg", "infurtex"),
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "55.jpg", "infurtex"),
			},
			{
				type: typeElementDescription.p,
				data: "Below is the page for creating a new navigation test with key zones set for page navigation",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "66.jpg", "infurtex"),
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "77.jpg", "infurtex"),
			},
			{
				type: typeElementDescription.p,
				data: "And 'Page 404'",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "88.jpg", "infurtex"),
			},
		],
	},
	{
		name: "Upgrade",
		poster: getImage(typeImage.previews, "upgrade.jpg"),
		category: categoriesProjects.frontend.system,
		type: typesProjects.webApp,
		date: "May 2022",
		sources: {
			demo: null,
			code: null,
			design: null,
		},
		technologies: [],
		targets: [],
		tasks: [],
		description: [
			{
				type: typeElementDescription.p,
				data: "p",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "88.jpg", "infurtex"),
			},
		],
	},
	// {
	// 	name: "FNX",
	// 	poster: getImage(typeImage.previews, "fnx.jpg"),
	// 	category: categoriesProjects.frontend.system,
	// 	type: typesProjects.webApp,
	// 	date: "May 2022",
	// 	sources: {
	// 		demo: null,
	// 		code: null,
	// 		design: null,
	// 	},
	// 	technologies: [],
	// 	targets: [],
	// 	tasks: [],
	// 	description: [
	// 		{
	// 			type: typeElementDescription.p,
	// 			data: "p",
	// 		},
	// 		{
	// 			type: typeElementDescription.img,
	// 			data: getImage(typeImage.projects, "88.jpg", "infurtex"),
	// 		},
	// 	],
	// },
	// {
	// 	name: "SEO-X",
	// 	poster: getImage(typeImage.previews, "seo-x.jpg"),
	// 	category: categoriesProjects.frontend.system,
	// 	type: typesProjects.webApp,
	// 	date: "May 2022",
	// 	sources: {
	// 		demo: null,
	// 		code: null,
	// 		design: null,
	// 	},
	// 	technologies: [],
	// 	targets: [],
	// 	tasks: [],
	// 	description: [
	// 		{
	// 			type: typeElementDescription.p,
	// 			data: "p",
	// 		},
	// 		{
	// 			type: typeElementDescription.img,
	// 			data: getImage(typeImage.projects, "88.jpg", "infurtex"),
	// 		},
	// 	],
	// },
];

export default factoryObjectsDB(projectsData, 1);
