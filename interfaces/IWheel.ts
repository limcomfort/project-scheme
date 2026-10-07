// Абстракция для колеса (DIP, ISP)
export interface IWheel {
    pump(pressure: number): void;
    replace(): void;
    checkPressure(): number;
}
