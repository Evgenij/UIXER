import factoryObjectsDB from "./factoryObjectsDB";

const placesOfWork = [
	{
		current: true,
		company: {
			name: "VizoGEN Ltd.",
			description: "AI-based photo and video content generation service",
			href: "https://vizogen.ru/",
		},
		position: "UI/UX designer",
		year: 2025,
		responsibilities: [
			"Designed the main website, service pages, and admin panel for data collection and analytics",
			"Built a UI Kit and design system to ensure product consistency",
			"Developed the brand identity and adapted interfaces for all devices (responsive design)",
			"Created a dynamic interactive prototype in Figma for testing and stakeholder review",
			"Worked with CJM, User Flow, and UX patterns to optimize user journeys",
			"Collaborated closely with developers, considering frontend technologies (React, HTML, CSS, JavaScript)",
		],
		tools: ["Figma", "FigJam", "Jira", "Adobe Premier Pro"],
		projects: [{ name: "Main website", href: "https://vizogen.ru/" }],
	},
	{
		company: {
			name: "KMV Tour Ltd.",
			description: "A company that provides travel services",
			href: "https://kmv-tur.org/",
		},
		position: "Frontend developer",
		year: 2023,
		responsibilities: [
			"Developed an adaptive CRM system for a travel company, improving customer interaction by 40%",
			"Built a responsive UI with Vue 3 & Bootstrap, ensuring a smooth mobile first experience",
			"Collaborated in a 6-person Agile team, managing tasks with Jira and Git for control version",
		],
		tools: [
			"Vue 3",
			"SCSS",
			"Bootstrap",
			"Jira",
			"Git",
			"Responsible design",
		],
		projects: [],
	},
	{
		company: {
			name: "DKT Ltd.",
			description: "Internet and television services company",
			href: "https://dkt.ltd/",
		},
		position: "Technical Support Engineer / Web Developer",
		year: 2022,
		responsibilities: [
			"Designed and developed a new company website , increasing traffic by 20%",
			"Implemented Vue 3-based UI with API integration for real-time data updates",
			"Provided technical support, configuring routers, modems, and PCs",
		],
		tools: ["Figma", "Redesign", "REST Api", "Vue 3"],
		projects: [
			{
				name: "Design company's website",
				href: "https://www.behance.net/gallery/158428435/ISP-client-admin-panel",
			},
		],
	},
	{
		company: {
			name: "ITD company",
			description: "Web studio",
			href: "https://itd.company/",
		},
		position: "UI/UX Designer",
		year: 2021,
		responsibilities: [
			"Created website layouts, UI kits, and prototypes for startups and enterprises",
			"Designed a website for a tobacco factory showcased at the WT Middle East Expo in Dubai",
			"Developed branding materials, including logos, corporate styles, and ad content",
		],
		tools: ["Figma", "UI-kit", "Responsive design"],
		projects: [
			{
				name: "Website for a tobacco factory",
				href: "https://ktftobacco.ru/en",
			},
			{
				name: "Website redesign",
				href: "https://www.behance.net/gallery/158469431/Ironworks-website-redesign",
			},
			{
				name: "SEO-X",
				href: "https://www.behance.net/gallery/154950593/Website-of-the-seo-promotion-company",
			},
			{
				name: "FNX",
				href: "https://www.behance.net/gallery/155969223/The-concept-of-the-banks-website",
			},
			{
				name: "El Camino",
				href: "https://www.behance.net/gallery/158449223/Spanish-language-course-site",
			},
			{
				name: "Employee search website",
				href: "https://www.behance.net/gallery/155457257/Employee-Search-website",
			},
		],
	},
];

export default factoryObjectsDB(placesOfWork, 10);
