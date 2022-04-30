"use strict";

function sleep() {

    i++;
    if (i > 5) {
        let i = 0;
        ar = makeText(); //reset
    }
    scroll.innerHTML = '';
    start();
}

function makeText() {

    let text = '';
    let text1 = 'Visual Studio Code';
    let text2 = 'Sublime text';
    let text3 = 'Brackets';
    let text4 = 'Atom';

    let stext = text.split('');
    let stext1 = text1.split('');
    let stext2 = text2.split('');
    let stext3 = text3.split('');
    let stext4 = text4.split('');
    let nasArray = [stext, stext1, stext2, stext3, stext4];
    return nasArray;

}



const ar = makeText();
const scroll = document.getElementById('scroll');
let loop;
let i = 0;

function start() {
    if (ar[i].length > 0) {
        scroll.innerHTML += ar[i].shift();
        loop = setTimeout(start, 200);
    } else {
        let ss = setTimeout(sleep, 2000);

    }
}

start();