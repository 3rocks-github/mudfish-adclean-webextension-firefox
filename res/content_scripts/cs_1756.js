
function mudfish_adclean_ea40f9c4eb2b8375c988072a40bf92fc() {
  try {
    Sizzle(`img[src^="/data/__banner/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ea40f9c4eb2b8375c988072a40bf92fc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ea40f9c4eb2b8375c988072a40bf92fc, function (items) {
  if (mudfish_adclean_g_conf_ea40f9c4eb2b8375c988072a40bf92fc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ea40f9c4eb2b8375c988072a40bf92fc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ea40f9c4eb2b8375c988072a40bf92fc();
    });
  }
});
