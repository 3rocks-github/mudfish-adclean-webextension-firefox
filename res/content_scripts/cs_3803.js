
function mudfish_adclean_d8551e55cecceb80c5f3bd78c64d9e88() {
  try {
    Sizzle(`a[href^="/go/"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d8551e55cecceb80c5f3bd78c64d9e88 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d8551e55cecceb80c5f3bd78c64d9e88, function (items) {
  if (mudfish_adclean_g_conf_d8551e55cecceb80c5f3bd78c64d9e88.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d8551e55cecceb80c5f3bd78c64d9e88();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d8551e55cecceb80c5f3bd78c64d9e88();
    });
  }
});
