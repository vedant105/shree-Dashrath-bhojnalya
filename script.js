function toggleQR() {
  const qr = document.getElementById('qr-popup');
  if (qr.style.display === 'block') {
    qr.style.display = 'none';
  } else {
    qr.style.display = 'block';
  }
}


// WhatsApp Table Booking Logic
document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this[0].value.trim();
  const phone = this[1].value.trim();
  const date = this[2].value;
  const time = this[3].value;

  const message = `नमस्ते, मैं टेबल बुक करना चाहता हूँ:\n👤 नाम: ${name}\n📞 फोन: ${phone}\n📅 दिनांक: ${date}\n⏰ समय: ${time}`;
  const whatsappNumber = "917694056644"; // ✅ India format, no dashes

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');

  document.getElementById('bookingMessage').innerText = '✅ Booking request sent via WhatsApp!';
});


// Language toggle
let hindi = false;
function toggleLang() {
  hindi = !hindi;
  document.querySelector('h1').innerText = hindi ? 'साईनाथ रेस्टोरेंट' : 'Sainath Restaurant';
  document.querySelector('#offerText').innerText = hindi
    ? 'आज के नाश्ते पर मुफ्त चाय ☕!'
    : 'Get a free chai ☕ with every breakfast plate today!';
}
