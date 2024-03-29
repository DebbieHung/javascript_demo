/** let優於var
          不要用var寫法，區域變數會汙染全域變數，程式容易寫壞掉
          宣告變數前面要寫let並且分號結尾
          常數(const)宣告通常是用大寫
          每串程式後面都以分號結尾
          長註解是倒斜線+兩個星星，尾巴加一個星星一個倒斜線*/

// 函式化，python是def，javascript是function，名稱通常用大寫字表示
function getRandomInt(start, end) {
    let r = Math.floor(Math.random() * end) + start;
    return r
}


// 排序的方法
function compare(a, b) {
    return a - b;
    // a比b大的話，兩個交換位置，升序
}



function getNumbers(count, lenth) {
    let allnumbers = [];
    for (let j = 0; j < count; j++) {
        let numbers = [];
        while (true) {
            let x = getRandomInt(1, 49);
            if (!numbers.includes(x)) {
                numbers.push(x);
            }
            if (numbers.length == lenth) { break; }
        }
        numbers.sort(compare);
        allnumbers.push(numbers)
    }
    return allnumbers;
}


function getLottery() {
    const lotteryEl = document.querySelector("#lottery"); // 因為是id要帶#號
    // console.log(lotteryEl);

    // console.log(allnumbers);
    // 輸出樂透號碼到document
    let count = prompt("樂透組數")
    allnumbers = getNumbers(count, 10);
    lotteryEl.innerHTML = "";
    for (let i = 0; i < allnumbers.length; i++) {
        // console.log(allnumbers[i].join(" , "));
        // 用+=才會累計每次的結果
        lotteryEl.innerHTML += `<h3>第${i + 1}組號碼:${allnumbers[i].join(",")}</h3><hr>`;
        // document.write(`<h3>第${i + 1}組號碼:${allnumbers[i].join(",")}</h3><hr>`)
    }
}


const dateEl = document.querySelector(".date");
dateEl.innerText = Date()
// console.log(dateEl);
// document.write(Date());





// 陣列(串列)
// 外迴圈(控制組數)=>產生五組
let allnumbers = [];
for (let j = 0; j < 5; j++) {
    let numbers = [];
    // 內迴圈:輸出6個號碼到網頁上
    // 不重複號碼 !=>not
    while (true) {
        let x = getRandomInt(1, 49);
        // 如果陣列numbers不包含x，才要加入x
        if (!numbers.includes(x)) {
            numbers.push(x);
        }
        // 如果陣列長度等於6，就停止
        if (numbers.length == 6) { break; }
    }
    // for (let i = 0; i < 6; i++) {
    //     // document.write("<h3>" + "第" + (i + 1) + "個號碼:" + getRandomInt(1, 49) + "</h3>");
    //     let x = getRandomInt(1, 49);
    //     // 反引號``，可以很快的拼湊出整串文字，類似於fstring概念
    //     // 變數要用${}包覆
    //     document.write(`<h3>第${(i + 1)}個號碼:${x}</h3>`);
    //     // .push等同append用法
    //     numbers.push(x);
    // }
    // 排序
    numbers.sort(compare);
    allnumbers.push(numbers)
}


// 用document.write會破壞原本的框架設計




let z = null;
console.log(z);

console.log(Math.PI);
// 0~10之間的亂數
// Math.random是0~1之間的浮點數
// Math.floor 小於等於最接近整數
// Math.ceil大於等於最接近整數
for (let i = 0; i < 10; i++) {
    let r = Math.floor(Math.random() * 10);
    console.log(r);
}
// 1~49
for (let i = 0; i < 10; i++) {
    let r = Math.floor(Math.random() * 49) + 1;
    console.log(r);
}

// 可以先使用再宣告函式，或是先宣告函示再使用，都可以
while (true) {
    let r = getRandomInt(1, 49);
    console.log(r);
    if (r == 49) { break; }
}


// 兩個等，會自動轉型，所以是true
console.log(10 == "10");
// 三個等，會連型態都比對，所以是false 
console.log(10 === "10");
// 型態轉換 Number,String,Boolean
console.log(String(10) === "10");
console.log(10 === Number("10"));


/**
 * 邏輯運算子
 * ||是or
 * &&是and
 */
let ch = 60;
let eng = 60;
let math = 59;
/** python寫法
if(ch>=60 or eng>=60) and math>=60:
        print('通過考試')*/
if ((ch >= 60 || eng >= 60) && math >= 60) {
    console.log("pass");
} else {
    console.log("fail");
}





let email = "mary@gmail.com";
console.log(email);
console.log(email.length);
console.log(email[email.length - 1]);
// for迴圈寫法，i需先設定初始值;小於某個數;每次加1;透過大括號包覆來表示是在同個迴圈裡
// i++等於i+=1
// i++先輸出再加 ; ++i先加再輸出
for (let i = 0; i < email.length; i++) {
    console.log(i, email[i]);
}

/**
 python用法
 for i in range(len(email)):
    print(email[i])
 */



let x = 10;
let y = 20;

// const PI = 3.1415926
// // prompt就是input的意思
// let radius = prompt("請輸入半徑:");
// let area = radius * radius * PI;
// // 可以字串+數字(字串串接)
// let result = "面積為" + area;
// /**console.log=print
//  console.log是給寫網頁的人看的(右鍵/檢查)
//  網頁出來都是字串
//  typeof=type看型態*/
// console.log(x + y, area, result, typeof (result), typeof (radius));
// // 輸出網頁給使用者看的
// // 只有document可以加上網頁標籤用法
// document.write("<h2>" + result + "</h2>");
// // alert,跳出提示框，按確定離開
// alert(result);





// 計算BMI
// let height = prompt("請輸入身高:");
// let weight = prompt("請輸入體重:");
// let bmi = weight / (height / 100) ** 2;
// console.log(bmi);
// let result2 = "<ul>";
// result2 += "<li>身高:" + height + "cm" + "</li>";
// result2 += "<li>體重:" + weight + "kg" + "</li>";
// // .toFixed(2)約束小數點第2位
// result2 += "<li>BMI:" + bmi.toFixed(2) + "</li>";
// result2 += "</ul>";
// document.write(result2)

// 型態轉換
// x="3.5";
// document.write(parseInt(x));
// document.write(Number(x));

// 物件object=>json
let user = {
    name: "Jerry",
    height: 178.6,
    weight: 77.8
}
console.log(user, typeof (user));
console.log(user.name, user["name"]);

// 寫一個計算bmi的函式
function getBmi(height, weight) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return "數值錯誤";
    }
    return bmi.toFixed(2);
}
console.log(getBmi(user.name, user.weight));
console.log(getBmi(user.height, user.weight));

// 從原本的javascript本文抓取物件並更改
const h1 = document.querySelector("h1");
console.log(h1);
// h1.innerText="大樂透";
// 帶標籤語法要用innerHTML
h1.innerHTML = "<u>大樂透</u>";
h1.style.color = "red";

