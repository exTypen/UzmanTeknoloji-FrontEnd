export interface OrderDetail {
	id: number;
	orderId: number;
	productId: number;
	count: number;
	price: number;
	createDate: string;
	active: boolean;
}
