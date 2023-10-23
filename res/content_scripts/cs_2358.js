
function mudfish_adclean_83982d68f7fe416c2a6da2bbde3ce093() {
  try {
    Sizzle(`#searchArea .viewType_L .product_list li .prd_info`).forEach(element => {
      element.style.width = "700px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_83982d68f7fe416c2a6da2bbde3ce093 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_83982d68f7fe416c2a6da2bbde3ce093, function (items) {
  if (mudfish_adclean_g_conf_83982d68f7fe416c2a6da2bbde3ce093.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_83982d68f7fe416c2a6da2bbde3ce093();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_83982d68f7fe416c2a6da2bbde3ce093();
    });
  }
});
