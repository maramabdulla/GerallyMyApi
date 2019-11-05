 let arr1 = [];
 let page=1;
 let num=0;
 let numbrr=1;
show();
document.getElementById("show2").style.visibility = "hidden";
document.getElementById("get").addEventListener("click" ,show);
function show() {
    fetch('http://localhost:3000/photo/'+page, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            page++;
           for(let i=0; i<data.length;i++){
            document.getElementById('show1').innerHTML +='<div class="myList">' +
           '<img class="img3" src="' + data[i] +' "data-id="' + i + '"  onclick="bigimage(event)"> </div>';
           arr1.push(data[i]);
        }
        
    }); 
    }
function ShowMore(){
    show();
}

function bigimage(event) {
    document.getElementById('show2').style.visibility = "visible";
    const index = event.target.getAttribute('src');
    console.log(index);
    document.getElementById('add').innerHTML = '<img class="img1" src="' + index + '"  >';
}
// document.getElementById("get").addEventListener("click" , ShowMore);

// function ShowMore(){
//    show();
//    const myHeaders = new Headers();
//    myHeaders.append('Authorization', 'Bearer xplIPtLt8JiLT9Sdh1nMgH5sK-wLzt3uPm9s');
//    fetch('https://gorest.co.in/public-api/photos', {
//            method: 'GET',
//            headers: myHeaders
//        })
//        .then(response => response.json())
//        .then(data => { arr = data.result;
//            const html = arr.map((item, index) => {

//                return '<div class="myList">' +
//                    '<img class="img3" src="' + item.thumbnail + ' " data-id="' + index + '"  onclick="bigimage(event)"></div>';
//            });
//            console.log(html);
//            document.getElementById('show1').innerHTML += html.join('');
//        });
       
   
// }
document.getElementById("div1").addEventListener("click" ,next);
function next(event){
    if(num== arr1.length ){
        num = -1;
        num++;
        document.getElementById("add").innerHTML = '<img   src="' + arr1[num] + '" class="imgshow" >';
    }else {
        document.getElementById("add").innerHTML = '<img   src="' + arr1[num] + '" class="imgshow" >';
        num++
    }
 }
 document.getElementById("div2").addEventListener("click" ,pre);
 function pre(event){
    if(num== 0 ){
        console.log(arr1);
        num = arr1.length;
        document.getElementById("add").innerHTML = '<img   src="' + arr1[num] + '" class="imgshow" >';
    }else {
        document.getElementById("add").innerHTML = '<img   src="' +  arr1[num]  + '" class="imgshow" >';
        num--;
    }
 }
 document.getElementById("clear").addEventListener("click" , close);
function close(){
    document.getElementById("show2").style.visibility="hidden";
}


