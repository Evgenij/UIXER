import factoryObjectsDB from "./factoryObjectsDB";
import categoriesProjects from "./properties projects/categoriesProjects";
import technologies from "./properties projects/technologies";
import typesProjects from "./properties projects/typesProjects";
import {colorsTechnologies, typeImage} from "@/helpers/consts";
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
		inDeveloping: true,
		name: "Crypto[IO]",
		poster: getImage(typeImage.previews, "mining-fusion.jpg"),
		category: categoriesProjects.frontend.game,
		type: typesProjects.webApp,
		date: "November 2024",
		sources: {
			demo: null,
			code: "https://github.com/Evgenij/CryptoIO",
			design: null,
		},
		badges: [
			{
				label: technologies.react,
				color: colorsTechnologies.react
			},
			{
				label: technologies.nodejs,
				color: colorsTechnologies.nodejs
			},
			{
				label: technologies.postgresql,
				color: colorsTechnologies.postgresql,
				textColor: 'white'
			},
		], // max 3
		technologies: [
			technologies.html5,
			technologies.scss,
			technologies.tailwind,
			technologies.javaScript,
			technologies.react,
			technologies.reactRouter,
			technologies.axios,
			technologies.vite,
			technologies.tailwind,
			technologies.nodejs,
			technologies.postgresql,
			technologies.figma,
			technologies.spline
		],
		targets: [],
		tasks: [],
		description: [
			{
				type: typeElementDescription.info,
				data: "Project in developing",
			},
			// {
			// 	type: typeElementDescription.img,
			// 	data: getImage(typeImage.projects, "88.jpg", "infurtex"),
			// },
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
			design: 'https://www.figma.com/design/q1cpoW4pQgTg8NDrBN14uW/Infurtex---layout?node-id=0-1&t=F91G7LvhKecOrXAn-1',
		},
		badges: [
			{
				label: technologies.vue,
				color: colorsTechnologies.vue
			},
			{
				label: technologies.php,
				color: colorsTechnologies.php,
				textColor: 'white'
			},
			{
				label: technologies.mysql,
				color: colorsTechnologies.mysql,
				textColor: 'white'
			},
		], // max 3
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
			// {
			// 	type: typeElementDescription.problem,
			// 	data: [
			// 		"A login page was developed, well as a registration page for each type of s",
			// 		"ch type of s",
			// 		"as well as a registration page for each type of system user",
			// 	],
			// },
			// {
			// 	type: typeElementDescription.solution,
			// 	data: [
			// 		"A login page was developed, as well as a registration page for each type of system user",
			// 	],
			// },
			{
				type: typeElementDescription.p,
				data: "When developing the application, a MySQL database was created first. The database schema is presented below.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "db.png", "infurtex"),
			},
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
				type: typeElementDescription.list,
				data: ["General mailing", "Link access", "Team mailing"],
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
				type: typeElementDescription.list,
				data: ["New", "Active", "Favorites", "Passed"],
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
		date: "November 2020",
		sources: {
			demo: null,
			code: 'https://github.com/Evgenij/Upgrade_Web',
			design: 'https://www.figma.com/design/nTr0VwRIZAo3PeeUVcRMs7/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-Web-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F?node-id=0-1&t=pegyRD5xCEeCzJCC-1',
		},
		badges: [
			{
				label: technologies.javaScript,
				color: colorsTechnologies.javaScript
			},
			{
				label: technologies.php,
				color: colorsTechnologies.php,
				textColor: 'white'
			},
			{
				label: technologies.mysql,
				color: colorsTechnologies.mysql,
				textColor: 'white'
			},
		], // max 3
		technologies: [
			technologies.javaScript,
			technologies.html5,
			technologies.openServer,
			technologies.ajax,
			technologies.php,
			technologies.jquery,
			technologies.mysql,
			technologies.figma,
		],
		targets: ["Development of an Internet application for a large number of users that would" +
		" allow creating projects, goals and forming teams for each of them",
		"Each goal would have several tasks, and tasks in turn would have subtasks and attachments.",
		"There should be implemented output of statistics on tasks with the possibility of selecting a period, also output of user's efficiency based on statistics. ","User can create projects, i.e." +
			" be its leader, and also can be just a participant of the project. ","The user should be able to change the color theme of the application in the system settings"],
		tasks: ["User Authentication","Realize output of user statistics by tasks for a week, month", "Maintain progress of project completion, goals, tasks","changing the color design of the application" ,"creating, modifying, deleting a task, project, goal, attachment, file"],
		description: [
			{
				type: typeElementDescription.p,
				data: "When developing the application, a MySQL database was created first. The database schema is presented below.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "db.png", "upgrade"),
			},
			{
				type: typeElementDescription.p,
				data: "After that, the authorization and registration page was created. They are listed below.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "1.png", "upgrade"),
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "2.png", "upgrade"),
			},
			{
				type: typeElementDescription.p,
				data: "After authorization, the user can access the main page of the system, which presents his efficiency and brief information about the progress of projects",
			},{
				type: typeElementDescription.p,
				data: "The system also supports light and dark theme. Below is the main page in these themes",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "3.png", "upgrade"),
			},{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "4.png", "upgrade"),
			},
			{
				type: typeElementDescription.p,
				data: "The user can also access his tasks page, where he can edit task data and track the status of their completion. ",
			},{
				type: typeElementDescription.p,
				data: "The user can set the project and target for the task and the duration of each task.",
			},
			{
				type: typeElementDescription.problem,
				data: ["In a large number of tasks it will be difficult to find the necessary task"],
			},{
				type: typeElementDescription.solution,
				data: ["Creating filters for the list of tasks"],
			},
			{
				type: typeElementDescription.p,
				data: "The solution to this problem and the task page itself is presented below",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "5.png", "upgrade"),
			},
			{
				type: typeElementDescription.p,
				data: "The projects page provides a list of projects in which the user is involved, as well as his goals and attachments to the projects. ",
			},
			{
				type: typeElementDescription.p,
				data: "Each project has a completion tracker depending on the tasks completed. Each project has assigned participants. This page is presented below.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "6.png", "upgrade"),
			},
			{
				type: typeElementDescription.p,
				data: "Also the user has access to detailed statistics on the project and its participants. Provided that the user is the manager of at least one project.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "7.png", "upgrade"),
			},
			{
				type: typeElementDescription.p,
				data: "As a result, a conceptual, logical and physical database schema was developed. Also, an application for team development of IT projects was designed and implemented. ",
			},
			{
				type: typeElementDescription.p,
				data: "The application allows you to create projects, goals and tasks, as well as subtasks for each task. The possibility of assigning goals to separate projects as well as creating attachments with the possibility of attaching files is implemented. ",
			},{
				type: typeElementDescription.p,
				data: "The application allows you to create:",
			},
			{
				type: typeElementDescription.list,
				data: ["Projects", "Goals","Tasks, as well as subtasks for each task",
				"The of possibility assigning goals to separate projects as well as creating attachments" +
				" with the possibility of attaching files is implemented. "],
			},
			{
				type: typeElementDescription.p,
				data: "Each user belongs to a team according to his/her specialization, which allows to divide users into groups. \n",
			},{
				type: typeElementDescription.p,
				data: "The user can access personal statistics to monitor his efficiency in project development. ",
			},{
				type: typeElementDescription.p,
				data: "The server-side programming language PHP, JavaScript and MySQL database management system were used to solve the problem. Internet-application “Upgrade” can be used by any users for team development of IT-projects.",
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
