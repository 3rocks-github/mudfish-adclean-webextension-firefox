
function mudfish_adclean_fc324828f9ccce25def6eea039baeae7() {
  try {
    Sizzle(`a[href^="/go/"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fc324828f9ccce25def6eea039baeae7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fc324828f9ccce25def6eea039baeae7, function (items) {
  if (mudfish_adclean_g_conf_fc324828f9ccce25def6eea039baeae7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fc324828f9ccce25def6eea039baeae7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fc324828f9ccce25def6eea039baeae7();
    });
  }
});
