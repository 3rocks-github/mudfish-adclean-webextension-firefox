
function mudfish_adclean_e6633c2586b25e0c590556e55b595195() {
  try {
    Sizzle(`div[class^="asd_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e6633c2586b25e0c590556e55b595195 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e6633c2586b25e0c590556e55b595195, function (items) {
  if (mudfish_adclean_g_conf_e6633c2586b25e0c590556e55b595195.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e6633c2586b25e0c590556e55b595195();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
