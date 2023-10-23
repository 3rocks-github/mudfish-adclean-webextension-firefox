
function mudfish_adclean_5b277bdf5d35977bc50750149bdae1c5() {
  try {
    Sizzle(`.widget-side div[style*=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5b277bdf5d35977bc50750149bdae1c5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5b277bdf5d35977bc50750149bdae1c5, function (items) {
  if (mudfish_adclean_g_conf_5b277bdf5d35977bc50750149bdae1c5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5b277bdf5d35977bc50750149bdae1c5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5b277bdf5d35977bc50750149bdae1c5();
    });
  }
});
