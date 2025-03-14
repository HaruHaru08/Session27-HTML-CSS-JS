let arr=[];
let menu=`
-----Menu-----
1. Nhập danh sách số nguyên.
2. Tính trung bình các số.
3. Tìm số chẵn lớn nhất.
4. Tìm số lẻ nhỏ nhất.
5. Thoát.
Lựa chọn của bạn:
`
let choice;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
      case 1:
          console.log(input(arr));
        break;
      case 2:
          console.log(average(arr));
        break;
      case 3:
          even(arr);
        break;
      case 4:
          odd(arr);
        break;
      case 5:
        console.log("Cảm ơn đã sử dụng");
        break;
      default:
        console.log("Lựa chọn không hợp lệ!Mời nhập lại");
        break;
    }
}
function input(arr){
    let number=+prompt("Nhập số lượng số nguyên muốn thêm:");
    if(Number.isInteger(number)){
        for(let i=0;i<number;i++){
            let num=+prompt("Mời bạn số nguyên:");
            if(Number.isInteger(num)){
                arr.push(num);
            }else{
                console.log("Trong số các phần tử bạn nhập có số không hợp lệ");
                break;
            }
        }
        return arr;
    }else{
        console.log("Số lượng không hợp lệ");
    }
}
function average(arr){
    let sum=0;
    for(let i in arr){
        sum+=arr[i];
    }
    return sum/arr.length;
}
function even(arr){
    if (arr.length === 0) {
        console.log("Mảng không có phần tử");
    } else {
        let result = [];
        let check = false;
        for (let i in arr) {
            if (arr[i] % 2 == 0) {
                result.push(arr[i]);
                check = true;
            }
        }
        if (check === false) {
            console.log("Danh sách không có số chẵn");
        } else {
            let max = result[0];
            for (let i in arr) {
                if (result[i] > max) {
                    max = result[i];
                }
            }
            console.log(max);
        }
    }
}
function odd(arr){
    if (arr.length === 0) {
        console.log("Mảng không có phần tử");
    } else {
        let result = [];
        let check = false;
        for (let i in arr) {
            if (arr[i] % 2 !== 0) {
                result.push(arr[i]);
                check = true;
            }
        }
        if (check===false) {
            console.log("Danh sách không có số lẻ");
        } else {
            let min = result[0];
            for (let i in result) {
                if (result[i] < min) {
                    min = result[i];
                }
            }
            console.log(min);
        }
    }
}