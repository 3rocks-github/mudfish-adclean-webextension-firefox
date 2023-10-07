
function mudfish_adclean_98a82d8cfdb01b139e2c1dba008cd617() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.ad_bottom`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_98a82d8cfdb01b139e2c1dba008cd617();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_98a82d8cfdb01b139e2c1dba008cd617();
  });
}
