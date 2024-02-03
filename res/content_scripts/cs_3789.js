
function mudfish_adclean_9e12562ad47d09d9437c38e92205e28f() {
  try {
    Sizzle(`div[class*="-banner"] div[class*=" "][style=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9e12562ad47d09d9437c38e92205e28f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9e12562ad47d09d9437c38e92205e28f, function (items) {
  if (mudfish_adclean_g_conf_9e12562ad47d09d9437c38e92205e28f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9e12562ad47d09d9437c38e92205e28f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9e12562ad47d09d9437c38e92205e28f();
    });
  }
});
