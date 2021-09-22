function findMatching(drivers,string) {
    let answer = drivers.filter(el => el === string)
    return answer
}
   
function fuzzyMatch(drivers, string) {
    return drivers
      .map((driver) => driver.split())
      .filter((splitDriver) => splitDriver[0].indexOf(string) === string);
  }

//   function matchName(driver, string) {
//       let result = 
//   }