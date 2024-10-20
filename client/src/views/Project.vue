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
					<!-- {{ this.$route.params.id }} -->
					{{ dataProject.name }}
				</h3>
				<div class="tags flex items-center space-x-2">
					<h4 class="primary-font text-xl">
						{{ dataProject.category }}
					</h4>
					<span class="tags__line opacity-60"></span>
					<h5 class="text-color-gray opacity-80 text-xl">
						{{ dataProject.type }}
					</h5>
				</div>
			</div>
			<div class="dev-tools w-full">
				<p class="font-semibold text-xl mb-3">Development tools</p>
				<div
					v-if="dataProject.technologies.length != 0"
					class="tools flex flex-wrap"
				>
					<div
						class="tool px-3 p-2 border mr-2 mb-2"
						v-for="technology in dataProject.technologies"
					>
						{{ technology }}
					</div>
				</div>
				<p v-else class="text-sm opacity-40 font-light">Empty</p>
			</div>
		</aside>
		<section
			class="basis-7/12 project-page__data project-data p-10 pr-6 mr-4 h-full sm:overflow-y-auto sm:overflow-x-hidden"
		>
			<div class="project-data__preview w-full mb-8">
				<img :src="dataProject.poster" :alt="dataProject.name" />
			</div>
			<div class="project-data__elements flex flex-col space-y-8 mb-4">
				<div class="row flex sm:space-x-14 w-full flex-wrap gap-6">
					<div class="row__item item flex flex-col flex-shrink-0">
						<div class="item__name text-color-gray mb-1">
							Category
						</div>
						<div class="item__value text-xl font-semibold">
							{{ dataProject.category }}
						</div>
					</div>
					<div class="row__item item flex flex-col flex-shrink-0">
						<div class="item__name text-color-gray mb-1">
							Type project
						</div>
						<div class="item__value text-xl font-semibold">
							{{ dataProject.type }}
						</div>
					</div>
					<div class="row__item item flex flex-col flex-shrink-0">
						<div class="item__name text-color-gray mb-1">
							Date development
						</div>
						<div class="item__value text-xl font-semibold">
							{{ dataProject.date }}
						</div>
					</div>
				</div>
				<div class="row flex sm:space-x-14 w-full flex-wrap gap-6">
					<div class="row__item item flex flex-col flex-shrink-0">
						<div class="item__name text-color-gray mb-1">Demo</div>
						<div class="item__value text-xl font-semibold">
							<a
								v-if="dataProject?.sources?.demo"
								href=""
								target="_blank"
								class="underline underline-offset-2 opacity-60 hover:opacity-100 hover:text-blue-600"
								>{{ dataProject.sources.demo }}</a
							>
							<template v-else>Not available</template>
						</div>
					</div>
					<div class="row__item item flex flex-col flex-shrink-0">
						<div class="item__name text-color-gray mb-1">Code</div>
						<div class="item__value text-xl font-semibold">
							<a
								v-if="dataProject?.sources?.code"
								href=""
								target="_blank"
								class="underline underline-offset-2 opacity-60 hover:opacity-100 hover:text-blue-600"
								>{{ dataProject.sources.code }}</a
							>
							<template v-else>Not available</template>
						</div>
					</div>
					<div class="row__item item flex flex-col flex-shrink-0">
						<div class="item__name text-color-gray mb-1">
							Design
						</div>
						<div class="item__value text-xl font-semibold">
							<a
								v-if="dataProject?.sources?.design"
								href=""
								target="_blank"
								class="underline underline-offset-2 opacity-60 hover:opacity-100 hover:text-blue-600"
								>{{ dataProject.sources.design }}</a
							>
							<template v-else>Not available</template>
						</div>
					</div>
				</div>
				<div class="row flex flex-col sm:flex-row sm:space-x-14 w-full">
					<div class="row__item item flex flex-col w-1/2">
						<div class="item__name text-color-gray mb-1">
							Targets
						</div>
						<div
							class="item__value text-xl font-semibold flex flex-col space-y-5"
						>
							<div
								v-for="target in dataProject.targets"
								class="flex"
							>
								<span class="primary-font mr-2">▪</span>
								{{ target }}
							</div>
						</div>
					</div>
					<div class="row__item item flex flex-col w-1/2">
						<div class="item__name text-color-gray mb-1">Tasks</div>
						<div
							class="item__value text-xl font-semibold tasks flex flex-col space-y-5"
						>
							<div v-for="task in dataProject.tasks" class="flex">
								<span class="primary-font mr-2">▪</span>
								{{ task }}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="project-description flex flex-col space-y-6 mt-10">
				<template v-for="element in dataProject?.description">
					<div
						v-if="element.type === typeElementDescription.img"
						class="project-description__img w-full"
					>
						<img
							:src="element.data"
							:alt="element.data.split('/').at(-1)"
						/>
					</div>
					<div
						v-else-if="element.type === typeElementDescription.p"
						class="project-description__text text-color-gray"
					>
						{{ element.data }}
					</div>
					<ModalImage
						v-else-if="
							element.type === typeElementDescription.modalImg
						"
						:img="element.data"
					/>
				</template>
				<!-- <div class="project-description__img w-full pt-4">
					<img src="../images/projects/Desktop.png" alt="Desktop" />
				</div>
				<div class="project-description__text text-color-gray py-6">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Accusantium assumenda atque, consequatur, culpa eaque
					expedita harum id illum, iure molestias officiis quos sit
					vitae. Accusamus dolorum necessitatibus odio ratione
					reprehenderit!
				</div>
				<ModalImage :img="dataProject.poster" />
				<div class="project-description__text text-color-gray py-6">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Accusantium assumenda atque, consequatur, culpa eaque
					expedita harum id illum, iure molestias officiis quos sit
					vitae. Accusamus dolorum necessitatibus odio ratione
					reprehenderit!
				</div>
				<ModalImage :img="dataProject.poster" /> -->
			</div>
		</section>
	</section>
</template>

<script setup>
import ModalImage from "@/components/ModalImage.vue";
import PageSide from "@/components/elements/PageSide.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import { useRoute } from "vue-router";
import getProjectsData from "@/db/getProjectsData";
import projectsTasks from "@/db/projectsTasks";
import { typeElementDescription } from "@/helpers/consts";

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

const route = useRoute();

const projectID = route.params.id;
const dataProject = getProjectsData(projectID);
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
			height: 40vh;

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
				top: 50%;
				margin-top: -2px;
				left: 0;
			}
		}
	}
}
</style>
