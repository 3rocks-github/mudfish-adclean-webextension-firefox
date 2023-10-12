
function mudfish_adclean_863170e2fcf4abe9db9f4d7b9ca08498() {
  try {
    Sizzle(`#welcomeMainBanner_welcome_tab li[id]:has(img[src*="/img/banner/flash/welcome/nav/"]:not([src*="/nav/181010_"])) + li[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_863170e2fcf4abe9db9f4d7b9ca08498 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_863170e2fcf4abe9db9f4d7b9ca08498, function (items) {
  if (mudfish_adclean_g_conf_863170e2fcf4abe9db9f4d7b9ca08498.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_863170e2fcf4abe9db9f4d7b9ca08498();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
