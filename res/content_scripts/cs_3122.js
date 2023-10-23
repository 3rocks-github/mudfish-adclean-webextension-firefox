
function mudfish_adclean_31b07a34c337ace70dd3333b4e652fb6() {
  try {
    Sizzle(`.left_cont > div[style^="width:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_31b07a34c337ace70dd3333b4e652fb6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_31b07a34c337ace70dd3333b4e652fb6, function (items) {
  if (mudfish_adclean_g_conf_31b07a34c337ace70dd3333b4e652fb6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_31b07a34c337ace70dd3333b4e652fb6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_31b07a34c337ace70dd3333b4e652fb6();
    });
  }
});
