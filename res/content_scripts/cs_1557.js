
function mudfish_adclean_193d294c76aaf94ac1726de70a62fe51() {
  try {
    Sizzle(`li[data-cr-area][data-cr-gdid^="nad-"]._svp_item`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_193d294c76aaf94ac1726de70a62fe51 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_193d294c76aaf94ac1726de70a62fe51, function (items) {
  if (mudfish_adclean_g_conf_193d294c76aaf94ac1726de70a62fe51.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_193d294c76aaf94ac1726de70a62fe51();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
