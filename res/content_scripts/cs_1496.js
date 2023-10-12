
function mudfish_adclean_e20f225da530dd10be834b54a733c6f2() {
  try {
    Sizzle(`.M_contents > .thumb ~ div[style^="width:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e20f225da530dd10be834b54a733c6f2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e20f225da530dd10be834b54a733c6f2, function (items) {
  if (mudfish_adclean_g_conf_e20f225da530dd10be834b54a733c6f2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e20f225da530dd10be834b54a733c6f2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
