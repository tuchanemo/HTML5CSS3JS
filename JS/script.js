var message = 'Это javascript';
var year = 2019;

console.log(message);
console.log(year);

export function getDay() {
  const today = new Date();
  const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysArr[today.getDay()];
}

