<template>
	<viewer class="image-viewer container clearfix overflow-hidden">
		<img ref="imageTarget" :src="image" class="image" :alt="image" />
		<div class="overlay cursor-pointer" @click="openImage">
			<div class="text">Open</div>
		</div>
	</viewer>
</template>

<script lang="ts" setup>
defineProps({
	image: String,
});

import { ref, onMounted } from "vue";

const imageTarget = ref(null);

onMounted(() => {
	imageTarget.value;
});

const openImage = () => {
	imageTarget.value.click();
};
</script>

<style lang="scss">
.viewer-container {
	z-index: 10000 !important;
}
.container {
	position: relative;
	max-height: 500px;
}
.image {
	display: block;
	width: 100%;
	height: auto;
}

.overlay {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	opacity: 0;
	transition: 0.2s ease;
	background-color: #00000098;
}
.container:hover .overlay {
	opacity: 1;
}

.text {
	color: white;
	font-size: 20px;
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	text-align: center;
}
</style>
