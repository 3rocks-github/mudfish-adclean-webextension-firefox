
function mudfish_adclean_3abd7c288c82c300bfdbce01624769b2() {
  try {
    Sizzle(`.content > .nextbr ~ div[style^="min-height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3abd7c288c82c300bfdbce01624769b2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3abd7c288c82c300bfdbce01624769b2, function (items) {
  if (mudfish_adclean_g_conf_3abd7c288c82c300bfdbce01624769b2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3abd7c288c82c300bfdbce01624769b2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3abd7c288c82c300bfdbce01624769b2();
    });
  }
});
