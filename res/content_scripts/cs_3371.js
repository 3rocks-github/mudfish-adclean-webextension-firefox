
function mudfish_adclean_4e8898ff245b681b6e142c9ee616489b() {
  try {
    Sizzle(`section[class^="box-type"].bg11 ul[class^="list"] > li[class^="aside-box"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4e8898ff245b681b6e142c9ee616489b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4e8898ff245b681b6e142c9ee616489b, function (items) {
  if (mudfish_adclean_g_conf_4e8898ff245b681b6e142c9ee616489b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4e8898ff245b681b6e142c9ee616489b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4e8898ff245b681b6e142c9ee616489b();
    });
  }
});
