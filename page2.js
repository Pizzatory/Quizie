p111=localStorage.getItem("play1");
p222=localStorage.getItem("play2");

scorero1=0
scorero2=0

document.getElementById("p10sco").innerHTML=scorero1;
document.getElementById("p20sco").innerHTML=scorero2;

document.getElementById("Quest").innerHTML="Question asked by - "+p111;
document.getElementById("Ans").innerHTML="Answered by - "+p222;


function send(){
    console.log("send()");
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    actualanswer = parseInt(n1) * parseInt(n2);


numberBOX="<h4>"+ n1 +" X "+ n2 +"</h4>";
inputter="<br>Answer: <input type='text' id='inputcheck'>";
checkerupper="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=numberBOX+inputter+checkerupper;
document.getElementById("output").innerHTML=row;
document.getElementById("n1").value="";
document.getElementById("n2").value="";
}

Q_turn ="p111"
A_turn ="p222"

function check(){
    get_answer=document.getElementById("inputcheck").value;
    if(get_answer==actualanswer){
        if(A_turn=="p111"){
            updater1=scorero1+1;
            document.getElementById("p10sco").innerHTML =updater1;
        }
        else{
            updater2=scorero2+1;
            document.getElementById("p20sco").innerHTML = updater2;
        }
    }
    if(Q_turn=="p111"){
        Q_turn="p222";
        document.getElementById("Quest").innerHTML ="Question asked by - "+p222;
    }
    else{
        Q_turn="p111";
        document.getElementById("Quest").innerHTML ="Question asked by - "+p111;
    }
    if(A_turn=="p111"){
        A_turn="p222";
        document.getElementById("Ans").innerHTML ="Answered by - "+p222;
    }
    else{
        A_turn="p111";
        document.getElementById("Ans").innerHTML ="Answered by - "+p111;
    }
}