import { ProductDto } from "./productDto";

export interface OrderDetailDto {
	id: number;
	orderId: number;
	productDto: ProductDto;
	count: number;
	price: number;
	createDate: Date;
	active: boolean;
}
