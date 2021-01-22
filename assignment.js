/* 1. kilometerToMeter */
function kilometerToMeter(kilo) {
  if (kilo < 0) {
    return `Kilometer can't negative`;
  } else {
    let meter = kilo * 1000;
    return meter;
  }
}

// let meterResult = kilometerToMeter(12);
// console.log(meterResult);

/* 2. budgetCalculator */
function budgetCalculator(watch, phone, laptop) {
  if (watch + phone + laptop < 0) {
    return `Number can't negative`;
  } else {
    let watchPrice = watch * 50;
    let phonePrice = phone * 100;
    let laptopPrice = laptop * 500;

    let totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
  }
}

// let budgetResult = budgetCalculator(4, 7, 15);
// console.log(budgetResult);

/* 3. hotelCost */
function hotelCost(cost) {
  if (cost < 1) {
    return `Enter a Valid Number`;
  }
  const firstTenDays = 100;
  const secondTenDays = 80;
  const lastDays = 50;

  if (cost >= 1 && cost <= 10) {
    let totalCost = cost * firstTenDays;
    return totalCost;
  } else if (cost >= 11 && cost <= 20) {
    let costFirstTenDays = 10 * firstTenDays;
    let costRemingDays = (cost - 10) * secondTenDays;
    let totalCost = costFirstTenDays + costRemingDays;
    return totalCost;
  } else {
    let costFirstTenDays = 10 * firstTenDays;
    let costSecondTenDays = 10 * secondTenDays;
    let costRemingDays = (cost - 20) * lastDays;
    let totalCost = costFirstTenDays + costSecondTenDays + costRemingDays;
    return totalCost;
  }
}

// let hotelResult = hotelCost(22);
// console.log(hotelResult);

/* 4. megaFriend */
function megaFriend(n) {
  let megaName = listName[0];
  for (let i = 0; i < listName.length; i++) {
    const element = listName[i];
    if (element > megaName) {
      megaName = element;
    }
  }
  return megaName;
}

// let listName = ["Niyaz", "Shakil", "Tanvir Rahman", "Sia", "Anik"];
// let Result = megaFriend(listName);
// console.log(Result);
