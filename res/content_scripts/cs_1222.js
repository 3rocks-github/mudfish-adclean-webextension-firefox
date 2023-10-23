
function mudfish_adclean_96286ba7d219c6a5848d26f823b1b4d8() {
  try {
    Sizzle(`#mw_mobile > div[style^="margin-bottom:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_96286ba7d219c6a5848d26f823b1b4d8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_96286ba7d219c6a5848d26f823b1b4d8, function (items) {
  if (mudfish_adclean_g_conf_96286ba7d219c6a5848d26f823b1b4d8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_96286ba7d219c6a5848d26f823b1b4d8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_96286ba7d219c6a5848d26f823b1b4d8();
    });
  }
});
