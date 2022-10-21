const carURL = "http://localhost:3000/cars";

const getCars = async () => {
  try {
    // const response = await fetch(carURL);
    // const cars = await response.json();

    // return cars;
    return await fetch(carURL).then((cars) => cars.json());
  } catch (e) {
    throw e;
  }
};

const matches = getCars().then((cars) => {
  let matches = cars.filter((car) => car.brand === "Honda");
  console.log(matches);

  for (let i = 0; i < matches.length; i++) {
    console.log(matches[i]);
  }
  // Same with foreEach()
  matches.forEach((car) => {
    console.log(car);
  });

  // sort by best mpg
  const bestMpg = matches.sort((a, b) => b.mpg - a.mpg);
  console.log(bestMpg);

  const mpgCombined = matches.reduce(
    (p_total, c_car) => p_total + c_car?.mpg,
    0
  );
  console.log(mpgCombined);
});
