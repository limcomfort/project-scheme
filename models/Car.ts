import { IEngine } from "../interfaces/IEngine";
import { IWheel } from "../interfaces/IWheel";

// SRP: класс отвечает только за автомобиль
// DIP: Car зависит от абстракций IEngine и IWheel, а не от конкретных классов
export class Car {
    constructor(
        public id: number,
        public brand: string,
        public model: string,
        public year: number,
        public vin: string,
        public licensePlate: string,
        private engine: IEngine,
        private wheels: IWheel[]
    ) {}

    start(): void {
        this.engine.start();
    }

    stop(): void {
        this.engine.stop();
    }

    drive(): void {
        console.log("Автомобиль едет...");
    }

    brake(): boolean {
        console.log("Автомобиль тормозит.");
        return true;
    }

    // Метод для доступа механика к деталям (инкапсуляция)
    getEngine(): IEngine {
        return this.engine;
    }

    getWheels(): IWheel[] {
        return this.wheels;
    }
}
