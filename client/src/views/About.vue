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
				<img
					src="@/images/photo-resume.png"
					alt="photo-resume"
					class="h-full"
				/>
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
						{{ getDataRange(7, 4, 2000) }} years
					</p>
				</div>
				<div class="personal-data__experience font-regular">
					<p class="text-color-gray experience">
						Experience
						<span class="primary-font"
							>{{ getDataRange(1, 1, 2021) }} year{{
								getDataRange(1, 1, 2022) > 1 ? "s" : ""
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
						<span class="primary-font">B1</span>
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
				<h2 class="text-4xl leading-normal">Hi, my name's Yevhenii</h2>
				<h4 class="leading-normal mt-4">
					Ambitious and quality oriented, what I do, frontend
					developer with 3 years of experience in development and 2
					years of experience in UI/UX design.
				</h4>
				<p class="text-xl font-regular mt-8 leading-relaxed">
					Experienced in working on websites of varying complexity
					starting from creating the first design prototype to
					deployment. Started my way in IT with website and
					application design. Was engaged in the development of
					<b class="primary-font"
						>websites and mobile applications design</b
					>. Created<b class="primary-font">
						UI kits, UX research and prototypes for interfaces</b
					>
				</p>
				<p class="text-xl font-regular mt-8 leading-relaxed">
					I got into frontend with Vue and I'm developing on React.
					Specializing in
					<b class="primary-font"
						>React [+Redux], Vue [+Vuex], TypeScript and modern
						JavaScript (ES6+)</b
					>, I turn complex requirements into elegant, user-centric
					solutions that add business value
				</p>
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
									<div class="flex flex-col gap-2 pl-5">
										<div
											v-for="paragraph in placeWork.description"
											class="wrapp-info-paragraph relative"
										>
											<p class="font-light opacity-70">
												{{ paragraph }}
											</p>
										</div>
									</div>
								</AccordionTab>
							</Accordion>
						</div>
					</div>
				</div>
				<div class="w-full xl:w-1/2">
					<header class="flex align-center justify-between">
						<h5 class="primary-font font-bold mb-4">
							Last projects
						</h5>
						<a
							href="/projects"
							class="font-light text-sm hover:underline underline-offset-4"
							>Show all</a
						>
					</header>

					<div class="projects-list grid grid-cols-1 gap-5 flex-wrap">
						<div
							v-for="project in projects.slice(0, 4)"
							:key="project.id"
							class="project flex flex-col h-min"
						>
							<div
								class="project__header relative header flex flex-col space-y-2 justify-center items-start p-5"
							>
								<header class="flex items-center space-x-4">
									<h3
										class="header__main font-bold text-xl leading-normal"
									>
										{{ project.secondName }}
										<Badge v-if="project.inDeveloping" />
									</h3>
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
									<div class="flex flex-col gap-2">
										<div
											v-if="
												project.shortenedDescription
													?.length !== 0
											"
											class="flex flex-col gap-2 pl-5"
										>
											<div
												v-for="item in project.shortenedDescription"
												class="wrapp-info-paragraph relative"
											>
												<p
													class="font-light opacity-70"
												>
													{{ item }}
												</p>
											</div>
										</div>
										<p v-else class="px-2">No info</p>
										<a
											:href="`project/${project.name}`"
											class="inline-block p-2 font-light hover:underline underline-offset-4"
											>Show more ></a
										>
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
								class="header__main font-bold text-3xl leading-none text-center"
								:style="{ color: certificate.color }"
							>
								{{ certificate.label }}
							</h3>
							<span class="font-light text-sm text-center">
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
import Badge from "@/components/Badge.vue";
import projects from "@/db/projects";
import { ref } from "vue";

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
		label: "React",
		type: "JS framework",
		color: "#58c4dc",
		list_cert: [
			{
				name: "React Full course",
				href: new URL(
					`../documents/certificates/react-course.pdf`,
					import.meta.url
				).href,
			},
		],
	},
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

const CVs = [
	{
		href: new URL(
			`../documents/CV-Yevhenii Yermolenko - Frontend developer.pdf`,
			import.meta.url
		).href,
		label: "EN",
	},
	{
		href: new URL(
			`../documents/CV-Yevhenii Yermolenko - Frontend developer.pdf`,
			import.meta.url
		).href,
		label: "PL",
	},
	{
		href: new URL(
			`../documents/CV-Yevhenii Yermolenko - Frontend developer.pdf`,
			import.meta.url
		).href,
		label: "UA",
	},
];
const openedTypesFile = ref(false);

const getDataRange = (day, month, year) => {
	let b_date = new Date(year, month, day);
	let today = new Date();
	today.setHours(0);
	today.setMinutes(0);
	today.setSeconds(0);
	return Math.floor((today - b_date) / 31556952000);
};
const switchTypesFile = () => {
	//console.log(openedTypesFile.value);

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

.wrapp-info-paragraph:before {
	content: "";
	position: absolute;
	display: block;
	width: 6px;
	height: 6px;
	left: -16px;
	top: 8px;
}
</style>
