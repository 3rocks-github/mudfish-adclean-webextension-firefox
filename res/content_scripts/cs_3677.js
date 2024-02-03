
function mudfish_adclean_fee0ee8b709b772c2b50a3b5570600af() {
  try {
    Sizzle(`article div:not([class*=" "]) ~ div div + div[class*=" "]:has(iframe[src*="arca.live/external/callad"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fee0ee8b709b772c2b50a3b5570600af = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fee0ee8b709b772c2b50a3b5570600af, function (items) {
  if (mudfish_adclean_g_conf_fee0ee8b709b772c2b50a3b5570600af.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fee0ee8b709b772c2b50a3b5570600af();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fee0ee8b709b772c2b50a3b5570600af();
    });
  }
});
