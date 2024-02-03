
function mudfish_adclean_37ec6026d9dec10d27f27f31e224f733() {
  try {
    Sizzle(`.rnb > .rnb_cont:matches-css(height: 0px):matches-css(padding-top: 30px)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_37ec6026d9dec10d27f27f31e224f733 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_37ec6026d9dec10d27f27f31e224f733, function (items) {
  if (mudfish_adclean_g_conf_37ec6026d9dec10d27f27f31e224f733.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_37ec6026d9dec10d27f27f31e224f733();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_37ec6026d9dec10d27f27f31e224f733();
    });
  }
});
