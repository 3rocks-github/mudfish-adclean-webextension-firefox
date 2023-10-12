
function mudfish_adclean_324e55b1d2ada3607b776efa8eae9a72() {
  try {
    Sizzle(`.nplr div[class=""] li:has(li:contains(AD))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_324e55b1d2ada3607b776efa8eae9a72 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_324e55b1d2ada3607b776efa8eae9a72, function (items) {
  if (mudfish_adclean_g_conf_324e55b1d2ada3607b776efa8eae9a72.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_324e55b1d2ada3607b776efa8eae9a72();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
