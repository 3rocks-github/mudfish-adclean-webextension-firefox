
function mudfish_adclean_fe4ca64647a892ba785dff7203faeff4() {
  try {
    Sizzle(`iframe[src^="/da/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fe4ca64647a892ba785dff7203faeff4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fe4ca64647a892ba785dff7203faeff4, function (items) {
  if (mudfish_adclean_g_conf_fe4ca64647a892ba785dff7203faeff4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fe4ca64647a892ba785dff7203faeff4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
