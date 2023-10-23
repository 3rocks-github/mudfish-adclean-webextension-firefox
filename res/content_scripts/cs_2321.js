
function mudfish_adclean_09cfcd9925ca20f2783d963fe2e6f243() {
  try {
    Sizzle(`.articleView + .aside .smallbox + .smallbox`).forEach(element => {
      element.style.borderTop = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_09cfcd9925ca20f2783d963fe2e6f243 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_09cfcd9925ca20f2783d963fe2e6f243, function (items) {
  if (mudfish_adclean_g_conf_09cfcd9925ca20f2783d963fe2e6f243.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_09cfcd9925ca20f2783d963fe2e6f243();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_09cfcd9925ca20f2783d963fe2e6f243();
    });
  }
});
