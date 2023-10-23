
function mudfish_adclean_24cbc587e515c7334faff1047e7af6bc() {
  try {
    Sizzle(`div[class^="section-"][class$="-topad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_24cbc587e515c7334faff1047e7af6bc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_24cbc587e515c7334faff1047e7af6bc, function (items) {
  if (mudfish_adclean_g_conf_24cbc587e515c7334faff1047e7af6bc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_24cbc587e515c7334faff1047e7af6bc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_24cbc587e515c7334faff1047e7af6bc();
    });
  }
});
