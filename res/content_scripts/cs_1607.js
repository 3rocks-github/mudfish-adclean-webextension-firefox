
function mudfish_adclean_73fdbb2be115707eb017e41ab0f37125() {
  try {
    Sizzle(`a[href][target="_blank"][referrerpolicy="unsafe-url"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_73fdbb2be115707eb017e41ab0f37125 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_73fdbb2be115707eb017e41ab0f37125, function (items) {
  if (mudfish_adclean_g_conf_73fdbb2be115707eb017e41ab0f37125.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_73fdbb2be115707eb017e41ab0f37125();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_73fdbb2be115707eb017e41ab0f37125();
    });
  }
});
