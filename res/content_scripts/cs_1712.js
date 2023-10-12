
function mudfish_adclean_03be677864f545c986817670b465e8e2() {
  try {
    Sizzle(`table[class*="Ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_03be677864f545c986817670b465e8e2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_03be677864f545c986817670b465e8e2, function (items) {
  if (mudfish_adclean_g_conf_03be677864f545c986817670b465e8e2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_03be677864f545c986817670b465e8e2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
