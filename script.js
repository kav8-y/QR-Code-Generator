function generateQR() {
    const text = document.getElementById("qrText").value;
    const qrBox = document.getElementById("qrBox");

    qrBox.innerHTML = ""; // clear old QR

    if (text.trim() === "") {
        alert("Please enter some text or URL");
        return;
    }

    new QRCode(qrBox, {
        text: text,
        width: 200,
        height: 200,
    });
}
