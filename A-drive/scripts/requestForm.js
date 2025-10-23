
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

  // Show temporary popup message
  showMessage('Redirecting to WhatsApp. Please make sure to send your request there.', 'info');

  setTimeout(() => {
    const waUrl = `https://wa.me/${WHATSAPP_RECIPIENT}?text=${text}`;
    window.open(waUrl, '_blank');
    form.reset();
  }, 500);
});

  function showMessage(text, type) {
  messageEl.textContent = text;
  messageEl.style.color = type === 'error' ? 'crimson' : '#333';
  messageEl.classList.remove('hide');
  messageEl.classList.add('show');

  // Hide the message after 3 seconds
  setTimeout(() => {
    messageEl.classList.remove('show');
    messageEl.classList.add('hide');
  }, 3000);
}
});