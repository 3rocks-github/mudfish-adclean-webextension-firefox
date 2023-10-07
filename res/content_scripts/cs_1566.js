
function mudfish_adclean_b975cc1f8c1b279b2b3a945a830c25b8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.main-menu-group ~ .ct #board-cate ul[style] li[onclick*="/new/hotdeal"] ~ li[onclick^="location.href="][onclick*="market"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b975cc1f8c1b279b2b3a945a830c25b8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b975cc1f8c1b279b2b3a945a830c25b8();
  });
}
