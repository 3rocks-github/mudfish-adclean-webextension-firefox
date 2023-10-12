
function mudfish_adclean_8de1f76bfc823e9ff5680f497daf466a() {
  try {
    Sizzle(`div[module-design-id] ~ div[module-design-id]:has(> .component--sponsor_link .link--ask_sponsor)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8de1f76bfc823e9ff5680f497daf466a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8de1f76bfc823e9ff5680f497daf466a, function (items) {
  if (mudfish_adclean_g_conf_8de1f76bfc823e9ff5680f497daf466a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8de1f76bfc823e9ff5680f497daf466a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
