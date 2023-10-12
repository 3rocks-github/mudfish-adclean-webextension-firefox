
function mudfish_adclean_3867e3b00ab969127d1913d5018612dd() {
  try {
    Sizzle(`section[id^="custom_"]:has(> div.widget_text > h3:contains(SPONSORED).widgettitle)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3867e3b00ab969127d1913d5018612dd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3867e3b00ab969127d1913d5018612dd, function (items) {
  if (mudfish_adclean_g_conf_3867e3b00ab969127d1913d5018612dd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3867e3b00ab969127d1913d5018612dd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
