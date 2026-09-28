// Mengubah background product card
function changeColor(warna, tombolId) {
  // ubah style background-nya
  var card = document.getElementById("productCard");
  card.style.backgroundColor = warna;

  // Hapus "active" dari semua tombol warna
  var semuaTombol = ["btnBlack", "btnBlue", "btnCream"];
  for (var i = 0; i < semuaTombol.length; i++) {
    document.getElementById(semuaTombol[i]).classList.remove("active");
  }

  // penanda "active" pada tombol yang diklik
  document.getElementById(tombolId).classList.add("active");
}

// Efek saat tombol diklik
function addToCart() {
  var tombol = document.getElementById("btnCart");
  tombol.innerText = "Added to Cart";

  // Kembalikan teks tombol setelah 1,5 detik
  setTimeout(function () {
    tombol.innerText = "Add to Cart";
  }, 1500);
}
