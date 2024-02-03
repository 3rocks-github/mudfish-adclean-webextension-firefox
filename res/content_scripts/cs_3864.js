
function mudfish_adclean_73ce5dd42339af445862260ce122865c() {
  try {
    Sizzle(`#content > .recommend_section:has(> div[style^="padding:"] > #m_pay_deliverytracking):contains(/^[ \\n]+$/)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_73ce5dd42339af445862260ce122865c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_73ce5dd42339af445862260ce122865c, function (items) {
  if (mudfish_adclean_g_conf_73ce5dd42339af445862260ce122865c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_73ce5dd42339af445862260ce122865c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_73ce5dd42339af445862260ce122865c();
    });
  }
});
