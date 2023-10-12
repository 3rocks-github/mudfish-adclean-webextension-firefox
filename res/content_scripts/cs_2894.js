
function mudfish_adclean_f7e6375357640054f4336e7195b274bd() {
  try {
    Sizzle(`div[id^="banner-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f7e6375357640054f4336e7195b274bd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f7e6375357640054f4336e7195b274bd, function (items) {
  if (mudfish_adclean_g_conf_f7e6375357640054f4336e7195b274bd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f7e6375357640054f4336e7195b274bd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
