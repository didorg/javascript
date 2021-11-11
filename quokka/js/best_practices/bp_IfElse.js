//** Avoid If/Else | Switch
//! Avoid
const getCityInformation = (city) => {
  if (city.toLowerCase() === "london") {
    return "Welcome to London!";
  } else if (city.toLowerCase() === "paris") {
    return "Welcome to Paris!";
  } else if (city.toLowerCase() === "amsterdam") {
    return "Welcome to Amsterdam!";
  }
  return "We're Sorry, No City Found!";
};
const londonCityInfo = getCityInformation("Amsterdam");

console.log(londonCityInfo);

// ** Better
const getCityInfo = (city) => {
  const cityInfo = {
    london: "Welcome to London!",
    paris: "Welcome to Paris!",
    amsterdam: "Welcome to Amsterdam!",
  };
  return cityInfo[city.toLowerCase()] ?? "We're Sorry, No City Found!";
};
const parisCityInfo = getCityInfo("paris");

console.log(parisCityInfo);
