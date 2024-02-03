
function mudfish_adclean_04d37b011912f4fe6206ff6bef24e534() {
  try {
    Sizzle(`.noti_div ~ div[style*=" "] > div[style*="overflow:"][class]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_04d37b011912f4fe6206ff6bef24e534 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_04d37b011912f4fe6206ff6bef24e534, function (items) {
  if (mudfish_adclean_g_conf_04d37b011912f4fe6206ff6bef24e534.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_04d37b011912f4fe6206ff6bef24e534();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_04d37b011912f4fe6206ff6bef24e534();
    });
  }
});
