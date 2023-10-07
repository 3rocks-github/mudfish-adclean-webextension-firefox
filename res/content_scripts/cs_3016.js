
function mudfish_adclean_d3a00132ebaca3442155466d147b9492() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#contentsBodyDiv > table[width]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d3a00132ebaca3442155466d147b9492();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d3a00132ebaca3442155466d147b9492();
  });
}
