
function mudfish_adclean_c01a9bb68676350efab8c35b971adf23() {
  try {
    Sizzle(`.article_body > div[class]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c01a9bb68676350efab8c35b971adf23 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c01a9bb68676350efab8c35b971adf23, function (items) {
  if (mudfish_adclean_g_conf_c01a9bb68676350efab8c35b971adf23.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c01a9bb68676350efab8c35b971adf23();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c01a9bb68676350efab8c35b971adf23();
    });
  }
});
