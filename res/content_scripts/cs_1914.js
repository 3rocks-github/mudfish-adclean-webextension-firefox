
function mudfish_adclean_f7ac297fdbac719bf8bd018331d5270a() {
  try {
    Sizzle(`#pnlContainer > div[class^="ct"] > .section > .ct_box > div[style~="text-align:"][style~="center;"][style~="padding:"][style~="10px"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f7ac297fdbac719bf8bd018331d5270a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f7ac297fdbac719bf8bd018331d5270a, function (items) {
  if (mudfish_adclean_g_conf_f7ac297fdbac719bf8bd018331d5270a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f7ac297fdbac719bf8bd018331d5270a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f7ac297fdbac719bf8bd018331d5270a();
    });
  }
});
