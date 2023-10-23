
function mudfish_adclean_e860d507c5dccd66707ae61b3d7a4243() {
  try {
    Sizzle(`.inner_contents`).forEach(element => {
      element.style.marginBottom = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e860d507c5dccd66707ae61b3d7a4243 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e860d507c5dccd66707ae61b3d7a4243, function (items) {
  if (mudfish_adclean_g_conf_e860d507c5dccd66707ae61b3d7a4243.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e860d507c5dccd66707ae61b3d7a4243();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e860d507c5dccd66707ae61b3d7a4243();
    });
  }
});
