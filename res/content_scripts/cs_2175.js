
function mudfish_adclean_c290eab343ca114db8423e053cf367d6() {
  try {
    Sizzle(`.product-banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c290eab343ca114db8423e053cf367d6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c290eab343ca114db8423e053cf367d6, function (items) {
  if (mudfish_adclean_g_conf_c290eab343ca114db8423e053cf367d6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c290eab343ca114db8423e053cf367d6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c290eab343ca114db8423e053cf367d6();
    });
  }
});
