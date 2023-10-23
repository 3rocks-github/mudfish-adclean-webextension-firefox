
function mudfish_adclean_f32f2a4259fae0d6a2d58295543b0f11() {
  try {
    Sizzle(`.at_content > div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f32f2a4259fae0d6a2d58295543b0f11 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f32f2a4259fae0d6a2d58295543b0f11, function (items) {
  if (mudfish_adclean_g_conf_f32f2a4259fae0d6a2d58295543b0f11.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f32f2a4259fae0d6a2d58295543b0f11();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f32f2a4259fae0d6a2d58295543b0f11();
    });
  }
});
