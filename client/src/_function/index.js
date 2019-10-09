export const formatDate = (date)=> {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  export const getNumberOfDays=(startdate,enddate)=>{
    let startDate=new Date(startdate);
    let endDate=new Date(enddate);
    let noOfDays=(endDate.getTime()-startDate.getTime())/(24*60*60*1000) + 1;
    return noOfDays;
}

export const isEmpty = (obj)=>{
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}