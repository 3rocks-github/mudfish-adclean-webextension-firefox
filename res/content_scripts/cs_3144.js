
function mudfish_adclean_21900f96f0419ecda565d8d043f89c75() {
  try {
    Sizzle(`#hd_pop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_21900f96f0419ecda565d8d043f89c75 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_21900f96f0419ecda565d8d043f89c75, function (items) {
  if (mudfish_adclean_g_conf_21900f96f0419ecda565d8d043f89c75.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_21900f96f0419ecda565d8d043f89c75();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_21900f96f0419ecda565d8d043f89c75();
    });
  }
});
