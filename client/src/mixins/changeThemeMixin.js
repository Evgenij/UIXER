import $ from 'jquery';
window.$ = window.jQuery = $;
import changeMainPhoto from "@/mixins/mainPhotoMixin.js";

const setActiveThemeToggle = () => {
	if($('#app').attr('class') === 'light-theme') {
		$('.toggle-theme__light').prop('checked', true)
	} else {
		$('.toggle-theme__dark').prop('checked', true)
	}
	changeMainPhoto()
}
export default () => {
		console.log('change theme')

		if($('#app').attr('class') === 'light-theme') {
			$('#app').toggleClass('light-theme dark-theme')
			document.cookie = "theme=dark";
		} else {
			$('#app').toggleClass('dark-theme light-theme')
			document.cookie = "theme=light";
		}

		setActiveThemeToggle()
		// changeMainPhoto();
}

