<template>
	<div
		class="btn-back font-regular text-color-gray flex items-center space-x-1 cursor-pointer w-fit mr-0"
		@click="router.back()"
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
	</div>
</template>

<script setup>
import router from "@/router/router.js";
</script>

<style lang="scss" scoped></style>
