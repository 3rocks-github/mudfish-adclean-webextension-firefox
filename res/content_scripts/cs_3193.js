
function mudfish_adclean_75bb79c608058ad5a0a69ed38e105fa1() {
  try {
    Sizzle(`[style="margin-bottom: 20px;"].row.row-15`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_75bb79c608058ad5a0a69ed38e105fa1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_75bb79c608058ad5a0a69ed38e105fa1, function (items) {
  if (mudfish_adclean_g_conf_75bb79c608058ad5a0a69ed38e105fa1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_75bb79c608058ad5a0a69ed38e105fa1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_75bb79c608058ad5a0a69ed38e105fa1();
    });
  }
});
