export default (number) => {
	if (number !== 0 && number !== null) {
		return number >= 10 ? number : '0'+number
	}

	return number
}
