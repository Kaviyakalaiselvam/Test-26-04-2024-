function calculate(num1,num2){
    let addition=num1+num2;
    let subtration=num1-num2;
    let multiplication=num1*num2;
    let division=num1/num2;

    return {
        addition:addition,
        subtration:subtration,
        multiplication:multiplication,
        division:division
    };
  let result=calculate(num1,num2);
  console.log("addition",result.addition);
  console.log("subtraction",result.subtration);
  console.log("multiplication",result.multiplication);
  console.log("division",result.division);
}
