// Set footer year automatically
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
});
