

document.addEventListener("DOMContentLoaded", function(){

  const authExpend = document.getElementById("auth_expend");
  const authExpendSummary = document.getElementById("auth_expend_summary");

  authExpendSummary.addEventListener("click", ()=>{
    const btnAuthExpend = document.getElementById("btnAuthExpend");
    let openCheck = authExpend.hasAttribute("open");
    btnAuthExpend.innerText = openCheck ? "Expend" : "Collapse";
  });

});