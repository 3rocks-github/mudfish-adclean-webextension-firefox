
function mudfish_adclean_4501c986d9d8cd7c72e03e43b18abc08() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#popupBody #nonmember_all .button_login2`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4501c986d9d8cd7c72e03e43b18abc08();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4501c986d9d8cd7c72e03e43b18abc08();
  });
}
