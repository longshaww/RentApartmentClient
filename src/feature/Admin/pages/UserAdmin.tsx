import PaymentAdmin from "../components/payment/payment.admin";
import ProfileComponent from "../components/user/profile.admin";

const UserAdmin: React.FC = () => {
	return (
		<>
			<PaymentAdmin />
			<ProfileComponent />
		</>
	);
};

export default UserAdmin;
