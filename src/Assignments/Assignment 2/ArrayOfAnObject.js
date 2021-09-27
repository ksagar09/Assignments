let Vehicle = [{
    type: 'car',
    Brand_name: 'Jaguar',
    description: 'Jaguar F-Pace'
},
{
    type: 'bike',
    Brand_name: 'TVS',
    description: 'TVS Jupiter 125',
},
{
    type: 'bus',
    Brand_name: 'Volvo',
    description: 'Volvo B9R',
},
{
    type: 'car',
    Brand_name: 'audi',
    description: 'Audi A6',
},
{
    type: 'car',
    Brand_name: 'TATA',
    description: 'Tata Safari',
},
{
    type: 'bus',
    Brand_name: 'Ashok Leyland',
    description: '___',
},
];

let cars = Vehicle.filter(Vehicle => Vehicle.
    type === "car");
console.log(cars)