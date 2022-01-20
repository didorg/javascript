import moment from 'moment';

// Using (Quokka.js VSC Extension) https://quokkajs.com/
let cars = [
  {
    id: "234jl234k",
    brand: "Chevrolet",
    model: "Impala",
    mpg: 14,
    cylinders: 8,
    displacement: 454,
    horsepower: 220,
    weight: 4354,
    acceleration: 9,
    year: "1970-01-01",
    origin: "USA",
    price: 28000,
    overview: {
      rating: 4.3,
      description: "chevrolet impala description",
      bestYears: [4565, 3456, 5678],
      countryByDemand: [
        { name: "Portugal", code: "PT" },
        { name: "Qatar", code: "QA" },
      ],
    },
    colors: [
      {
        color: "black",
        category: "hue",
        type: "primary",
        code: {
          rgba: [255, 255, 255, 1],
          hex: "#000",
        },
      },
      {
        color: "white",
        category: "value",
        code: {
          rgba: [0, 0, 0, 1],
          hex: "#FFF",
        },
      },
    ],
  },
  {
    id: "98df9d9de1",
    brand: "Honda",
    model: "Acord",
    mpg: 28,
    cylinders: 4,
    displacement: 120,
    horsepower: 170,
    weight: 2489,
    acceleration: 20,
    year: "1974-01-01",
    origin: "Japan",
    price: 31000,
    overview: {
      rating: 4.9,
      description: "honde acord description",
      bestYears: [3245, 1466, 7677],
      countryByDemand: [
        { name: "Cuba", code: "CU" },
        { name: "United States", code: "US" },
      ],
    },
    colors: [
      {
        color: "red",
        category: "hue",
        type: "primary",
        code: {
          rgba: [255, 0, 0, 1],
          hex: "#FF0",
        },
      },
      {
        color: "white",
        category: "value",
        code: {
          rgba: [0, 0, 0, 1],
          hex: "#FFF",
        },
      },
      {
        color: "blue",
        category: "hue",
        type: "primary",
        code: {
          rgba: [0, 0, 255, 1],
          hex: "#00F",
        },
      },
    ],
  },
  {
    id: "234jlfdsfe",
    brand: "Honda",
    model: "Civic",
    mpg: 24,
    cylinders: 4,
    displacement: 120,
    horsepower: 97,
    weight: 2489,
    acceleration: 15,
    year: "1974-01-01",
    origin: "Japan",
    price: 26000,
    overview: {
      rating: 4.8,
      description: "honde civic description",
      bestYears: [3345, 5466, 6677],
      countryByDemand: [
        { name: "Spain", code: "ES" },
        { name: "United States", code: "US" },
      ],
    },
    colors: [
      {
        color: "red",
        category: "hue",
        type: "primary",
        code: {
          rgba: [255, 0, 0, 1],
          hex: "#FF0",
        },
      },
      {
        color: "blue",
        category: "hue",
        type: "primary",
        code: {
          rgba: [0, 0, 255, 1],
          hex: "#00F",
        },
      },
    ],
  },
  {
    id: "kd93k41l234k",
    brand: "Subaru",
    model: "Forester",
    mpg: 26,
    cylinders: 4,
    displacement: 108,
    horsepower: 93,
    weight: 2391,
    acceleration: 15.5,
    year: "1974-01-01",
    origin: "Japan",
    price: 24500,
    overview: {
      rating: 4.7,
      description: "subaru description",
      bestYears: [5676, 3322, 5434],
      countryByDemand: [
        { name: "Uruguay", code: "UY" },
        { name: "Japan", code: "JP" },
      ],
    },
    colors: [
      {
        color: "red",
        category: "hue",
        type: "primary",
        code: {
          rgba: [255, 0, 0, 1],
          hex: "#FF0",
        },
      },
      {
        color: "yellow",
        category: "hue",
        type: "primary",
        code: {
          rgba: [255, 255, 0, 1],
          hex: "#FF0",
        },
      },
      {
        color: "black",
        category: "hue",
        type: "primary",
        code: {
          rgba: [255, 255, 255, 1],
          hex: "#000",
        },
      },
    ],
  },
];
let carslenght = cars.length;
console.log(carslenght);
/** REDUCE */
// Get total price of all cars
const totalPrice = cars.reduce((acc, currCar) => acc + currCar.price, 0);
// arr of models(map)
const models = cars.reduce((acc, currCar) => [...acc, currCar.brand], []);
// group cars by id => car lookup (dict)
const groupCarByID = cars.reduce((acc, currCar) => {
  return { ...acc, [currCar.id]: currCar };
}, {});
console.log(groupCarByID);
// highest price
const highestPrice = cars.reduce((acc, currCar) => {
  if (null === acc || currCar.price > acc) return currCar.price;
  return acc;
}, null);
console.log(highestPrice); // 31000
//console.table(cars);

/**
 * Better Comments extension
 ** Important information is highlighted
 * ! Deprecated method, do not use
 * ? Should this method be exposed in the public API?
 * TODO: refactor this method so that it conforms to the API
 * @param myParam The parameter for this method
 */

const carsMappedYear = (cars) => {
  let today = new Date();
  let year = today.getFullYear();

  let mappedYear = cars.map((car) => {
    return {
      brand: `${car.brand}`,
      model: `${car.model} ${year}`,
    };
  });

  let colors = ["red", "blue"];

  return {
    mappedYear,
    colors,
  };
};

const { mappedYear, colors } = carsMappedYear(cars);
mappedYear;
colors;

const getVersion = () => {
  const version = 5;
  return {
    fobo: 1,
    version,
  };
};

const { version } = getVersion();
version; //5

let time = 1701440921000;
const month = moment(time).clone().startOf('month');
console.log(month);

const m = moment(time).clone().endOf('month');
console.log(m);

const mm = moment(time).get('month');
console.log(mm);

const year = moment(time).clone().startOf('year');
console.log(year);


let startMonth = moment(time).clone().startOf('year');
let endMonth = moment(time).clone().endOf('year');

for (let m = moment(startMonth); m.isBefore(endMonth); m.add(1, 'months')) {
    console.log(m.format('YYYY-MM-DD'));
    console.log(m);
}

while (endMonth.isAfter(startMonth)) {
    console.log(startMonth.format('YYYY-MM-DD'))
    //increment by one day
    startMonth.add(1, 'month')
}

//If you want an inclusive end date

// let startDate = moment()
// let endDate = moment().add(5, 'days')
// while (endDate.isSameOrAfter(startDate)) {
//     console.log(startDate.format('YYYY-MM-DD'))
//     //increment by one day
//     startDate.add(1, 'day')
// }
