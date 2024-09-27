<template>
	<div class="modal-image">
		<img class="image" :src="img" :alt="img" />
		<div
			class="overlay-panel flex justify-center items-center"
			@click="toggleModal"
		>
			<span class="font-light">Show</span>
		</div>
		<div
			v-if="activeModal"
			class="content flex justify-center"
			@click="toggleModal"
		>
			<div class="wrapper-image overflow-y-scroll">
				<img class="image" :src="img" :alt="img" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
	img: String,
});

const activeModal = ref(false);

const toggleModal = () => {
	activeModal.value = !activeModal.value;
};
</script>

<style scoped lang="scss">
.modal-image {
	position: relative;
	height: 400px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		transition: 0.3s;
		opacity: 0;
		z-index: 1000;
		color: white;
		font-size: 24px;
	}

	.overlay-panel {
		transition: 0.3s;
		background: transparent;
		cursor: pointer;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			background: rgba(0, 0, 0, 0.5);

			span {
				opacity: 1;
			}
		}
	}

	.content {
		transition: 0.3s;
		backdrop-filter: blur(40px);
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10000;

		.wrapper-image {
			position: relative;
			width: 90%;
			height: 100vh;
			margin: 0 auto;

			img {
				padding: 20px;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: fit-content;
			}
		}
	}
}
.image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
