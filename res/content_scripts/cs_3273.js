
function mudfish_adclean_56413b89de13e3c0fd5ec35657293e38() {
  try {
    Sizzle(`iframe[src^="/ad/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_56413b89de13e3c0fd5ec35657293e38 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_56413b89de13e3c0fd5ec35657293e38, function (items) {
  if (mudfish_adclean_g_conf_56413b89de13e3c0fd5ec35657293e38.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_56413b89de13e3c0fd5ec35657293e38();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_56413b89de13e3c0fd5ec35657293e38();
    });
  }
});
