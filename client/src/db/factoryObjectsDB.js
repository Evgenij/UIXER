export default (sourceArray, startIndex) => {
	return sourceArray.map((data, index) => {
		return { id: index + startIndex, ...data };
	});
};
