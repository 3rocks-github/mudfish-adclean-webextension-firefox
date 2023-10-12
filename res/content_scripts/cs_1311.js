
function mudfish_adclean_fe59eae2a1282c67d9d3fb579d7d1ba1() {
  try {
    Sizzle(`.MuiGrid-item button[style^="background-color:"].MuiButtonBase-root`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fe59eae2a1282c67d9d3fb579d7d1ba1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fe59eae2a1282c67d9d3fb579d7d1ba1, function (items) {
  if (mudfish_adclean_g_conf_fe59eae2a1282c67d9d3fb579d7d1ba1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fe59eae2a1282c67d9d3fb579d7d1ba1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
