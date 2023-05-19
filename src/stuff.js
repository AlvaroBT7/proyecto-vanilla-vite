export function countArraElements(arr) {
  const arrCounter = {};
  const handleArrItem = (item) => {
    arrCounter[item] =
      arrCounter[item] !== undefined ? arrCounter[item] + 1 : 1;
  };
  arr.forEach(handleArrItem);
  return arrCounter;
}

export function handleCityClick(targetCity, cityArr) {
  console.log(`Ciudad: ${targetCity} esta siendo eliminada`);
  const processedCityArr = cityArr
    .map(([cityName, cityCount]) => {
      if (cityName === targetCity) {
        if (cityCount > 1) return [cityName, cityCount - 1];
        return [cityName, undefined];
      } else return [cityName, cityCount];
    })
    .filter(([_, cityCount]) => cityCount !== undefined);

  return processedCityArr;
}
