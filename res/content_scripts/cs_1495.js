
function mudfish_adclean_faa41102b8e587e81378252fd0f3b30c() {
  try {
    Sizzle(`#welcom_wrap .new_toprolling_bn`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_faa41102b8e587e81378252fd0f3b30c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_faa41102b8e587e81378252fd0f3b30c, function (items) {
  if (mudfish_adclean_g_conf_faa41102b8e587e81378252fd0f3b30c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_faa41102b8e587e81378252fd0f3b30c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
