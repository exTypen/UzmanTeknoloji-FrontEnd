import { ProductDto } from './productDto';
export interface BasketDto {
	id: number;
	productDetails: ProductDto;
	userId: number;
	count: number;
	createDate: Date;
	active: boolean;
}
