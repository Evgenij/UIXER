import $ from "jquery";
import changeMainPhoto from "@/mixins/mainPhotoMixin.js";

export default () => {
	if($('#app').attr('class') === 'light-theme') {
		$('.toggle-theme__light').prop('checked', true)
	} else {
		$('.toggle-theme__dark').prop('checked', true)
	}
	changeMainPhoto()
}