
function mudfish_adclean_74c49ca77cb1045f987964b04811f244() {
  try {
    Sizzle(`#genesis-sidebar-primary`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_74c49ca77cb1045f987964b04811f244 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_74c49ca77cb1045f987964b04811f244, function (items) {
  if (mudfish_adclean_g_conf_74c49ca77cb1045f987964b04811f244.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_74c49ca77cb1045f987964b04811f244();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
