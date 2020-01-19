const currentYear = (new Date).getFullYear().toString().substring(2);

export function nalzza(dateString: string){
    var [undefined, y, m, d] = /(\d{4}|\d{2}).*?(1[0-2]|[1-9]).*?(\d{1,2})/.exec(dateString);
    var nY, nM, nD;
    if(y.length == 2){
        nY = (y > currentYear?"19":"20") + y;
    }
    nM = m.padStart(2, "0");
    nD = d.padStart(2, "0");
    return new Date(`${nY}-${nM}-${nD}`);
}