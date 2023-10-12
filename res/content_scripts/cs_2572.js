
function mudfish_adclean_aa60d22ef4763a6fb236c5abc2eff4d8() {
  try {
    Sizzle(`tr:has(> td > a[href^="../ad_board/"]:contains(광고))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_aa60d22ef4763a6fb236c5abc2eff4d8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_aa60d22ef4763a6fb236c5abc2eff4d8, function (items) {
  if (mudfish_adclean_g_conf_aa60d22ef4763a6fb236c5abc2eff4d8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_aa60d22ef4763a6fb236c5abc2eff4d8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
