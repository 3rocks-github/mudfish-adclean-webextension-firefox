
function mudfish_adclean_f883b9e8b4fd85c68159ae42dee16504() {
  try {
    Sizzle(`div[class*="_banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f883b9e8b4fd85c68159ae42dee16504 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f883b9e8b4fd85c68159ae42dee16504, function (items) {
  if (mudfish_adclean_g_conf_f883b9e8b4fd85c68159ae42dee16504.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f883b9e8b4fd85c68159ae42dee16504();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f883b9e8b4fd85c68159ae42dee16504();
    });
  }
});
