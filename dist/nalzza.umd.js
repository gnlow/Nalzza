!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).nalzza={})}(this,function(e){var t=(new Date).getFullYear().toString().substring(2);e.nalzza=function(e){var n,a,o,d=/(\d{4}|\d{2}).*?(1[0-2]|[1-9]).*?(\d{1,2})/.exec(e),f=d[1],r=d[3];return 2==f.length&&(n=(f>t?"19":"20")+f),a=d[2].padStart(2,"0"),o=r.padStart(2,"0"),new Date(n+"-"+a+"-"+o)}});
