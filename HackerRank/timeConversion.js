function timeConversion(s){
  let newTime;
  let hour = 0;
  let sec = "";
  let splitStr = s.split(":");
  if (s[8] === "P"){
    hour = parseInt(splitStr[0]) + 12;
    sec = splitStr[2].split("P")[0];
    if(hour === 24){
      hour = "12";
    }
  }
  else {
    hour = splitStr[0];
    sec = splitStr[2].split("A")[0];
    if(hour === "12"){
      hour = "00";
    }
  }
  newTime = hour + ":" + splitStr[1] + ":"+ sec;
  return newTime;
}
timeConversion("07:05:45PM")