
function mudfish_adclean_05c90162512e195afe11dd0cc6255ad0() {
  try {
    Sizzle(`.wrap-login > .sect-login`).forEach(element => {
      element.style.marginLeft = "calc(50% - 270px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_05c90162512e195afe11dd0cc6255ad0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_05c90162512e195afe11dd0cc6255ad0, function (items) {
  if (mudfish_adclean_g_conf_05c90162512e195afe11dd0cc6255ad0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_05c90162512e195afe11dd0cc6255ad0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_05c90162512e195afe11dd0cc6255ad0();
    });
  }
});
