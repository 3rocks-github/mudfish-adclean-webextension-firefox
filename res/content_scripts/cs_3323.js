
function mudfish_adclean_49f9a75aa2be6a0c0973686312360578() {
  try {
    Sizzle(`#slrcf > .cl_spc`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_49f9a75aa2be6a0c0973686312360578 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_49f9a75aa2be6a0c0973686312360578, function (items) {
  if (mudfish_adclean_g_conf_49f9a75aa2be6a0c0973686312360578.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_49f9a75aa2be6a0c0973686312360578();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_49f9a75aa2be6a0c0973686312360578();
    });
  }
});
