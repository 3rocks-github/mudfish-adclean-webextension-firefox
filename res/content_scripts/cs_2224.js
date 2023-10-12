
function mudfish_adclean_a69e4286710f1755f4bd0efca6a64f33() {
  try {
    Sizzle(`.container .contents > .subcontents:nth-child(1)`).forEach(element => {
      element.style.marginTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a69e4286710f1755f4bd0efca6a64f33 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a69e4286710f1755f4bd0efca6a64f33, function (items) {
  if (mudfish_adclean_g_conf_a69e4286710f1755f4bd0efca6a64f33.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a69e4286710f1755f4bd0efca6a64f33();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
