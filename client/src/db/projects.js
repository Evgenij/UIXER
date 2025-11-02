import factoryObjectsDB from "./factoryObjectsDB";
import categoriesProjects from "./properties projects/categoriesProjects";
import technologies from "./properties projects/technologies";
import typesProjects from "./properties projects/typesProjects";
import { colorsTechnologies, typeImage } from "@/helpers/consts";
import { typeElementDescription } from "@/helpers/consts";

const getImage = (typeImage, image, folder) => {
	if (folder) {
		return new URL(
			`../images/${typeImage}/${folder}/${image}.webp`,
			import.meta.url
		).href;
	}

	return new URL(`../images/${typeImage}/${image}.webp`, import.meta.url)
		.href;
};

const projectsData = [
	{
		inDeveloping: true,
		name: "NextWheels",
		secondName: "Online store for car rims",
		subtitle: "Online store for car rims",
		poster: getImage(typeImage.previews, "nextwheels.jpg"),
		category: categoriesProjects.frontend.website,
		type: typesProjects.onlineStore,
		date: "February 2025",
		sources: {
			demo: null,
			code: "https://github.com/Evgenij/WheelsNEXT",
			design: null,
		},
		badges: [
			{
				label: technologies.nextjs,
				color: colorsTechnologies.nextjs,
				textColor: "white",
			},
			{
				label: technologies.react,
				color: colorsTechnologies.react,
			},
			{
				label: technologies.typeScript,
				color: colorsTechnologies.typeScript,
				textColor: "white",
			},
		], // max 3
		technologies: [
			technologies.nextjs,
			technologies.react,
			technologies.typeScript,
			technologies.redux,
			technologies.reactRouter,
			technologies.vercel,
			technologies.prismaORM,
			technologies.axios,
			technologies.vite,
			technologies.tailwind,
			technologies.postgresql,
			technologies.figma,
		],
		targets: [
			"Create an online store to sell car disks",
			"Realize the complete process of buying car disks through the website",
			"Implement the mechanism of authorization and registration on the site",
			"Create convenient filters and sorting of products on the site",
			"Realize a shopping cart and mechanism for buying car disks",
		],
		tasks: [
			"Define database entities and create a database schema",
			"Create relationships and data for each entity",
			"Create a database using the features of Prisma and Vercel",
			"Create the necessary pages - catalog, shopping cart, etc.",
			"Create the necessary API methods to retrieve data from the database",
		],
		shortenedDescription: [
			"Modern online store for buying car rims ",
			"Full-stack application created using modern NextJS framework for React",
			"Backend written using Vercel and Prisma + PostgreSQL",
			"Frontend - React (State manager Redux) + TypeScript + TailwindCSS",
		],
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
		inDeveloping: true,
		name: "Crypto[IO]",
		secondName: "Crypto mining strategy game",
		subtitle: "Web game about cryptocurrency mining",
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
				color: colorsTechnologies.react,
			},
			{
				label: technologies.nodejs,
				color: colorsTechnologies.nodejs,
			},
			{
				label: technologies.postgresql,
				color: colorsTechnologies.postgresql,
				textColor: "white",
			},
		], // max 3
		technologies: [
			technologies.react,
			technologies.redux,
			technologies.reactRouter,
			technologies.tailwind,
			technologies.nodejs,
			technologies.postgresql,
			technologies.axios,
			technologies.vite,
			technologies.vitest,
			technologies.typeScript,
			technologies.html5,
			technologies.scss,
			technologies.figma,
			technologies.spline,
		],
		targets: [],
		tasks: [],
		shortenedDescription: [
			"A multiplayer game about building a system for mining",
			"The game features an online store, shopping cart and order placement, following the example" +
				" of modern websites",
			"The system of user skills research is created and the mechanism of" +
				" system building through Drag&Drop concept is realized",
			"The game is developed using React, TypeScript, NodeJS and TailwindCSS.",
			"JWT is used for authorization. The database is developed on PostgreSQL and ORM Sequelize",
		],
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
		showInProd: true,
		name: "Infurtex",
		secondName: "Service for UI/UX design testing",
		subtitle: "System for testing Design solutions",
		poster: getImage(typeImage.previews, "infurtex"),
		category: categoriesProjects.frontend.system,
		type: typesProjects.webApp,
		date: "May 2022",
		sources: {
			demo: null,
			code: "https://github.com/Evgenij/Infurtex",
			design: "https://www.figma.com/design/q1cpoW4pQgTg8NDrBN14uW/Infurtex---layout?node-id=0-1&t=F91G7LvhKecOrXAn-1",
		},
		badges: [
			{
				label: technologies.vue,
				color: colorsTechnologies.vue,
			},
			{
				label: technologies.php,
				color: colorsTechnologies.php,
				textColor: "white",
			},
			{
				label: technologies.mysql,
				color: colorsTechnologies.mysql,
				textColor: "white",
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
		shortenedDescription: [
			"As part of my graduation project at university, I developed a system for testing Design solutions",
			"The system allows to connect potential clients or users of any service to get feedback on" +
				" the Design, while Design developers get a complete analysis of user behavior when interacting with the Design",
			"The system was developed using: Laravel, Vue JS (Vue Router, Vuex), SCSS, Vuesax, Tailwind, MySQL",
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
				data: getImage(typeImage.projects, "db", "infurtex"),
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
				data: getImage(typeImage.projects, "auth", "infurtex"),
			},
			{
				type: typeElementDescription.p,
				data: "Respondent registration page",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "reg-res", "infurtex"),
			},
			{
				type: typeElementDescription.p,
				data: "Moderator registration page",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "reg-mod", "infurtex"),
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
				data: getImage(typeImage.projects, "11", "infurtex"),
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
				data: getImage(typeImage.projects, "22", "infurtex"),
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
				data: getImage(typeImage.projects, "33", "infurtex"),
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "44", "infurtex"),
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "55", "infurtex"),
			},
			{
				type: typeElementDescription.p,
				data: "Below is the page for creating a new navigation test with key zones set for page navigation",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "66", "infurtex"),
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "77", "infurtex"),
			},
			{
				type: typeElementDescription.p,
				data: "And 'Page 404'",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "88", "infurtex"),
			},
		],
	},
	{
		showInProd: true,
		name: "Upgrade",
		secondName: "IT project team development system",
		subtitle: "System for team development of IT projects",
		poster: getImage(typeImage.previews, "upgrade"),
		category: categoriesProjects.frontend.system,
		type: typesProjects.webApp,
		date: "November 2020",
		sources: {
			demo: null,
			code: "https://github.com/Evgenij/Upgrade_Web",
			design: "https://www.figma.com/design/nTr0VwRIZAo3PeeUVcRMs7/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-Web-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F?node-id=0-1&t=pegyRD5xCEeCzJCC-1",
		},
		badges: [
			{
				label: technologies.javaScript,
				color: colorsTechnologies.javaScript,
			},
			{
				label: technologies.php,
				color: colorsTechnologies.php,
				textColor: "white",
			},
			{
				label: technologies.mysql,
				color: colorsTechnologies.mysql,
				textColor: "white",
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
		targets: [
			"Development of an Internet application for a large number of users that would" +
				" allow creating projects, goals and forming teams for each of them",
			"Each goal would have several tasks, and tasks in turn would have subtasks and attachments.",
			"There should be implemented output of statistics on tasks with the possibility of selecting a " +
				"period, also output of user's efficiency based on statistics. ",
			"User can create projects, i.e." +
				" be its leader, and also can be just a participant of the project. ",
			"The user should be able " +
				"to change the color theme of the application in the system settings",
		],
		tasks: [
			"User Authentication",
			"Realize output of user statistics by tasks for a week, month",
			"Maintain progress of project completion, goals, tasks",
			"Changing the color design of the" + " application",
			"Creating, modifying, deleting a task, project, goal, attachment, file",
		],
		shortenedDescription: [
			"As part of a course project at the university, I developed a system" +
				" for team development of IT projects.",
			"This project was implemented using: PHP, JS," +
				" jQuery, Ajax, HTML, SCSS.",
			"All user interaction was realized through asynchronous requests " +
				"(Ajax), which allowed to interact with the system without reloading the page.",
			"The project was implemented without the use of frameworks. All design and functionality" +
				" was implemented from scratch.",
			"The work with Sessions, Cookies was done. DB MySQL was used. " +
				"The project is implemented in two themes - light and dark.",
		],
		description: [
			{
				type: typeElementDescription.p,
				data: "When developing the application, a MySQL database was created first. The database schema is presented below.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "db", "upgrade"),
			},
			{
				type: typeElementDescription.p,
				data: "After that, the authorization and registration page was created. They are listed below.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "1", "upgrade"),
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "2", "upgrade"),
			},
			{
				type: typeElementDescription.p,
				data: "After authorization, the user can access the main page of the system, which presents his efficiency and brief information about the progress of projects",
			},
			{
				type: typeElementDescription.p,
				data: "The system also supports light and dark theme. Below is the main page in these themes",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "3", "upgrade"),
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "4", "upgrade"),
			},
			{
				type: typeElementDescription.p,
				data: "The user can also access his tasks page, where he can edit task data and track the status of their completion. ",
			},
			{
				type: typeElementDescription.p,
				data: "The user can set the project and target for the task and the duration of each task.",
			},
			{
				type: typeElementDescription.problem,
				data: [
					"In a large number of tasks it will be difficult to find the necessary task",
				],
			},
			{
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
				data: getImage(typeImage.projects, "6", "upgrade"),
			},
			{
				type: typeElementDescription.p,
				data: "Also the user has access to detailed statistics on the project and its participants. Provided that the user is the manager of at least one project.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "7", "upgrade"),
			},
			{
				type: typeElementDescription.p,
				data: "As a result, a conceptual, logical and physical database schema was developed. Also, an application for team development of IT projects was designed and implemented. ",
			},
			{
				type: typeElementDescription.p,
				data: "The application allows you to create projects, goals and tasks, as well as subtasks for each task. The possibility of assigning goals to separate projects as well as creating attachments with the possibility of attaching files is implemented. ",
			},
			{
				type: typeElementDescription.p,
				data: "The application allows you to create:",
			},
			{
				type: typeElementDescription.list,
				data: [
					"Projects",
					"Goals",
					"Tasks, as well as subtasks for each task",
					"The of possibility assigning goals to separate projects as well as creating attachments" +
						" with the possibility of attaching files is implemented. ",
				],
			},
			{
				type: typeElementDescription.p,
				data: "Each user belongs to a team according to his/her specialization, which allows to divide users into groups. \n",
			},
			{
				type: typeElementDescription.p,
				data: "The user can access personal statistics to monitor his efficiency in project development. ",
			},
			{
				type: typeElementDescription.p,
				data: "The server-side programming language PHP, JavaScript and MySQL database management system were used to solve the problem. Internet-application “Upgrade” can be used by any users for team development of IT-projects.",
			},
		],
	},
	{
		name: "FNX",
		showInProd: true,
		secondName: "IT project team development system",
		subtitle: "Website design bank",
		poster: getImage(typeImage.previews, "fnx"),
		category: categoriesProjects.design.newDesign,
		type: typesProjects.website,
		date: "November 2021",
		sources: {
			demo: null,
			code: null,
			design: "https://www.behance.net/gallery/155969223/The-concept-of-the-banks-website",
		},
		badges: [
			{
				label: technologies.figma,
				color: colorsTechnologies.figma,
				textColor: "white",
			},
		], // max 3
		technologies: [
			technologies.figma,
			technologies.behance,
			technologies.dribble,
			technologies.uiKit,
			technologies.atomicDesign,
			technologies.figmaStyles,
			technologies.responsiveDesign,
			technologies.figmaComponents,
			technologies.figmaPrototyping,
		],
		targets: [
			"Create a modern and user-friendly website design for a bank",
			"Showcasing my UI/UX design skills and my ability to develop interfaces for financial services",
			"The project was not done for a specific client, but for my portfolio, to demonstrate the process of comprehensive website design from scratch.",
		],
		tasks: [
			"Develop an intuitive interface that provides convenient navigation through banking services.",
			"Create a visual system that reflects the trustworthiness, stability, and technological capabilities of the financial institution.",
			"Demonstrate the ability to work with typography, colors, icons, and micro-animations.",
			"Develop a responsive design for mobile devices",
		],
		description: [
			{
				type: typeElementDescription.h2,
				data: "1. Analysis and research",
			},

			{
				type: typeElementDescription.p,
				data: "There are many banking websites on the market, many of which are overloaded with information and difficult for users to navigate.",
			},
			{
				type: typeElementDescription.solution,
				data: [
					"I researched existing banking websites and collected best practices in financial service interfaces. I analyzed the structure of information, visual accents, and user paths.",
				],
			},
			{
				type: typeElementDescription.p,
				data: "Tools: Google, Dribbble, Behance, Figma.",
			},
			{
				type: typeElementDescription.h2,
				data: "2. Concept development and prototyping",
			},
			{
				type: typeElementDescription.problem,
				data: [
					"Users often get lost on the website due to poor structure and complex information presentation.",
				],
			},
			{
				type: typeElementDescription.solution,
				data: [
					"Created the site's information architecture and identified key blocks: home page, products and services, personal account, contacts, and help.",
					"Developed an interactive prototype to test the navigation logic.",
				],
			},
			{
				type: typeElementDescription.p,
				data: "Tools: Figma (prototypes), Miro (user flow maps).",
			},
			{
				type: typeElementDescription.h2,
				data: "3. Visual style development",
			},
			{
				type: typeElementDescription.p,
				data: "Financial topics are often associated with dryness and complexity.",
			},
			{
				type: typeElementDescription.p,
				data: "Developed a modern visual style with an emphasis on ease of information perception, trustworthy colors (blue and gray shades), readable typography, and neat icons.",
			},
			{
				type: typeElementDescription.p,
				data: "Added micro-animations for interactive elements to make the interaction more enjoyable.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "Slice 1", "fnx"),
			},
			{
				type: typeElementDescription.p,
				data: "Tools: Figma, Adobe Illustrator, Iconscout, Lottie (for animations).",
			},
			{
				type: typeElementDescription.h2,
				data: "4. Creating page layouts",
			},
			{
				type: typeElementDescription.p,
				data: "It is important that each page is clear and concise, without overloading the user with information.",
			},
			{
				type: typeElementDescription.p,
				data: "Created layouts for key pages of the site, including the home page with promotional blocks, the product page with filtering and service cards, and the personal account page with simple account management.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "Slice 2", "fnx"),
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "Slice 6", "fnx"),
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "Slice 3", "fnx"),
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "Slice 4", "fnx"),
			},
			{
				type: typeElementDescription.p,
				data: "Tools: Figma, Photoshop (for image processing).",
			},
			{
				type: typeElementDescription.h2,
				data: "5. Responsive design and prototyping",
			},
			{
				type: typeElementDescription.problem,
				data: [
					"Most of the bank's users access the site from mobile devices.",
				],
			},
			{
				type: typeElementDescription.solution,
				data: [
					"Developed responsive versions of the site for tablets and smartphones, checked text readability, button accessibility, and form usability.",
				],
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "Slice 5", "fnx"),
			},
			{
				type: typeElementDescription.result,
				data: [
					"A fully thought-out, modern design for the bank's website with clear navigation and an attractive visual style.",
					"A ready-made interactive prototype for demonstrating functionality and user flows.",
					"The project has become an excellent example of a comprehensive approach to UI/UX design.",
				],
			},
		],
	},
	{
		showInProd: false,
		name: "Personal greenhouse",
		poster: getImage(typeImage.previews, "plants"),
		category: categoriesProjects.design.newDesign,
		type: typesProjects.mobileApp,
		date: "July 2024",
		sources: {
			demo: null,
			code: null,
			design: null,
		},
		badges: [
			{
				label: technologies.figma,
				color: colorsTechnologies.figma,
				textColor: "white",
			},
		], // max 3
		technologies: [technologies.figma],
		targets: [],
		tasks: [],
		description: [
			// {
			// 	type: typeElementDescription.p,
			// 	data: "p",
			// },
			// {
			// 	type: typeElementDescription.img,
			// 	data: getImage(typeImage.projects, "88.jpg", "infurtex"),
			// },
		],
	},
	{
		showInProd: true,
		name: "El Camino",
		poster: getImage(typeImage.previews, "spanish"),
		category: categoriesProjects.design.newDesign,
		type: typesProjects.landing,
		date: "August 2021",
		sources: {
			demo: null,
			code: null,
			design: "https://www.behance.net/gallery/158449223/Spanish-language-course-site",
		},
		badges: [
			{
				label: technologies.figma,
				color: colorsTechnologies.figma,
				textColor: "white",
			},
		], // max 3
		technologies: [
			technologies.figma,
			technologies.uiKit,
			technologies.atomicDesign,
			technologies.figmaStyles,
			technologies.responsiveDesign,
			technologies.figmaComponents,
			technologies.figmaPrototyping,
		],
		targets: [
			"The goal of this project is to create a modern, visually appealing, and user-friendly landing page that presents Spanish language courses and encourages users to sign up for classes.",
			"The design should convey professionalism, trust, and cultural identity while maintaining clarity and simplicity.",
		],
		tasks: [
			"Create a website to attract new students to Spanish courses. Clean layout and structured typography.",
			"The site should display the main types of courses and provide information about the workload of days",
			"Use of warm tones associated with Spain (red, yellow, beige, terracotta)",
			"Emphasis on call-to-action elements (sign-up button, form, course info)",
		],
		description: [
			{
				type: typeElementDescription.h2,
				data: "Customer's logo",
			},
			{
				type: typeElementDescription.p,
				data: "The customer provided a logo. The whole concept of the site, its colors and visual forms, was built on its basis. For the role of the main color, yellow was chosen.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "logo", "spanish"),
			},
			{
				type: typeElementDescription.p,
				data: "The font was chosen in the style of old fonts to emphasize elegance and the Spanish spirit.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "colors", "spanish"),
			},
			{
				type: typeElementDescription.h2,
				data: "1. Research and Analysis",
			},
			{
				type: typeElementDescription.p,
				data: "Before starting the visual design, I analyzed multiple websites of language schools to understand their strengths and weaknesses.",
			},
			{
				type: typeElementDescription.problem,
				data: [
					"Most competitors relied on outdated layouts overloaded with text and lacked emotional engagement.",
				],
			},
			{
				type: typeElementDescription.solution,
				data: [
					"I aimed for a balanced structure where key information is easy to scan, supported by a friendly visual style and a clear hierarchy.",
				],
			},
			{
				type: typeElementDescription.p,
				data: "The target audience consists of adults and teenagers studying Spanish both online and offline. This insight helped me define a tone that feels professional yet welcoming and inspiring.",
			},
			{
				type: typeElementDescription.h2,
				data: "2. Visual Concept",
			},
			{
				type: typeElementDescription.p,
				data: "The concept draws inspiration from Spanish warmth and optimism — represented through a palette of soft yellows, white backgrounds, and rounded shapes.",
			},
			{
				type: typeElementDescription.p,
				data: "Yellow acts as the key emotional color, evoking sunlight, friendliness, and motivation.",
			},
			{
				type: typeElementDescription.p,
				data: "Typography was chosen to enhance clarity and trust: a modern geometric sans-serif for headings and a neutral, readable typeface for paragraphs. The visual rhythm between headlines, icons, and illustrations guides the eye naturally through the content.",
			},
			{
				type: typeElementDescription.h2,
				data: "3. Layout and Composition",
			},
			{
				type: typeElementDescription.p,
				data: "Each section is structured around a clear hierarchy and white space.",
			},
			{
				type: typeElementDescription.p,
				data: "Rounded containers, soft shadows, and gentle gradients give the interface a polished yet approachable feel.",
			},
			{
				type: typeElementDescription.p,
				data: "Buttons and CTAs are strategically placed with strong contrast to attract attention without overwhelming the layout.",
			},

			{
				type: typeElementDescription.h3,
				data: "The consistent pattern",
			},
			{
				type: typeElementDescription.list,
				data: ["Headline", "Text", "Visual", "CTA"],
			},
			{
				type: typeElementDescription.p,
				data: "— builds predictable flow and improves readability.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "page", "spanish"),
			},
			{
				type: typeElementDescription.h2,
				data: "4. UX and Accessibility",
			},
			{
				type: typeElementDescription.p,
				data: "The design focuses on simplicity and accessibility:",
			},
			{
				type: typeElementDescription.list,
				data: [
					"Clear section hierarchy and scroll-based navigation",
					"Readable typography and balanced contrast",
					"Consistent spacing and rhythm between sections",
					"Repeated CTA buttons for better conversion",
					"Minimal form at the end — only key fields for quick submission",
				],
			},
			{
				type: typeElementDescription.p,
				data: "The entire interface encourages smooth interaction and easy comprehension.",
			},
			{
				type: typeElementDescription.p,
				data: "Modal windows were created for ordering a course and receiving a callback",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "modals", "spanish"),
			},
			{
				type: typeElementDescription.h2,
				data: "5. Responsive Design",
			},
			{
				type: typeElementDescription.p,
				data: "After finalizing the desktop layout, I adapted the design for tablets and mobile devices.",
			},
			{
				type: typeElementDescription.p,
				data: "Main adjustments included:",
			},
			{
				type: typeElementDescription.list,
				data: [
					"Stacking horizontal blocks vertically",
					"Enlarging buttons and form inputs for touch interaction",
					"Simplifying the header navigation",
					"Reducing photo weight and optimizing visual assets",
				],
			},
			{
				type: typeElementDescription.p,
				data: "The mobile version maintains the same emotional tone and usability, ensuring a seamless experience on all devices.",
			},
			{
				type: typeElementDescription.img,
				data: getImage(typeImage.projects, "mobiles", "spanish"),
			},
			{
				type: typeElementDescription.result,
				data: [
					"The final design reflects the essence of Spanish culture — warm, approachable, and inspiring.",
					"It combines clarity, emotional engagement, and usability, creating a digital space that encourages people to start learning Spanish with confidence and enthusiasm.",
				],
			},
		],
	},
	{
		name: "SEO-X",
		poster: getImage(typeImage.previews, "seo-x.jpg"),
		category: categoriesProjects.design.newDesign,
		type: typesProjects.landing,
		date: "December 2021",
		sources: {
			demo: null,
			code: null,
			design: "https://www.behance.net/gallery/154950593/Website-of-the-seo-promotion-company",
		},
		badges: [
			{
				label: technologies.figma,
				color: colorsTechnologies.figma,
				textColor: "white",
			},
		], // max 3
		technologies: [technologies.figma],
		targets: [],
		tasks: [],
		description: [
			// {
			// 	type: typeElementDescription.p,
			// 	data: "p",
			// },
			// {
			// 	type: typeElementDescription.img,
			// 	data: getImage(typeImage.projects, "88.jpg", "infurtex"),
			// },
		],
	},
];

export default factoryObjectsDB(projectsData, 1);
