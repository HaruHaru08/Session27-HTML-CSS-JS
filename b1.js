let arr = [5, 10];
let menu = `
-----Menu-----
1.Cộng hai số.
2.Trừ hai số.
3.Nhân hai số.
4.Chia hai số.
5.Thoát.
Lựa chọn của bạn:
`;
let choice;
while (choice !== 5) {
  choice =+prompt(menu);
  switch (choice) {
    case 1:
        console.log("Tổng là:",sum(arr));
      break;
    case 2:
        console.log("Hiệu là:",minus(arr));
      break;
    case 3:
        console.log("Tích là:",multiply(arr));
      break;
    case 4:
        console.log("Thương là:",division(arr));
      break;
    case 5:
        console.log("Cảm ơn đã sử dụng");
      break;
    default:
        console.log("Lựa chọn không hợp lệ!Mời nhập lại");
      break;
  }
}
function sum(arr){
    let sum=arr[0]+arr[1];
    return sum;
}

function minus(arr){
    let minus=arr[0] -arr[1];
    return minus;
}

function multiply(arr){
    let multiply= arr[0] * arr[1];
    return multiply;
}

function division(arr){
    let division= arr[0] / arr[1];
    return division;
}