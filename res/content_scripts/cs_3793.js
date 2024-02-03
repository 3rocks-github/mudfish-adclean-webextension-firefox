
function mudfish_adclean_3786b92468be95546e7c5d81d69d67d0() {
  try {
    Sizzle(`div[id$="-banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3786b92468be95546e7c5d81d69d67d0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3786b92468be95546e7c5d81d69d67d0, function (items) {
  if (mudfish_adclean_g_conf_3786b92468be95546e7c5d81d69d67d0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3786b92468be95546e7c5d81d69d67d0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3786b92468be95546e7c5d81d69d67d0();
    });
  }
});
