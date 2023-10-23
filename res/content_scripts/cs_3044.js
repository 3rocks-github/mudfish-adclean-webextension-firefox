
function mudfish_adclean_2ef2d92fbb28fc4203e0b9bb9bbfa40e() {
  try {
    Sizzle(`.gb-container > .container-widget:has(ins.adsbygoogle)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2ef2d92fbb28fc4203e0b9bb9bbfa40e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2ef2d92fbb28fc4203e0b9bb9bbfa40e, function (items) {
  if (mudfish_adclean_g_conf_2ef2d92fbb28fc4203e0b9bb9bbfa40e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2ef2d92fbb28fc4203e0b9bb9bbfa40e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2ef2d92fbb28fc4203e0b9bb9bbfa40e();
    });
  }
});
