
function mudfish_adclean_27f8376db76ae83dd1b7d75431758568() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class] > div[class^="post-style"] ~ .rn_block`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_27f8376db76ae83dd1b7d75431758568();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_27f8376db76ae83dd1b7d75431758568();
  });
}
