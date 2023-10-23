
function mudfish_adclean_b975cc1f8c1b279b2b3a945a830c25b8() {
  try {
    Sizzle(`.main-menu-group ~ .ct #board-cate ul[style] li[onclick*="/new/hotdeal"] ~ li[onclick^="location.href="][onclick*="market"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b975cc1f8c1b279b2b3a945a830c25b8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b975cc1f8c1b279b2b3a945a830c25b8, function (items) {
  if (mudfish_adclean_g_conf_b975cc1f8c1b279b2b3a945a830c25b8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b975cc1f8c1b279b2b3a945a830c25b8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b975cc1f8c1b279b2b3a945a830c25b8();
    });
  }
});
