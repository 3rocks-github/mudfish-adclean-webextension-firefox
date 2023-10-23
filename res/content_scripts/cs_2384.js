
function mudfish_adclean_f11012e773692555c41460ac49fc5630() {
  try {
    Sizzle(`.outer-container table[width="100%"] tr:has(td a[data-bd].banner)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f11012e773692555c41460ac49fc5630 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f11012e773692555c41460ac49fc5630, function (items) {
  if (mudfish_adclean_g_conf_f11012e773692555c41460ac49fc5630.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f11012e773692555c41460ac49fc5630();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f11012e773692555c41460ac49fc5630();
    });
  }
});
