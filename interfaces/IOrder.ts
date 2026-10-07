// Абстракция для заказа (DIP, ISP)
export interface IOrder {
    open(): void;
    pay(): boolean;
    close(): void;
}
