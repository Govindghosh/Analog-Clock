



function show_clock(){
let h = document.getElementsByClassName('hr')[0];
let m = document.getElementsByClassName('mn')[0];
let s = document.getElementsByClassName('sc')[0];

let date = new Date();

let hours = date.getHours();
let Minutes = date.getMinutes();
let seconds = date.getSeconds();


h.style.transform = `rotate(${30 * hours + Minutes/2}deg)`;
m.style.transform = `rotate(${6 * Minutes}deg)`;
s.style.transform = `rotate(${6 * seconds}deg)`;

}


setInterval(show_clock, 1000);