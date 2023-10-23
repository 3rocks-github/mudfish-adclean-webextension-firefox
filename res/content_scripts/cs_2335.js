
function mudfish_adclean_7422ae31177719728ace6694b1510f25() {
  try {
    Sizzle(`div[class~="hospital-images-box"] ~ .row > .col-8`).forEach(element => {
      element.style.maxWidth = "100% !important";
element.style.flex = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7422ae31177719728ace6694b1510f25 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7422ae31177719728ace6694b1510f25, function (items) {
  if (mudfish_adclean_g_conf_7422ae31177719728ace6694b1510f25.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7422ae31177719728ace6694b1510f25();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7422ae31177719728ace6694b1510f25();
    });
  }
});
