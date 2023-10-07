
function mudfish_adclean_a0ffce6cacb949f3cf22bc5b3de37b48() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[itemprop="articleBody"] ~ div[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a0ffce6cacb949f3cf22bc5b3de37b48();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a0ffce6cacb949f3cf22bc5b3de37b48();
  });
}
