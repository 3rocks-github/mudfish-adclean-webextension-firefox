
function mudfish_adclean_19a52c92e2dc46ee030372b6ba1b088c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#sub_content table[style$="%; "] td[valign]:not([style*=" "]) ~ td[style*=" "]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_19a52c92e2dc46ee030372b6ba1b088c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_19a52c92e2dc46ee030372b6ba1b088c();
  });
}
