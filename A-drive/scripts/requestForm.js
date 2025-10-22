// ✅ Укажи здесь свой WhatsApp-номер в международном формате без + и пробелов
// Пример: const WHATSAPP_RECIPIENT = '15551234567';
const WHATSAPP_RECIPIENT = '18328321425';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tripForm');
  const messageEl = document.getElementById('formMessage');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const start = document.getElementById('start').value.trim();
    const end = document.getElementById('end').value.trim();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!date || !time || !start || !end || !name || !phone) {
      showMessage('Please fill all fields.', 'error');
      return;
    }

    if (WHATSAPP_RECIPIENT === 'REPLACE_WITH_YOUR_NUMBER') {
      showMessage('Please set your WhatsApp number in requestForm.js', 'error');
      return;
    }

    const msgLines = [
      'New trip request:',
      `Date: ${date}`,
      `Time: ${time}`,
      `Start address: ${start}`,
      `End address: ${end}`,
      `Name: ${name}`,
      `Phone: ${phone}`
    ];

    const text = encodeURIComponent(msgLines.join('\n'));
    const waUrl = `https://wa.me/${WHATSAPP_RECIPIENT}?text=${text}`;
    window.open(waUrl, '_blank');
    showMessage('Opening WhatsApp...', 'info');

    form.reset();
  });

  function showMessage(text, type) {
    messageEl.style.display = 'block';
    messageEl.textContent = text;
    messageEl.style.color = type === 'error' ? 'crimson' : '#333';
  }
});