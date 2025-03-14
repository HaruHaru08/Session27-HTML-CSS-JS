let arr=[];
let menu=`
-----Menu-----
1.Nhập danh sách sinh viên.
2.Hiển thị danh sách sinh viên.
3.Tìm sinh viên theo tên.
4.Xóa sinh viên khỏi danh sách.
5.Thoát.
Lựa chọn của bạn:
`
let choice;
while (choice !== 5) {
  choice =+prompt(menu);
  switch (choice) {
    case 1:
       student(arr);
      break;
    case 2:
        display(arr);
      break;
    case 3:
        search(arr);
      break;
    case 4:
        erase(arr);
      break;
    case 5:
        console.log("Cảm ơn đã sử dụng");
      break;
    default:
        console.log("Lựa chọn không hợp lệ!Mời nhập lại");
      break;
  }
}
function student(arr){
    let number=+prompt("Nhập số lượng sinh viên muốn thêm:");
    if(Number.isInteger(number)){
        for(let i=0;i<number;i++){
            let num=prompt("Mời bạn nhập tên sinh viên:");
            arr.push(num);
        }
        return arr;
    }else{
        console.log("Số lượng không hợp lệ");
    }
}
function display(arr){
    if(arr.length===0){
        console.log("Mảng chưa có phần tử mời nhập phần tử");
    }else{
        for(let i in arr){
            console.log(arr[i]);
        }
    }
}
function search(arr) {
    let name = prompt("Nhập tên sinh viên muốn tìm: ");
    name = name.toLowerCase();
    let result = [];
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().includes(name)) {
            result.push(arr[i]);
            found = true;
        }
    }
    if (!found) {
        console.log("Sinh viên không có trong sách");
    }else{
        console.log(result);
    }
}

function erase(arr) {
    let nameDelete = prompt("Nhập tên sinh viên cần xoá: ");
    nameDelete = nameDelete.toLowerCase();
    let check = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().includes(nameDelete)) {
            arr.splice(i, 1);
            check = true;
            break;
        }
    }
    if (!check) {
        console.log("Không có sinh viên trong danh sách");
    } else {
        console.log("Xóa thành công");
    }
}
