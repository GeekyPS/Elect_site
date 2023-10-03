document.getElementById("backgroundrightweek1").addEventListener("click", togglehide1);
document.getElementById("backgroundrightweek2").addEventListener("click", togglehide2);
document.getElementById("backgroundrightweek3").addEventListener("click", togglehide3);
document.getElementById("backgroundrightweek4").addEventListener("click", togglehide4);
document.getElementById("backgroundleftbuttonsbutton1").addEventListener("click", FunctionHide);
let week1table=document.getElementById("week1table");
let week2table=document.getElementById("week2table");
let week3table=document.getElementById("week3table");
let week4table=document.getElementById("week4table");
let weekicon1=document.getElementById('icon1');
let weekicon2=document.getElementById('icon2');
let weekicon3=document.getElementById('icon3');
let weekicon4=document.getElementById('icon4');
let weekContent=document.getElementById('nichewala');
console.log(weekContent);
function FunctionHide(){
    if (weekContent.style.display!="" && weekContent.style.display!='none'){
        weekContent.style.display='none';
    }
    else{
        weekContent.style.display='block';
    }
}
function togglehide1(){
    if (week1table.style.display!="" && week1table.style.display!='none'){
        week2table.style.display='none'
        week1table.style.display='none';
        week3table.style.display='none';
        week4table.style.display='none';
        weekicon1.style.transform='rotate(0deg)';

    }
    else{
        week1table.style.display='flex';
        week3table.style.display='none';
        week2table.style.display='none';
        week4table.style.display='none';
        weekicon1.style.display='none';
    }
}
function togglehide2(){
    if (week2table.style.display!="" && week2table.style.display!='none'){
        week2table.style.display='none';
        week1table.style.display='none';
        week3table.style.display='none';
        week4table.style.display='none';
        weekicon2.style.transform='rotate(0deg)';
    }
    else{
        week2table.style.display='flex';
        week1table.style.display='none';
        week3table.style.display='none';
        week4table.style.display='none';
        weekicon2.style.display='none';
    }
}
function togglehide3(){
    if (week3table.style.display!="" && week3table.style.display!='none'){
        week3table.style.display='none';
        week1table.style.display='none';
        week2table.style.display='none';
        week4table.style.display='none';
        weekicon3.style.transform='rotate(0deg)';
    }
    else{
        week3table.style.display='flex';
        week1table.style.display='none';
        week2table.style.display='none';
        week4table.style.display='none';
        weekicon3.style.display='none';
    }
}
function togglehide4(){
    if (week4table.style.display!="" && week4table.style.display!='none'){
        week2table.style.display='none'
        week1table.style.display='none';
        week3table.style.display='none';
        week4table.style.display='none';
        weekicon4.style.transform='rotate(0deg)';

    }
    else{
        week4table.style.display='flex';
        week1table.style.display='none';
        week3table.style.display='none';
        week2table.style.display='none';
        weekicon4.style.display='none';
    }
}
