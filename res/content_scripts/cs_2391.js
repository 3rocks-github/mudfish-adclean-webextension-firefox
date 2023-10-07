
function mudfish_adclean_a7c9bdb3ab466bb4d187a33590a8f4b5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#section_recommend div[class^="productList_list_area_"] li[class^="productList_item_"]:has(a[href*="//adcr.naver.com/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a7c9bdb3ab466bb4d187a33590a8f4b5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a7c9bdb3ab466bb4d187a33590a8f4b5();
  });
}
