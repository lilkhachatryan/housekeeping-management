import { v4 as uuidv4 } from "uuid";

const tasks = [
    { id: uuidv4(), title: '1 - Vacuum Lobby', duration: '45', deadline: "2024-01-31 11:00", hotelApartment: 'Hotel B' },
    { id: uuidv4(), title: '2 - Stock Linens', duration: '15', deadline: "2024-01-31 12:00", hotelApartment: 'Hotel C' },
]
export default tasks
