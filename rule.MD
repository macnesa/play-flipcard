```
NAMA TIM :  GG.JS

TASK :

FITUR:
1. ADA TIGA JENIS KESULITAN 6X6  LV1 = 10 MENIT, LV2 = 5 MENIT, LV3 = 3 MENIT
2. MUSIC & SOUND EFFECT DI SETIAP BOX TERBALIK
3. TROPI BERDASKAKAN LV TERTINGGI

PERTANYAAN:
1. GIMANA CARA MEMBALIKAN GAMBAR
2. BAGAIMANA CARA MENGECEK KESAMAAN DIANTARA 2 GAMBAR
3. BAGAIMANA TRIGGER DI SAAT WAKTU HABIS
4. PAKEK METODE APA VARIABLE PERBOX DI SIMPAN 
5. BAGAIMANA ELEMENT DAN OBJECT SALING BERKAITAN 

variable untuk perbox
{
    gambar:"brazil"
    ditemukan:"true" // kalo true otomatis sudah ga bisa di klik
    url:"brazil ```.jpg"
    terbuka:false
} 
{
    gambar:"brazil"
    ditemukan:"true" // if(true)bukaelsetutup
    url:"brazil.jpg"
    terbuka:false 
}

variable untuk menyimpan box 
res = [
   0 obj,
   1 obj // 36 box
]
boxGroub[9].terbuka = true


2 kali klik box :render -> if(boxGroub[9].gambar === boxGroub[2].gambar) boxGroub[2].ditemukan = true
di render ke <main>

#UNTUK NGAKSES ELEMENT KITA MENGGUNAKAN METODE 1 PERSATU
```