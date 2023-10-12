
function mudfish_adclean_71a42085700750a66fd75b713918ed3b() {
  try {
    Sizzle(`div[id^="mobonDivBanner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_71a42085700750a66fd75b713918ed3b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_71a42085700750a66fd75b713918ed3b, function (items) {
  if (mudfish_adclean_g_conf_71a42085700750a66fd75b713918ed3b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_71a42085700750a66fd75b713918ed3b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
