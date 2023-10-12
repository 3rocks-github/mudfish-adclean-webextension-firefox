
function mudfish_adclean_6a3cf8125acc67dd7a7481cdd9438a7e() {
  try {
    Sizzle(`.aside_item.banner:has(> h4[style~="font-size:13px;color:#999999;margin:0"]:contains(AD))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6a3cf8125acc67dd7a7481cdd9438a7e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6a3cf8125acc67dd7a7481cdd9438a7e, function (items) {
  if (mudfish_adclean_g_conf_6a3cf8125acc67dd7a7481cdd9438a7e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6a3cf8125acc67dd7a7481cdd9438a7e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
