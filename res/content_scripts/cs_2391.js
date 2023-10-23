
function mudfish_adclean_a7c9bdb3ab466bb4d187a33590a8f4b5() {
  try {
    Sizzle(`#section_recommend div[class^="productList_list_area_"] li[class^="productList_item_"]:has(a[href*="//adcr.naver.com/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a7c9bdb3ab466bb4d187a33590a8f4b5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a7c9bdb3ab466bb4d187a33590a8f4b5, function (items) {
  if (mudfish_adclean_g_conf_a7c9bdb3ab466bb4d187a33590a8f4b5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a7c9bdb3ab466bb4d187a33590a8f4b5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a7c9bdb3ab466bb4d187a33590a8f4b5();
    });
  }
});
