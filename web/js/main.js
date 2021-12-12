
/*document.getElementById("button-name").addEventListener("click", ()=>{eel.get_random_name()}, false);
document.getElementById("button-number").addEventListener("click", ()=>{eel.get_random_number()}, false);
document.getElementById("button-date").addEventListener("click", ()=>{eel.get_date()}, false);*/
document.getElementById("launch-calc").addEventListener("click", ()=>{eel.launch_calc()}, false);
document.getElementById("launch-cmd").addEventListener("click", ()=>{eel.launch_cmd()}, false);
document.getElementById("launch-taskmgr").addEventListener("click", ()=>{eel.launch_taskmgr()}, false);

eel.expose(prompt_alerts);
function prompt_alerts(description) {
  alert(description);
}

// aktualna data
setInterval(function() {
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    h = n.getHours();
    min = n.getMinutes();
    s = n.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    if (min<10){
        min = "0" + min;
    }
    if(h<10){
        h = "0" + h;
    }
    document.getElementById("date").innerHTML = d + "/" + m + "/" + y +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + h + ":" + min + ":" + s;
}, 1000);


