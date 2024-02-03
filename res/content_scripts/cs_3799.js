
function mudfish_adclean_da81284cefe8eb2b60ee885264a13a3a() {
  try {
    Sizzle(`.panel-default ~ .row > .col-sm-6`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_da81284cefe8eb2b60ee885264a13a3a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_da81284cefe8eb2b60ee885264a13a3a, function (items) {
  if (mudfish_adclean_g_conf_da81284cefe8eb2b60ee885264a13a3a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_da81284cefe8eb2b60ee885264a13a3a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_da81284cefe8eb2b60ee885264a13a3a();
    });
  }
});
