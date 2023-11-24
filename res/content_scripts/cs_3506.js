
function mudfish_adclean_df1ae1f506893075aaceaa46e621502c() {
  try {
    Sizzle(`.doc03_wrap > .doc03`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_df1ae1f506893075aaceaa46e621502c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_df1ae1f506893075aaceaa46e621502c, function (items) {
  if (mudfish_adclean_g_conf_df1ae1f506893075aaceaa46e621502c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_df1ae1f506893075aaceaa46e621502c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_df1ae1f506893075aaceaa46e621502c();
    });
  }
});
