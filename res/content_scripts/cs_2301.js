
function mudfish_adclean_01e101a087d10ecfd79a0a4053d1b191() {
  try {
    Sizzle(`#contentsBox #login_box`).forEach(element => {
      element.style.width = "350px !important";
element.style.float = "right !important";
element.style.borderBottom = "solid 2px #da3b40 !important";
element.style.borderLeft = "solid 2px #da3b40 !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_01e101a087d10ecfd79a0a4053d1b191 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_01e101a087d10ecfd79a0a4053d1b191, function (items) {
  if (mudfish_adclean_g_conf_01e101a087d10ecfd79a0a4053d1b191.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_01e101a087d10ecfd79a0a4053d1b191();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
