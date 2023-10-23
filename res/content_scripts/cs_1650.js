
function mudfish_adclean_f1a9727107c673fb0067fecbfb180bca() {
  try {
    Sizzle(`#articleText > section[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f1a9727107c673fb0067fecbfb180bca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f1a9727107c673fb0067fecbfb180bca, function (items) {
  if (mudfish_adclean_g_conf_f1a9727107c673fb0067fecbfb180bca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f1a9727107c673fb0067fecbfb180bca();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f1a9727107c673fb0067fecbfb180bca();
    });
  }
});
