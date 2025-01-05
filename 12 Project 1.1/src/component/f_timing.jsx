const time = new Date();

function GetYear() {
  return time.getFullYear();
}
function GetDay() {
  return time.getDay();
}
function GetHour() {
  return time.getHours();
}

export { GetYear, GetDay, GetHour };
