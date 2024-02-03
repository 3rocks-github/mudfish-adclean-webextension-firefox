
function mudfish_adclean_cc272c99800c029a5f35cd53181a2784() {
  try {
    Sizzle(`iframe[src^="https://googleads.g.doubleclick.net/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cc272c99800c029a5f35cd53181a2784 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cc272c99800c029a5f35cd53181a2784, function (items) {
  if (mudfish_adclean_g_conf_cc272c99800c029a5f35cd53181a2784.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cc272c99800c029a5f35cd53181a2784();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cc272c99800c029a5f35cd53181a2784();
    });
  }
});
