
function mudfish_adclean_8a2bbe5274d2bc9762ea4297f981c1ee() {
  try {
    Sizzle(`.board_recommended > a.list_item ~ div[class*=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8a2bbe5274d2bc9762ea4297f981c1ee = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8a2bbe5274d2bc9762ea4297f981c1ee, function (items) {
  if (mudfish_adclean_g_conf_8a2bbe5274d2bc9762ea4297f981c1ee.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8a2bbe5274d2bc9762ea4297f981c1ee();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8a2bbe5274d2bc9762ea4297f981c1ee();
    });
  }
});
