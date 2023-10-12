
function mudfish_adclean_c76be9d725130671b0413c44636200cd() {
  try {
    Sizzle(`.sidebar_book`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c76be9d725130671b0413c44636200cd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c76be9d725130671b0413c44636200cd, function (items) {
  if (mudfish_adclean_g_conf_c76be9d725130671b0413c44636200cd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c76be9d725130671b0413c44636200cd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
