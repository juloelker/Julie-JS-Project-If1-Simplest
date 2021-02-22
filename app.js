//changed the order of each condition before I could
//get this to work properly
const val = document.querySelector(".firstName").innerHTML;
console.log(typeof val);

if (val === "") {
  alert("please enter text");
} else if (val !== "Julie") {
  alert("not Julie");
} else if (val === "Julie") {
  alert("Julie");
}
