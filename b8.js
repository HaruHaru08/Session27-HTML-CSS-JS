function max(n) {
    return Number(n.split('').sort((a, b) => b - a).join(''));
}

let number = prompt("Nhập một số nguyên:");
if (Number.isInteger(num)) {
    console.log("Số lớn nhất có thể tạo: " + max(num));
} else {
    console.log("Vui lòng nhập một số nguyên hợp lệ!");
}
