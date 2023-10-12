
function mudfish_adclean_055e668e163fc73cf55596ad29798484() {
  try {
    Sizzle(`.ct > .bbs > #bbs_inform li:has(span ~ a[onclick^="informAdClick"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_055e668e163fc73cf55596ad29798484 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_055e668e163fc73cf55596ad29798484, function (items) {
  if (mudfish_adclean_g_conf_055e668e163fc73cf55596ad29798484.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_055e668e163fc73cf55596ad29798484();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
