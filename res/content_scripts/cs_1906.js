
function mudfish_adclean_3b5e9d1559a485fee50fc1df2a2de424() {
  try {
    Sizzle(`#powerClickListArea`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3b5e9d1559a485fee50fc1df2a2de424 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3b5e9d1559a485fee50fc1df2a2de424, function (items) {
  if (mudfish_adclean_g_conf_3b5e9d1559a485fee50fc1df2a2de424.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3b5e9d1559a485fee50fc1df2a2de424();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
