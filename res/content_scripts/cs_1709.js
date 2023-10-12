
function mudfish_adclean_6374d59a8b4c2d6aec1f83c53d0646d6() {
  try {
    Sizzle(`div[id][style~="height:100px;"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6374d59a8b4c2d6aec1f83c53d0646d6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6374d59a8b4c2d6aec1f83c53d0646d6, function (items) {
  if (mudfish_adclean_g_conf_6374d59a8b4c2d6aec1f83c53d0646d6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6374d59a8b4c2d6aec1f83c53d0646d6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
