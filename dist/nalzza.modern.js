var t=(new Date).getFullYear().toString().substring(2);function e(e){var r,a,n,d=/(\d{4}|\d{2}).*?(1[0-2]|[1-9]).*?(\d{1,2})/.exec(e),g=d[1],u=d[3];return 2==g.length&&(r=(g>t?"19":"20")+g),a=d[2].padStart(2,"0"),n=u.padStart(2,"0"),new Date(r+"-"+a+"-"+n)}export{e as nalzza};