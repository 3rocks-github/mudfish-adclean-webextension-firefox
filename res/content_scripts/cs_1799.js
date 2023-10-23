
function mudfish_adclean_412b8e500e1cb85aa2e7ee73488f48b1() {
  try {
    Sizzle(`#gamezone .bnrList_area > ul.rollbnr_list`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_412b8e500e1cb85aa2e7ee73488f48b1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_412b8e500e1cb85aa2e7ee73488f48b1, function (items) {
  if (mudfish_adclean_g_conf_412b8e500e1cb85aa2e7ee73488f48b1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_412b8e500e1cb85aa2e7ee73488f48b1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_412b8e500e1cb85aa2e7ee73488f48b1();
    });
  }
});
