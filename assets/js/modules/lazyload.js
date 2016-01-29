/**
 * lazyload.js
 * https://github.com/tuupola/jquery_lazyload
 */
$(function() {
    $("img.js-lazy").lazyload({
        // threshold : 0,
        effect : "fadeIn",
        placeholder : "data:image/gif;base64,R0lGODlhGABaAKIHADMzZgDMzABmmQCZzDNmmTNmZgCZmf///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMjVBQzg2N0M2NzUxMUU1QTczQkVCNjZERkUzRjU3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjVBQzg2OEM2NzUxMUU1QTczQkVCNjZERkUzRjU3MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyNUFDODY1QzY3NTExRTVBNzNCRUI2NkRGRTNGNTczIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyNUFDODY2QzY3NTExRTVBNzNCRUI2NkRGRTNGNTczIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/O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"
    });
});