
function mudfish_adclean_75067b82129d2de89b396d4a07243ec4() {
  try {
    Sizzle(`#rightwing_section .rightwing_boxNew > .rightwing_bnr`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_75067b82129d2de89b396d4a07243ec4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_75067b82129d2de89b396d4a07243ec4, function (items) {
  if (mudfish_adclean_g_conf_75067b82129d2de89b396d4a07243ec4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_75067b82129d2de89b396d4a07243ec4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_75067b82129d2de89b396d4a07243ec4();
    });
  }
});
