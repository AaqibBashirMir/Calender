let month = document.getElementById("month-name");
let dayname = document.getElementById("day-name");
let dayNum = document.getElementById("day");
let year = document.getElementById("year");

let date = new Date();
let month_ = date.getMonth();

month.innerText = date.toLocaleString("en",{
    month : "long",
});

dayname.innerText = date.toLocaleString("en",{
    weekday: "long",
});

dayNum.innerText = date.getDate();

year.innerText = date.getFullYear();
