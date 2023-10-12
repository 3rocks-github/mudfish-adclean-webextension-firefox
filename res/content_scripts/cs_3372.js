
function mudfish_adclean_d34521cac079c94af2dca7d462e91b8b() {
  try {
    Sizzle(`#srp-bottom-carousel-dco-contaner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d34521cac079c94af2dca7d462e91b8b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d34521cac079c94af2dca7d462e91b8b, function (items) {
  if (mudfish_adclean_g_conf_d34521cac079c94af2dca7d462e91b8b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d34521cac079c94af2dca7d462e91b8b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
