
function mudfish_adclean_f00abdccad83053b830fdfe76aa9074d() {
  try {
    Sizzle(`#topBnrWrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f00abdccad83053b830fdfe76aa9074d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f00abdccad83053b830fdfe76aa9074d, function (items) {
  if (mudfish_adclean_g_conf_f00abdccad83053b830fdfe76aa9074d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f00abdccad83053b830fdfe76aa9074d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
