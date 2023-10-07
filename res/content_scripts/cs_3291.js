(function () {
  function mudfish_adclean_clear_all_set_timeouts() {
    var id = window.setTimeout(function() {}, 0);

    while (id--) {
      window.clearTimeout(id);
    }
  }
  function mudfish_adclean_id_includes(str, needle) {
    if (typeof str != "string")
      return false;
    return str.indexOf(needle) !== -1
  }

  function mudfish_adclean_jjang0u_skip() {
    try {
      mudfish_adclean_clear_all_set_timeouts();
      var spans = document.querySelectorAll('span');
      for (var i = 0; i < spans.length; i++) {
	if (mudfish_adclean_id_includes(spans[i].id, "jizsl_")) {
          spans[i].style.display = "none";
	}
      }
    } catch (error) {
      console.log(error);
    }
  }

  const observer = new MutationObserver(() => {
    mudfish_adclean_jjang0u_skip();
  });
  observer.observe(document, { childList: true, subtree: true });
})();
