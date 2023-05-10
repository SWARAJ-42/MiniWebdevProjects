// Getting the element where the date and time must be shown
let t = document.getElementsByClassName("clock")[0];
let d = document.getElementsByClassName("date")[0];
let da = document.getElementsByClassName("day")[0];

// array of days 
let daysofweek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// creating a date object to dislplay the current date and time at the beginning inside the element
let date = new Date();
t.innerHTML = `${("0" + date.getHours()).slice(-2)} : ${("0" + date.getMinutes()).slice(-2)} : ${("0" + date.getSeconds()).slice(-2)}`;
d.innerHTML = `${("0" + date.getDate()).slice(-2)} / ${("0" + date.getMonth()).slice(-2)} / ${("0" + date.getFullYear()).slice(-2)}`;
da.innerHTML = daysofweek[date.getDay()-1];

// function for calling the date and time
let now = () => {
    let date = new Date();
    d.innerHTML = `${("0" + date.getDate()).slice(-2)} / ${("0" + date.getMonth()).slice(-2)} / ${("0" + date.getFullYear()).slice(-2)}`;
    t.innerHTML = `${("0" + date.getHours()).slice(-2)} : ${("0" + date.getMinutes()).slice(-2)} : ${("0" + date.getSeconds()).slice(-2)}`;
}

// function for updating the date and time every second
setInterval(now, 1000);

