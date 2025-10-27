<template>
	<div v-if="isOpen" class="modal modal-mask">
		<div class="modal-wrapper h-full flex items-center">
			<div class="modal-container" ref="target">
				<section
					class="modal-header section flex justify-between items-start"
				>
					<slot name="header"></slot>
					<button
						@click.stop="emit('modal-close')"
						type="button"
						class="btn-close h-[36px] w-[36px] flex items-start justify-center hover:bg-white/5"
					></button>
				</section>
				<section class="modal-body section">
					<slot name="content"></slot>
				</section>
				<section class="modal-footer flex justify-between section">
					<slot name="footer"> </slot>
				</section>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
	isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);

const target = ref(null);
onClickOutside(target, () => emit("modal-close"));
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	backdrop-filter: blur(15px);
}

.modal {
	&-header {
		.btn-close {
			position: relative;

			&::before,
			&::after {
				position: absolute;
				top: 50%;
				left: calc(50% - width);
				transform: translate(-50%, -50%);
				content: "";
				height: 1px;
				width: 70%;
				background-color: $gray;
			}

			&::before {
				transform: rotate(45deg);
			}
			&::after {
				transform: rotate(-45deg);
			}
		}
	}

	&-container {
		width: 50rem;
		margin: auto;

		.section {
			padding: 0.7rem 0.8rem;
			padding-left: 1rem;
		}
	}
}
</style>
