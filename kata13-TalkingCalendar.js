const talkingCalendar = function(date) {
  const humanDate = {
    days: [null, '1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th',
          '11th','12th','13th','14th','15th','16th','17th','18th','19th','20th',
          '21st','22nd','23rd','24th','25th','26th','27th','28th','29th','30th',
          '31st'],
    months: [null, 'January', 'February', 'March', 
            'April', 'May', 'June', 
            'July','August', 'September', 
            'October', 'November', 'December']
  }
  const year = date.slice(0,4);
  let month = Number(date.slice(5,7));
  let day = Number(date.slice(8,10));

  month = humanDate.months[month];
  day = humanDate.days[day];

  return `${month} ${day}, ${year}`

}
console.log(("2017/12/24  :  ") + talkingCalendar("2017/12/24"));
console.log(("2000/01/01  :  ") + talkingCalendar("2000/01/01"));
console.log(("2007/11/26  :  ") + talkingCalendar("2007/11/26"));
console.log(("1987/10/02  :  ") + talkingCalendar("1987/10/02"));
console.log(("1987/05/31  :  ") + talkingCalendar("1987/05/31"));
console.log(("1987/08/29  :  ") + talkingCalendar("1987/08/29"));
console.log(("1987/07/21  :  ") + talkingCalendar("1987/07/21"));


//December 2nd, 2017