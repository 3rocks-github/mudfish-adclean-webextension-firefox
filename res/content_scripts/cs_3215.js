
function mudfish_adclean_ccc3904f7cbfbe03cb00ff8966304cd5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`form#fboardlist table tr:has(span.text-muted:contains(AD))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ccc3904f7cbfbe03cb00ff8966304cd5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ccc3904f7cbfbe03cb00ff8966304cd5();
  });
}
