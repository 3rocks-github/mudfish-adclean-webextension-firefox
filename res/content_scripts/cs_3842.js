
function mudfish_adclean_cca1508c1d3bfc7f2513edcf73560173() {
  try {
    Sizzle(`body`).forEach(element => {
      element.style.overflow = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cca1508c1d3bfc7f2513edcf73560173 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cca1508c1d3bfc7f2513edcf73560173, function (items) {
  if (mudfish_adclean_g_conf_cca1508c1d3bfc7f2513edcf73560173.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cca1508c1d3bfc7f2513edcf73560173();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cca1508c1d3bfc7f2513edcf73560173();
    });
  }
});
