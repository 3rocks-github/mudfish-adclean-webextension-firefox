
function mudfish_adclean_4190cde5ab09c6f89f8af8252cf957be() {
  try {
    Sizzle(`div[onmousedown*="'event_label': 'AD'"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4190cde5ab09c6f89f8af8252cf957be = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4190cde5ab09c6f89f8af8252cf957be, function (items) {
  if (mudfish_adclean_g_conf_4190cde5ab09c6f89f8af8252cf957be.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4190cde5ab09c6f89f8af8252cf957be();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4190cde5ab09c6f89f8af8252cf957be();
    });
  }
});
