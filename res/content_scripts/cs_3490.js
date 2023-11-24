
function mudfish_adclean_d6da4a7c3706f74db6b5094a84df5dc2() {
  try {
    Sizzle(`.main_wrap > center > div[style*=" height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d6da4a7c3706f74db6b5094a84df5dc2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d6da4a7c3706f74db6b5094a84df5dc2, function (items) {
  if (mudfish_adclean_g_conf_d6da4a7c3706f74db6b5094a84df5dc2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d6da4a7c3706f74db6b5094a84df5dc2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d6da4a7c3706f74db6b5094a84df5dc2();
    });
  }
});
