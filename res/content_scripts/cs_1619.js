
function mudfish_adclean_5583470f23b31a0757008106046c3ace() {
  try {
    Sizzle(`div[id^="div-"][style*="min-height:"]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5583470f23b31a0757008106046c3ace = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5583470f23b31a0757008106046c3ace, function (items) {
  if (mudfish_adclean_g_conf_5583470f23b31a0757008106046c3ace.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5583470f23b31a0757008106046c3ace();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
