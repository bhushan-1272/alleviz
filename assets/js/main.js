let newDate = new Date();

console.log(
  "Todays Date :-",
  newDate.toLocaleString("en-us", {
    year: "numeric",
    day: "numeric",
    month: "short",
  })
);
document.getElementById("date").innerHTML = newDate.toLocaleString("en-us", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

console.log(
  "New Time :-",
  newDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })
);
document.getElementById("time").innerHTML = newDate.toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});
