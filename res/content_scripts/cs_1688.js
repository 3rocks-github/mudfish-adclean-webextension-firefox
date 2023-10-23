
function mudfish_adclean_bafaa71326e2c9d91c9559a55ad5230d() {
  try {
    Sizzle(`div[class~="hospital-images-box"] ~ .row > .col-4`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bafaa71326e2c9d91c9559a55ad5230d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bafaa71326e2c9d91c9559a55ad5230d, function (items) {
  if (mudfish_adclean_g_conf_bafaa71326e2c9d91c9559a55ad5230d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bafaa71326e2c9d91c9559a55ad5230d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bafaa71326e2c9d91c9559a55ad5230d();
    });
  }
});
