
function mudfish_adclean_04d15fb5edc44c050051b3aa4717675a() {
  try {
    Sizzle(`div[data-slot-type="IMAGE_BIG_BANNER"].box_bnr`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_04d15fb5edc44c050051b3aa4717675a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_04d15fb5edc44c050051b3aa4717675a, function (items) {
  if (mudfish_adclean_g_conf_04d15fb5edc44c050051b3aa4717675a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_04d15fb5edc44c050051b3aa4717675a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
