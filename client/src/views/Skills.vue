<template>
	<section class="content page-skills h-full flex flex-col">
		<PageSide side="left" :links="links"></PageSide>
		<PageSide side="right">
			<ThemeToggle />
		</PageSide>
		<header
			class="flex items-center w-full justify-between py-10 px-12 pb-4"
		>
			<h3 class="page-title font-light text-2xl page-name">Skills</h3>
			<h4 class="font-semibold text-6xl relative top-2 area">
				{{ activeTab }}
			</h4>
		</header>
		<main class="data-page">
			<Tabs @changeTab="changeTab" :tabs="tabs">
				<Tab name="UI/UX design" :active-tab="activeTab">
					<Design
						:items="tabsContents.design.items"
						:skills="tabsContents.design.skills"
					/>
				</Tab>
				<Tab name="Frontend" :active-tab="activeTab">
					<Frontend
						:items="tabsContents.frontend.items"
						:skills="tabsContents.frontend.skills"
					/>
				</Tab>
			</Tabs>
		</main>
	</section>
</template>

<script setup>
import PageSide from "@/components/elements/PageSide.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import Tabs from "@/components/elements/Tabs/Tabs.vue";
import { ref } from "vue";
import Tab from "@/components/elements/Tabs/Tab.vue";
import Design from "@/components/skills/Design.vue";
import Frontend from "@/components/skills/Frontend.vue";

const links = [
	{
		name: "projects",
		href: "projects",
	},
	{
		name: "skills",
		href: "skills",
	},
	{
		name: "contact",
		href: "contact",
	},
];

const tabs = [
	{
		name: "UI/UX design",
		isActive: true,
	},
	{
		name: "Frontend",
		isActive: false,
	},
];

const tabsContents = {
	design: {
		items: [
			{
				id: 1,
				name: "Figma",
			},
			{
				id: 2,
				name: "InVision Studio",
			},
			{
				id: 3,
				name: "Adobe Photoshop",
			},
		],
		skills: [
			"Prototyping",
			"UI-kits",
			"User Flow",
			"Design systems",
			"Responsive design",
			"Components",
			"Wireframing",
			"CJM",
			"Mobile design",
			"Responsive design",
		],
	},
	frontend: {
		items: [
			{
				id: 1,
				name: "JavaScript",
			},
			{
				id: 2,
				name: "Vue JS",
			},
			{
				id: 3,
				name: "Angular",
			},
		],
		skills: [
			"Prototyping",
			"UI-kits",
			"UI-kits",
			"UI-kits",
			"UI-kits",
			"User Flow",
			"User Flow",
			"Design systems",
			"Responsive design",
			"Components",
			"Wireframing",
			"CJM",
			"Design systems",
			"Mobile design",
		],
	},
};

const activeTab = ref("UI/UX design");

const changeTab = (val) => {
	activeTab.value = val;
};
</script>

<style lang="scss">
.data-page {
	height: inherit;
}

.skills-wrapper {
	width: 150%;
	overflow-x: hidden;
	scroll-behavior: smooth;
}

li {
	position: relative;

	&:before {
		transition: 0.3s;
		content: "";
		display: block;
		width: 40px;
		height: 4px;
		background: transparent;
		position: absolute;
		bottom: -2px;
		left: 50%;
		margin-left: -20px;
	}
}

.area {
	font-weight: 500;
}

.numder {
	font-weight: 200 !important;
}

span.numders__line {
	display: block;
	height: 1px;
	width: 70px;
}

.skills {
	&__list {
		& .skill {
			padding: 0.7em 1em;
			margin: 0 20px 20px 0;
			height: fit-content;
			width: fit-content;
		}
	}
}

.nav {
	.arrows {
		svg {
			cursor: pointer;
		}
	}
}

.slider {
	&__item {
		//font-weight: 600;
		bottom: -18px;
	}
}
</style>
