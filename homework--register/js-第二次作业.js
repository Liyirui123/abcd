var account= document.getElementsByClassName('account')[0];
console.log(account);

var email= document.getElementsByClassName('email')[0];
console.log(email);
var content= document.querySelector('.content');
console.log(content);

var con1=document.getElementsByClassName('content1')
var con2=document.getElementsByClassName('content2')


account.addEventListener('cilck',function(){
    content.style.cssTest= 'transform:translateX(0);'
    account.classList.toggle('active');
    email.classList.toggle('active');

})

email.addEventListener('click',function(){
    content.style.cssTest= 'transform:translateX(-400px);'
    account.classList.toggle('active');
    email.classList.toggle('active');


})



















