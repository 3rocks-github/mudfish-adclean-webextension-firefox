
function mudfish_adclean_845882c81d666b379ad63c4378ce7766() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class] > div[class^="post-style"] ~ .rn_block + hr`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_845882c81d666b379ad63c4378ce7766();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_845882c81d666b379ad63c4378ce7766();
  });
}
