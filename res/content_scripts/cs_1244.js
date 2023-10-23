
function mudfish_adclean_7384a5f2a5549784abdba58d51a97e88() {
  try {
    Sizzle(`#honey > table[style*="border-left:"][width]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7384a5f2a5549784abdba58d51a97e88 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7384a5f2a5549784abdba58d51a97e88, function (items) {
  if (mudfish_adclean_g_conf_7384a5f2a5549784abdba58d51a97e88.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7384a5f2a5549784abdba58d51a97e88();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7384a5f2a5549784abdba58d51a97e88();
    });
  }
});
