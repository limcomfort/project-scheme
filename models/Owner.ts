import { Car } from "./Car";

// SRP: класс отвечает только за владельца
export class Owner {
    constructor(
        public id: number,
        public fullName: string,
        public phone: string,
        public email: string
    ) {}

    buyCar(car: Car): void {
        console.log(`${this.fullName} купил машину ${car.brand}`);
    }

    sellCar(car: Car): void {
        console.log(`${this.fullName} продал машину ${car.brand}`);
    }

    acceptService(): void {
        console.log(`${this.fullName} принял услугу.`);
    }
}
