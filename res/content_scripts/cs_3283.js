
function mudfish_adclean_65d9d0f8b22d175c13cb0299d4817ca7() {
  try {
    Sizzle(`.et_vars`).forEach(element => {
      element.style.height = "auto !important";
element.style.overflow = "visible !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_65d9d0f8b22d175c13cb0299d4817ca7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_65d9d0f8b22d175c13cb0299d4817ca7, function (items) {
  if (mudfish_adclean_g_conf_65d9d0f8b22d175c13cb0299d4817ca7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_65d9d0f8b22d175c13cb0299d4817ca7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
