let arr = [];
let number = +prompt("Nhập số lượng phần tử: ");
if (Number.isInteger(number) || number >= 2) {
  for (let i = 0; i < number; i++) {
    let num = +prompt(`Mời bạn nhập phần tử: `);
    if(Number.isInteger(num)){
        arr.push(num);
    }else{
        console.log("Trong danh sách có dữ liệu không hợp lệ");
        break;
    }
  }
  let publicWrong = arr[1] - arr[0];
  let count=0;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== publicWrong) {
      count++;
      break;
    }
  }
  if (count===0) {
    console.log("true");
  } else {
    console.log("false");
  }
}else{
    console.log("Mảng rỗng hoặc nhỏ hơn 2")
}
