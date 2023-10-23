
function mudfish_adclean_690c80a3947b0c81b148d49df3bf97bc() {
  try {
    Sizzle(`div[id*="Ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_690c80a3947b0c81b148d49df3bf97bc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_690c80a3947b0c81b148d49df3bf97bc, function (items) {
  if (mudfish_adclean_g_conf_690c80a3947b0c81b148d49df3bf97bc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_690c80a3947b0c81b148d49df3bf97bc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_690c80a3947b0c81b148d49df3bf97bc();
    });
  }
});
