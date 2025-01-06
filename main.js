// Dastlabki massiv
let fruits = ["Olma", "Shaftoli", "Uzum", "Gilos"];

// Massiv uzunligini console.log va alert bilan ko'rsatish
console.log("Massiv uzunligi: " + fruits.length);
alert("Massiv uzunligi: " + fruits.length);

// Elementni olib tashlashni so'rash
while (true) {
    const isRemove = confirm("Massivdan bitta element olib tashlamoqchimisiz?");
    
    if (isRemove) {
        // Elementni olib tashlash
        fruits.pop();
        console.log("Massiv yangilangan: ", fruits);
        alert("Massiv yangilangan: " + fruits.join(", "));
    } else {
        // Element olib tashlanmaslik
        console.log("Massiv o'zgarmadi: ", fruits);
        alert("Massiv o'zgarmadi: " + fruits.join(", "));
        break;
    }

    // Agar massiv bo'sh bo'lsa, tsiklni to'xtatish
    if (fruits.length === 0) {
        alert("Massiv bo'sh. Endi olib tashlashning iloji yo'q.");
        break;
    }
}
