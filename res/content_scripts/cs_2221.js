
function mudfish_adclean_2a8ab294dc52723cc1f4625f7b818320() {
  try {
    Sizzle(`article`).forEach(element => {
      element.style.top = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2a8ab294dc52723cc1f4625f7b818320 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2a8ab294dc52723cc1f4625f7b818320, function (items) {
  if (mudfish_adclean_g_conf_2a8ab294dc52723cc1f4625f7b818320.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2a8ab294dc52723cc1f4625f7b818320();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2a8ab294dc52723cc1f4625f7b818320();
    });
  }
});
