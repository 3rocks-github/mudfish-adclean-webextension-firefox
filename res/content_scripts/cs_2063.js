
function mudfish_adclean_7ff173575cc3b9dafdf03a0aec4e164b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src*="//arca.live/static/ad/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_7ff173575cc3b9dafdf03a0aec4e164b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_7ff173575cc3b9dafdf03a0aec4e164b();
  });
}
