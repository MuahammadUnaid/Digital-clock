var hrsp = document.getElementById('hours');
var minsp = document.getElementById('min');
var secsp = document.getElementById('sec');
var timeFormat = document.getElementById('timeformat');

setInterval(() => {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    // Determine AM or PM
    timeFormat.innerText = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Add leading zeros
    hrsp.innerText = String(hours).padStart(2, '0');
    minsp.innerText = String(minutes).padStart(2, '0');
    secsp.innerText = String(seconds).padStart(2, '0');
});