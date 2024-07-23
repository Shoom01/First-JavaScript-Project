function canDrinkAlcohol(person) {
  ageOfFreedom = 21;

  if(person.country == "UK"){
    ageOfFreedom = 18;
  } else if(person.country == "Morocco"){
    ageOfFreedom = 16;
  }

  return person.age >= ageOfFreedom;
}

function testCanDrinkAlcohol(expectedCondition) {
  if(expectedCondition) {
    console.log("Test  passed")
  } else {
    console.log("Test failed")
  }
}

person1 =  {age: 17, country: "UK"}
person2 =  {age: 18, country: "UK"}
person3 =  {age: 19, country: "USA"}
person4 =  {age: 21, country: "USA"}
person5 =  {age: 16, country: "Morocco"}


testCanDrinkAlcohol(canDrinkAlcohol(person1) === false);
testCanDrinkAlcohol(canDrinkAlcohol(person2) === true);
testCanDrinkAlcohol(canDrinkAlcohol(person3) === false);
testCanDrinkAlcohol(canDrinkAlcohol(person4) === true);
testCanDrinkAlcohol(canDrinkAlcohol(person5) === true);



