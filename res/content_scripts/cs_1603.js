
function mudfish_adclean_ca1cb1d26257d8b0dab02e1c8b771181() {
  try {
    Sizzle(`.widget-side > .widget-box > div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ca1cb1d26257d8b0dab02e1c8b771181 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ca1cb1d26257d8b0dab02e1c8b771181, function (items) {
  if (mudfish_adclean_g_conf_ca1cb1d26257d8b0dab02e1c8b771181.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ca1cb1d26257d8b0dab02e1c8b771181();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ca1cb1d26257d8b0dab02e1c8b771181();
    });
  }
});
