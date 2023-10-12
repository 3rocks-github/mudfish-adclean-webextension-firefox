
function mudfish_adclean_849dc94fe979c24fc15fe8262a161c33() {
  try {
    Sizzle(`table[valign="top"] div[id^="left_body"] > table td[align="center"] > div[style*=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_849dc94fe979c24fc15fe8262a161c33 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_849dc94fe979c24fc15fe8262a161c33, function (items) {
  if (mudfish_adclean_g_conf_849dc94fe979c24fc15fe8262a161c33.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_849dc94fe979c24fc15fe8262a161c33();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
