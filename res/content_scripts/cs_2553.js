
function mudfish_adclean_0fab92bf0627d0ae254d94a4ff92342e() {
  try {
    Sizzle(`.search_box_listdeal > .list_conts_wrap:has(span:contains(AD).round_badge)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0fab92bf0627d0ae254d94a4ff92342e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0fab92bf0627d0ae254d94a4ff92342e, function (items) {
  if (mudfish_adclean_g_conf_0fab92bf0627d0ae254d94a4ff92342e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0fab92bf0627d0ae254d94a4ff92342e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0fab92bf0627d0ae254d94a4ff92342e();
    });
  }
});
