
function mudfish_adclean_f9b7ce877aa045b9de4121f48d61422c() {
  try {
    Sizzle(`.modal-login-wrapper .right-box`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f9b7ce877aa045b9de4121f48d61422c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f9b7ce877aa045b9de4121f48d61422c, function (items) {
  if (mudfish_adclean_g_conf_f9b7ce877aa045b9de4121f48d61422c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f9b7ce877aa045b9de4121f48d61422c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
