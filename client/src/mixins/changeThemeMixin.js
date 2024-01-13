import $ from 'jquery';
window.$ = window.jQuery = $;
import setActiveThemeToggle from '@/mixins/themeToggleMixin.js'

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
}

