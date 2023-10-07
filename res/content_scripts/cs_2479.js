
function mudfish_adclean_ec4bf219f71b7ecb500eeca464a886ab() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style^="display:"]:has(div[style*="width:"] > div[id^="div-gpt-ad-"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ec4bf219f71b7ecb500eeca464a886ab();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ec4bf219f71b7ecb500eeca464a886ab();
  });
}
