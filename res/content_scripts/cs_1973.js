
function mudfish_adclean_d576b12c3edd68c3f389fe4fe6713420() {
  try {
    Sizzle(`.promotion`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d576b12c3edd68c3f389fe4fe6713420 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d576b12c3edd68c3f389fe4fe6713420, function (items) {
  if (mudfish_adclean_g_conf_d576b12c3edd68c3f389fe4fe6713420.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d576b12c3edd68c3f389fe4fe6713420();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d576b12c3edd68c3f389fe4fe6713420();
    });
  }
});
