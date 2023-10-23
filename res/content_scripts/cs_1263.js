
function mudfish_adclean_019c2be6fecd7e894a4606bdac295d26() {
  try {
    Sizzle(`div[itemprop="articleBody"] > div[style^="float:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_019c2be6fecd7e894a4606bdac295d26 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_019c2be6fecd7e894a4606bdac295d26, function (items) {
  if (mudfish_adclean_g_conf_019c2be6fecd7e894a4606bdac295d26.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_019c2be6fecd7e894a4606bdac295d26();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_019c2be6fecd7e894a4606bdac295d26();
    });
  }
});
