let result = 0;

// BAI 1
/**
 * Inputs:
 * + số ngày đi làm (tag)
 * + số tiền mỗi ngày nhận được (lohnProTag)
 * 
 * step ()
 * Function
 *      B1: lấy dữ liệu từ form
 *      B2: tính tiền lương
 *          result = tag * lohnProTag
 *      B3: thông báo kết quả 
 * 
 * Outputs:
 * result
 */
let bai1 = function(){

    let tag = Number(document.getElementById('bai1-1').value);
    let lohnProTag = Number(document.getElementById('bai1-2').value);

    result = tag * lohnProTag ;

    document.getElementById('bai1-message').innerHTML = '👉' + result;
}

// BAI 2
/**
 * Inputs:
 * + 5 số thực (mỗi số một ô)
 * 
 * step ()
 * Function
 *      B1: lấy dữ liệu từ form
 *      B2: tính toán
 *          result = (eins + zwei + drei + vier + fünf)/5;
 *      B3: thông báo kết quả 
 * 
 * Outputs:
 * result
 */
let bai2 = function(){

    let eins = Number(document.getElementById('bai2-1').value);
    let zwei = Number(document.getElementById('bai2-2').value);
    let drei = Number(document.getElementById('bai2-3').value);
    let vier = Number(document.getElementById('bai2-4').value);
    let fünf = Number(document.getElementById('bai2-5').value);

    result = (eins + zwei + drei + vier + fünf)/5;

    document.getElementById('bai2-message').innerHTML = '👉' + result;
}

// BAI 3
/**
 * Inputs:
 * + số USD (usdZuVnd)
 * 
 * step ()
 * Function
 *      B1: lấy dữ liệu từ form
 *      B2: quy đổi và format sang vnd rồi lưu vào biến result
 *          result = new Intl.NumberFormat('vn-VN', {
                style: 'currency',
                currency: 'VND'
            }).format(usdZuVnd*23500);
 *      B3: thông báo kết quả 
 * 
 * Outputs:
 * result
 */
let bai3 = function(){

    let usdZuVnd = Number(document.getElementById('bai3-1').value);

    result = new Intl.NumberFormat('vn-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(usdZuVnd*23500);

    document.getElementById('bai3-message').innerHTML = '👉' + result;
}

// BAI 4
/**
 * Inputs:
 * + chiều dài (lang)
 * + chiều rộng (weit)
 * step ()
 * Function
 *      B1: lấy dữ liệu từ form
 *      B2: tính chu vi và diện tích
 *          let chuVi = (lang+weit)*2;
 *          let dienTich = lang*weit;
 *      B3: thông báo kết quả 
 * 
 * Outputs:
 * dienTich, chuVi
 */
let bai4 = function(){

    let lang = Number(document.getElementById('bai4-1').value);
    let weit = Number(document.getElementById('bai4-2').value);

    let chuVi = (lang+weit)*2;
    let dienTich = lang*weit;

    document.getElementById('bai4-message').innerHTML = '👉' + 'Diện tích: ' + dienTich + '; Chu vi: ' + chuVi;
}

// BAI 5
/**
 * Inputs:
 * + số có 2 chữ số (num)
 * 
 * step ()
 * Function
 *      B1: lấy dữ liệu từ form
 *      B2: tính toán
 *          result = num%10 + (num-num%10)/10%10;
 *      B3: thông báo kết quả 
 * 
 * Outputs:
 * result
 */
let bai5 = function(){

    let num = Number(document.getElementById('bai5-1').value);
    result = num%10 + (num-num%10)/10%10;

    document.getElementById('bai5-message').innerHTML = '👉' + result;
}