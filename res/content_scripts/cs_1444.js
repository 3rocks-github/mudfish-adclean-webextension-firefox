
function mudfish_adclean_88506b73772172b35b16604fee19436f() {
  try {
    Sizzle(`div[class$="-togetheritems"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_88506b73772172b35b16604fee19436f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_88506b73772172b35b16604fee19436f, function (items) {
  if (mudfish_adclean_g_conf_88506b73772172b35b16604fee19436f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_88506b73772172b35b16604fee19436f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_88506b73772172b35b16604fee19436f();
    });
  }
});
