
function mudfish_adclean_cbf65001507d71544eeca23aa39b00c2() {
  try {
    Sizzle(`div[id^="power_link_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cbf65001507d71544eeca23aa39b00c2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cbf65001507d71544eeca23aa39b00c2, function (items) {
  if (mudfish_adclean_g_conf_cbf65001507d71544eeca23aa39b00c2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cbf65001507d71544eeca23aa39b00c2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cbf65001507d71544eeca23aa39b00c2();
    });
  }
});
