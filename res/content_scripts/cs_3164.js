
function mudfish_adclean_f42c65a03b6507849e63f661f2c7dee0() {
  try {
    Sizzle(`.board-tail-banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f42c65a03b6507849e63f661f2c7dee0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f42c65a03b6507849e63f661f2c7dee0, function (items) {
  if (mudfish_adclean_g_conf_f42c65a03b6507849e63f661f2c7dee0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f42c65a03b6507849e63f661f2c7dee0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f42c65a03b6507849e63f661f2c7dee0();
    });
  }
});
