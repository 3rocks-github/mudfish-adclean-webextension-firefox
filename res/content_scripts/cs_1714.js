
function mudfish_adclean_6c5c3da32bc69d00c33013fb06a03d23() {
  try {
    Sizzle(`div[class^="flex"][class$="h-[250px]"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6c5c3da32bc69d00c33013fb06a03d23 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6c5c3da32bc69d00c33013fb06a03d23, function (items) {
  if (mudfish_adclean_g_conf_6c5c3da32bc69d00c33013fb06a03d23.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6c5c3da32bc69d00c33013fb06a03d23();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6c5c3da32bc69d00c33013fb06a03d23();
    });
  }
});
