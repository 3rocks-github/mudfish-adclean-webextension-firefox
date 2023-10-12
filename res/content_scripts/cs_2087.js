
function mudfish_adclean_01a952f7806779c28c610f362720a541() {
  try {
    Sizzle(`ul.cmt_list > li[id^="comment_li_"].ub-content.dory`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_01a952f7806779c28c610f362720a541 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_01a952f7806779c28c610f362720a541, function (items) {
  if (mudfish_adclean_g_conf_01a952f7806779c28c610f362720a541.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_01a952f7806779c28c610f362720a541();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
