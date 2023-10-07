
function mudfish_adclean_654d413300d6dc36bd3efba4e1c632ef() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.sidearea.talktalk > .sideiframe`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_654d413300d6dc36bd3efba4e1c632ef();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_654d413300d6dc36bd3efba4e1c632ef();
  });
}
