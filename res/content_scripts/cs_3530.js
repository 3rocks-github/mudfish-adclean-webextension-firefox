
function mudfish_adclean_c54d18edd318ebe07126a5dc8f7e408b() {
  try {
    Sizzle(`img[src^="/bannerpop/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c54d18edd318ebe07126a5dc8f7e408b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c54d18edd318ebe07126a5dc8f7e408b, function (items) {
  if (mudfish_adclean_g_conf_c54d18edd318ebe07126a5dc8f7e408b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c54d18edd318ebe07126a5dc8f7e408b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c54d18edd318ebe07126a5dc8f7e408b();
    });
  }
});
