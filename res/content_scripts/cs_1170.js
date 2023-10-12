
function mudfish_adclean_513f8c1d4665657951ebeebfe3509f06() {
  try {
    Sizzle(`div[class$="banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_513f8c1d4665657951ebeebfe3509f06 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_513f8c1d4665657951ebeebfe3509f06, function (items) {
  if (mudfish_adclean_g_conf_513f8c1d4665657951ebeebfe3509f06.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_513f8c1d4665657951ebeebfe3509f06();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
