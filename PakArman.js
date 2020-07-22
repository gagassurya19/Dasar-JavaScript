// Mendeklarasikan data dengan struktur object
const beli = {
    Pembeli: 'Pak Arman',
    HargaMeter: 1500000,
    PPN: 15/100,
    Panjang: 20.5,
    Lebar: 30
};

// Membuat Function hitung total
function Total() {
    const luas = beli.Panjang * beli.Lebar;
    const total = (luas * beli.HargaMeter) * beli.PPN;
    return (
        // Number formatting
        new Intl.NumberFormat('de-DE', { 
            style: 'currency', currency: 'IDR' 
        }).format(total)
    );
}

// PrintOut Total kalkulasi
const print = "1. Total harga " + Total();
console.log(print);
document.getElementById('totalPakArman').innerHTML = print;

