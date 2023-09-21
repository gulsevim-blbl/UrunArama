let urun1= {

    isim: "Acer Swift",
    katagori: "Teknoloji",
    Fiyat: 6.219,
}

let urun2= {

    isim: "Acer Nitro 5" ,
    katagori: "Teknoloji" ,
    Fiyat: 16.219 ,
}

let urun3= {

    isim: "Lenovo V15",
    katagori: "Teknoloji",
    Fiyat: 10.999,
}

let urun4= {

    isim: "Lenovo Ideapad Gamin3",
    katagori: "Teknoloji",
    Fiyat: 30.000,
}

let urun5= {

    isim: "Lenovo V14",
    katagori: "Teknoloji",
    Fiyat: 4.399,
}

let urunler = [urun1,urun2,urun3,urun4,urun5];
let filitreliUrunler= [];
let kullanıcıUrunIsmi = prompt("Bir Urun İsmi Giriniz");

filitreliUrunlerDoldur(urunler);
filitreliUrunleriYazdir(filitreliUrunler);

function filitreliUrunlerDoldur(urunler){
    urunler.forEach(function(Urun) {
        if(Urun.isim.toUpperCase().includes(kullanıcıUrunIsmi.toUpperCase(),0)){
            filitreliUrunler.push(Urun);
        }
        
    });
}

function filitreliUrunleriYazdir(urunler){
    urunler.forEach(function(Urun){
            console.log("-----------------------------")
            console.log("|" + urun1.isim + "|" + Urun.Fiyat + "|" + urun1.katagori);
            console.log("-----------------------------")
        });

}