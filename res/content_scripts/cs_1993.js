
function mudfish_adclean_654d413300d6dc36bd3efba4e1c632ef() {
  try {
    Sizzle(`.sidearea.talktalk > .sideiframe`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_654d413300d6dc36bd3efba4e1c632ef = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_654d413300d6dc36bd3efba4e1c632ef, function (items) {
  if (mudfish_adclean_g_conf_654d413300d6dc36bd3efba4e1c632ef.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_654d413300d6dc36bd3efba4e1c632ef();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
