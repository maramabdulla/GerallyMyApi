
var myimge =document.getElementsByTagName("img");
console.log(myimge);
document.getElementById("clear").addEventListener("click" ,close);
function close(){
    document.getElementById("show").style.visibility="hidden";
}
document.getElementById("div1").addEventListener("click" ,next);
function next(event){
    if (num== myimge.length ){
        num = -1;
        num++;
        document.getElementById("add").innerHTML = '<img   src="' + myimge[num].src + '" class="imgshow" >';
    }else {
        document.getElementById("add").innerHTML = '<img   src="' + myimge[num].src + '" class="imgshow" >';
        num++
    }
}
document.getElementById("div2").addEventListener("click" ,pre);
function pre(event){
    if (num== 0 ){
        num = myimge.length;
        document.getElementById("add").innerHTML = '<img   src="' + myimge[--num].src + '" class="imgshow" >';
    }else {
        document.getElementById("add").innerHTML = '<img   src="' + myimge[--num].src + '" class="imgshow" >';
    }
}
const index=[0, 1,2,3,4,5];
index.forEach(r => {
     document.getElementById("show").style.visibility="hidden";
    myimge[r].addEventListener("click",click_img);
    
});
var t=0 ;
function click_img(event){
document.getElementById('show').style.visibility="visible";
t=event.target.getAttribute("src");
num = event.target.getAttribute('value');

console.log(t);
console.log(num);


document.getElementById('add').innerHTML= '<img src="' + t + '" class="imgshow" >';

}