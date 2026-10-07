// Абстракция для двигателя (DIP, ISP)
export interface IEngine {
  start(): void;
  stop(): void;
  check(): boolean;
}
