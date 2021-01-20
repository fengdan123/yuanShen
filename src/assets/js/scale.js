(function(designHeight, maxHeight) {
    var doc = document,
        win = window;
    var docEl = doc.documentElement;

    function refreshRem() {
        var Height = docEl.getBoundingClientRect().height;
        if (Height > maxHeight) {
            Height = maxHeight;
        }
        var rem = Height * (Height * 70 / designHeight) / designHeight;
        console.log(docEl.style)
        docEl.style.fontSize = rem + "px";
        console.log(docEl.style.fontSize)
    };
    refreshRem();

    win.addEventListener("resize", function() {
        // clearTimeout(tid); //防止执行两次
        refreshRem();
    }, false);

    win.addEventListener("pageshow", function(e) {
        if (e.persisted) { // 浏览器后退的时候重新计算
            // clearTimeout(tid);
            refreshRem();
        }
    }, false);
})($("html").height(), $("html").height());