const categories = {
  parfum: {
    title: "Tokoh parfum",
    description: "Jelajahi ide fotografi parfum yang mewah, clean, dan cinematic di Pinterest.",
    query: "luxury perfume aesthetic photography",
    pinterest: "luxury%20perfume%20aesthetic%20photography"
  },
  motor: {
    title: "Motor",
    description: "Temukan inspirasi sampul motor dengan nuansa street, night ride, dan sporty.",
    query: "motorcycle night street aesthetic photography",
    pinterest: "motorcycle%20night%20street%20aesthetic%20photography"
  },
  cafe: {
    title: "Cafe malam",
    description: "Cari referensi cafe malam dengan makanan, minuman, dan pencahayaan hangat.",
    query: "night cafe food drinks aesthetic photography",
    pinterest: "night%20cafe%20food%20drinks%20aesthetic%20photography"
  },
  pantai: {
    title: "Akhol di pantai",
    description: "Jelajahi inspirasi foto pantai dengan suasana sunset dan chill mood.",
    query: "beach sunset aesthetic photography",
    pinterest: "beach%20sunset%20aesthetic%20photography"
  }
};

let selected = "parfum";
const categoryButtons = [...document.querySelectorAll(".category-card")];
const quantity = document.getElementById("quantity");

function pinterestUrl() {
  const amount = normalizeQuantity();
  const term = categories[selected].pinterest;
  // Pinterest search results are shown on Pinterest; the requested amount is included in the search context.
  const query = `${decodeURIComponent(term.replaceAll("%20", " "))} ${amount} ideas`;
  return `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(query)}`;
}

function normalizeQuantity() {
  let n = Number.parseInt(quantity.value, 10);
  if (!Number.isFinite(n)) n = 5;
  n = Math.min(20, Math.max(1, n));
  quantity.value = n;
  return n;
}

function updatePreview() {
  const item = categories[selected];
  document.getElementById("selectedCount").textContent = "1";
  document.getElementById("previewTitle").textContent = item.title;
  document.getElementById("previewDescription").textContent = item.description;
  document.getElementById("previewQuery").textContent = item.query;
  categoryButtons.forEach(btn => {
    const active = btn.dataset.category === selected;
    btn.classList.toggle("selected", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

categoryButtons.forEach(btn => btn.addEventListener("click", () => {
  selected = btn.dataset.category;
  updatePreview();
}));

document.getElementById("minusBtn").addEventListener("click", () => {
  quantity.value = Math.max(1, normalizeQuantity() - 1);
});
document.getElementById("plusBtn").addEventListener("click", () => {
  quantity.value = Math.min(20, normalizeQuantity() + 1);
});
quantity.addEventListener("change", normalizeQuantity);

function openPinterest() {
  const url = pinterestUrl();
  window.open(url, "_blank", "noopener,noreferrer");
}
document.getElementById("searchBtn").addEventListener("click", openPinterest);
document.getElementById("previewSearch").addEventListener("click", openPinterest);

updatePreview();
