
function mudfish_adclean_c874decf96984958c2d32154294eb654() {
  try {
    Sizzle(`.content.partners-wrap`).forEach(element => {
      element.style.maxHeight = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c874decf96984958c2d32154294eb654 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c874decf96984958c2d32154294eb654, function (items) {
  if (mudfish_adclean_g_conf_c874decf96984958c2d32154294eb654.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c874decf96984958c2d32154294eb654();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
