function  my() {
    x=document.getElementById("my");
    x.innerHTML="i love you,too";
    x.style.color="red";
}
function clock() {
    var x;
    var time=new Date().getHours();
    if(time<20)
        x="good day";
    else x="good evening"
    document.getElementById("shijian").innerHTML=x;
}