import $ from "jquery";

export default () => {
	if($('#app').attr('class') === 'light-theme') {
		$('#main-photo').attr('src', '/src/images/main-light.png')
	} else {
		$('#main-photo').attr('src', '/src/images/main-dark.png')
	}
}