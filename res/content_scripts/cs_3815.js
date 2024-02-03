
function mudfish_adclean_51ffe8688fe93b618f329bdca0d186a3() {
  try {
    Sizzle(`#hd_pop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_51ffe8688fe93b618f329bdca0d186a3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_51ffe8688fe93b618f329bdca0d186a3, function (items) {
  if (mudfish_adclean_g_conf_51ffe8688fe93b618f329bdca0d186a3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_51ffe8688fe93b618f329bdca0d186a3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_51ffe8688fe93b618f329bdca0d186a3();
    });
  }
});
