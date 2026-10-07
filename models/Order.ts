import { IOrder } from "../interfaces/IOrder";

// SRP: класс отвечает только за данные и статус заказа
export class Order implements IOrder {
    public status: string = "Новый";

    constructor(
        public id: number,
        public dateCreated: Date,
        public description: string,
        public cost: number
    ) {}

    open(): void {
        this.status = "Открыт";
        console.log(`Заказ ${this.id} открыт.`);
    }

    pay(): boolean {
        this.status = "Оплачен";
        console.log(`Заказ ${this.id} оплачен на сумму ${this.cost}.`);
        return true;
    }

    close(): void {
        this.status = "Закрыт";
        console.log(`Заказ ${this.id} закрыт.`);
    }
}
