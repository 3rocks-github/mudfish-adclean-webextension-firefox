
function mudfish_adclean_a8aa466fa62907a596d0dcf3208760be() {
  try {
    Sizzle(`div[data-nclicks-area-code] > div[class="place_section"]:not([data-nclicks-area-code]):has(div[id*="_ad_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a8aa466fa62907a596d0dcf3208760be = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a8aa466fa62907a596d0dcf3208760be, function (items) {
  if (mudfish_adclean_g_conf_a8aa466fa62907a596d0dcf3208760be.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a8aa466fa62907a596d0dcf3208760be();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a8aa466fa62907a596d0dcf3208760be();
    });
  }
});
