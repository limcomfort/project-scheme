import { IWheel } from "../interfaces/IWheel";

// SRP: класс отвечает только за колесо
export class Wheel implements IWheel {
    constructor(
        public id: number,
        public diameter: string,
        public tireType: string
    ) {}

    pump(pressure: number): void {
        console.log(`Колесо подкачано до ${pressure} атм.`);
    }

    replace(): void {
        console.log("Колесо заменено.");
    }

    checkPressure(): number {
        return 2.0;
    }
}
