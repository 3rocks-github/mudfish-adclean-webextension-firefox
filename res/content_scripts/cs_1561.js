
function mudfish_adclean_d32ca87ec2b3fb9b0daab621e4760cb2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.space_layout ~ div[class^="section_"] > div:not([style*="solid"]) + div[style]:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d32ca87ec2b3fb9b0daab621e4760cb2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d32ca87ec2b3fb9b0daab621e4760cb2();
  });
}
