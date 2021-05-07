export interface ProductDto {
	id: number;
	categoryId: number;
	categoryName: string;
	brandId: number;
	brandName: string;
	name: string;
	code: string;
	price: number;
	images: string[]
	createDate: Date;
	active: boolean;
}