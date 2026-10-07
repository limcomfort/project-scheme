import { Car } from "./Car";
import { Order } from "./Order";

// SRP: класс отвечает только за работу механика
export class Mechanic {
    constructor(
        public id: number,
        public fullName: string,
        public specialization: string,
        public experience: number
    ) {}

    acceptOrder(order: Order): void {
        console.log(`Механик ${this.fullName} принял заказ ${order.id}.`);
    }

    performRepair(car: Car): boolean {
        console.log(`Механик ${this.fullName} выполняет ремонт автомобиля ${car.brand}...`);
        // Используем инкапсулированные детали авто
        car.getEngine().check();
        car.getWheels().forEach(w => console.log(`Давление в колесе: ${w.checkPressure()}`));
        return true;
    }

    closeOrder(order: Order): void {
        order.close();
        console.log(`Механик ${this.fullName} закрыл заказ ${order.id}.`);
    }
}
