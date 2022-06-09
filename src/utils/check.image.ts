export function checkImageString(image: string) {
	if (image.includes("http")) {
		return image;
	}
	return `${process.env.REACT_APP_BE_URL}static/${image}`;
}
