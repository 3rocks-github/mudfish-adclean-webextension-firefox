
function mudfish_adclean_3f9e5c10deae67456eaf9f5187d299ba() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.now_content_ads__wrapper`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3f9e5c10deae67456eaf9f5187d299ba();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3f9e5c10deae67456eaf9f5187d299ba();
  });
}
