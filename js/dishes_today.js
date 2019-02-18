$(document).ready(function(){
    var today = Math.floor((Date.now() - (1000 * 60 * 60 * 6)) / (1000 * 60 * 60 * 24));
    var people = ["Min", "Aiyappa", "TJ"];
    var index = today % 3;
    document.getElementById('dish_today_text').innerHTML = "Today is " + people[index];
    document.getElementById('dish_tomorrow_text').innerHTML = "Tomorrow is " + people[(index + 1) % 3];
    console.log(index);
});
