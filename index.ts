import { IEngine } from "./interfaces/IEngine";
import { IWheel } from "./interfaces/IWheel";
import { Engine } from "./models/Engine";
import { Wheel } from "./models/Wheel";
import { Car } from "./models/Car";
import { Owner } from "./models/Owner";
import { Order } from "./models/Order";
import { Mechanic } from "./models/Mechanic";

// ==========================================
// ДЕМОНСТРАЦИЯ РАБОТЫ
// ==========================================

// DIP: внедряем зависимости через интерфейсы
const engine: IEngine = new Engine(1, "V8", 4.0, 400);
const wheels: IWheel[] = [
    new Wheel(1, "R19", "Лето"),
    new Wheel(2, "R19", "Лето")
];

// Создаем автомобиль
const myCar = new Car(
    101, "Toyota", "Camry", 2020,
    "X123456789", "A123BC",
    engine, wheels
);

// Создаем владельца
const owner = new Owner(1, "Иван Иванов", "12345", "ivan@mail.ru");
owner.buyCar(myCar);

// Создаем заказ
const order = new Order(500, new Date(), "Замена масла", 5000);

// Создаем механика
const mechanic = new Mechanic(10, "Петр Петров", "ДВС", 5);

// Процесс работы
order.open();
mechanic.acceptOrder(order);
mechanic.performRepair(myCar);

myCar.start();
myCar.drive();

order.pay();
mechanic.closeOrder(order);
