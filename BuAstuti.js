// Deklarasi data
const barang = [
    { nama: "Beras", harga: 10000, jumlah: 5 },
    { nama: "Gula", harga: 14000, jumlah: 5 },
    { nama: "Telur", harga: 20000, jumlah: 2 },
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10 }
]

// Function Total harga
total = () =>{
    var jumlah = barang.reduce(function(value, element){
        return value + element.harga * element.jumlah;
    },0);
    return ( 
        new Intl.NumberFormat('de-DE', { 
            style: 'currency', currency: 'IDR' 
        }).format(jumlah)
    );
}

// Function list harga barang
list = () =>{
    return(
    barang.map(
        (bar, index) => {
            console.log(bar.nama +"\t"+ bar.harga +"\t"+ bar.jumlah);
        }
    )
    );
}

console.log("2. Belanjaan Bu Susi : "+total());
// list(); //list harga barang
document.getElementById('totalBuSusi').innerHTML = "2. Total belanjaan " + total();
