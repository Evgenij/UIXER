<template>
	<section class="content page-projects h-full">
		<PageSide side="left" :links="links" />
		<PageSide side="right">
			<ThemeToggle></ThemeToggle>
		</PageSide>

		<div class="background-panel primary-background absolute h-full"></div>
		<BackBtn class="absolute m-4 my-6 sm:mt-10 sm:ml-10" />
		<div class="slider-wrapper flex h-full relative">
			<Carousel3d
				display="3"
				border="0"
				width="600"
				height="600"
				bias="left"
				perspective="0"
				inverseScaling="0"
				space="710"
				:controlsVisible="true"
				:controlsPrevHtml="null"
				:controlsNextHtml="null"
				:controlsWidth="500"
				:controlsHeight="430"
				:minSwipeDistance="0"
				class="slider-projects"
			>
				<Slide
					v-for="(project, index) in projects.filter(
						(project) => project.showInProd === true
					)"
					:index="index"
					:key="index"
					class="slide project relative flex flex-col justify-between space-y-6"
				>
					<header class="project__title flex justify-between">
						<div
							class="project__number absolute font-light text-5xl"
						>
							.{{ showNumberItem(index + 1) }}
						</div>
						<h4 class="project__name font-extrabold text-4xl">
							{{ project.name }}
							<Badge v-if="project.inDeveloping" class="mt-1" />
						</h4>
						<router-link
							v-if="project.technologies.length !== 0"
							:to="toProject(project.name)"
							class="project__link font-regular flex items-center text-xl space-x-1"
						>
							<span>Explore</span>
							<svg
								width="21"
								height="14"
								viewBox="0 0 21 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.2859 1.28125L20.0001 6.99839L14.2859 12.7141M1.42871 6.99982H20.0001"
									stroke="#282930"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</router-link>
					</header>
					<main class="project__photo h-full">
						<router-link
							:to="
								project.technologies.length !== 0
									? toProject(project.name)
									: ''
							"
						>
							<img
								:src="project.poster"
								:alt="project.name"
								class="w-full"
							/>
							<!-- <div
								class="badges z-50 absolute flex gap-2 -bottom-3 sm:-bottom-1 left-2"
							>
								<p
									v-for="badge in project.badges"
									class="badge p-1 px-2 text-sm text-white font-bold"
									:style="{
										backgroundColor: badge.color,
										color: badge.textColor,
									}"
								>
									{{ badge.label.toString().trim() }}
								</p>
							</div> -->
						</router-link>
					</main>
					<footer class="project__articles flex justify-between">
						<div class="project__category font-heavy">
							{{ project.category }}
						</div>
						<div class="project__type">{{ project.type }}</div>
					</footer>
				</Slide>
			</Carousel3d>
		</div>
	</section>
</template>

<script setup>
import { onMounted } from "vue";
import themeToggleMixin from "@/mixins/themeToggleMixin.js";
import showNumberItem from "@/mixins/showNumberInSliderMixin.js";
import { Carousel3d, Slide } from "vue3-carousel-3d";
import PageSide from "@/components/elements/PageSide.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import Badge from "@/components/Badge.vue";
import projects from "@/db/projects";
import BackBtn from "@/components/elements/BackBtn.vue";

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
		name: "contacts",
		href: "contacts",
	},
];

const toProject = (name) => {
	return {
		name: "project",
		params: { name },
	};
};

onMounted(() => {
	themeToggleMixin();
});
// 	const mouseX = e.clientX;
// 	const mouseY = e.clientY;
// 	const leftX = mouseX - bounds.x;
// 	const topY = mouseY - bounds.y;
// 	const center = {
// 		x: leftX - bounds.width / 2,
// 		y: topY - bounds.height / 2,
// 	};
// 	const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

// 	$card.style.transform = `
//     scale3d(1.07, 1.07, 1.07)
//     rotate3d(
//       ${center.y / 100},
//       ${-center.x / 100},
//       0,
//       ${Math.log(distance) * 2}deg
//     )
//   `;

// 	$card.querySelector(".glow").style.backgroundImage = `
//     radial-gradient(
//       circle at
//       ${center.x * 2 + bounds.width / 2}px
//       ${center.y * 2 + bounds.height / 2}px,
//       #ffffff55,
//       #0000000f
//     )
//   `;
// }

// $card.addEventListener("mouseenter", () => {
// 	bounds = $card.getBoundingClientRect();
// 	document.addEventListener("mousemove", rotateToMouse);
// });

// $card.addEventListener("mouseleave", () => {
// 	document.removeEventListener("mousemove", rotateToMouse);
// 	$card.style.transform = "";
// 	$card.style.background = "";
// });
</script>

<style lang="scss">
.background-panel {
	width: 670px;
	left: 50%;
	margin-left: -335px;
}

.slider-projects {
	height: 100% !important;
	padding: 150px 0 30px 0;
	margin: 0 !important;

	.carousel-3d-slide {
		overflow: visible;
		background-color: transparent;
		display: flex;

		&.left-1,
		&.right-1 {
			.badges,
			.in-developing {
				opacity: 0 !important;
			}
		}
	}

	.carousel-3d-controls {
		top: 35% !important;
		z-index: -1000;

		& .prev,
		.next {
			backdrop-filter: grayscale(1) contrast(1);

			&:hover {
				opacity: 0 !important;
			}
		}

		& .prev {
			left: 0;
		}

		& .next {
			right: 0;
		}
	}

	& div.carousel-3d-slider {
		height: 100% !important;
	}

	& .slide {
		height: 100% !important;
	}
}

.panel-grayscale {
	position: absolute;
	z-index: 5000;
	top: 220px;
	backdrop-filter: grayscale(1) contrast(1);
	width: 500px;
	height: 580px;

	&.left {
		left: 100px;
	}

	&.right {
		right: 100px;
	}
}

.coming-soon {
	margin-left: -150px;
}

.project__number {
	top: -120px;
}

.project {
	&__photo {
		position: relative;

		img {
			position: absolute;
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	&__link {
		&:hover {
			svg {
				transform: translateX(4px);
			}
		}
	}
}
</style>
