
function mudfish_adclean_da9c307a0cd729f45eea2cfb9f8210f7() {
  try {
    Sizzle(`div[class*=" "] > div[class*=" "][class*="_"] ~ div[class$="fright"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_da9c307a0cd729f45eea2cfb9f8210f7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_da9c307a0cd729f45eea2cfb9f8210f7, function (items) {
  if (mudfish_adclean_g_conf_da9c307a0cd729f45eea2cfb9f8210f7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_da9c307a0cd729f45eea2cfb9f8210f7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_da9c307a0cd729f45eea2cfb9f8210f7();
    });
  }
});
