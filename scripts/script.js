
    const btn = document.getElementById('A1');
    btn.addEventListener('click',function () {
    btn.style.backgroundColor = '#1DD100';
});
    const btnA2 = document.getElementById('A2');
    btnA2.addEventListener('click',function () {
    btnA2.style.backgroundColor = '#1DD100';
});
    const btnA3 = document.getElementById('A3');
    btnA3.addEventListener('click',function () {
    btnA3.style.backgroundColor = '#1DD100';
});
    const btnA4 = document.getElementById('A4');
    btnA4.addEventListener('click',function () {
    btnA4.style.backgroundColor = '#1DD100';
});

const btnB1 = document.getElementById('B1');
btnB1.addEventListener('click',function () {
btnB1.style.backgroundColor = '#1DD100';
});
const btnB2 = document.getElementById('B2');
btnB2.addEventListener('click',function () {
btnB2.style.backgroundColor = '#1DD100';
});
const btnB3 = document.getElementById('B3');
btnB3.addEventListener('click',function () {
btnB3.style.backgroundColor = '#1DD100';
});
const btnB4 = document.getElementById('B4');
btnB4.addEventListener('click',function () {
btnB4.style.backgroundColor = '#1DD100';
});

function buttonPress(){
    console.log('button pressed');
}
document.addEventListener('click',buttonPress);
