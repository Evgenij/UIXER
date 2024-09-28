import $ from "jquery";
window.$ = window.jQuery = $;
import setActiveThemeToggle from "@/mixins/themeToggleMixin.js";

export default () => {
	console.log("change theme");

	// if ($("#app").attr("class") === "light-theme") {
	// 	$("#app").toggleClass("light-theme dark-theme");
	// 	//document.cookie = "theme=dark";
	// 	localStorage.setItem("theme", "dark");
	// } else {
	// 	$("#app").toggleClass("dark-theme light-theme");
	// 	//document.cookie = "theme=light";
	// 	localStorage.setItem("theme", "light");
	// }

	if (localStorage.getItem("theme") === "light") {
		$("#app").toggleClass("light-theme dark-theme");
		localStorage.setItem("theme", "dark");
	} else {
		$("#app").toggleClass("dark-theme light-theme");
		localStorage.setItem("theme", "light");
	}
	//console.log(localStorage.getItem("theme"));

	setActiveThemeToggle();
};
