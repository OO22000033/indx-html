// إظهار/إخفاء التفاصيل
function toggleDetails(id){
    let row = document.getElementById(id);

    if(row.style.display === "none"){
        row.style.display = "table-row"; // إظهار
    } else {
        row.style.display = "none"; // إخفاء
    }
}

// إظهار الفورم
function showForm(){
    document.getElementById("formDiv").style.display = "block";
}

// التحقق من المدخلات
function validateForm(){

    let name = document.getElementById("name").value;
    let nid = document.getElementById("nid").value;
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    // تحقق الاسم (أحرف فقط)
    let nameRegex = /^[أ-يa-zA-Z ]+$/;
    if(!nameRegex.test(name)){
        alert("الاسم غير صحيح");
        return false;
    }

    // الرقم الوطني (11 رقم)
    if(nid.length !== 11){
        alert("الرقم الوطني يجب أن يكون 11 رقم");
        return false;
    }

    // التاريخ
    let dateRegex = /^\\d{2}-\\d{2}-\\d{4}$/;
    if(!dateRegex.test(dob)){
        alert("التاريخ غير صحيح");
        return false;
    }

    // الموبايل
    let phoneRegex = /^(09)[0-9]{8}$/;
    if(!phoneRegex.test(phone)){
        alert("رقم الموبايل غير صحيح");
        return false;
    }

    // الإيميل
    if(email === ""){
        alert("الإيميل مطلوب");
        return false;
    }

    alert("تم الإرسال بنجاح ✅");
    return true;
}