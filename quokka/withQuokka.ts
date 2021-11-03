import { performance } from "perf_hooks";

// Using (Quokka.js VSC Extension) https://quokkajs.com/
let cars: {} = [
  {
    id: "234jl234k",
    brand: "Chevrolet",
    name: "Impala",
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

// Optional chaining
const civic: {} = cars?.[1];
const chevyRaiting: number = cars?.[0].overview?.rating;
const chevyCylinders: boolean = cars?.[0].cylinders === 8;

// Quit casting
const str: string = "5";
const num: number = +str;
const str1: string = `${4}`;
const nums: number[] = [1, 2, 3, 4, 5, 6, 7];
const numbersObj: {} = { ...nums };
const civicOverview: {} = cars?.[1].overview;
const civicOverviewArr: string[] = Object.keys(civicOverview);

console.log(civicOverviewArr);

// measure time taken by a function or a block to execute
const doSomething = (): void => {
  const startTime: number = performance.now();
  for (let i = 0; i <= 1000; i++) {
    i + 1;
  }
  const endTime: number = performance.now();
  console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
};
doSomething();
