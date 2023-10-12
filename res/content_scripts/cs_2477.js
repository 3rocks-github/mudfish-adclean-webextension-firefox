
function mudfish_adclean_45fb13712f4de5fb8be85eb0bc603798() {
  try {
    Sizzle(`div[style].xe-widget-wrapper:has(a[href^="/sisaing"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_45fb13712f4de5fb8be85eb0bc603798 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_45fb13712f4de5fb8be85eb0bc603798, function (items) {
  if (mudfish_adclean_g_conf_45fb13712f4de5fb8be85eb0bc603798.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_45fb13712f4de5fb8be85eb0bc603798();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
