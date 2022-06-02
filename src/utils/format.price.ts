export function formatPrice(price: number) {
	if (price.toString().includes(".")) {
		return price + "00 VND";
	}
	if (price === 0) {
		return price + " VNĐ";
	}
	return price + ".000 VNĐ";
}
