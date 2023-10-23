
function mudfish_adclean_23ccb5d0623fbcc88a03400b863f41c8() {
  try {
    Sizzle(`div[class^="panel_img_bottom_"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_23ccb5d0623fbcc88a03400b863f41c8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_23ccb5d0623fbcc88a03400b863f41c8, function (items) {
  if (mudfish_adclean_g_conf_23ccb5d0623fbcc88a03400b863f41c8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_23ccb5d0623fbcc88a03400b863f41c8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_23ccb5d0623fbcc88a03400b863f41c8();
    });
  }
});
