
function mudfish_adclean_83982d68f7fe416c2a6da2bbde3ce093() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#searchArea .viewType_L .product_list li .prd_info`).forEach(element => {
        element.style.width = "700px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_83982d68f7fe416c2a6da2bbde3ce093();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_83982d68f7fe416c2a6da2bbde3ce093();
  });
}
