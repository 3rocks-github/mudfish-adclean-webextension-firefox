
function mudfish_adclean_e7230bd288f140b11dff3a6df84af9a3() {
  try {
    Sizzle(`.mobile-main div[style^="padding:"].border-shadow`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e7230bd288f140b11dff3a6df84af9a3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e7230bd288f140b11dff3a6df84af9a3, function (items) {
  if (mudfish_adclean_g_conf_e7230bd288f140b11dff3a6df84af9a3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e7230bd288f140b11dff3a6df84af9a3();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
