
function mudfish_adclean_f40a41f75a78cb9851e199a3a37c70e4() {
  try {
    Sizzle(`div.ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f40a41f75a78cb9851e199a3a37c70e4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f40a41f75a78cb9851e199a3a37c70e4, function (items) {
  if (mudfish_adclean_g_conf_f40a41f75a78cb9851e199a3a37c70e4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f40a41f75a78cb9851e199a3a37c70e4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f40a41f75a78cb9851e199a3a37c70e4();
    });
  }
});
