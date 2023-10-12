
function mudfish_adclean_41fd2188dfe825edf4327556d41d37d9() {
  try {
    Sizzle(`.MapMain > #map`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_41fd2188dfe825edf4327556d41d37d9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_41fd2188dfe825edf4327556d41d37d9, function (items) {
  if (mudfish_adclean_g_conf_41fd2188dfe825edf4327556d41d37d9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_41fd2188dfe825edf4327556d41d37d9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
