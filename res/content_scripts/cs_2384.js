
function mudfish_adclean_f11012e773692555c41460ac49fc5630() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.outer-container table[width="100%"] tr:has(td a[data-bd].banner)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f11012e773692555c41460ac49fc5630();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f11012e773692555c41460ac49fc5630();
  });
}
