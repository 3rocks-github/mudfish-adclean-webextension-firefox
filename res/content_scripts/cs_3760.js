
function mudfish_adclean_4d2e6990918672776a18a9a274423853() {
  try {
    Sizzle(`#hd_pop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4d2e6990918672776a18a9a274423853 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4d2e6990918672776a18a9a274423853, function (items) {
  if (mudfish_adclean_g_conf_4d2e6990918672776a18a9a274423853.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4d2e6990918672776a18a9a274423853();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4d2e6990918672776a18a9a274423853();
    });
  }
});
