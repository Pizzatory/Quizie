function Use(){
    p_1=document.getElementById("1input").value;
    p_2=document.getElementById("2input").value;
    localStorage.setItem("play1",p_1);
    localStorage.setItem("play2",p_2);
    window.location="page2.html";
}