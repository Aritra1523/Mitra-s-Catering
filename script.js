const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");
menu?.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "78px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "20px 6%";
  nav.style.background = "#f8f5ef";
  nav.style.flexDirection = "column";
});

document.querySelectorAll(".nav nav a").forEach(a => {
  a.addEventListener("click", () => {
    if (window.innerWidth <= 850) nav.style.display = "";
  });
});

document.getElementById("enquiryForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const text = `Hello Mitra's Catering Service,%0A%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0AEvent: ${data.get("event")}%0AMessage: ${data.get("message") || "N/A"}`;
  window.open(`https://wa.me/917003419553?text=${text}`, "_blank");
});
