document.addEventListener('DOMContentLoaded', function () {
  const btnTheme = document.getElementById('btn-theme');
  btnTheme.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
});
