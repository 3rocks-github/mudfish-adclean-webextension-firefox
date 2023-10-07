
function mudfish_adclean_055e668e163fc73cf55596ad29798484() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.ct > .bbs > #bbs_inform li:has(span ~ a[onclick^="informAdClick"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_055e668e163fc73cf55596ad29798484();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_055e668e163fc73cf55596ad29798484();
  });
}
