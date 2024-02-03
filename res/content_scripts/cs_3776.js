
function mudfish_adclean_0915866666329b30d50cd990b24489a1() {
  try {
    Sizzle(`.row-banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0915866666329b30d50cd990b24489a1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0915866666329b30d50cd990b24489a1, function (items) {
  if (mudfish_adclean_g_conf_0915866666329b30d50cd990b24489a1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0915866666329b30d50cd990b24489a1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0915866666329b30d50cd990b24489a1();
    });
  }
});
