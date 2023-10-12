
function mudfish_adclean_ab86486a37c620cb1bb8285ce7045b68() {
  try {
    Sizzle(`.news-cate + .news-box`).forEach(element => {
      element.style.paddingRight = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ab86486a37c620cb1bb8285ce7045b68 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ab86486a37c620cb1bb8285ce7045b68, function (items) {
  if (mudfish_adclean_g_conf_ab86486a37c620cb1bb8285ce7045b68.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ab86486a37c620cb1bb8285ce7045b68();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
