
function mudfish_adclean_bf73f1047720fe1f65be6637b8d89a19() {
  try {
    Sizzle(`._shopAdRoot`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bf73f1047720fe1f65be6637b8d89a19 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bf73f1047720fe1f65be6637b8d89a19, function (items) {
  if (mudfish_adclean_g_conf_bf73f1047720fe1f65be6637b8d89a19.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bf73f1047720fe1f65be6637b8d89a19();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bf73f1047720fe1f65be6637b8d89a19();
    });
  }
});
