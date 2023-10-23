
function mudfish_adclean_2046e6a2755ada5aa9088c135d370e3b() {
  try {
    Sizzle(`#wrap_cnts > div[style^="margin:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2046e6a2755ada5aa9088c135d370e3b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2046e6a2755ada5aa9088c135d370e3b, function (items) {
  if (mudfish_adclean_g_conf_2046e6a2755ada5aa9088c135d370e3b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2046e6a2755ada5aa9088c135d370e3b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2046e6a2755ada5aa9088c135d370e3b();
    });
  }
});
