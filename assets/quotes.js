// prettier-ignore
export default [
    arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    date = new Date();
    millisecond = date.getMilliseconds();
    detik = date.getSeconds();
    menit = date.getMinutes();
    jam = date.getHours();
    hari = date.getDay();
    tanggal = date.getDate();
    bulan = date.getMonth();
    tahun = date.getFullYear();
    document.write(tanggal+"-"+arrbulan[bulan]+"-"+tahun+"<br/>"+jam+" : "+menit+" : "+detik+"."+millisecond);
    { author: "Tandanghem", quotes: "Apapun yang terjadi, tetaplah bernafas" },
    { author: "Tandanghem", quotes: "Pam pam pararam ceklek jedar\nPararam ram parararam ram" },
    { author: "Tandanghem", quotes: "Hey! I wuv chuuuu! UwU" },
    { author: "Tandanghem", quotes: "I love you." },
    { author: "Tandanghem", quotes: "I may not with you everyday, but I love you everyday." },
    { author: "Tandanghem", quotes: "I love you." },
    { author: "Tandanghem", quotes: "I'm sorry for loving you." },
];
