
function mudfish_adclean_4785b4dbb168f6e65f797e4a9a9fe500() {
  try {
    Sizzle(`.topAD`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4785b4dbb168f6e65f797e4a9a9fe500 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4785b4dbb168f6e65f797e4a9a9fe500, function (items) {
  if (mudfish_adclean_g_conf_4785b4dbb168f6e65f797e4a9a9fe500.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4785b4dbb168f6e65f797e4a9a9fe500();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4785b4dbb168f6e65f797e4a9a9fe500();
    });
  }
});
