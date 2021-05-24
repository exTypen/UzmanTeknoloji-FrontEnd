import { Address } from "node:cluster";
import { OrderStatus } from "./orderStatus";
import { User } from "./user";


export interface OrderDto {
	id: number;
	user: User;
	address: Address;
	orderStatus: OrderStatus;
	createDate: Date;
	active: boolean;
}
