
function mudfish_adclean_b88608b5590049cf725c2e833488d570() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#commonpart_invenpc`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b88608b5590049cf725c2e833488d570();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b88608b5590049cf725c2e833488d570();
  });
}
