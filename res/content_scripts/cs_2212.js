
function mudfish_adclean_2933d7ce10d1955eee3389d566563cf6() {
  try {
    Sizzle(`.quiz_list:not([style]) ~  .result_wrap .restart`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2933d7ce10d1955eee3389d566563cf6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2933d7ce10d1955eee3389d566563cf6, function (items) {
  if (mudfish_adclean_g_conf_2933d7ce10d1955eee3389d566563cf6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2933d7ce10d1955eee3389d566563cf6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
