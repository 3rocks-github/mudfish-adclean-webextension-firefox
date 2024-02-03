
function mudfish_adclean_9a4d9a7772d2e764799d3b1dfca36201() {
  try {
    Sizzle(`.cmsBanner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9a4d9a7772d2e764799d3b1dfca36201 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9a4d9a7772d2e764799d3b1dfca36201, function (items) {
  if (mudfish_adclean_g_conf_9a4d9a7772d2e764799d3b1dfca36201.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9a4d9a7772d2e764799d3b1dfca36201();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9a4d9a7772d2e764799d3b1dfca36201();
    });
  }
});
