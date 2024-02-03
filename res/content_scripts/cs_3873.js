
function mudfish_adclean_24606aa0b7774b441ed456beb387a023() {
  try {
    Sizzle(`ins.adsbygoogle *`).forEach(element => {
      element.style.height = "1px !important";
element.style.visibility = "hidden !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_24606aa0b7774b441ed456beb387a023 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_24606aa0b7774b441ed456beb387a023, function (items) {
  if (mudfish_adclean_g_conf_24606aa0b7774b441ed456beb387a023.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_24606aa0b7774b441ed456beb387a023();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_24606aa0b7774b441ed456beb387a023();
    });
  }
});
