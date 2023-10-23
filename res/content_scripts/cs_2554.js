
function mudfish_adclean_466291feb1fcd12a69ebbf62504ba94e() {
  try {
    Sizzle(`main#main .eq.section #bd table tr:has(.no ~ .title span:contains([AD]))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_466291feb1fcd12a69ebbf62504ba94e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_466291feb1fcd12a69ebbf62504ba94e, function (items) {
  if (mudfish_adclean_g_conf_466291feb1fcd12a69ebbf62504ba94e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_466291feb1fcd12a69ebbf62504ba94e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_466291feb1fcd12a69ebbf62504ba94e();
    });
  }
});
