<template>
	<section class="content page-contact h-full flex flex-col sm:flex-row">
		<PageSide side="left" :links="links" />
		<PageSide side="right">
			<ThemeToggle />
		</PageSide>

		<h3 class="page-title font-light text-2xl page-name absolute">
			Contact
		</h3>
		<div
			class="page-contact__links links basis-1/2 flex flex-col justify-center px-14 py-16"
		>
			<h4 class="font-heavy links__title mb-16">
				Is there anything to discuss?
			</h4>
			<div class="links__content hidden sm:block">
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
				<div class="links__socials flex space-x-3 mt-12">
					<a
						target="_blank"
						href="https://github.com/Evgenij"
						class="social-link flex items-center px-6"
					>
						<svg
							width="26"
							height="26"
							viewBox="0 0 26 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13 0.5C11.3585 0.5 9.73303 0.831349 8.21646 1.47513C6.69989 2.11891 5.3219 3.06251 4.16117 4.25206C1.81696 6.65447 0.5 9.91282 0.5 13.3103C0.5 18.9725 4.0875 23.7764 9.05 25.4802C9.675 25.5826 9.875 25.1855 9.875 24.8396V22.6747C6.4125 23.4433 5.675 20.9581 5.675 20.9581C5.1 19.4721 4.2875 19.075 4.2875 19.075C3.15 18.2807 4.375 18.3064 4.375 18.3064C5.625 18.396 6.2875 19.6258 6.2875 19.6258C7.375 21.573 9.2125 20.9965 9.925 20.6891C10.0375 19.8564 10.3625 19.2928 10.7125 18.9725C7.9375 18.6522 5.025 17.5506 5.025 12.6698C5.025 11.2479 5.5 10.1078 6.3125 9.19822C6.1875 8.87796 5.75 7.54569 6.4375 5.81629C6.4375 5.81629 7.4875 5.47041 9.875 7.12294C10.8625 6.84112 11.9375 6.7002 13 6.7002C14.0625 6.7002 15.1375 6.84112 16.125 7.12294C18.5125 5.47041 19.5625 5.81629 19.5625 5.81629C20.25 7.54569 19.8125 8.87796 19.6875 9.19822C20.5 10.1078 20.975 11.2479 20.975 12.6698C20.975 17.5634 18.05 18.6394 15.2625 18.9597C15.7125 19.3568 16.125 20.1382 16.125 21.3296V24.8396C16.125 25.1855 16.325 25.5955 16.9625 25.4802C21.925 23.7636 25.5 18.9725 25.5 13.3103C25.5 11.6281 25.1767 9.96225 24.5485 8.40803C23.9203 6.85381 22.9996 5.44161 21.8388 4.25206C20.6781 3.06251 19.3001 2.11891 17.7835 1.47513C16.267 0.831349 14.6415 0.5 13 0.5Z"
								fill="white"
							/>
						</svg>
					</a>
					<a
						target="_blank"
						href="https://www.behance.net/_uixer_"
						class="social-link flex items-center px-6"
					>
						<svg
							width="26"
							height="18"
							viewBox="0 0 26 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.4958 8.09922C10.4958 8.09922 12.9559 7.90989 12.9559 4.93202C12.9559 1.95029 10.9431 0.5 8.39197 0.5H0V17.1487H8.39197C8.39197 17.1487 13.5163 17.3149 13.5163 12.2337C13.515 12.2324 13.7387 8.09922 10.4958 8.09922ZM3.69798 3.45726H8.39197C8.39197 3.45726 9.53361 3.45726 9.53361 5.18833C9.53361 6.92199 8.86267 7.17315 8.10071 7.17315H3.69798V3.45726ZM8.15402 14.1889H3.69798V9.73885H8.39197C8.39197 9.73885 10.0927 9.71567 10.0927 12.0251C10.0927 13.9725 8.82236 14.1747 8.15402 14.1889ZM20.348 4.73367C14.1444 4.73367 14.1496 11.1312 14.1496 11.1312C14.1496 11.1312 13.7257 17.4952 20.348 17.4952C20.348 17.4952 25.865 17.8224 25.865 13.0683H23.0278C23.0278 13.0683 23.1215 14.86 20.4429 14.86C20.4429 14.86 17.6031 15.0557 17.6031 11.9619H25.9548C25.9561 11.9607 26.8767 4.73367 20.348 4.73367ZM22.8718 9.73885H17.5745C17.5745 9.73885 17.9204 7.17315 20.4117 7.17315C22.903 7.17315 22.8718 9.73885 22.8718 9.73885ZM23.5311 1.47759H16.8776V3.53067H23.5311V1.47759Z"
								fill="white"
							/>
						</svg>
					</a>
					<a
						target="_blank"
						href="https://www.linkedin.com/feed/"
						class="social-link flex items-center px-6"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1 2.838C1 2.35053 1.19365 1.88303 1.53834 1.53834C1.88303 1.19365 2.35053 1 2.838 1H21.16C21.4016 0.999608 21.6409 1.04687 21.8641 1.13907C22.0874 1.23127 22.2903 1.36661 22.4612 1.53734C22.6322 1.70807 22.7677 1.91083 22.8602 2.13401C22.9526 2.3572 23.0001 2.59643 23 2.838V21.16C23.0003 21.4016 22.9529 21.6409 22.8606 21.8642C22.7683 22.0875 22.6328 22.2904 22.462 22.4613C22.2912 22.6322 22.0884 22.7678 21.8651 22.8602C21.6419 22.9526 21.4026 23.0001 21.161 23H2.838C2.59655 23 2.35746 22.9524 2.1344 22.86C1.91134 22.7676 1.70867 22.6321 1.53798 22.4613C1.3673 22.2905 1.23193 22.0878 1.13962 21.8647C1.04731 21.6416 0.999869 21.4025 1 21.161V2.838ZM9.708 9.388H12.687V10.884C13.117 10.024 14.217 9.25 15.87 9.25C19.039 9.25 19.79 10.963 19.79 14.106V19.928H16.583V14.822C16.583 13.032 16.153 12.022 15.061 12.022C13.546 12.022 12.916 13.111 12.916 14.822V19.928H9.708V9.388ZM4.208 19.791H7.416V9.25H4.208V19.79V19.791ZM7.875 5.812C7.88105 6.08668 7.83217 6.35979 7.73124 6.61532C7.63031 6.87084 7.47935 7.10364 7.28723 7.30003C7.09511 7.49643 6.8657 7.65248 6.61246 7.75901C6.35921 7.86554 6.08724 7.92042 5.8125 7.92042C5.53776 7.92042 5.26579 7.86554 5.01255 7.75901C4.7593 7.65248 4.52989 7.49643 4.33777 7.30003C4.14565 7.10364 3.99469 6.87084 3.89376 6.61532C3.79283 6.35979 3.74395 6.08668 3.75 5.812C3.76187 5.27286 3.98439 4.75979 4.36989 4.38269C4.75539 4.00558 5.27322 3.79442 5.8125 3.79442C6.35178 3.79442 6.86961 4.00558 7.25512 4.38269C7.64062 4.75979 7.86313 5.27286 7.875 5.812Z"
								fill="white"
							/>
						</svg>
					</a>
					<a
						target="_blank"
						href="https://www.instagram.com/_uixer_/"
						class="social-link flex items-center px-6"
					>
						<svg
							width="26"
							height="26"
							viewBox="0 0 26 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.0003 2.1665C15.9437 2.1665 16.311 2.17734 17.4658 2.2315C18.6196 2.28567 19.405 2.46659 20.0962 2.73525C20.8112 3.01042 21.4135 3.38309 22.0158 3.98434C22.5667 4.52589 22.9929 5.18097 23.2649 5.904C23.5325 6.59409 23.7145 7.38059 23.7687 8.53434C23.8196 9.68917 23.8337 10.0564 23.8337 12.9998C23.8337 15.9433 23.8228 16.3105 23.7687 17.4653C23.7145 18.6191 23.5325 19.4045 23.2649 20.0957C22.9937 20.8191 22.5674 21.4743 22.0158 22.0153C21.4741 22.566 20.8191 22.9922 20.0962 23.2644C19.4061 23.532 18.6196 23.714 17.4658 23.7682C16.311 23.8191 15.9437 23.8332 13.0003 23.8332C10.0569 23.8332 9.68966 23.8223 8.53482 23.7682C7.38107 23.714 6.59566 23.532 5.90449 23.2644C5.18118 22.993 4.52598 22.5667 3.98483 22.0153C3.43385 21.4739 3.00758 20.8188 2.73574 20.0957C2.46708 19.4056 2.28616 18.6191 2.23199 17.4653C2.18108 16.3105 2.16699 15.9433 2.16699 12.9998C2.16699 10.0564 2.17783 9.68917 2.23199 8.53434C2.28616 7.3795 2.46708 6.59517 2.73574 5.904C3.00683 5.18053 3.4332 4.52527 3.98483 3.98434C4.52614 3.43317 5.18129 3.00688 5.90449 2.73525C6.59566 2.46659 7.37999 2.28567 8.53482 2.2315C9.68966 2.18059 10.0569 2.1665 13.0003 2.1665ZM13.0003 7.58317C11.5637 7.58317 10.186 8.15385 9.17016 9.16967C8.15434 10.1855 7.58366 11.5632 7.58366 12.9998C7.58366 14.4364 8.15434 15.8142 9.17016 16.83C10.186 17.8458 11.5637 18.4165 13.0003 18.4165C14.4369 18.4165 15.8147 17.8458 16.8305 16.83C17.8463 15.8142 18.417 14.4364 18.417 12.9998C18.417 11.5632 17.8463 10.1855 16.8305 9.16967C15.8147 8.15385 14.4369 7.58317 13.0003 7.58317V7.58317ZM20.042 7.31234C20.042 6.95319 19.8993 6.60875 19.6454 6.3548C19.3914 6.10084 19.047 5.95817 18.6878 5.95817C18.3287 5.95817 17.9842 6.10084 17.7303 6.3548C17.4763 6.60875 17.3337 6.95319 17.3337 7.31234C17.3337 7.67148 17.4763 8.01592 17.7303 8.26988C17.9842 8.52383 18.3287 8.6665 18.6878 8.6665C19.047 8.6665 19.3914 8.52383 19.6454 8.26988C19.8993 8.01592 20.042 7.67148 20.042 7.31234ZM13.0003 9.74984C13.8623 9.74984 14.6889 10.0922 15.2984 10.7017C15.9079 11.3112 16.2503 12.1379 16.2503 12.9998C16.2503 13.8618 15.9079 14.6884 15.2984 15.2979C14.6889 15.9074 13.8623 16.2498 13.0003 16.2498C12.1384 16.2498 11.3117 15.9074 10.7022 15.2979C10.0927 14.6884 9.75032 13.8618 9.75032 12.9998C9.75032 12.1379 10.0927 11.3112 10.7022 10.7017C11.3117 10.0922 12.1384 9.74984 13.0003 9.74984V9.74984Z"
								fill="white"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div
			class="page-contact__form flex flex-col justify-center basis-1/2 pr-10"
		>
			<div
				class="types-message mb-12 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"
			>
				<RadioButton
					name="type-mess"
					id="hello"
					value="hello"
					checked
					v-model="data.typeMess"
				>
					Just say "Hello"
				</RadioButton>
				<RadioButton
					name="type-mess"
					id="offer"
					value="offer"
					v-model="data.typeMess"
				>
					Send offer
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
					<button
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
					</button>
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
				<div class="links__socials flex space-x-3 mt-12">
					<a
						target="_blank"
						href="https://github.com/Evgenij"
						class="social-link flex items-center px-6"
					>
						<svg
							width="26"
							height="26"
							viewBox="0 0 26 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13 0.5C11.3585 0.5 9.73303 0.831349 8.21646 1.47513C6.69989 2.11891 5.3219 3.06251 4.16117 4.25206C1.81696 6.65447 0.5 9.91282 0.5 13.3103C0.5 18.9725 4.0875 23.7764 9.05 25.4802C9.675 25.5826 9.875 25.1855 9.875 24.8396V22.6747C6.4125 23.4433 5.675 20.9581 5.675 20.9581C5.1 19.4721 4.2875 19.075 4.2875 19.075C3.15 18.2807 4.375 18.3064 4.375 18.3064C5.625 18.396 6.2875 19.6258 6.2875 19.6258C7.375 21.573 9.2125 20.9965 9.925 20.6891C10.0375 19.8564 10.3625 19.2928 10.7125 18.9725C7.9375 18.6522 5.025 17.5506 5.025 12.6698C5.025 11.2479 5.5 10.1078 6.3125 9.19822C6.1875 8.87796 5.75 7.54569 6.4375 5.81629C6.4375 5.81629 7.4875 5.47041 9.875 7.12294C10.8625 6.84112 11.9375 6.7002 13 6.7002C14.0625 6.7002 15.1375 6.84112 16.125 7.12294C18.5125 5.47041 19.5625 5.81629 19.5625 5.81629C20.25 7.54569 19.8125 8.87796 19.6875 9.19822C20.5 10.1078 20.975 11.2479 20.975 12.6698C20.975 17.5634 18.05 18.6394 15.2625 18.9597C15.7125 19.3568 16.125 20.1382 16.125 21.3296V24.8396C16.125 25.1855 16.325 25.5955 16.9625 25.4802C21.925 23.7636 25.5 18.9725 25.5 13.3103C25.5 11.6281 25.1767 9.96225 24.5485 8.40803C23.9203 6.85381 22.9996 5.44161 21.8388 4.25206C20.6781 3.06251 19.3001 2.11891 17.7835 1.47513C16.267 0.831349 14.6415 0.5 13 0.5Z"
								fill="white"
							/>
						</svg>
					</a>
					<a
						target="_blank"
						href="https://www.behance.net/_uixer_"
						class="social-link flex items-center px-6"
					>
						<svg
							width="26"
							height="18"
							viewBox="0 0 26 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.4958 8.09922C10.4958 8.09922 12.9559 7.90989 12.9559 4.93202C12.9559 1.95029 10.9431 0.5 8.39197 0.5H0V17.1487H8.39197C8.39197 17.1487 13.5163 17.3149 13.5163 12.2337C13.515 12.2324 13.7387 8.09922 10.4958 8.09922ZM3.69798 3.45726H8.39197C8.39197 3.45726 9.53361 3.45726 9.53361 5.18833C9.53361 6.92199 8.86267 7.17315 8.10071 7.17315H3.69798V3.45726ZM8.15402 14.1889H3.69798V9.73885H8.39197C8.39197 9.73885 10.0927 9.71567 10.0927 12.0251C10.0927 13.9725 8.82236 14.1747 8.15402 14.1889ZM20.348 4.73367C14.1444 4.73367 14.1496 11.1312 14.1496 11.1312C14.1496 11.1312 13.7257 17.4952 20.348 17.4952C20.348 17.4952 25.865 17.8224 25.865 13.0683H23.0278C23.0278 13.0683 23.1215 14.86 20.4429 14.86C20.4429 14.86 17.6031 15.0557 17.6031 11.9619H25.9548C25.9561 11.9607 26.8767 4.73367 20.348 4.73367ZM22.8718 9.73885H17.5745C17.5745 9.73885 17.9204 7.17315 20.4117 7.17315C22.903 7.17315 22.8718 9.73885 22.8718 9.73885ZM23.5311 1.47759H16.8776V3.53067H23.5311V1.47759Z"
								fill="white"
							/>
						</svg>
					</a>
					<a
						target="_blank"
						href="https://www.linkedin.com/feed/"
						class="social-link flex items-center px-6"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1 2.838C1 2.35053 1.19365 1.88303 1.53834 1.53834C1.88303 1.19365 2.35053 1 2.838 1H21.16C21.4016 0.999608 21.6409 1.04687 21.8641 1.13907C22.0874 1.23127 22.2903 1.36661 22.4612 1.53734C22.6322 1.70807 22.7677 1.91083 22.8602 2.13401C22.9526 2.3572 23.0001 2.59643 23 2.838V21.16C23.0003 21.4016 22.9529 21.6409 22.8606 21.8642C22.7683 22.0875 22.6328 22.2904 22.462 22.4613C22.2912 22.6322 22.0884 22.7678 21.8651 22.8602C21.6419 22.9526 21.4026 23.0001 21.161 23H2.838C2.59655 23 2.35746 22.9524 2.1344 22.86C1.91134 22.7676 1.70867 22.6321 1.53798 22.4613C1.3673 22.2905 1.23193 22.0878 1.13962 21.8647C1.04731 21.6416 0.999869 21.4025 1 21.161V2.838ZM9.708 9.388H12.687V10.884C13.117 10.024 14.217 9.25 15.87 9.25C19.039 9.25 19.79 10.963 19.79 14.106V19.928H16.583V14.822C16.583 13.032 16.153 12.022 15.061 12.022C13.546 12.022 12.916 13.111 12.916 14.822V19.928H9.708V9.388ZM4.208 19.791H7.416V9.25H4.208V19.79V19.791ZM7.875 5.812C7.88105 6.08668 7.83217 6.35979 7.73124 6.61532C7.63031 6.87084 7.47935 7.10364 7.28723 7.30003C7.09511 7.49643 6.8657 7.65248 6.61246 7.75901C6.35921 7.86554 6.08724 7.92042 5.8125 7.92042C5.53776 7.92042 5.26579 7.86554 5.01255 7.75901C4.7593 7.65248 4.52989 7.49643 4.33777 7.30003C4.14565 7.10364 3.99469 6.87084 3.89376 6.61532C3.79283 6.35979 3.74395 6.08668 3.75 5.812C3.76187 5.27286 3.98439 4.75979 4.36989 4.38269C4.75539 4.00558 5.27322 3.79442 5.8125 3.79442C6.35178 3.79442 6.86961 4.00558 7.25512 4.38269C7.64062 4.75979 7.86313 5.27286 7.875 5.812Z"
								fill="white"
							/>
						</svg>
					</a>
					<a
						target="_blank"
						href="https://www.instagram.com/_uixer_/"
						class="social-link flex items-center px-6"
					>
						<svg
							width="26"
							height="26"
							viewBox="0 0 26 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.0003 2.1665C15.9437 2.1665 16.311 2.17734 17.4658 2.2315C18.6196 2.28567 19.405 2.46659 20.0962 2.73525C20.8112 3.01042 21.4135 3.38309 22.0158 3.98434C22.5667 4.52589 22.9929 5.18097 23.2649 5.904C23.5325 6.59409 23.7145 7.38059 23.7687 8.53434C23.8196 9.68917 23.8337 10.0564 23.8337 12.9998C23.8337 15.9433 23.8228 16.3105 23.7687 17.4653C23.7145 18.6191 23.5325 19.4045 23.2649 20.0957C22.9937 20.8191 22.5674 21.4743 22.0158 22.0153C21.4741 22.566 20.8191 22.9922 20.0962 23.2644C19.4061 23.532 18.6196 23.714 17.4658 23.7682C16.311 23.8191 15.9437 23.8332 13.0003 23.8332C10.0569 23.8332 9.68966 23.8223 8.53482 23.7682C7.38107 23.714 6.59566 23.532 5.90449 23.2644C5.18118 22.993 4.52598 22.5667 3.98483 22.0153C3.43385 21.4739 3.00758 20.8188 2.73574 20.0957C2.46708 19.4056 2.28616 18.6191 2.23199 17.4653C2.18108 16.3105 2.16699 15.9433 2.16699 12.9998C2.16699 10.0564 2.17783 9.68917 2.23199 8.53434C2.28616 7.3795 2.46708 6.59517 2.73574 5.904C3.00683 5.18053 3.4332 4.52527 3.98483 3.98434C4.52614 3.43317 5.18129 3.00688 5.90449 2.73525C6.59566 2.46659 7.37999 2.28567 8.53482 2.2315C9.68966 2.18059 10.0569 2.1665 13.0003 2.1665ZM13.0003 7.58317C11.5637 7.58317 10.186 8.15385 9.17016 9.16967C8.15434 10.1855 7.58366 11.5632 7.58366 12.9998C7.58366 14.4364 8.15434 15.8142 9.17016 16.83C10.186 17.8458 11.5637 18.4165 13.0003 18.4165C14.4369 18.4165 15.8147 17.8458 16.8305 16.83C17.8463 15.8142 18.417 14.4364 18.417 12.9998C18.417 11.5632 17.8463 10.1855 16.8305 9.16967C15.8147 8.15385 14.4369 7.58317 13.0003 7.58317V7.58317ZM20.042 7.31234C20.042 6.95319 19.8993 6.60875 19.6454 6.3548C19.3914 6.10084 19.047 5.95817 18.6878 5.95817C18.3287 5.95817 17.9842 6.10084 17.7303 6.3548C17.4763 6.60875 17.3337 6.95319 17.3337 7.31234C17.3337 7.67148 17.4763 8.01592 17.7303 8.26988C17.9842 8.52383 18.3287 8.6665 18.6878 8.6665C19.047 8.6665 19.3914 8.52383 19.6454 8.26988C19.8993 8.01592 20.042 7.67148 20.042 7.31234ZM13.0003 9.74984C13.8623 9.74984 14.6889 10.0922 15.2984 10.7017C15.9079 11.3112 16.2503 12.1379 16.2503 12.9998C16.2503 13.8618 15.9079 14.6884 15.2984 15.2979C14.6889 15.9074 13.8623 16.2498 13.0003 16.2498C12.1384 16.2498 11.3117 15.9074 10.7022 15.2979C10.0927 14.6884 9.75032 13.8618 9.75032 12.9998C9.75032 12.1379 10.0927 11.3112 10.7022 10.7017C11.3117 10.0922 12.1384 9.74984 13.0003 9.74984V9.74984Z"
								fill="white"
							/>
						</svg>
					</a>
				</div>
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
import $ from "jquery";

const links = [
	{
		name: "projects",
		href: "projects",
	},
	{
		name: "contact",
		href: "contact",
	},
	{
		name: "skills",
		href: "skills",
	},
];

const data = reactive({
	name: "",
	email: "",
	company: "",
	website: "",
	message: "",
	typeMess: "hello",
});

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
			service_id: "service_bbp5qcq",
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
</style>
