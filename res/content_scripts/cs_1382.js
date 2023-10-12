
function mudfish_adclean_19a52c92e2dc46ee030372b6ba1b088c() {
  try {
    Sizzle(`#sub_content table[style$="%; "] td[valign]:not([style*=" "]) ~ td[style*=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_19a52c92e2dc46ee030372b6ba1b088c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_19a52c92e2dc46ee030372b6ba1b088c, function (items) {
  if (mudfish_adclean_g_conf_19a52c92e2dc46ee030372b6ba1b088c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_19a52c92e2dc46ee030372b6ba1b088c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
