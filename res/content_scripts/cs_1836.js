
function mudfish_adclean_2eb657a1066d72e736798968f27155d2() {
  try {
    Sizzle(`.slider > div[id$="_popup"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2eb657a1066d72e736798968f27155d2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2eb657a1066d72e736798968f27155d2, function (items) {
  if (mudfish_adclean_g_conf_2eb657a1066d72e736798968f27155d2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2eb657a1066d72e736798968f27155d2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
