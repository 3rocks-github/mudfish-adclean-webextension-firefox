
function mudfish_adclean_cf421790ded5f4489ca2cb5ee83bec8b() {
  try {
    Sizzle(`div[class^="lg:bg-darkpurple-800"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cf421790ded5f4489ca2cb5ee83bec8b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cf421790ded5f4489ca2cb5ee83bec8b, function (items) {
  if (mudfish_adclean_g_conf_cf421790ded5f4489ca2cb5ee83bec8b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cf421790ded5f4489ca2cb5ee83bec8b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cf421790ded5f4489ca2cb5ee83bec8b();
    });
  }
});
