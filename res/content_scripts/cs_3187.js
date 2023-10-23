
function mudfish_adclean_e38d61d384cd9af1f2b0654d746e4354() {
  try {
    Sizzle(`#hd_pop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e38d61d384cd9af1f2b0654d746e4354 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e38d61d384cd9af1f2b0654d746e4354, function (items) {
  if (mudfish_adclean_g_conf_e38d61d384cd9af1f2b0654d746e4354.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e38d61d384cd9af1f2b0654d746e4354();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e38d61d384cd9af1f2b0654d746e4354();
    });
  }
});
