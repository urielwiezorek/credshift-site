document.querySelectorAll('.feature-box').forEach(box => {
  box.addEventListener('click', () => {
    const detail = box.querySelector('.details');
    if (detail.style.display === 'block') {
      detail.style.display = 'none';
    } else {
      detail.style.display = 'block';
    }
  });
});
