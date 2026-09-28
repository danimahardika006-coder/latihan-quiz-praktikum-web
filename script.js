// Mengubah background product card sesuai warna yang dipilih
function changeColor(warna, tombolId) {
  // Ambil elemen card lalu ubah style background-nya
  var card = document.getElementById("productCard");
  card.style.backgroundColor = warna;

  // Hapus penanda "active" dari semua tombol warna
  var semuaTombol = ["btnBlack", "btnBlue", "btnCream"];
  for (var i = 0; i < semuaTombol.length; i++) {
    document.getElementById(semuaTombol[i]).classList.remove("active");
  }

  // Beri penanda "active" pada tombol yang diklik
  document.getElementById(tombolId).classList.add("active");
}

// Efek sederhana saat tombol Add to Cart diklik
function addToCart() {
  var tombol = document.getElementById("btnCart");
  tombol.innerText = "Added to Cart";

  // Kembalikan teks tombol setelah 1,5 detik
  setTimeout(function () {
    tombol.innerText = "Add to Cart";
  }, 1500);
}
