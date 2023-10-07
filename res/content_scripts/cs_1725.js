
function mudfish_adclean_42eb8b60864fb603e8effa7130ee7678() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#inven_reservation_box`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_42eb8b60864fb603e8effa7130ee7678();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_42eb8b60864fb603e8effa7130ee7678();
  });
}
