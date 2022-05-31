export const timeConverterWithHours = (UNIX_timestamp) => {
  var a = new Date(UNIX_timestamp * 1000);
  console.log(a.toLocaleString("en-IN", { hour12: true }));
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours() % 12 || 12;
  var min = a.getMinutes();
  var time = date + " " + month + " " + year + " " + hour + ":" + min;
  return time;
};
export const timeConverter = (UNIX_timestamp) => {
  var a = new Date(UNIX_timestamp * 1000);
  console.log(a.toLocaleString("en-IN", { hour12: true }));
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + " " + month + " " + year;
  return time;
};
