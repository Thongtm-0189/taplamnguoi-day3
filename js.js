const contentAvt = document.getElementById("avt")
const contentName = document.getElementById("name")
const contentDetail = document.getElementById("detail")
const btnPre = document.getElementById("pre")
const btnNext = document.getElementById("next")

var img = document.createElement('myScript');
img.src = "image 8.png";

let count = 0
btnNext.addEventListener('click', Next)
btnPre.addEventListener('click', Pre)

var array1 = {
    avt: "Thông",
    name: "Trần",
    detail: "Cảm ơn đang click vô đây,nhớ cho mình 1 like cho bài viết này nhé."
}

var array2 = {
    avt: "Thông",
    name: "Minh",
    detail: "Cảm ơn đã quan tâm."
}

var array3 = {
    avt: "Thông",
    name: "Trần Minh Thông",
    detail: "Muốn giỏi cái năng cao thì phải giỏi cái cơ bản, basic but not easy."
}

var main=[array1,array2,array3]


function Next(){
    count += 1
    if(count > 2){
    count = 0
    }
    contentAvt.textContent = main[count].avt
    contentName.textContent = main[count].name
    contentDetail.textContent = main[count].detail
}

function Pre(){
    count -= 1
    if(count < 0){
    count = 2
    }
    contentAvt.textContent = main[count].avt
    contentName.textContent = main[count].name
    contentDetail.textContent = main[count].detail
}
