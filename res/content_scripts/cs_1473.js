
function mudfish_adclean_49741bb835b88878a1fec5b1cac1875a() {
  try {
    Sizzle(`div[class$="_bn"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_49741bb835b88878a1fec5b1cac1875a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_49741bb835b88878a1fec5b1cac1875a, function (items) {
  if (mudfish_adclean_g_conf_49741bb835b88878a1fec5b1cac1875a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_49741bb835b88878a1fec5b1cac1875a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
