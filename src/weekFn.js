function weekFn(n) {
  switch (n) {
    case 1: 
      return 'Понеділок';
      break;
    case 2: 
      return 'Вівторок';
      break;
    case 3: 
      return 'Середа';
      break;
    case 4: 
      return 'Четвер';
      break;
    case 5: 
      return "П'ятниця";
      break;
    case 6: 
      return 'Субота';
      break;
    case 7: 
      return 'Неділя';
      break;
    default:
      return null;
  }
}

// console.log(weekFn(1))   // 'Понеділок'
// console.log(weekFn(3))   // 'Середа'
// console.log(weekFn(7))   // 'Неділя'
// console.log(weekFn(9))   // null
// console.log(weekFn(1.5)) // null
// console.log(weekFn('2')) // null

module.exports = weekFn