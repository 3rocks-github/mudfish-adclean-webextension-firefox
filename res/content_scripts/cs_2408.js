
function mudfish_adclean_771f7a1049d6b9309ace791b07d26566() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#user_data_lyr .bg_grey:has(a[href*="//addc.dcinside.com/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_771f7a1049d6b9309ace791b07d26566();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_771f7a1049d6b9309ace791b07d26566();
  });
}
