
function mudfish_adclean_36b7aad8423e482f02ef50960609cb37() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#navyismMainContainer > div[style] + div:not([style*=" "]):not([id])j`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_36b7aad8423e482f02ef50960609cb37();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_36b7aad8423e482f02ef50960609cb37();
  });
}
