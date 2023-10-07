
function mudfish_adclean_6c68f4dc6fa622fb8e4a0daa1559b54a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#cards > div[class*="_"]:not([id]).card`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6c68f4dc6fa622fb8e4a0daa1559b54a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6c68f4dc6fa622fb8e4a0daa1559b54a();
  });
}
