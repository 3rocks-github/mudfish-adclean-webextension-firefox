
function mudfish_adclean_a03b6402ad693c1bc8a8d2213b9b8e76() {
  try {
    Sizzle(`div[class^="section-"][class$="-bigad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a03b6402ad693c1bc8a8d2213b9b8e76 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a03b6402ad693c1bc8a8d2213b9b8e76, function (items) {
  if (mudfish_adclean_g_conf_a03b6402ad693c1bc8a8d2213b9b8e76.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a03b6402ad693c1bc8a8d2213b9b8e76();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a03b6402ad693c1bc8a8d2213b9b8e76();
    });
  }
});
