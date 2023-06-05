const form = document.querySelector("form");
form.addEventListener("submit", e => {
    // e.preventDefault();
    let name = document.getElementById("name").value
    alert(`Thanks ${name} !  I'll get back to you as soon as possible.`)
})

main();
function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

async function typewrite(txt, el) {
    el.innerText = "";
    for (const char of txt) {
        el.textContent += char;
        await sleep(100);
    }
}

async function typewrite2(txt, el) {
    for (const char of txt) {
        el.textContent = el.textContent.slice(0, -1);
        await sleep(250);
    }
}

async function main() {
    const TAILS = [
        "Hello",
        "Merhaba",
        "Hallo",
        "Mirë dita",
        "ታዲያስ",
        "مرحبا",
        "Салам",
        "Kaixo",
        "নমস্কার",
        "Zdravo",
        "Olá",
        "Demat",
        "Здравейте",
        "Hola",
        "Moni",
        "Bonghjornu",
        "Bok",
        "Ahoj",
        "Hej",
        "Hallo ",
        "Saluton",
        "Tere",
        "سلام ",
        "Bula",
        "Kamusta",
        "Hei",
        "Bonjour",
        "მიესალმები",
        "Hallo",
        "Χαίρε",
        "Hello",
        "Aloha ",
        "שלום ",
        "नमस्ते ",
        "Sziasztok",
        "Hai",
        "Dia dhuit",
        "Ciao",
        "ನಮಸ್ಕಾರ",
        "ជំរាបសួរ",
        "안녕 ",
        "ສະບາຍດີ",
        "Salve ",
        "Sveiki",
        "Hallau",
        "Sveiki",
        "Добар ден",
        "Selamat tengahari",
        "Ħelow",
        "你好",
        "Kia ora",
        "नमस्ते",
        "Hei",
        "ନମସ୍କାର",
        "سلام",
        "Hej",
        "Olá",
        "Buna",
        "Привет",
        "Talofa",
        "Haló",
        "Здраво",
        "侬好",
        "Mhoro",
        "Ahoj",
        "Zdravo",
        "Hola",
        "Grüss Gott",
        "Hodi",
        "Hallá ",
        "வனக்கம்",
        "Xin chào",
        "Womenjeka ",
        "שלום ",
        "வணக்கம்",
        "నమస్కారం",
        "สวัสดีค่ะ",
        "Chào bạn",
        "Helo",
        "העלא ",
        "Sawubona"]

    const tail = document.querySelector(".tail");
    let tailIndex = 0;
    while (true) {
        await typewrite(TAILS[tailIndex], tail);
        await sleep(1000);
        await typewrite2(TAILS[tailIndex], tail);
        await sleep(1000);
        tailIndex = (tailIndex + 1) % TAILS.length;
    }
}
