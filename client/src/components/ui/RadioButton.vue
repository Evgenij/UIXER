<template>
	<div class="wrapper-radio" @click="checked=true">
		<input :type :name :id :value="id" :checked v-model="model">
		<label :for="id" class="block cursor-pointer px-8 py-5 pl-16">
			<slot/>
		</label>
	</div>
</template>

<script setup>
	defineProps({
		id: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		checked: Boolean
	})

	const model = defineModel()
</script>

<style scoped lang="scss">

	@import "../../assets/variables";

	.wrapper-radio {
		position: relative;
		width: fit-content;

		input[type='radio'] {
			display: none;
		}

		input[type='radio'] + label {
			border: 1px solid $lines;

			&:hover {
				border-color: $gray;

				&:before {
					border-color: $gray;
				}
			}

			&:before, &:after {
				content: '';
				position: absolute;
				display: block;
				border-radius: 50%;
				transition: .3s;
			}

			&:before {
				border: 1px solid rgba($gray, 0.3);
				left: 24px;
				top: 22px;
				width: 22px;
				height: 22px;
			}

			&:after {
				left: 29px;
				top: 27px;
				width: 12px;
				height: 12px;
				background: transparent;
			}
		}

		input[type='radio']:checked + label {

			border-color: $primary;

			&:after {
				background: $primary;
			}
		}
	}

	//.type-message {
	//
	//	input[type='radio'] + label {
	//		border: 1px solid $lines;
	//
	//		&:hover {
	//			border-color: $gray;
	//
	//			&:before {
	//				border-color: $gray;
	//			}
	//		}
	//
	//		&:before {
	//			border: 1px solid rgba($gray, 0.3);
	//		}
	//	}
	//
	//	input[type='radio']:checked + label {
	//
	//		border-color: $primary;
	//
	//		&:after {
	//			background: $primary;
	//		}
	//	}
	//}
</style>