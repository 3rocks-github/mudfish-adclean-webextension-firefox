
function mudfish_adclean_6dda7a0aba3a3f84cb87d37df2948e06() {
  try {
    Sizzle(`.inner-body.hided .inside-content-background-gradient`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6dda7a0aba3a3f84cb87d37df2948e06 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6dda7a0aba3a3f84cb87d37df2948e06, function (items) {
  if (mudfish_adclean_g_conf_6dda7a0aba3a3f84cb87d37df2948e06.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6dda7a0aba3a3f84cb87d37df2948e06();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6dda7a0aba3a3f84cb87d37df2948e06();
    });
  }
});
