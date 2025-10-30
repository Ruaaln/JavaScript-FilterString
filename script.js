var input = "";
var FilterStr = "";

while (true) {
    input = prompt("Mətni daxil edin:");
    FilterStr = prompt("Axtarılacaq mətni daxil edin:");

    if (!input || !FilterStr) {
        alert("Boş dəyər daxil etdiniz, proqram dayandırıldı.");
        break;
    }

    alert(`Mətndə "${FilterStr}" sözündən ${GetFilterCount(input, FilterStr)} ədəd var.`);
}

function GetFilterCount(msj, filterMsj) {
    var count = 0;

    // filterMsj boş ola bilməz, yoxlayırıq
    if (filterMsj.length === 0) return 0;

    // Bütün uyğunluqları tapmaq üçün dövr
    var position = msj.indexOf(filterMsj);
    while (position !== -1) {
        count++;
        position = msj.indexOf(filterMsj, position + filterMsj.length);
    }

    return count;
}
    