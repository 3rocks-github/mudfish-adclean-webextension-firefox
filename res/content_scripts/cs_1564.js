
function mudfish_adclean_af06b5b4efa96b8bcaee267258e427da() {
  try {
    Sizzle(`.main-menu-group ~ .ct #board-cate ul[style] li[onclick^="location.href="][onclick*="/bbs_list.php?id=ppomppu2"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_af06b5b4efa96b8bcaee267258e427da = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_af06b5b4efa96b8bcaee267258e427da, function (items) {
  if (mudfish_adclean_g_conf_af06b5b4efa96b8bcaee267258e427da.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_af06b5b4efa96b8bcaee267258e427da();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_af06b5b4efa96b8bcaee267258e427da();
    });
  }
});
