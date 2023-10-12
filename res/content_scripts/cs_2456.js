
function mudfish_adclean_9df62eda8397147004d3ac28234bc5e9() {
  try {
    Sizzle(`.section_cont div[disp-attr]:has(.adLinkColl)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9df62eda8397147004d3ac28234bc5e9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9df62eda8397147004d3ac28234bc5e9, function (items) {
  if (mudfish_adclean_g_conf_9df62eda8397147004d3ac28234bc5e9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9df62eda8397147004d3ac28234bc5e9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
