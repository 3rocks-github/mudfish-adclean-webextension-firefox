
function mudfish_adclean_4956bbced8d62f0ecfb235b21afff05b() {
  try {
    Sizzle(`#coupang-ad-wrapper`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4956bbced8d62f0ecfb235b21afff05b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4956bbced8d62f0ecfb235b21afff05b, function (items) {
  if (mudfish_adclean_g_conf_4956bbced8d62f0ecfb235b21afff05b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4956bbced8d62f0ecfb235b21afff05b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4956bbced8d62f0ecfb235b21afff05b();
    });
  }
});
