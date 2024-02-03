
function mudfish_adclean_7bdd01c2f338294aad53f150ae4f7125() {
  try {
    Sizzle(`iframe[src^="https://adv.zdnet.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7bdd01c2f338294aad53f150ae4f7125 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7bdd01c2f338294aad53f150ae4f7125, function (items) {
  if (mudfish_adclean_g_conf_7bdd01c2f338294aad53f150ae4f7125.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7bdd01c2f338294aad53f150ae4f7125();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7bdd01c2f338294aad53f150ae4f7125();
    });
  }
});
