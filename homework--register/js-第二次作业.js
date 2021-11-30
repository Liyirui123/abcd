var account= document.getElementsByClassName('account')[0];
console.log(account);
var email= document.getElementsByClassName('email')[0];
console.log(email);
var content= document.querySelector('.content');
console.log(content);
var con1=document.getElementsByClassName('content1')[0];
var con2=document.getElementsByClassName('content2')[0];
console.log(con1);


account.onclick = function(){
    account.classList.add('active');
    email.classList.remove('active');
    con1.style.marginLeft = '';
}

email.addEventListener('click',function(){
    account.classList.remove('active');
    email.classList.add('active');
    con1.style.marginLeft = '-400px';
})

var login = document.querySelector('.register');
var number = document.querySelector('.number');
var pwd = document.querySelector('.pwd');
login.onclick = function () {
    console.log(pwd.value);
    if (number.value == 'root' && pwd.value == '123') {
        number.value = '';
        pwd.value = '';
        alert("root欢迎回来");
    } else {
        alert("账号或密码错误")
    }
}


















