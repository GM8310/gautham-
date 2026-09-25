document.querySelectorAll('.accordion').forEach((button) => {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const opening = button.getAttribute('aria-expanded') !== 'true';

    button.setAttribute('aria-expanded', String(opening));
    panel.hidden = !opening;
    button.closest('.card').classList.toggle('open', opening);
  });
});
