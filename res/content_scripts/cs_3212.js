
function mudfish_adclean_c091857b160d667a598eb75ebd56c9b1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.navbar-nav > li[class]:has(> a[href$="/토토보증업체"][alt="토토보증업체"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c091857b160d667a598eb75ebd56c9b1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c091857b160d667a598eb75ebd56c9b1();
  });
}
