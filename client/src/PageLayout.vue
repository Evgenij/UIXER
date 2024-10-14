<template>
	<div class="page flex flex-col justify-between grow">
		<PageHeader></PageHeader>
		<main class="page-data">
			<RouterView />
		</main>
		<PageFooter v-if="visibleFooter"></PageFooter>
	</div>
</template>

<script setup>
import PageFooter from "./components/elements/PageFooter.vue";
import PageHeader from "./components/elements/PageHeader.vue";
import changeMainPhoto from "@/mixins/mainPhotoMixin.js";
import getCookie from "@/mixins/cookieMixin.js";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
import $ from "jquery";
import { ref } from "vue";

const visibleFooter = ref(true);

onMounted(() => {
	if (navigator.cookieEnabled === false) {
		alert("Cookies отключены!");
	} else {
		console.log("Current theme: " + localStorage.getItem("theme"));

		if (localStorage.getItem("theme")) {
			if (localStorage.getItem("theme") === "dark") {
				try {
					if ($("#app").classList.contains("light-theme")) {
						$("#app").toggleClass("light-theme dark-theme");
					}
				} catch (e) {
					console.info('Method "contains" is normal: ', e);
				}

				$(".toggle-theme__dark").prop("checked", true);
			} else {
				$("#app").toggleClass("dark-theme light-theme");
				$(".toggle-theme__light").prop("checked", true);
			}
		} else {
			localStorage.setItem("theme", "dark");
			console.log("theme do not set");
		}

		changeMainPhoto();
	}

	if (route.name !== "main" && window.outerWidth <= 500) {
		console.log("hide footer!");
		visibleFooter.value = !visibleFooter.value;
	}
});
</script>

<style scoped>
.page-data {
	height: 100vh;
	padding: 100px;
}

.page {
	height: 100vh;
}

.side {
	width: 100px;
}
</style>
