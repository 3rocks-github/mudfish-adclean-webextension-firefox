
function mudfish_adclean_2385d5b447bb6a4ecaf67be842756195() {
  try {
    Sizzle(`div[style] table[width] td[width]:has(> ins.adsbygoogle)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2385d5b447bb6a4ecaf67be842756195 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2385d5b447bb6a4ecaf67be842756195, function (items) {
  if (mudfish_adclean_g_conf_2385d5b447bb6a4ecaf67be842756195.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2385d5b447bb6a4ecaf67be842756195();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2385d5b447bb6a4ecaf67be842756195();
    });
  }
});
