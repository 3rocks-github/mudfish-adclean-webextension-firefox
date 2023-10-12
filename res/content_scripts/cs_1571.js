
function mudfish_adclean_c03f88d697f6b52e8bda4a0f766d250f() {
  try {
    Sizzle(`#frameBox`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c03f88d697f6b52e8bda4a0f766d250f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c03f88d697f6b52e8bda4a0f766d250f, function (items) {
  if (mudfish_adclean_g_conf_c03f88d697f6b52e8bda4a0f766d250f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c03f88d697f6b52e8bda4a0f766d250f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
