
function mudfish_adclean_5ae7abf6e9af898be4482fab839cc9f1() {
  try {
    Sizzle(`#yWelMid .yWelNowBook`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5ae7abf6e9af898be4482fab839cc9f1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5ae7abf6e9af898be4482fab839cc9f1, function (items) {
  if (mudfish_adclean_g_conf_5ae7abf6e9af898be4482fab839cc9f1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5ae7abf6e9af898be4482fab839cc9f1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5ae7abf6e9af898be4482fab839cc9f1();
    });
  }
});
