
function mudfish_adclean_fe244a29f8ab83fb28695d965cc302b0() {
  try {
    Sizzle(`nav ~ .at-title`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fe244a29f8ab83fb28695d965cc302b0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fe244a29f8ab83fb28695d965cc302b0, function (items) {
  if (mudfish_adclean_g_conf_fe244a29f8ab83fb28695d965cc302b0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fe244a29f8ab83fb28695d965cc302b0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
