<template>
	<section class="content page-projects h-full">
		<PageSide side="left" :links="links" />
		<PageSide side="right">
			<ThemeToggle></ThemeToggle>
		</PageSide>

		<div class="background-panel primary-background absolute h-full"></div>
		<h3 class="page-title font-light text-2xl page-name absolute">
			Projects
		</h3>
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
					v-for="(project, index) in projects"
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
						</h4>
						<router-link
							v-if="project.technologies.length !== 0"
							:to="toProject(project.id)"
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
									? toProject(project.id)
									: ''
							"
						>
              <Badge v-if="project.inDeveloping"/>
							<img
								:src="project.poster"
								:alt="project.name"
								class="w-full"
							/>
              <div class="badges z-50 absolute flex gap-2 -bottom-3 sm:-bottom-1 left-2">
                <p v-for="badge in project.badges"
                   class="badge p-1 px-2 text-sm text-white font-bold"
                    :style="{backgroundColor: badge.color, color: badge.textColor}">
                  {{badge.label.toString().trim()}}
                  </p>
              </div>
						</router-link>
					</main>
					<footer class="project__articles flex justify-between">
						<div class="project__category font-bold">
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

const toProject = (id) => {
	return {
		name: "project",
		params: { id },
	};
};

onMounted(() => {
	themeToggleMixin();
});
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

    &.left-1, &.right-1 {
      .badges, .in-developing{
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
