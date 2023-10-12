
function mudfish_adclean_c9297b865cbb7abc0cd2a462ce89af77() {
  try {
    Sizzle(`body`).forEach(element => {
      element.style.overflowX = "auto !important";
element.style.overflowY = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c9297b865cbb7abc0cd2a462ce89af77 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c9297b865cbb7abc0cd2a462ce89af77, function (items) {
  if (mudfish_adclean_g_conf_c9297b865cbb7abc0cd2a462ce89af77.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c9297b865cbb7abc0cd2a462ce89af77();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
