
function mudfish_adclean_c9a7317eec1b69571c77baa7deb3d4b1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.Ui-Hotels-Results-List-Components-RheaLiteWrapper-container div:not([class]):has(div[class$="-sponsored"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c9a7317eec1b69571c77baa7deb3d4b1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c9a7317eec1b69571c77baa7deb3d4b1();
  });
}
