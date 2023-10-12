
function mudfish_adclean_0be326281d56ff83ff0bfdd6c5c71398() {
  try {
    Sizzle(`form > div[id$="wing_section"][class*="wing_section"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0be326281d56ff83ff0bfdd6c5c71398 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0be326281d56ff83ff0bfdd6c5c71398, function (items) {
  if (mudfish_adclean_g_conf_0be326281d56ff83ff0bfdd6c5c71398.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0be326281d56ff83ff0bfdd6c5c71398();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
