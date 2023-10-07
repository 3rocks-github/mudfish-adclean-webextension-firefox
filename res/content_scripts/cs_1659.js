
function mudfish_adclean_755d8dc0d9e3d77ad26f3be70d4c026e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.shopping_wrap div[class$="_ad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_755d8dc0d9e3d77ad26f3be70d4c026e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_755d8dc0d9e3d77ad26f3be70d4c026e();
  });
}
