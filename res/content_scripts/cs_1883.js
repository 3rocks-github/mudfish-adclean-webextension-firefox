
function mudfish_adclean_15e7d7502906c3ba3d28eacdbed7c512() {
  try {
    Sizzle(`.ddnad-board`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_15e7d7502906c3ba3d28eacdbed7c512 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_15e7d7502906c3ba3d28eacdbed7c512, function (items) {
  if (mudfish_adclean_g_conf_15e7d7502906c3ba3d28eacdbed7c512.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_15e7d7502906c3ba3d28eacdbed7c512();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
