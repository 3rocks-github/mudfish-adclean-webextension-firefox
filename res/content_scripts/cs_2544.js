
function mudfish_adclean_0ffbd54bead8e053475a5e005ed51dad() {
  try {
    Sizzle(`div[data-mesh-id][data-testid] > div[id^="comp-"]:has(form[id][class])`).forEach(element => {
      element.style.marginTop = "-600px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0ffbd54bead8e053475a5e005ed51dad = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0ffbd54bead8e053475a5e005ed51dad, function (items) {
  if (mudfish_adclean_g_conf_0ffbd54bead8e053475a5e005ed51dad.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0ffbd54bead8e053475a5e005ed51dad();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
