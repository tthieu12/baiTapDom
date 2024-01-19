let result = 0;
// BAI 1
let bai1 = function(){

    result = Number(document.getElementById('bai1-1').value) * Number(document.getElementById('bai1-2').value);

    document.getElementById('bai1-message').innerHTML = '👉' + result;
}

// BAI 2
let bai2 = function(){

    result = (Number(document.getElementById('bai2-1').value) + Number(document.getElementById('bai2-2').value) + Number(document.getElementById('bai2-3').value) + Number(document.getElementById('bai2-4').value) + Number(document.getElementById('bai2-5').value))/5;

    document.getElementById('bai2-message').innerHTML = '👉' + result;
}

// BAI 3
let bai3 = function(){

    result = new Intl.NumberFormat('vn-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(Number(document.getElementById('bai3-1').value)*23500);

    document.getElementById('bai3-message').innerHTML = '👉' + result;
}

// BAI 4
let bai4 = function(){

    let lang = Number(document.getElementById('bai4-1').value);
    let weit = Number(document.getElementById('bai4-2').value);

    document.getElementById('bai4-message').innerHTML = '👉' + 'Diện tích: ' + lang*weit + '; Chu vi: ' + (lang+weit)*2;
}

// BAI 5
let bai5 = function(){

    let num = Number(document.getElementById('bai5-1').value);
    result = num%10 + (num-num%10)/10%10;

    document.getElementById('bai5-message').innerHTML = '👉' + result;
}