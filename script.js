document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a"); // Pilih semua link
    const body = document.querySelector("body");
  
    // Tambahkan efek fade-in saat halaman dimuat
    body.classList.add("fade-in");
  
    links.forEach(link => {
      link.addEventListener("click", event => {
        // Mencegah navigasi langsung agar efek fade-out bisa dijalankan
        event.preventDefault();
        const href = link.href; // Ambil tujuan tautan
  
        // Tambahkan efek fade-out
        body.classList.add("fade-out");
  
        // Pindah halaman setelah animasi selesai
        setTimeout(() => {
          window.location.href = href;
        }, 500); // Waktu sesuai durasi animasi fade-out
      });
    });
  });
  