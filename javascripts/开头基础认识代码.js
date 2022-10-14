
    //设置图片切换(图片像素比例要相同不然无法切换)
    let myImage=document.querySelector('img');
    myImage.onclick=function(){
        let mySrc=myImage.getAttribute('src');
        if(mySrc==='images/firefox-icon.png'){
            myImage.setAttribute('src','images/cdy.jpg');
        }else{
            myImage.setAttribute('src','images/firefox-icon.png');
        }
    };

//设置个性化欢迎信息以及获取标题的引用
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

//个性化欢迎信息设置函数
function setUserName(){
    let myName=prompt('请输入你的名字');
    if(!myName||myName===null){
        setUserName();
    }else{
        localStorage.setItem('name','myName');
        myHeading.innerHTML='microsoft,'+myName;
    }
}

//初期化代码：在页面读取时是进行构造工作
if(!localStorage.getItem('name')){
setUserName();
}else{
    let storeName=localStorage.getItem('name');
    myHeading.textContent='microsoft,'+'storename';
}

//为按钮设置事件处理器
myButton.onclick=function(){
    setUserName();
}

//这是较高级复杂的JS代码
const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}