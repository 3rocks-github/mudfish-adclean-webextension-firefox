
function mudfish_adclean_ee7f14176b486d0590030f29c1427bdd() {
  try {
    Sizzle(`div[id^="ADOP_"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ee7f14176b486d0590030f29c1427bdd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ee7f14176b486d0590030f29c1427bdd, function (items) {
  if (mudfish_adclean_g_conf_ee7f14176b486d0590030f29c1427bdd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ee7f14176b486d0590030f29c1427bdd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ee7f14176b486d0590030f29c1427bdd();
    });
  }
});
