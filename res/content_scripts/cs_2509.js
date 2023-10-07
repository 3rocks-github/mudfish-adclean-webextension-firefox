
function mudfish_adclean_3a3e215433e8c67879b865c0c7749864() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`content li[role="presentation"]:has(a[href*="://trendpick.shopping.naver.com/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3a3e215433e8c67879b865c0c7749864();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3a3e215433e8c67879b865c0c7749864();
  });
}
