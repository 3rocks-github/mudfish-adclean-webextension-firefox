
function mudfish_adclean_43d05d1ea905783f627a46fd0fdbb3ca() {
  try {
    Sizzle(`.bch-main-wrapper > .right-cont`).forEach(element => {
      element.style.marginRight = "calc(50% - 180px) !important";
element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_43d05d1ea905783f627a46fd0fdbb3ca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_43d05d1ea905783f627a46fd0fdbb3ca, function (items) {
  if (mudfish_adclean_g_conf_43d05d1ea905783f627a46fd0fdbb3ca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_43d05d1ea905783f627a46fd0fdbb3ca();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_43d05d1ea905783f627a46fd0fdbb3ca();
    });
  }
});
