// data mahasiswa
function hitungStatistikMahasiswa(mahasiswa) {
    let nilaiTertinggi = -Infinity; 
    let nilaiTerendah = Infinity; 
    let totalNilai = 0;

    let usiaTertua = -Infinity; 
    let usiaTermuda = Infinity; 
    let totalUsia = 0;

    for (let i = 0; i < mahasiswa.length; i++) {
        const mhs = mahasiswa[i];
        
        // nilai
        if (mhs.Nilai > nilaiTertinggi) {
            nilaiTertinggi = mhs.Nilai;
        }
        if (mhs.Nilai < nilaiTerendah) {
            nilaiTerendah = mhs.Nilai;
        }
        totalNilai += mhs.Nilai;

        // usia
        if (mhs.Usia > usiaTertua) {
            usiaTertua = mhs.Usia;
        }
        if (mhs.Usia < usiaTermuda) {
            usiaTermuda = mhs.Usia;
        }
        totalUsia += mhs.Usia; 
    }
    const jumlahMahasiswa = mahasiswa.length;
    const rataRataNilai = totalNilai / jumlahMahasiswa;
    const rataRataUsia = totalUsia / jumlahMahasiswa;

    return {
        Nilai: {
            Tertinggi: nilaiTertinggi,
            Tengah: rataRataNilai,
            Terendah: nilaiTerendah
        },
        Usia: {
            Tertua: usiaTertua,
            Tengah: rataRataUsia,
            Termuda: usiaTermuda
            
        }
    };
}
const dataMahasiswa = [
    { Nama: "John", Email: "john@example.com", Usia: 33, Nilai: 85 },
    { Nama: "Alice", Email: "alice@example.com", Usia: 25, Nilai: 92 },
    { Nama: "Bob", Email: "bob@example.com", Usia: 20, Nilai: 78 }
];
const hasilPerhitungan = hitungStatistikMahasiswa(dataMahasiswa);
console.log(hasilPerhitungan);

// transaksi
class Produk {
    constructor(nama, harga) {
      this.nama = nama;
      this.harga = harga;
    }
  }
  class Transaksi {
    constructor() {
      this.total = 0;
      this.produk = [];
      this.qty = [];
    }
    // menambahkan produk ke transaksi
    tambahKeKeranjang(produk, qty) {
      this.produk.push(produk);
      this.qty.push(qty);
      this.total += produk.harga * qty;
    }
    // transaksi saat proses
    tampilkanTotal() {
      console.log("Rincian Transaksi:");
      for (let i = 0; i < this.produk.length; i++) {
        console.log(`${this.qty[i]} ${this.produk[i].nama} - Rp${this.produk[i].harga * this.qty[i]}`);
      }
      console.log("Total Belanja: Rp" + this.total);
    }
    // transaksi selesai
    checkout() {
      console.log("Transaksi selesai:");
      this.tampilkanTotal();
      return {
        total: this.total,
        produk: this.produk,
        qty: this.qty
      };
    }
  }
  const produk1 = new Produk("Buku", 50000);
  const produk2 = new Produk("Pensil", 10000);
  
  const transaksi = new Transaksi();
  transaksi.tambahKeKeranjang(produk1, 2);
  transaksi.tambahKeKeranjang(produk2, 3);
  transaksi.checkout();

  