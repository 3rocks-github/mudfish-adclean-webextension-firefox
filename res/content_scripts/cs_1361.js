
function mudfish_adclean_6e46a37b17f8309af3c36b29513ed53a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style*=" "]#showtoday`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6e46a37b17f8309af3c36b29513ed53a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6e46a37b17f8309af3c36b29513ed53a();
  });
}
