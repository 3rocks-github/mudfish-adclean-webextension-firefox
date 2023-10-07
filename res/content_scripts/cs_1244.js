
function mudfish_adclean_7384a5f2a5549784abdba58d51a97e88() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#honey > table[style*="border-left:"][width]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_7384a5f2a5549784abdba58d51a97e88();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_7384a5f2a5549784abdba58d51a97e88();
  });
}
