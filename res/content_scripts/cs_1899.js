
function mudfish_adclean_d13e19589cff02729048b27ea5ce38f6() {
  try {
    Sizzle(`main#article > .arc_list`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d13e19589cff02729048b27ea5ce38f6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d13e19589cff02729048b27ea5ce38f6, function (items) {
  if (mudfish_adclean_g_conf_d13e19589cff02729048b27ea5ce38f6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d13e19589cff02729048b27ea5ce38f6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
