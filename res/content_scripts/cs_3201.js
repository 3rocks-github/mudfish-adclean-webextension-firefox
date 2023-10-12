
function mudfish_adclean_20a7c0d13aee3207d66c7e3a03594981() {
  try {
    Sizzle(`#top_aria`).forEach(element => {
      element.style.marginTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_20a7c0d13aee3207d66c7e3a03594981 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_20a7c0d13aee3207d66c7e3a03594981, function (items) {
  if (mudfish_adclean_g_conf_20a7c0d13aee3207d66c7e3a03594981.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_20a7c0d13aee3207d66c7e3a03594981();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
