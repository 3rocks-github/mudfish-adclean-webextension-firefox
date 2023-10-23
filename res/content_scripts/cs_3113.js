
function mudfish_adclean_7a412a4d80dcd762877122fb96ed43e8() {
  try {
    Sizzle(`#wrap_cnts > div[style*="min-height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7a412a4d80dcd762877122fb96ed43e8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7a412a4d80dcd762877122fb96ed43e8, function (items) {
  if (mudfish_adclean_g_conf_7a412a4d80dcd762877122fb96ed43e8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7a412a4d80dcd762877122fb96ed43e8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7a412a4d80dcd762877122fb96ed43e8();
    });
  }
});
