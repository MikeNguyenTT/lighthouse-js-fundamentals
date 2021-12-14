const talkingCalendar = function(date) {
  // Your code here
  let year = "";
  let month = "";
  let day = "";
  for (let i = 0; i <= date.length; i++) {
    if (i < 4) {
      year += date[i];
    }
    if (i === 5 || i === 6){
      month += date[i];
    }
    if (i === 8 || i === 9) {
      day += date[i];
    }
  }
  switch (month) {
    case "01": 
      month = "January";
      break;
    case "02": 
      month = "Fenruary";
      break;
    case "03": 
      month = "March";
      break;
    case "04": 
      month = "April";
      break;
    case "05": 
      month = "May";
      break;
    case "06": 
      month = "June";
      break;
    case "07": 
      month = "July";
      break;
    case "08": 
      month = "August";
      break;
    case "09": 
      month = "September";
      break;
    case "10": 
      month = "Octorber";
      break;
    case "11": 
      month = "November";
      break;
    case "12": 
      month = "December";
      break;
  }
  let dayAppended = false;
  //append st, nd, rd except eleventh, twelve and thirdteen
  if (day[0] !== "1") {
    switch (day[1]) {
      case "1": 
        day += "st";
        dayAppended = true;
        break;
      case "2": 
        day += "nd";
        dayAppended = true;
        break;
      case "3": 
        day += "rd";
        dayAppended = true;
        break;
    } 
  }
  // append th to all other day
  if (!dayAppended) {
    day += "th";
  }
  
  return month + " " + day + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));