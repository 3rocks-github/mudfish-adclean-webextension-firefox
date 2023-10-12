
function mudfish_adclean_121df0e2eddc24ebbcbf0b5f4c10cfaf() {
  try {
    Sizzle(`#header ~ div[class^="content_st_"]:has(iframe[src$="_big_banner.php"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_121df0e2eddc24ebbcbf0b5f4c10cfaf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_121df0e2eddc24ebbcbf0b5f4c10cfaf, function (items) {
  if (mudfish_adclean_g_conf_121df0e2eddc24ebbcbf0b5f4c10cfaf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_121df0e2eddc24ebbcbf0b5f4c10cfaf();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
