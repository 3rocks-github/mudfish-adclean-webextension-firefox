
function mudfish_adclean_f4b04ca599677de0dd1aa92dbc5ef673() {
  try {
    Sizzle(`div[class*="inner"].column > div:has(a[href*="/banner_click.php"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f4b04ca599677de0dd1aa92dbc5ef673 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f4b04ca599677de0dd1aa92dbc5ef673, function (items) {
  if (mudfish_adclean_g_conf_f4b04ca599677de0dd1aa92dbc5ef673.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f4b04ca599677de0dd1aa92dbc5ef673();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f4b04ca599677de0dd1aa92dbc5ef673();
    });
  }
});
