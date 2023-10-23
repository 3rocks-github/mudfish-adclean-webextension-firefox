
function mudfish_adclean_a21880eb5e39698b4e12567a174717e5() {
  try {
    Sizzle(`.article_area > .article_left`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a21880eb5e39698b4e12567a174717e5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a21880eb5e39698b4e12567a174717e5, function (items) {
  if (mudfish_adclean_g_conf_a21880eb5e39698b4e12567a174717e5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a21880eb5e39698b4e12567a174717e5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a21880eb5e39698b4e12567a174717e5();
    });
  }
});
