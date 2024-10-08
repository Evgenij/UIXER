<template>
	<section class="content project-page h-full flex flex-col sm:flex-row">
		<PageSide side="left" :links="links" />
		<PageSide side="right">
			<ThemeToggle />
		</PageSide>

		<aside class="project-page__main px-14 py-12 h-full basis-5/12">
			<router-link
				:to="{ name: 'projects' }"
				class="project-page__back font-regular flex items-center space-x-1 mb-10"
			>
				<svg
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11.7141 9.28125L5.99986 14.9984L11.7141 20.7141M24.5713 14.9998H5.99986"
						stroke="#8E8E8E"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span>back</span>
			</router-link>

			<div class="project-page__name mb-16">
				<h3 class="font-heavy text-7xl mb-5">
					{{ this.$route.params.id }}
				</h3>
				<div class="tags flex items-center space-x-2">
					<h4 class="primary-font text-xl">Redesign</h4>
					<span class="tags__line opacity-60"></span>
					<h5 class="text-color-gray opacity-80 text-xl">
						Web-application
					</h5>
				</div>
			</div>
			<div class="dev-tools w-full">
				<p class="font-semibold text-xl">Development tools</p>
				<div class="tools mt-3 flex flex-wrap">
					<div
						class="tool px-3 p-2 border mr-2 mb-2"
						v-for="tool in tools"
					>
						{{ tool }}
					</div>
				</div>
			</div>
		</aside>
		<section
			class="basis-7/12 project-page__data project-data p-10 pr-6 mr-4 h-full sm:overflow-y-auto sm:overflow-x-hidden"
		>
			<div class="project-data__preview w-full mb-8">
				<img src="../images/projects/Desktop.png" alt="" />
			</div>
			<div class="project-data__elements flex flex-col space-y-6 mb-4">
				<div class="row flex sm:space-x-14 w-full flex-wrap gap-6">
					<div class="row__item item flex flex-col flex-shrink-0">
						<div class="item__name text-color-gray mb-1">
							Project name
						</div>
						<div class="item__value text-xl font-semibold">
							Upgrade
						</div>
					</div>
					<div class="row__item item flex flex-col flex-shrink-0">
						<div class="item__name text-color-gray mb-1">
							Type project
						</div>
						<div class="item__value text-xl font-semibold">
							Web-application
						</div>
					</div>
					<div class="row__item item flex flex-col flex-shrink-0">
						<div class="item__name text-color-gray mb-1">
							Year development
						</div>
						<div class="item__value text-xl font-semibold">
							July 2019
						</div>
					</div>
				</div>
				<div
					class="row flex flex-col sm:flex-row sm:space-x-14 w-full gap-6"
				>
					<div class="row__item item flex flex-col basis-1/2">
						<div class="item__name text-color-gray mb-1">
							Target
						</div>
						<div class="item__value text-xl font-semibold">
							Interdum lorem mi vulputate ac, blandit eget amet
							volutpat. Cursus mauris id felis facilisis bibendum
							mi diam nisl. Ipsum sollicitudin purus vitae lectus
							faucibus quam enim iaculis scelerisque.
						</div>
					</div>
					<div class="row__item item flex flex-col basis-1/2">
						<div class="item__name text-color-gray mb-1">Tasks</div>
						<div
							class="item__value text-xl font-semibold tasks flex flex-col space-y-1"
						>
							<div class="task pl-6">1</div>
							<div class="task pl-6">2</div>
							<div class="task pl-6">3</div>
							<div class="task pl-6">4</div>
							<div class="task pl-6">5</div>
							<div class="task pl-6">6</div>
						</div>
					</div>
				</div>
			</div>
			<div class="project-description">
				<div class="project-description__img w-full pt-4">
					<img src="../images/projects/Desktop.png" alt="Desktop" />
				</div>
				<div class="project-description__text text-color-gray py-6">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Accusantium assumenda atque, consequatur, culpa eaque
					expedita harum id illum, iure molestias officiis quos sit
					vitae. Accusamus dolorum necessitatibus odio ratione
					reprehenderit!
				</div>
				<ModalImage :img="img" />
				<div class="project-description__text text-color-gray py-6">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Accusantium assumenda atque, consequatur, culpa eaque
					expedita harum id illum, iure molestias officiis quos sit
					vitae. Accusamus dolorum necessitatibus odio ratione
					reprehenderit!
				</div>
				<ModalImage :img="img" />
			</div>
		</section>
	</section>
</template>

<script setup>
import ModalImage from "@/components/ModalImage.vue";
import PageSide from "@/components/elements/PageSide.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";

const img = "/src/images/projects/Desktop.png";

const links = [
	{
		name: "skills",
		href: "skills",
	},
	{
		name: "projects",
		href: "projects",
	},
	{
		name: "contact",
		href: "contact",
	},
];

const tools = [
	"Figma",
	"CJM",
	"MySQL",
	"PHP",
	"AJAX",
	"SCSS",
	"Tailwind",
	"PHP",
	"AJAX",
	"SCSS",
	"Tailwind",
];
</script>

<style scoped lang="scss">
.tags__line {
	display: block;
	height: 1px;
	width: 18px;
}

.project-page {
	&__back {
		&:hover {
			svg {
				transform: translateX(-3px);
			}
		}
	}

	.project-data {
		scroll-behavior: smooth;

		&__preview,
		&__project-description {
			position: relative;
			height: 300px;

			img {
				position: absolute;
				height: 100%;
				width: 100%;
				object-fit: cover;
			}
		}

		&__project-description {
			height: auto;
		}

		.task {
			position: relative;
			&:before {
				content: "";
				height: 2px;
				width: 14px;
				position: absolute;
				top: 13px;
				left: 0;
			}
		}
	}
}
</style>
