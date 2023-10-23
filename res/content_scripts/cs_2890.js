
function mudfish_adclean_e4dc86515df33f041e03e3013a1011b1() {
  try {
    Sizzle(`div[class$="Banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e4dc86515df33f041e03e3013a1011b1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e4dc86515df33f041e03e3013a1011b1, function (items) {
  if (mudfish_adclean_g_conf_e4dc86515df33f041e03e3013a1011b1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e4dc86515df33f041e03e3013a1011b1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e4dc86515df33f041e03e3013a1011b1();
    });
  }
});
