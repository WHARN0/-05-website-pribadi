# Laporan Praktikum

|       | Pemrograman Berbasis Framework 2025 |
| ----- | ----------------------------------- |
| NIM   | 2241720225                          |
| Nama  | Bagus Arnovario Wibowo              |
| Kelas | TI - 3A                             |

## Langkah-langkah Praktikum

## Praktikum 1 : Persiapan Lingkungan

1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan 
menjalankan perintah berikut di terminal atau command prompt: 
node -v 
npm -v 
2. Buat direktori baru untuk proyek Next.js Anda: 
mkdir website-pribadi 
cd website-pribadi 
3. Inisialisasi proyek Next.js dengan TypeScript dan App Router: 
npx create-next-app@latest . --typescript –app 
![Screenshot](assets-report/Praktikum1(1-3).png)
4. Cek konfigurasi postcss.config.mjs:
![Screenshot](assets-report/Praktikum1(4).png)
5. Cek di app/globals.css, sudah ada import untuk tailwindcss:
![Screenshot](assets-report/Praktikum1(5).png)
6. Buka app/layout.tsx, tambahkan import './globals.css', dan modifikasi menjadi sebagai berikut:
![Screenshot](assets-report/Praktikum1(6).png)
7. Jalankan aplikasi Next.js: 
    npm run dev 
Aplikasi akan terbuka di browser pada alamat http://localhost:3000.
![Screenshot](assets-report/Praktikum1(7).png)

## Praktikum 2 : Membuat Halaman Website

Website pribadi akan memiliki tiga halaman:

• Tentang Saya: Halaman berisi profil singkat dan link ke media sosial. 
• Proyek: Halaman untuk menampilkan proyek-proyek yang telah diselesaikan. 
• Esai: Halaman untuk menampilkan daftar artikel yang telah ditulis.

Langkah-langkah:

1. Buat file app/page.tsx sebagai halaman "Tentang Saya":
![Screenshot](assets-report/Praktikum2(1).png)
2. Buat file app/projects/page.tsx sebagai halaman "Proyek": 
![Screenshot](assets-report/Praktikum2(2).png)
3. Buat file app/essays/page.tsx sebagai halaman "Esai": 
![Screenshot](assets-report/Praktikum2(3).png)
4. Buka browser dan akses: 
o http://localhost:3000/ untuk halaman "Tentang Saya". 
![Screenshot](assets-report/Praktikum2(4).png)
o http://localhost:3000/projects untuk halaman "Proyek". 
![Screenshot](assets-report/Praktikum2(5).png)
o http://localhost:3000/essays untuk halaman "Esai".
![Screenshot](assets-report/Praktikum2(6).png)

## Praktikum 3 : Membuat Layout dan Navigasi

Layout digunakan untuk menyediakan struktur yang konsisten di seluruh halaman, seperti navbar dan 
footer.

Langkah-langkah:

1. Buat direktori src/components jika belum ada.
2. Buat file src/components/Layout.tsx: 
![Screenshot](assets-report/Praktikum3(1-2).png)
3. Buat file src/components/Navbar.tsx 
![Screenshot](assets-report/Praktikum3(3).png)
4. Buat file src/components/Footer.tsx
![Screenshot](assets-report/Praktikum3(4).png)
5. Update file app/layout.tsx untuk menggunakan layout: 
![Screenshot](assets-report/Praktikum3(5).png)
6. Update setiap halaman menambahkan metadata dengan generateMetadata: 
![Screenshot](assets-report/Praktikum3(6).png)
Lakukan hal yang sama untuk halaman projects/page.tsx dan essays/page.tsx.
![Screenshot](assets-report/Praktikum3(7).png)
![Screenshot](assets-report/Praktikum3(8).png)