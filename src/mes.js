export function showMessage(container, message) {
  const p = document.createElement("p");
  p.textContent = message;
  container.appendChild(p);
}