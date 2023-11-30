// Tính tổng các số trong khoảng từ 10 đén 20, 20 đến 30, 30 đến 40
// let  total = 0;
// let total1 = 0;
// let total2 = 0;
// for(i = 10; i <= 20; i++){
//     total += i
// }

// for(i = 20; i <= 30; i++){
//     total1 += i
// }

// for(i = 30; i <= 40; i++){
//     total2 += i
// }

// console.log("Tổng của total: ", total);
// console.log("Tổng của total1: ", total1);
// console.log("Tổng của total2: ", total2);

// => Code bị lặp lại nhiều lần
// Khó bảo trì
// => funtion ra đời để giải quyết vấn đề trên
// 1.Cú pháp khai báo hàm
// function ten_ham (tham_so) {
//     logic code
// }

// Viết hàm tính tổng 2 số a và b

// const a = 10;
// const b = 20;
// const c = a+b;

// function sum (a, b) {
//     // console.log(a + b);
//     return a + b;
// }
// console.log(sum(10, 20));

// function sumNumber (a, b) {
//     // Giá trị lưu trữ
//     let totalNumber = 0;
//     for( let i = a; i <= b; i++) {
//         totalNumber += i
//     }
//     return totalNumber
// }
// console.log(sumNumber(1, 2));
// console.log(sumNumber(3, 4));
// console.log(sumNumber(5, 6));


// 1. Viết hàm tính tổng các số trong mảng [10, 22, 15, 30, 80, 65] 

// function sumArray(number) {
//     let sum = 0;
//     for(i = 0; i < number.length ; i++){
//         sum += number[i]
//     }
//     return sum;
// }
// let number = [10, 22, 15, 30, 80, 65];
// console.log(sumArray(number));

// 2.Viết hàm tìm giá trị lớn nhất trong mảng

let array = [10, 22, 15, 30, 80, 65]; // Khai báo khởi tạo giá trị cho mảng
console.log("Giá trị lớn nhất: ", Math.max(...array));
// let max = array[0]; // GTLN là phần tử đầu trong mảng
// let index = 0; // Lưu chỉ số của phần tử lớn nhất
// for(let i = 1; i < array.length; i++) { //nếu 1 phần tử trong array có giá trị lớn hơn max thì max chính là phần tử đó và gán index = phần tử đó
//     if (array[i] > max){
//         max = array[i];
//         index = i;
//     }
// }
// console.log("Max là :", max);

// 3.Viết hàm đảo ngược một chuỗi 

// function reverseString(array) {
//     let reversed = ""
//     for(let i= array.length - 1; i >= 0; i--) {
//         console.log(array[i]);
//         // reversed += array[i]
//     }
// }
// let array = reverseString("a, b, c, d"); ;

// console.log(array)

function reverseString (myString) {
    let stringReverse = myString.split("").reverse().join("")
   return stringReverse
}
let myString = "Quý DZ"
const result = reverseString(myString)
console.log(result);

// 4.Viết hàm kiểm tra số chẵn và hàm kiểm tra số lẻ

let number = (10, 22, 15, 30, 80, 65) {
    for (let i = 0; i < number.length; i++) {
        if(i % 2 == 0) {
            console.log("Đây là số chẵn");
        } else {
            console.log("Đây là số lẻ");
        }
    }
}
