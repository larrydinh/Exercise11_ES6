document.getElementById("btnTinhLuong").onclick = (e) => {
  e.preventDefault(); //cản sự kiện submit của form browser
  let maNV = document.getElementById("employeeID").value;
  let tenNV = document.getElementById("name").value;
  let chucVu = Number(document.getElementById("inputGroupSelect01").value);
  let luongCB = Number(document.getElementById("standardSalary").value);
  document.getElementById("maNV").innerHTML = maNV;
  document.getElementById("tenNV").innerHTML = tenNV;
  let text = "";
  if (chucVu == 1) {
    tongLuong = luongCB;
    text = "Thường";
  } else if (chucVu == 2) {
    tongLuong = luongCB * 2;
    text = "Quản lí";
  } else if (chucVu == 3) {
    tongLuong = luongCB * 3;
    text = "Giám đốc";
  } else {
    alert("chua nhap chuc vu");
  }
  document.getElementById("tongLuong").innerHTML = tongLuong;
  document.getElementById("chucVu").innerHTML = text;
};

// let employeeData = {};

// let arrInput = document.querySelectorAll(".form-input input");
// console.log(arrInput);
// for (let i = 0; i < arrInput.length; i++) {
//   let tagInput = arrInput[i];
//   let { id, value} = tagInput;
//   employeeData = { ...employeeData, [id]: value }
//   console.log(tagInput)
//   let contentTr = `<tr>`;
//   for (let i = 0; i < arrTd.length; i++) {
//     contentTr += `<td>${arrTd[i]}</td>`;
//   }
//   contentTr += `</tr>`;
//   document.querySelector("thead").innerHTML = contentTr;

//   let contentTrBody = `<tr>`;
//   for (let thuocTinh in employeeData) {
//     contentTrBody += `<td> ${employeeData[thuocTinh]} </td>`;
//     employeeData[thuocTinh];
//     // console.log(thuocTinh);
//   }
//   contentTrBody += `</tr>`;
//   document.querySelector("tbody").innerHTML = contentTrBody;
// };
