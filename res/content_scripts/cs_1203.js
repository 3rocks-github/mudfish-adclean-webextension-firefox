
function mudfish_adclean_546790f07244ce17776ebc70f9eddee3() {
  try {
    Sizzle(`td > div[style*="width:"].responsive_main`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_546790f07244ce17776ebc70f9eddee3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_546790f07244ce17776ebc70f9eddee3, function (items) {
  if (mudfish_adclean_g_conf_546790f07244ce17776ebc70f9eddee3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_546790f07244ce17776ebc70f9eddee3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_546790f07244ce17776ebc70f9eddee3();
    });
  }
});
