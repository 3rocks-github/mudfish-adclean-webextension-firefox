
function mudfish_adclean_77b902d02b6df815195d510a89ed1bb8() {
  try {
    Sizzle(`div[id^="A1_"][style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_77b902d02b6df815195d510a89ed1bb8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_77b902d02b6df815195d510a89ed1bb8, function (items) {
  if (mudfish_adclean_g_conf_77b902d02b6df815195d510a89ed1bb8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_77b902d02b6df815195d510a89ed1bb8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_77b902d02b6df815195d510a89ed1bb8();
    });
  }
});
