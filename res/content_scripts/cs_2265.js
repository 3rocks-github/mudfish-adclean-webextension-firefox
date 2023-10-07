
function mudfish_adclean_fafef1c3267eae850464900ec1a51a5e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#popupBody #nonmember_all .left1`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fafef1c3267eae850464900ec1a51a5e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fafef1c3267eae850464900ec1a51a5e();
  });
}
