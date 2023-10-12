
function mudfish_adclean_e459ed229eb245cdb59754c1a129af9c() {
  try {
    Sizzle(`p[class^="ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e459ed229eb245cdb59754c1a129af9c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e459ed229eb245cdb59754c1a129af9c, function (items) {
  if (mudfish_adclean_g_conf_e459ed229eb245cdb59754c1a129af9c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e459ed229eb245cdb59754c1a129af9c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
