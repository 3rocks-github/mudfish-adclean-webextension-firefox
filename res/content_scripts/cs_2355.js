
function mudfish_adclean_e8840db3a2e3e358fd987a1b804f2315() {
  try {
    Sizzle(`#header`).forEach(element => {
      element.style.marginBottom = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e8840db3a2e3e358fd987a1b804f2315 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e8840db3a2e3e358fd987a1b804f2315, function (items) {
  if (mudfish_adclean_g_conf_e8840db3a2e3e358fd987a1b804f2315.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e8840db3a2e3e358fd987a1b804f2315();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
