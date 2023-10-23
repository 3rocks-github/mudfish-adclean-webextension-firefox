
function mudfish_adclean_f0d59d3a35e5cb1d79c053430b07f9d9() {
  try {
    Sizzle(`#adNotice`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f0d59d3a35e5cb1d79c053430b07f9d9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f0d59d3a35e5cb1d79c053430b07f9d9, function (items) {
  if (mudfish_adclean_g_conf_f0d59d3a35e5cb1d79c053430b07f9d9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f0d59d3a35e5cb1d79c053430b07f9d9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f0d59d3a35e5cb1d79c053430b07f9d9();
    });
  }
});
