
function mudfish_adclean_a64c04201e45262a02f978dc2dec09ab() {
  try {
    Sizzle(`div[class*="Ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a64c04201e45262a02f978dc2dec09ab = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a64c04201e45262a02f978dc2dec09ab, function (items) {
  if (mudfish_adclean_g_conf_a64c04201e45262a02f978dc2dec09ab.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a64c04201e45262a02f978dc2dec09ab();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a64c04201e45262a02f978dc2dec09ab();
    });
  }
});
