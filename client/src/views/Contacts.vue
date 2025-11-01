<template>
	<section class="content page-contact h-full flex flex-col sm:flex-row">
		<PageSide side="left" :links="links" />
		<PageSide side="right">
			<ThemeToggle />
		</PageSide>

		<h3 class="page-title font-light text-2xl page-name absolute">
			Contacts
		</h3>
		<div
			class="page-contact__links links basis-1/2 flex flex-col justify-center px-14 py-16"
		>
			<h4 class="font-heavy links__title mb-16">Let's work together</h4>
			<div class="links__content flex-col gap-8 hidden sm:flex">
				<div class="links__email flex space-x-3">
					<p
						ref="emailCopy"
						class="cursor-pointer underline underline-offset-4 hover:text-blue-700"
						@click="copyEmail"
					>
						yevhenii.uixer@gmail.com
					</p>
					<span v-if="copySuccess" class="text-color-green"
						>copied!</span
					>
				</div>
				<ContactsLinks />
			</div>
		</div>
		<div
			class="page-contact__form flex flex-col justify-center basis-1/2 pr-10"
		>
			<div
				class="types-message mb-12 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"
			>
				<!-- TODO change style to squere btn -->
				<RadioButton
					name="type-mess"
					id="offer"
					value="offer"
					v-model="data.typeMess"
					checked
				>
					Send offer
				</RadioButton>
				<RadioButton
					name="type-mess"
					id="hello"
					value="hello"
					v-model="data.typeMess"
				>
					Just say "Hello"
				</RadioButton>
			</div>
			<form
				action=""
				@submit.prevent="sendEmail"
				class="form-message w-full flex flex-col space-y-5 xl:space-y-6"
			>
				<div
					class="row flex flex-col sm:flex-row space-y-6 sm:space-x-6 sm:space-y-0"
				>
					<div class="cell-field required w-full">
						<label
							class="cell-field__label block font-light text-2xl mb-2 max-w-fit relative"
							for="name"
						>
							Name
						</label>
						<Input
							name="name"
							type="text"
							id="name"
							:invalid="v$.name.$error"
							:errors="v$.name.$errors"
							placeholder="enter the name"
							v-model="v$.name.$model"
						/>
					</div>
					<div class="cell-field required w-full">
						<label
							class="cell-field__label block font-light text-2xl mb-2 max-w-fit relative"
							for="email"
						>
							Email
						</label>
						<Input
							name="email"
							type="email"
							id="email"
							:invalid="v$.email.$error && v$.email.$dirty"
							:errors="v$.email.$errors"
							placeholder="enter the email"
							v-model="v$.email.$model"
						/>
					</div>
				</div>
				<div
					class="row flex flex-col sm:flex-row space-y-6 sm:space-x-6 sm:space-y-0"
				>
					<div class="cell-field w-full">
						<label
							class="cell-field__label block font-light text-2xl mb-2 max-w-fit relative"
							for="company"
						>
							Company
						</label>
						<Input
							name="company"
							type="text"
							id="company"
							placeholder="enter the company"
							v-model="data.company"
						/>
					</div>
					<div class="cell-field w-full">
						<label
							class="cell-field__label block font-light text-2xl mb-2 max-w-fit relative"
							for="website"
						>
							Website
						</label>
						<Input
							name="website"
							type="url"
							id="website"
							placeholder="enter the website"
							v-model="data.website"
						/>
						<!--            <input type="url" name="website" id="website" class="cell-field__input" v-model="data.website"-->
						<!--                   placeholder="enter the website">-->
					</div>
				</div>
				<div class="row">
					<div class="cell-field required w-full">
						<label
							class="cell-field__label block font-light text-2xl mb-2 max-w-fit relative"
							for="message"
						>
							Message
						</label>
						<Input
							is-textarea
							name="message"
							placeholder="enter the text message"
							type="text"
							id="message"
							:invalid="v$.message.$error"
							:errors="v$.message.$errors"
							v-model="v$.message.$model"
						/>
					</div>
				</div>
				<div
					class="row flex space-x-0 sm:space-x-3 space-y-3 sm:space-y-0 flex-col sm:flex-row"
				>
					<Button class="primary lg" type="submit">
						<i
							v-if="isLoading"
							class="bx bx-loader-alt bx-spin mr-2"
						></i>
						{{ isLoading ? "Sending..." : "Send" }}
						<svg
							v-if="!isLoading"
							class="ml-2"
							width="21"
							height="21"
							viewBox="0 0 21 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.5 6.49707L17.5 10.4991L13.5 14.5001M4.5 10.5001H17.5"
								stroke="black"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</Button>
					<!-- <button
						type="submit"
						class="max-w-fit button py-3 px-5 flex items-center space-x-2"
					>
						<i
							v-if="isLoading"
							class="bx bx-loader-alt bx-spin mr-2"
						></i>
						{{ isLoading ? "Sending..." : "Send" }}

						<svg
							v-if="!isLoading"
							class="ml-2"
							width="21"
							height="21"
							viewBox="0 0 21 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.5 6.49707L17.5 10.4991L13.5 14.5001M4.5 10.5001H17.5"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button> -->
					<div
						v-if="statusEmail.value !== sendStatuses.default.value"
						class="alert py-2 px-4 flex items-center font-semibold text-sm sm:text-base"
						:class="{
							'bg-green-400 text-green-900':
								statusEmail.value ===
								sendStatuses.success.value,
							'bg-red-400 text-red-900':
								statusEmail.value === sendStatuses.error.value,
						}"
					>
						{{ statusEmail.message }}
					</div>
				</div>
			</form>
			<div class="links__content block sm:hidden mt-10">
				<div class="links__email flex space-x-3 mb-10 sm:mb-0">
					<p
						ref="emailCopy"
						class="cursor-pointer underline underline-offset-4 hover:text-blue-700"
						@click="copyEmail"
					>
						yevhenii.uixer@gmail.com
					</p>
					<span v-if="copySuccess" class="text-color-green"
						>copied!</span
					>
				</div>
				<ContactsLinks />
			</div>
		</div>
	</section>
</template>

<script setup>
import PageSide from "@/components/elements/PageSide.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import { onMounted, reactive, ref } from "vue";
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import Input from "@/components/ui/Input.vue";
import RadioButton from "@/components/ui/RadioButton.vue";
import ContactsLinks from "@/components/ContactsLinks.vue";
import $ from "jquery";
import Button from "@/components/ui/Button.vue";

const links = [
	{
		name: "projects",
		href: "projects",
	},
	{
		name: "contacts",
		href: "contacts",
	},
	{
		name: "skills",
		href: "skills",
	},
];

const emptyData = {
	name: "",
	email: "",
	company: "",
	website: "",
	message: "",
	typeMess: "offer",
};

const data = reactive(emptyData);

const validationRules = {
	name: { required },
	email: { required, email },
	message: { required },
};

const isLoading = ref(false);

const v$ = useVuelidate(validationRules, data);

const copySuccess = ref(false);
const emailCopy = ref(null);

const sendStatuses = {
	default: {
		value: 0,
		message: null,
	},
	success: {
		value: 1,
		message: "Message is sended",
	},
	error: {
		value: 2,
		message: "Message wasn't sent. Please try again later",
	},
};

const statusEmail = ref(sendStatuses.default);

const copyEmail = () => {
	let dataEmail = emailCopy.value.textContent.trim();

	if (emailCopy) {
		navigator.clipboard
			.writeText(dataEmail)
			.then(() => {
				copySuccess.value = true;
				setTimeout(() => {
					copySuccess.value = false;
				}, 2000);
				//this.openNotification('top-center', 'success', `<i class='bx bx-check'></i>`)
			})
			.catch((err) => {
				console.log("Something went wrong", err);
			});
	}
};

const sendEmail = () => {
	v$.value.$validate();
	if (!v$.value.$invalid) {
		statusEmail.value = sendStatuses.default;
		isLoading.value = !isLoading.value;

		var dataMessage = {
			service_id: "service_4z4xzlk",
			template_id: "template_UIXER",
			user_id: "zAtJmtMFqVs9UGSKx",
			template_params: {
				message: data.message,
				from: data.name,
				type: data.typeMess,
				email: data.email,
				company: data.company,
				website: data.website,
			},
		};
		$.ajax("https://api.emailjs.com/api/v1.0/email/send", {
			type: "POST",
			data: JSON.stringify(dataMessage),
			contentType: "application/json",
		})
			.done(function () {
				statusEmail.value = sendStatuses.success;
			})
			.fail(function (error) {
				console.log("Oops... " + JSON.stringify(error));
				statusEmail.value = sendStatuses.error;
			})
			.always(() => {
				isLoading.value = !isLoading.value;
				setTimeout(() => {
					statusEmail.value = sendStatuses.default;
				}, 4000);
			});
	}

	// emailjs.send("service_bbp5qcq", "template_UIXER", {
	// 	message: "message",
	// 	from: "from_name",
	// 	contact_type: "type",
	// 	email: "email_person",
	// 	company: "company",
	// 	website: "site",
	// });
};

onMounted(() => {
	emailCopy.value;
});
</script>

<style scoped lang="scss">
.links {
	&__email p {
		user-select: text !important;
	}

	&__title {
		font-size: 90px;
		line-height: 1em;
	}
}

.social-link {
	height: 50px;
}

.cell-field {
	&.required {
		.cell-field__label {
			&:before {
				content: "*";
				font-size: 40px;
				line-height: 0.8;
				font-weight: 400;
				position: absolute;
				right: -16px;
				top: 2px;
				display: block;
			}
		}
	}
}

button {
	svg path {
		stroke: black;
	}
}
</style>
