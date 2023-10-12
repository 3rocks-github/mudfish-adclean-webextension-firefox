
function mudfish_adclean_8084c884e2357c2edc373d462d814b2d() {
  try {
    Sizzle(`ul[class$="_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8084c884e2357c2edc373d462d814b2d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8084c884e2357c2edc373d462d814b2d, function (items) {
  if (mudfish_adclean_g_conf_8084c884e2357c2edc373d462d814b2d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8084c884e2357c2edc373d462d814b2d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
