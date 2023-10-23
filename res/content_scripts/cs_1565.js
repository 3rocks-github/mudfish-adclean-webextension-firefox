
function mudfish_adclean_f431f8b02a318184c6f611a8c54cf65c() {
  try {
    Sizzle(`.main-menu-group ~ .ct #board-cate ul[style] li[onclick^="location.href="][onclick*="/bbs_list.php?id=ppomppu7"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f431f8b02a318184c6f611a8c54cf65c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f431f8b02a318184c6f611a8c54cf65c, function (items) {
  if (mudfish_adclean_g_conf_f431f8b02a318184c6f611a8c54cf65c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f431f8b02a318184c6f611a8c54cf65c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f431f8b02a318184c6f611a8c54cf65c();
    });
  }
});
