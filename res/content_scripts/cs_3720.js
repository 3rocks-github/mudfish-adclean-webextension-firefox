
function mudfish_adclean_9aadfc580c4fae827847205b0f231344() {
  try {
    Sizzle(`.div_banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9aadfc580c4fae827847205b0f231344 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9aadfc580c4fae827847205b0f231344, function (items) {
  if (mudfish_adclean_g_conf_9aadfc580c4fae827847205b0f231344.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9aadfc580c4fae827847205b0f231344();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9aadfc580c4fae827847205b0f231344();
    });
  }
});
