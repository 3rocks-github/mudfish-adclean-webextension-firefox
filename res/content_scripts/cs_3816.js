
function mudfish_adclean_c46a79e528e48dae6d6429573df905de() {
  try {
    Sizzle(`div[id].col-15`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c46a79e528e48dae6d6429573df905de = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c46a79e528e48dae6d6429573df905de, function (items) {
  if (mudfish_adclean_g_conf_c46a79e528e48dae6d6429573df905de.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c46a79e528e48dae6d6429573df905de();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c46a79e528e48dae6d6429573df905de();
    });
  }
});
