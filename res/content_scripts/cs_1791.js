
function mudfish_adclean_8546529a52f21f723be3f1e3665b2248() {
  try {
    Sizzle(`#sn_banner_side_top`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8546529a52f21f723be3f1e3665b2248 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8546529a52f21f723be3f1e3665b2248, function (items) {
  if (mudfish_adclean_g_conf_8546529a52f21f723be3f1e3665b2248.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8546529a52f21f723be3f1e3665b2248();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
