<template>
	<section class="content page-about flex flex-col h-full sm:flex-row">
		<PageSide side="left" :links="links" />
		<PageSide side="right">
			<ThemeToggle />
		</PageSide>

		<div class="general-data flex flex-col">
			<h3
				class="page-title font-light text-2xl page-name mb-12 block sm:hidden"
			>
				About me
			</h3>
			<div
				class="photo flex items-center justify-center h-full overflow-hidden"
			>
				<!--        <img src="img/photo-resume.png" alt="photo-resume">-->
				<img src="@/images/photo-resume.png" alt="photo-resume" />
			</div>
			<div class="personal-data p-6 flex flex-col space-y-4 h-max">
				<div
					class="personal-data__main flex justify-between items-start"
				>
					<div class="personal-data__name flex flex-col">
						<h4 class="font-semibold text-lg leading-normal">
							Yevhenii Yermolenko
						</h4>
						<p class="text-color-gray font-regular">Ukraine</p>
					</div>
					<p class="text-color-gray text-lg font-regular years">
						{{ getAgeFromBirthday(7, 4, 2000) }} years
					</p>
				</div>
				<div class="personal-data__experience font-regular">
					<p class="text-color-gray experience">
						Experience
						<span class="primary-font"
							>{{ getAgeFromBirthday(1, 1, 2022) }} year{{
								getAgeFromBirthday(1, 1, 2022) > 1 ? "s" : ""
							}}</span
						>
					</p>
				</div>
				<div
					class="personal-data__langs flex justify-between items-center space-x-4"
				>
					<div class="lang flex space-x-1">
						<span class="text-color-gray">EN</span>
						<span class="text-color-gray">-</span>
						<span class="primary-font">A2</span>
					</div>
					<div class="divide"></div>
					<div class="lang flex space-x-1">
						<span class="text-color-gray">PL</span>
						<span class="text-color-gray">-</span>
						<span class="primary-font">B1</span>
					</div>
					<div class="divide"></div>
					<div class="lang flex space-x-1">
						<span class="text-color-gray">UA</span>
						<span class="text-color-gray">-</span>
						<span class="primary-font">C2</span>
					</div>
					<div class="divide"></div>
					<div class="lang flex space-x-1">
						<span class="text-color-gray">RU</span>
						<span class="text-color-gray">-</span>
						<span class="primary-font">C2</span>
					</div>
				</div>
				<div class="download-resume">
					<button
						v-if="!openedTypesFile"
						class="w-full button primary primary-border py-3 flex space-x-2 justify-center primary-font"
						@click="switchTypesFile"
					>
						<svg
							width="22"
							height="22"
							viewBox="0 0 22 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7 11L11 15.232L15 11.041M11 4V15M5 18H17"
								stroke="#FFCD1C"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						Download CV
					</button>
					<div
						v-else
						class="download-buttons flex items-center pl-4 space-x-4"
						@click="switchTypesFile"
					>
						<p>Language</p>
						<div class="flex grow">
							<a
								v-for="CV in CVs"
								:key="CV.label"
								:href="CV.href"
								target="_blank"
								class="lang__button py-3 grow text-center"
								>{{ CV.label }}</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="main-data p-16 pb-6 w-full overflow-y-auto">
			<h3
				class="page-title font-light text-2xl page-name mb-12 hidden sm:block"
			>
				About me
			</h3>
			<header class="main-header font-extrabold text-2xl mb-16">
				<h2 class="mb-6 text-4xl leading-normal">
					Hi, my name's Yevhenii
				</h2>
				<h4 class="leading-normal">
					I am a UI/UX Designer and front-end developer in one person.
					I have been engaged in developing for about 3 years, I have
					met many projects and interesting tasks on my professional
					path.
				</h4>
			</header>
			<section
				class="my-mind w-full flex flex-col xl:flex-row space-x-0 xl:space-x-16 space-y-8 xl:space-y-0"
			>
				<div class="w-full xl:w-1/2">
					<h5 class="primary-font main-idea font-bold mb-4 relative">
						My main idea
					</h5>
					<p class="font-regular text-color-gray mb-3">
						I believe that the key factor influencing the
						profitability and success of any product is its Design,
						BUT.
					</p>
					<p class="font-regular text-color-gray mb-3">
						The Design is not in the form of a visual Design, but in
						terms of how the end user will interact throughout the
						entire cycle of working with the product.
					</p>
					<p class="font-regular text-color-gray">
						Design is not how an object looks, but how it works.
						Design is Design, from idea to practical implementation.
					</p>
				</div>
				<div class="w-full xl:w-1/2">
					<h5 class="primary-font font-bold mb-4">
						Free time forwarding
					</h5>
					<p class="font-regular text-color-gray mb-3">
						In my free time, I develop my professional skills and
						learn new ones in related fields in order to better
						understand what programmers face when implementing
						Design solutions.
					</p>
					<p class="font-regular text-color-gray mb-3">
						Sometimes I need a “reboot". A walk around the city with
						a cup of coffee helps me with this)
					</p>
					<p class="font-regular text-color-gray mb-3">
						I also run my Instagram blog, where I talk about the
						field of Design and give useful tips to the audience
					</p>
					<a
						target="_blank"
						href="https://www.instagram.com/_uixer_/"
						class="mt-4 leading-none link blue flex items-center font-regular"
					>
						Instagram
						<i class="bx bx-right-arrow-alt text-xl ml-1"></i>
					</a>
				</div>
			</section>
			<section
				class="professional-info mt-14 w-full flex flex-col xl:flex-row space-x-0 xl:space-x-16 space-y-8 xl:space-y-0"
			>
				<div class="w-full xl:w-1/2">
					<h5
						class="primary-font last-places-of-work font-bold mb-4 relative"
					>
						Last places of work
					</h5>
					<div class="works-list grid grid-cols-1 gap-5 flex-wrap">
						<div
							v-for="(placeWork, index) in placesWorks"
							:key="index"
							class="work-place flex flex-col h-min"
						>
							<div
								class="work-place__header header flex flex-col space-y-2 justify-center items-start p-5"
							>
								<header class="flex items-center space-x-4">
									<h3
										class="header__main font-bold text-xl leading-normal"
									>
										{{ placeWork.position }}
									</h3>
									<span class="opacity-30 font-light">|</span>
									<p class="opacity-30 font-light text-base">
										{{ placeWork.from }} -
										{{ placeWork.to }}
									</p>
								</header>

								<span class="font-light text-sm">
									{{ placeWork.company }}
								</span>
							</div>
							<Accordion class="work-place__accordion">
								<AccordionTab
									header="More info"
									contentClass="work-place__accordion accordion"
								>
									<div class="flex flex-col space-y-3">
										<p
											v-for="paragraph in placeWork.description"
											class="font-light opacity-80"
										>
											▪ {{ paragraph }}
										</p>
									</div>
								</AccordionTab>
							</Accordion>
						</div>
					</div>
				</div>
				<div class="w-full xl:w-1/2">
					<h5 class="primary-font font-bold mb-4">
						Personal projects
					</h5>
					<div class="projects-list grid grid-cols-1 gap-5 flex-wrap">
						<div
							v-for="(project, index) in projects"
							:key="index + 100"
							class="project flex flex-col h-min"
						>
							<div
								class="project__header header flex flex-col space-y-2 justify-center items-start p-5"
							>
								<header class="flex items-center space-x-4">
									<h3
										class="header__main font-bold text-xl leading-normal"
									>
										{{ project.name }}
									</h3>
									<!-- <span class="opacity-30 font-light">|</span>
									<p class="opacity-30 font-light text-base">
										{{ project.from }} -
										{{ project.to }}
									</p> -->
								</header>

								<span class="font-light text-sm">
									{{ project.subtitle }}
								</span>
							</div>
							<Accordion class="project__accordion">
								<AccordionTab
									header="More info"
									contentClass="project__accordion accordion"
								>
									<div class="flex flex-col space-y-1">
										<div
											v-for="item in project.description"
											class="info-item flex space-x-2"
										>
											<span class="opacity-40 font-light"
												>{{ item.name }}:</span
											>
											<a
												v-if="item.href"
												:href="item.href"
												target="_blank"
												class="underline font-normal text-blue-500"
												>{{ item.label }}</a
											>
											<p v-else class="font-light">
												Not available
											</p>
										</div>
									</div>
									<div class="flex flex-col space-y-3 mt-4">
										<p
											v-for="paragraph in project.paragraphs"
											class="font-light opacity-80"
										>
											▪ {{ paragraph }}
										</p>
									</div>
								</AccordionTab>
							</Accordion>
						</div>
					</div>
				</div>
			</section>
			<section class="certificates mt-14">
				<h5 class="primary-font font-bold mb-4">Certificates</h5>
				<div
					class="certificates-list grid grid-cols-1 sm:grid-cols-2 gap-5 flex-wrap"
				>
					<div
						v-for="certificate in certificates"
						:key="certificate.id"
						class="certificate flex flex-col h-min"
					>
						<div
							class="certificate__header header flex flex-col space-y-2 justify-center items-center py-10 px-3"
						>
							<h3
								class="header__main font-bold text-3xl leading-none"
								:style="{ color: certificate.color }"
							>
								{{ certificate.label }}
							</h3>
							<span class="font-light text-sm">
								{{ certificate.type }}
							</span>
						</div>
						<Accordion class="certificate__accordion">
							<AccordionTab
								header="Certificates"
								contentClass="certificate__accordion accordion"
							>
								<a
									v-for="certificateItem in certificate.list_cert"
									target="_blank"
									:key="certificateItem.id"
									:href="certificateItem.href"
									class="group accordion__item flex justify-between font-light hover:underline underline-offset-4 transition-none py-3 first:pt-0 last:pb-0"
								>
									<span>{{ certificateItem.name }}</span>
									<span class="hidden group-hover:block"
										>open</span
									>
								</a>
							</AccordionTab>
						</Accordion>
					</div>
				</div>
			</section>
		</div>
	</section>
</template>

<script setup>
import PageSide from "@/components/elements/PageSide.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import { h, ref } from "vue";

const links = [
	{
		name: "skills",
		href: "skills",
	},
	{
		name: "about me",
		href: "about",
	},
	{
		name: "projects",
		href: "projects",
	},
];

const certificates = [
	{
		label: "Angular",
		type: "JS framework",
		color: "#ff0032",
		list_cert: [
			{
				name: "Angular Essential",
				href: new URL(
					`../documents/certificates/TP58962405.pdf`,
					import.meta.url
				).href,
			},
		],
	},
	{
		label: "Python",
		type: "Language",
		color: "#ff9700",
		list_cert: [
			{
				name: "PCAP: Programming Essentials in Python",
				href: new URL(
					`../documents/certificates/cisco/EvgenyErmolenko-Python-20IVT7-certificate (1).pdf`,
					import.meta.url
				).href,
			},
		],
	},
	{
		label: "Cisco",
		type: "Network technologies",
		color: "#187ac5",
		list_cert: [
			{
				name: "Introduction to Networks",
				href: new URL(
					`../documents/certificates/cisco/EvgenyErmolenko-CCNA-1v7-20IVT4-certificate.pdf`,
					import.meta.url
				).href,
			},
			{
				name: "Switching, Routing, and Wireless Essentials (SRWE)",
				href: new URL(
					`../documents/certificates/cisco/EvgenyErmolenko-CCNA-SRWE-21IVT4-certificate.pdf`,
					import.meta.url
				).href,
			},
			{
				name: "Introduction to Packet Tracer",
				href: new URL(
					`../documents/certificates/cisco/EvgenyErmolenko-Introduction to -certificate (2).pdf`,
					import.meta.url
				).href,
			},
		],
	},
	{
		label: "UI/UX Design",
		type: "Design",
		color: "#6d00e9",
		list_cert: [
			{
				name: "UI/UX Design Essential",
				href: new URL(
					`../documents/certificates/TP10044539.pdf`,
					import.meta.url
				).href,
			},
			{
				name: "UI/UX Design Starter",
				href: new URL(
					`../documents/certificates/TP11251734.pdf`,
					import.meta.url
				).href,
			},
			{
				name: "UI/UX mobile App Design",
				href: new URL(
					`../documents/certificates/TP79487888.pdf`,
					import.meta.url
				).href,
			},
			{
				name: "Figma - Online Store Design",
				href: new URL(
					`../documents/certificates/TP44664130.pdf`,
					import.meta.url
				).href,
			},
		],
	},
];

const placesWorks = [
	{
		company: "A company that provides travel services",
		position: "Frontend developer",
		from: "Sept 2023",
		to: "Nov 2023",
		description: [
			"Developing websites using Design and programming techniques. ",
			"Using various programming techniques and communicating with other programmers. Working on user interface on system pages. Worked with Vue 3.",
		],
	},
	{
		company: "Internet and television services company",
		position: "Technical Support Engineer / Web Developer",
		from: "Feb 2022",
		to: "June 2023",
		description: [
			"Customer service in the office and on the hotline. I was responsible for configuring customers' routers and devices. ",
			"I communicated with foremen regarding calls to the customer's apartment. Received customer calls and resolved problems on the customer side. ",
			"I created a new updated company website.",
		],
	},
	{
		company: "ITD company",
		position: "UI/UX Designer",
		from: "July 2021",
		to: "Feb 2022",
		description: [
			"Develop layouts for websites and applications. Communicating with developers, discussing Design solutions. ",
			"Preparing the project for development. Creating the company's visual image and maintaining a consistent style. ",
			"Preparing materials for the company's social networks.",
		],
	},
];

const projects = [
	{
		subtitle: "System for testing Design solutions",
		name: "Service for UI/UX Design testing",
		from: "Sept 2023",
		to: "Nov 2023",
		description: [
			{
				name: "Demo",
				href: "",
				label: "",
			},
			{
				name: "Code",
				href: "https://github.com/Evgenij/Infurtex",
				label: "https://github.com",
			},
			{
				name: "Design",
				href: "",
				label: "",
			},
		],
		paragraphs: [
			"As part of my graduation project at university, I developed a system for testing Design solutions. ",
			"The system allows to connect potential clients or users of any service to get feedback on the Design, while Design developers get a complete analysis of user behavior when interacting with the Design. ",
			"The system was developed using: Laravel, Vue JS (Vue Router, Vuex), SCSS, Vuesax, Tailwind, MySQL.",
		],
	},
	{
		subtitle: "System for team development of IT projects",
		name: "IT project team development system - Upgrade",
		from: "Sept 2023",
		to: "Nov 2023",
		description: [
			{
				name: "Demo",
				href: "",
				label: "",
			},
			{
				name: "Code",
				href: "https://github.com/Evgenij/Upgrade_Web",
				label: "https://github.com",
			},
			{
				name: "Design",
				href: "https://www.behance.net/gallery/113790579/sistema-komandnoj-razrabotki-Upgrade",
				label: "https://www.behance.net",
			},
		],
		paragraphs: [
			"As part of a course project at the university, I developed a system for team development of IT projects.",
			"This project was implemented using: PHP, JS, jQuery, Ajax, HTML, SCSS.",
			"All user interaction was realized through asynchronous requests (Ajax), which allowed to interact with the system without reloading the page.",
			"The project was implemented without the use of frameworks. All design and functionality was implemented from scratch.",
			"The work with Sessions, Cookies was done. DBMS MySQL was used. The project is implemented in two themes - light and dark.",
		],
	},
	{
		subtitle: "System for planning tasks and goals",
		name: "Desktop application for planning tasks and goals",
		from: "Sept 2023",
		to: "Nov 2023",
		description: [
			{
				name: "Demo",
				href: "",
				label: "",
			},
			{
				name: "Code",
				href: "https://github.com/Evgenij/Upgrade",
				label: "https://github.com",
			},
			{
				name: "Design",
				href: "https://www.behance.net/gallery/108482153/UIUX-dizajn-prilozhenija-planirovanija-zadach-i-celej",
				label: "https://www.behance.net",
			},
		],
		paragraphs: [
			"As part of a course project at the university, I developed a system for planning tasks and goals. ",
			"This project was realized with the use of: C#, Windows Forms, MS SQL Server.",
		],
	},
];

const CVs = [
	{
		href: new URL(
			`../documents/CV-Yevhenii Yermolenko.pdf`,
			import.meta.url
		).href,
		label: "EN",
	},
	{
		href: new URL(
			`../documents/CV-Yevhenii Yermolenko.pdf`,
			import.meta.url
		).href,
		label: "PL",
	},
	{
		href: new URL(
			`../documents/CV-Yevhenii Yermolenko.pdf`,
			import.meta.url
		).href,
		label: "UA",
	},
];
const openedTypesFile = ref(false);

const getAgeFromBirthday = (day, month, year) => {
	let b_date = new Date(year, month, day);
	let today = new Date();
	today.setHours(0);
	today.setMinutes(0);
	today.setSeconds(0);
	return Math.floor((today - b_date) / 31556952000);
};
const switchTypesFile = () => {
	console.log(openedTypesFile.value);

	openedTypesFile.value = !openedTypesFile.value;
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.general-data {
	width: 30%;
}

.photo {
	position: relative;

	img {
		position: absolute;
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
}

.main-data {
	padding-left: 5%;
	padding-right: 5%;
	margin-right: 16px;
}

.personal-data__langs {
	.divide {
		height: 18px;
		width: 1px;
	}
}

.pages-links {
	z-index: 1000;
	border-bottom: 1px solid $lines;

	& .main-link {
		& .dot {
			background: $text-color;
		}

		&:after {
			background: $lines;
		}
	}
}
</style>
