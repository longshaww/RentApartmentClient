import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const deleteConfirm = async (
	deleteMsg: string,
	cancelMsg: string,
	doOnDelete: Function
) => {
	const result = await MySwal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonText: "Yes, delete it!",
		cancelButtonText: "No, cancel!",
		reverseButtons: true,
	});
	if (result.isConfirmed) {
		MySwal.fire("Deleted!", deleteMsg, "success");
		doOnDelete();
	} else if (
		/* Read more about handling dismissals below */
		result.dismiss === Swal.DismissReason.cancel
	) {
		MySwal.fire("Cancelled", cancelMsg, "error");
	}
};
