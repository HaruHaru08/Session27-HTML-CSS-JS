let menu = `
----Menu----
1.Tính diện tích hình tròn.
2.Tính chu vi hình tròn.
3.Tính diện tích hình chữ nhật.
4.Tính chu vi hình chữ nhật.
5.Thoát.
Lựa chọn của bạn:
`;
let choice;
while (choice !== 5) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
        let bk1=+prompt("Mời nhập bán kính");
        console.log(sTron(bk1).toFixed(2));
      break;
    case 2:
        let bk2=+prompt("Mời nhập bán kính");
        console.log(cvTron(bk2).toFixed(2));
      break;
    case 3:
        let cr=+prompt("Mời nhập chiều rộng");
        let cd=+prompt("Mời nhập chiều dài");
        console.log(sCN(cd,cr).toFixed(2));
      break;
    case 4:
        let crj=+prompt("Mời nhập chiều rộng");
        let cdf=+prompt("Mời nhập chiều dài");
        console.log(cvCN(cd,cr).toFixed(2));
      break;
    case 5:
      console.log("Cảm ơn đã sử dụng");
      break;
    default:
      console.log("Lựa chọn không hợp lệ!Mời nhập lại");
      break;
  }
}
function sTron(r) {
    let pi=3.14;
    return pi * r * r;
}

function cvTron(r) {
    return 2 * Math.PI * r;
}

function sCN(d, r) {
    return d * r;
}

function cvCN(d, r) {
    return 2 * (d + r);
}