
function mudfish_adclean_34bf3fd9cd2692b819e294519270a718() {
  try {
    Sizzle(`input ~ .searchRolling`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_34bf3fd9cd2692b819e294519270a718 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_34bf3fd9cd2692b819e294519270a718, function (items) {
  if (mudfish_adclean_g_conf_34bf3fd9cd2692b819e294519270a718.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_34bf3fd9cd2692b819e294519270a718();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_34bf3fd9cd2692b819e294519270a718();
    });
  }
});
