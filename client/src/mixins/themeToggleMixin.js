import $ from "jquery";
import changeMainPhoto from "@/mixins/mainPhotoMixin.js";

export default () => {
	if ($("#app").attr("class") === "light-theme") {
		$("#light").prop("checked", true);
	} else {
		$("#dark").prop("checked", true);
	}
	changeMainPhoto();
};
