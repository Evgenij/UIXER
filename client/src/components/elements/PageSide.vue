<template>
	<section class="side" :class="side">
		<nav v-if="links" class="links h-full flex flex-col justify-evenly">
			<div
				class="side-link text-center uppercase font-light -rotate-90 min-w-max"
				v-for="link in links"
			>
				<router-link
					:to="{ name: link.href }"
					:class="[
						link.href === $route.name
							? 'font-semibold'
							: 'opacity-50',
					]"
				>
					{{ link.name }}
				</router-link>
			</div>
		</nav>
		<slot v-else></slot>
	</section>
</template>

<script setup>
defineProps({
	side: {
		type: String,
		required: true,
	},
	links: {
		type: Array,
		required: false,
	},
});

// const getRouteName = computed(() => {
//   //console.log(this.$route)
//   return this.$router.name;
// });
</script>

<style lang="scss" scoped>
.side {
	width: 100px;
}
.links {
	padding: 75% 0;

	.side-link {
		a:hover {
			opacity: 1;
		}
	}
}
</style>
