
function mudfish_adclean_417caa55d0776018014666ec46c3c8e6() {
  try {
    Sizzle(`div[class*="_fashion"].more_prod`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_417caa55d0776018014666ec46c3c8e6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_417caa55d0776018014666ec46c3c8e6, function (items) {
  if (mudfish_adclean_g_conf_417caa55d0776018014666ec46c3c8e6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_417caa55d0776018014666ec46c3c8e6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
