
function mudfish_adclean_eeb8224d55bd0faf02ca9c127914cbff() {
  try {
    Sizzle(`.alert-danger.container:contains([AD])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_eeb8224d55bd0faf02ca9c127914cbff = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_eeb8224d55bd0faf02ca9c127914cbff, function (items) {
  if (mudfish_adclean_g_conf_eeb8224d55bd0faf02ca9c127914cbff.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_eeb8224d55bd0faf02ca9c127914cbff();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_eeb8224d55bd0faf02ca9c127914cbff();
    });
  }
});
