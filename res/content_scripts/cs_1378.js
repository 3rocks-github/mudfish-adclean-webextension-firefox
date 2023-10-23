
function mudfish_adclean_f9378b9f4cf2eec60a07df84061ec9da() {
  try {
    Sizzle(`div[class$="_adban"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f9378b9f4cf2eec60a07df84061ec9da = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f9378b9f4cf2eec60a07df84061ec9da, function (items) {
  if (mudfish_adclean_g_conf_f9378b9f4cf2eec60a07df84061ec9da.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f9378b9f4cf2eec60a07df84061ec9da();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f9378b9f4cf2eec60a07df84061ec9da();
    });
  }
});
