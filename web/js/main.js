document.getElementById("button-name").addEventListener("click", ()=>{eel.get_random_name()}, false);
document.getElementById("button-number").addEventListener("click", ()=>{eel.get_random_number()}, false);
document.getElementById("button-date").addEventListener("click", ()=>{eel.get_date()}, false);
document.getElementById("launch-calc").addEventListener("click", ()=>{eel.launch_calc()}, false);
document.getElementById("launch-cmd").addEventListener("click", ()=>{eel.launch_cmd()}, false);


eel.expose(prompt_alerts);
function prompt_alerts(description) {
  alert(description);
}

// aktualna data
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
h = n.getHours();
min = n.getMinutes();
s = n.getSeconds();
if (s<10) {
    s = "0" + s;
}
document.getElementById("date").innerHTML = m + "/" + d + "/" + y +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + h + ":" + min + ":" + s;


