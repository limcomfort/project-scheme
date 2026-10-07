import { IEngine } from "../interfaces/IEngine";

// SRP: класс отвечает только за двигатель
// LSP: любой наследник IEngine может заменить Engine
export class Engine implements IEngine {
    constructor(
        public id: number,
        public type: string,
        public volume: number,
        public power: number
    ) {}

    start(): void {
        console.log(`Двигатель ${this.type} заведен.`);
    }

    stop(): void {
        console.log(`Двигатель ${this.type} заглушен.`);
    }

    check(): boolean {
        console.log("Проверка двигателя...");
        return true;
    }
}
