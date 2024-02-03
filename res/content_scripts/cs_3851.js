
function mudfish_adclean_2b5db4c29d107427e51df3c06515cb53() {
  try {
    Sizzle(`#news_content:has(> #news_padding:is(:not(:has(> *)), *:has(> iframe:matches-css(display: none)), *:has(img:matches-css(display: none)), *:has(> script[src]), *:has(> #_popIn_recommend)))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2b5db4c29d107427e51df3c06515cb53 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2b5db4c29d107427e51df3c06515cb53, function (items) {
  if (mudfish_adclean_g_conf_2b5db4c29d107427e51df3c06515cb53.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2b5db4c29d107427e51df3c06515cb53();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2b5db4c29d107427e51df3c06515cb53();
    });
  }
});
