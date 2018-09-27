// NProgress.start();
// NProgress.done();
$(document).ajaxStart(function () {
    NProgress.start();
});
$(document).ajaxStop(function () {
    NProgress.done();
});