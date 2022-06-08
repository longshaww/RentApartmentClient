export interface User {
	address: string;
	companyName: string;
	dob: Date;
	email: string;
	gender: Boolean;
	name: string;
	password: string;
	phone: string;
	reward: number;
	services: [
		{ serviceId: string; serviceCode: string; serviceName: string }
	];
	type: string;
	userId: string;
	username: string;
}
