var rowcount = 4;
function myCreateFunction() {
    var Class = prompt("Enter your Class");
    var year = prompt("Enter Year");
    var board = prompt("Enter Board/University/Institute");
    var per = prompt("Enter Your Percentage");
    if (Class != null) {
        var table = document.getElementById("myTable");
        var row = table.insertRow(++rowcount);
        var ce111 = row.insertCell(0);
        var ce111 = row.insertCell(1);
        var ce111 = row.insertCell(2);
        var ce111 = row.insertCell(3);

        ce111.innerHTML = Class.fontsize(4);
        ce112.innerHTML = year.fontsize(4);
        ce113.innerHTML = board.fontsize(4);
        ce114.innerHTML = per.fontsize(4);
    }
    else {
        alert("Please Enter Your Class");
    }
}
function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(rowcount);
    --rowcount;
}
function genPDF() {
    var doc = new jsPDF();
    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.text(68, 10, "THIS IS MY RESUME");
    doc.text(20, 20, document.getElementById("f_name").value + " " + document.getElementById("l_name").value);
    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.text(20, 30, "Father Name : " + document.getElementById("ft_name").value);
    doc.text(20, 36, "Email-id : " + document.getElementById("email").value);
    doc.text(20, 42, "Address : " + document.getElementById("address").value);
    doc.text(20, 48, "Phone_no. : " + document.getElementById("phone").value);
    doc.text(20, 54, "Facebook_Id : " + document.getElementById("facebook").value);
    doc.text(20, 60, "Instagram_Id : " + document.getElementById("insta").value);
    doc.text(20, 66, "LinkedIn_Id : " + document.getElementById("linkedIn").value);
    doc.text(20, 72, "Date of Birth : " + document.getElementById("dob").value);
    doc.text(20, 78, "Sex : " + document.getElementById("sex").value);
    doc.text(20, 84, "Religion : " + document.getElementById("religion").value);
    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(20, 96, "ACHIEVEMENTS");
    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.text(20, 104, document.getElementById("object").value);
    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(20, 136, "QUALIFICATION");
    doc.setFontType("normal");
    doc.setFontSize(14);
    doc.text(20, 146, "Class");
    doc.text(43, 146, "Year of Passing");
    doc.text(95, 146, "Board/University/Institute");
    doc.text(165, 146, "Percentage");
    doc.setFontSize(12);
    doc.text(20, 156, "10th");
    doc.text(50, 156, document.getElementById("year1").value);
    doc.text(100, 156, document.getElementById("bu1").value);
    doc.text(170, 156, document.getElementById("per1").value);
    doc.text(20, 157, "                       ____________              ___________________________         ___________");
    doc.text(20, 167, "12th");
    doc.text(50, 167, document.getElementById("year2").value);
    doc.text(100, 167, document.getElementById("bu2").value);
    doc.text(170, 167, document.getElementById("per2").value);
    doc.text(20, 168, "                       ____________              ___________________________         ___________");
    doc.text(20, 178, "BCA");
    doc.text(50, 178, document.getElementById("year3").value);
    doc.text(100, 178, document.getElementById("bu3").value);
    doc.text(170, 178, document.getElementById("per3").value);
    doc.text(20, 179, "                       ____________              ___________________________         ___________");
    doc.text(20, 189, "MCA");
    doc.text(50, 189, document.getElementById("year4").value);
    doc.text(100, 189, document.getElementById("bu4").value);
    doc.text(170, 189, document.getElementById("per4").value);
    doc.text(20, 190, "                       ____________              ___________________________         ___________");
    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(20, 208, "PROFESSIONAL-SKILLS");
    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.text(20, 216, document.getElementById("expert").value);
    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.text(20, 248, "SOCIAL SKILLS AND HOBBIES");
    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.text(20, 256, document.getElementById("skill").value);
    doc.save("This is my Resume.pdf");
}
