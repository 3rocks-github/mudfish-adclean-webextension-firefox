
function mudfish_adclean_a12e7266b434bcf0ea37b01653ca2931() {
  try {
    Sizzle(`article[class^="etoad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a12e7266b434bcf0ea37b01653ca2931 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a12e7266b434bcf0ea37b01653ca2931, function (items) {
  if (mudfish_adclean_g_conf_a12e7266b434bcf0ea37b01653ca2931.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a12e7266b434bcf0ea37b01653ca2931();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a12e7266b434bcf0ea37b01653ca2931();
    });
  }
});
