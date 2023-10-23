
function mudfish_adclean_a21c9cb215bed82cbf600ada33541f27() {
  try {
    Sizzle(`div[data-acidx][data-kind].sideBlock`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a21c9cb215bed82cbf600ada33541f27 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a21c9cb215bed82cbf600ada33541f27, function (items) {
  if (mudfish_adclean_g_conf_a21c9cb215bed82cbf600ada33541f27.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a21c9cb215bed82cbf600ada33541f27();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a21c9cb215bed82cbf600ada33541f27();
    });
  }
});
