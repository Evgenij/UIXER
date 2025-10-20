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
			<div class="personal-data p-5 flex flex-col space-y-5 h-max">
				<div class="personal-data__name flex flex-col space-y-2">
					<h4 class="font-semibold text-xl leading-normal">
						Yevhenii Yermolenko
					</h4>
					<p class="text-color-gray experience">
						Commercial experience
						<span class="primary-font ml-1"
							>{{ getDataRange(1, 1, 2021) }} year{{
								getDataRange(1, 1, 2022) > 1 ? "s" : ""
							}}</span
						>
					</p>
				</div>
				<div
					class="personal-data__langs grid grid-cols-4 md:grid-cols-2 2xl:grid-cols-4"
				>
					<div class="lang flex space-x-1 justify-center">
						<span class="text-color-gray">EN</span>
						<span class="text-color-gray">-</span>
						<span class="primary-font">B1</span>
					</div>
					<div class="lang flex space-x-1 justify-center">
						<span class="text-color-gray">PL</span>
						<span class="text-color-gray">-</span>
						<span class="primary-font">B1</span>
					</div>
					<div class="lang flex space-x-1 justify-center">
						<span class="text-color-gray">UA</span>
						<span class="text-color-gray">-</span>
						<span class="primary-font">C2</span>
					</div>
					<div class="lang flex space-x-1 justify-center">
						<span class="text-color-gray">RU</span>
						<span class="text-color-gray">-</span>
						<span class="primary-font">C2</span>
					</div>
				</div>
				<div class="download-resume">
					<a
						:href="CVs[0].href"
						target="_blank"
						class="w-full button py-3 flex space-x-2 justify-center font-bold"
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
								stroke="#fff"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						Download CV
					</a>
					<!-- <div
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
					</div> -->
				</div>
			</div>
		</div>
		<div class="main-data py-10 pb-6 w-full overflow-y-auto">
			<h3
				class="page-title font-light text-2xl page-name mb-7 hidden sm:block"
			>
				About me
			</h3>
			<header class="main-header font-heavy text-2xl mb-9">
				<h2 class="text-4xl leading-normal">Hi, I'm Yevhenii</h2>
				<h4 class="leading-normal mt-4">
					I’m a UI/UX designer with full-cycle expertise — from
					research to developer handoff. I create intuitive,
					user-centered interfaces that combine functionality with
					visual impact.
				</h4>
			</header>
			<section
				class="my-mind w-full flex flex-col items-start xl:flex-row space-x-0 xl:space-x-16 space-y-8 xl:space-y-0"
			>
				<div class="w-full xl:w-1/2">
					<p class="text-base font-regular leading-relaxed">
						Proficient in
						<b class="primary-font"
							>Figma, UI-kits, and atomic design</b
						>, skilled in
						<b class="primary-font">Adobe tools</b> with basic
						<b class="primary-font">video</b> editing and
						<b class="primary-font">motion design</b>. I use a
						professional approach to design development aimed at
						achieving results.
					</p>
					<p class="text-base font-regular mt-4 leading-relaxed">
						Experience in studio and freelance projects, from
						branding to full websites. Knowledge of
						<b class="primary-font"
							>HTML, CSS, React.js and Vue.js</b
						>
						enables smooth collaboration with developers. Focused on
						creating intuitive, user-centered, and engaging
						interfaces.
					</p>

					<!-- <div
						class="badge-base LI-profile-badge"
						data-locale="en_US"
						data-size="large"
						data-theme="dark"
						data-type="HORIZONTAL"
						data-vanity="yevhenii-yermolenko"
						data-version="v1"
					>
						<a
							class="badge-base__link LI-simple-link"
							target="_blank"
							href="https://pl.linkedin.com/in/yevhenii-yermolenko?trk=profile-badge"
							>Yevhenii Yermolenko</a
						>
					</div> -->

					<a
						target="_blank"
						href="https://www.linkedin.com/in/yevhenii-yermolenko/"
						class="mt-4 leading-none link blue flex items-center font-regular w-fit"
					>
						LinkedIn
						<i class="bx bx-right-arrow-alt text-xl ml-1"></i>
					</a>
				</div>
				<div class="w-full xl:w-1/2">
					<h5 class="primary-font main-idea font-bold mb-4 relative">
						My main idea
					</h5>
					<p class="font-regular text-color-gray mb-3">
						I believe that the key factor driving the profitability
						and success of any product is its design.
					</p>
					<p class="font-regular text-color-gray mb-3">
						However, design should not be perceived solely as visual
						aesthetics, but rather as the way users interact with
						the product throughout its entire lifecycle.
					</p>
					<p class="font-regular text-color-gray">
						True design is not about how something looks, but how it
						works — from the initial idea to practical
						implementation.
					</p>

					<a
						target="_blank"
						href="https://www.instagram.com/uixer.design/"
						class="mt-4 leading-none link blue flex items-center font-regular w-fit"
					>
						Instagram
						<i class="bx bx-right-arrow-alt text-xl ml-1"></i>
					</a>
				</div>
			</section>
			<section
				class="professional-info mt-14 w-full flex flex-col xl:flex-row space-x-0 xl:space-x-10 space-y-10 xl:space-y-0"
			>
				<div class="w-full xl:w-4/6">
					<section class="places-of-work">
						<h5
							class="primary-font last-places-of-work font-bold mb-4 relative"
						>
							Last places of work
						</h5>
						<div
							class="works-list grid grid-cols-1 md:grid-cols-2 gap-3"
						>
							<PlaceOfWork
								v-for="placeWork in placesOfWork"
								:data="placeWork"
								:key="placeWork.id"
							/>
						</div>
					</section>

					<section class="projects mt-14">
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

						<div
							class="projects-list grid grid-cols-1 md:grid-cols-2 gap-3"
						>
							<ProjectBlock
								v-for="project in projects.slice(0, 4)"
								:data="project"
								:key="project.id"
								>{{ project.name }}</ProjectBlock
							>
						</div>
					</section>
				</div>
				<div class="w-full xl:w-2/6 h-full sticky top-0">
					<h5 class="primary-font font-bold mb-4">Certificates</h5>

					<div
						class="certificates-list grid grid-cols-1 gap-3 flex-wrap"
					>
						<CertificateBlock
							v-for="certificate in certificates"
							:key="certificate.id"
							:data="certificate"
						/>
					</div>
				</div>
			</section>
			<section class="navigation mt-14 flex flex-col md:flex-row gap-4">
				<router-link
					:to="{ name: 'skills' }"
					class="navigation__item px-4 py-3 border border-1 flex justify-between items-center w-full group"
					>Skills
					<i
						class="bx bx-right-arrow-alt text-xl group-hover:translate-x-1"
					></i
				></router-link>
				<router-link
					:to="{ name: 'projects' }"
					class="navigation__item px-4 py-3 border border-1 flex justify-between items-center w-full group"
					>Projects
					<i
						class="bx bx-right-arrow-alt text-xl group-hover:translate-x-1"
					></i
				></router-link>
				<router-link
					:to="{ name: 'contacts' }"
					class="navigation__item px-4 py-3 border border-1 flex justify-between items-center w-full group"
					>Contacts
					<i
						class="bx bx-right-arrow-alt text-xl group-hover:translate-x-1"
					></i
				></router-link>
			</section>
		</div>
	</section>
</template>

<script setup>
import PageSide from "@/components/elements/PageSide.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import projects from "@/db/projects";
import PlaceOfWork from "@/components/PlaceOfWork.vue";
import placesOfWork from "@/db/placesOfWork";
import certificates from "@/db/certificates";
import CertificateBlock from "@/components/CertificateBlock.vue";
import ProjectBlock from "@/components/ProjectBlock.vue";
// import { ref } from "vue";

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

const CVs = [
	{
		href: new URL(
			`../documents/CV - Yevhenii Yermolenko UIUX designer.pdf`,
			import.meta.url
		).href,
		label: "EN",
	},
	// {
	// 	href: new URL(
	// 		`../documents/CV-Yevhenii Yermolenko - Frontend developer.pdf`,
	// 		import.meta.url
	// 	).href,
	// 	label: "PL",
	// },
	// {
	// 	href: new URL(
	// 		`../documents/CV-Yevhenii Yermolenko - Frontend developer.pdf`,
	// 		import.meta.url
	// 	).href,
	// 	label: "UA",
	// },
];
// const openedTypesFile = ref(false);

const getDataRange = (day, month, year) => {
	let b_date = new Date(year, month, day);
	let today = new Date();
	today.setHours(0);
	today.setMinutes(0);
	today.setSeconds(0);
	return Math.floor((today - b_date) / 31556952000);
};
// const switchTypesFile = () => {
// 	//console.log(openedTypesFile.value);

// 	openedTypesFile.value = !openedTypesFile.value;
// };
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
	padding-left: 3%;
	padding-right: 3%;
	margin-right: 16px;
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
