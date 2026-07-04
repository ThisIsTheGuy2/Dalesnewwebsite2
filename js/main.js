// Small JS for FAQ accordion, year fill

window.addEventListener('DOMContentLoaded', function () {
  // Fill footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // FAQ accordion behavior
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach(card => {
    const btn = card.querySelector('.faq-q');
    const desc = btn.querySelector('div > div:nth-child(2)');
    btn.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      faqCards.forEach(c => {
        c.classList.remove('open');
        const cc = c.querySelector('.faq-content');
        if (cc) cc.style.maxHeight = null;
      });

      if (!isOpen) {
        card.classList.add('open');
        let content = card.querySelector('.faq-content');
        if (!content) {
          content = document.createElement('div');
          content.className = 'faq-content bg-white';
          const answerText = desc ? desc.textContent : '';
          content.innerHTML = '<div class="text-slate-600">' + answerText + '</div>';
          card.appendChild(content);
        }
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
