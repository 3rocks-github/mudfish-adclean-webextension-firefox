
function mudfish_adclean_5de5433c78ca7913b7bd397afea3bf7e() {
  try {
    Sizzle(`#above_cmcl_box`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5de5433c78ca7913b7bd397afea3bf7e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5de5433c78ca7913b7bd397afea3bf7e, function (items) {
  if (mudfish_adclean_g_conf_5de5433c78ca7913b7bd397afea3bf7e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5de5433c78ca7913b7bd397afea3bf7e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5de5433c78ca7913b7bd397afea3bf7e();
    });
  }
});
