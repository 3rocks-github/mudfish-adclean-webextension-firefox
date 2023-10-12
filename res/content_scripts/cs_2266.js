
function mudfish_adclean_6c0ca6ed3dac1b33153facf3e56a5382() {
  try {
    Sizzle(`#welcomeMainBanner_welcome_tab`).forEach(element => {
      element.style.left = "calc(50% - 186px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6c0ca6ed3dac1b33153facf3e56a5382 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6c0ca6ed3dac1b33153facf3e56a5382, function (items) {
  if (mudfish_adclean_g_conf_6c0ca6ed3dac1b33153facf3e56a5382.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6c0ca6ed3dac1b33153facf3e56a5382();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
