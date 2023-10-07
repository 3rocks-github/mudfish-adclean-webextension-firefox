
function mudfish_adclean_619d4dac3f7c96958282b711ddbd6564() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`tbody > tr[bgcolor] ~ tr:has(ins.adsbygoogle)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_619d4dac3f7c96958282b711ddbd6564();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_619d4dac3f7c96958282b711ddbd6564();
  });
}
