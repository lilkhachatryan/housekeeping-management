import { v4 as uuidv4 } from "uuid";

const housekeepers = [
    { id: uuidv4(), name: 'Alice', tasks: [] },
    { id: uuidv4(), name: 'Bob', tasks: [
            { id: uuidv4(), title: '1 - Clean Room 101', duration: '30', deadline: "2024-01-31 09:00", hotelApartment: 'Hotel A' },
            { id: uuidv4(), title: '2 - Stock Linens', duration: '15', deadline: "2024-01-31 11:00", hotelApartment: 'Hotel C' },
        ]
    },
    { id: uuidv4(), name: 'Charlie', tasks: [
            { id: uuidv4(), title: '1 - Clean Room 1202', duration: '40', deadline: "2024-01-31 08:00", hotelApartment: 'Hotel A' },
        ] },
]
export default housekeepers
