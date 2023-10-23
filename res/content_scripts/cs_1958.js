
function mudfish_adclean_64df2eb06cb638b78ba82c62e60984a0() {
  try {
    Sizzle(`.cont-row > div[class^="cont-item"] > .detail-rel`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_64df2eb06cb638b78ba82c62e60984a0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_64df2eb06cb638b78ba82c62e60984a0, function (items) {
  if (mudfish_adclean_g_conf_64df2eb06cb638b78ba82c62e60984a0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_64df2eb06cb638b78ba82c62e60984a0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_64df2eb06cb638b78ba82c62e60984a0();
    });
  }
});
