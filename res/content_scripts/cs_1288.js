
function mudfish_adclean_48da2c3667c7cde0eb59feb37c6ede8b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#googleTop`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_48da2c3667c7cde0eb59feb37c6ede8b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_48da2c3667c7cde0eb59feb37c6ede8b();
  });
}
