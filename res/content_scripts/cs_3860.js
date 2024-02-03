
function mudfish_adclean_1f60bef51dce5d5fb3bfafb387861295() {
  try {
    Sizzle(`body[class*="mac_os"] div[class="hd"] ~ *[id][class*=" "]:matches-css(padding: /5px 10px 20px/):matches-css(height: /^[0-9]`).forEach(element => {
      element.style.2,3}/) { remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1f60bef51dce5d5fb3bfafb387861295 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1f60bef51dce5d5fb3bfafb387861295, function (items) {
  if (mudfish_adclean_g_conf_1f60bef51dce5d5fb3bfafb387861295.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1f60bef51dce5d5fb3bfafb387861295();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1f60bef51dce5d5fb3bfafb387861295();
    });
  }
});
