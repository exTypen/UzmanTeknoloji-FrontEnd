export interface Order {
	id: number;
	userId: number;
	addressId: number;
	orderStatusId: number;
	createDate: string;
	active: boolean;
}
