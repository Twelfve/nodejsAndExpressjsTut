let counter = 0;

function count() {
  let heading = document.getElementById("contador");
  counter++;
  heading.innerHTML = counter;

  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "white";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("boton").onclick = count;
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nameForm").onsubmit = showFullName;
});

function showFullName() {
  let fName = document.getElementById("fName");
  let lName = document.getElementById("lName");

  let fullName = document.getElementById("fullName");
  //   fullName.innerHTML = fName.value + " " + lName.value;
  alert(fName.value + " " + lName.value);
}
