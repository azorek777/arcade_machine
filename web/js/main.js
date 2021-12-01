document.getElementById("button-name").addEventListener("click", ()=>{eel.get_random_name()}, false);
document.getElementById("button-number").addEventListener("click", ()=>{eel.get_random_number()}, false);
document.getElementById("button-date").addEventListener("click", ()=>{eel.get_date()}, false);
document.getElementById("launch-calc").addEventListener("click", ()=>{eel.launch_calc()}, false);


eel.expose(prompt_alerts);
function prompt_alerts(description) {
  alert(description);
}
