
function mudfish_adclean_ac80b5f45819517647a037790c4321c8() {
  try {
    Sizzle(`body`).forEach(element => {
      element.style.paddingTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ac80b5f45819517647a037790c4321c8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ac80b5f45819517647a037790c4321c8, function (items) {
  if (mudfish_adclean_g_conf_ac80b5f45819517647a037790c4321c8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ac80b5f45819517647a037790c4321c8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
