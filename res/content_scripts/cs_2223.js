
function mudfish_adclean_23035da74a886de3bf504d9a6f2d9506() {
  try {
    Sizzle(`.article_area .article_left`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_23035da74a886de3bf504d9a6f2d9506 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_23035da74a886de3bf504d9a6f2d9506, function (items) {
  if (mudfish_adclean_g_conf_23035da74a886de3bf504d9a6f2d9506.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_23035da74a886de3bf504d9a6f2d9506();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_23035da74a886de3bf504d9a6f2d9506();
    });
  }
});
