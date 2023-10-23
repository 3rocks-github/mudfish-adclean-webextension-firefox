
function mudfish_adclean_20b76b463a6ccc399b17aa9dbd23d7a6() {
  try {
    Sizzle(`.nplr div[class=""] li:has(li:contains(AD))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_20b76b463a6ccc399b17aa9dbd23d7a6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_20b76b463a6ccc399b17aa9dbd23d7a6, function (items) {
  if (mudfish_adclean_g_conf_20b76b463a6ccc399b17aa9dbd23d7a6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_20b76b463a6ccc399b17aa9dbd23d7a6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_20b76b463a6ccc399b17aa9dbd23d7a6();
    });
  }
});
