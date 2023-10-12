
function mudfish_adclean_3ded741536d7a19039306cc095277200() {
  try {
    Sizzle(`div[data-page-type="brandSDP"][id$="carousel-products"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3ded741536d7a19039306cc095277200 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3ded741536d7a19039306cc095277200, function (items) {
  if (mudfish_adclean_g_conf_3ded741536d7a19039306cc095277200.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3ded741536d7a19039306cc095277200();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
