
function mudfish_adclean_b9c1d5a36ba677c716d2102f0ae18d67() {
  try {
    Sizzle(`#aside > div[style^="background-color:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b9c1d5a36ba677c716d2102f0ae18d67 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b9c1d5a36ba677c716d2102f0ae18d67, function (items) {
  if (mudfish_adclean_g_conf_b9c1d5a36ba677c716d2102f0ae18d67.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b9c1d5a36ba677c716d2102f0ae18d67();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b9c1d5a36ba677c716d2102f0ae18d67();
    });
  }
});
