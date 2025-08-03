function toggleDetail(id) {
  const detail = document.getElementById(id);
  const allDetails = document.querySelectorAll('.detail');

  allDetails.forEach(d => {
    if (d !== detail) d.style.display = 'none';
  });

  detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
}
