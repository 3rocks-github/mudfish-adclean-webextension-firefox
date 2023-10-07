
function mudfish_adclean_9731cb916581ff2dc74e446c3bf91877() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.col-md-3.at-col.at-side > .row.fix-gutters-5`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9731cb916581ff2dc74e446c3bf91877();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9731cb916581ff2dc74e446c3bf91877();
  });
}
