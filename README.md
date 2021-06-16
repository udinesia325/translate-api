# TRANSLATE-API
#### adalah api yang dapat menterjemahkan teks ke berbagai bahasa asing
##### *from developer to developer*
## Pemasangan
- lakukan kloning ke repo ini
```sh
git clone https://github.com/udinesia325/translate-api
cd translate-api
```
- install beberapa package berikut
```sh
npm install express cors google-baidu-translate-api
```
## Penggunaan
- setelah semua selesai, silahkan jalankan aplikasi dengan mengetikkan perintah 
```
node app
```
- atau
```
nodemon app
```
- setelah muncul pesan di konsole, silahkan pakai api ke url 
```
http://localhost:3000/terjemah?teks={teksAwal}&kode={kodeBahasa}
```
- contoh 
```
http://localhost:3000/terjemah?teks=coba&kode=en
```
- maka akan muncul terjemah bahasa inggris dari kata "coba" yaitu "try"
- jika anda ingin melihat kode bahasa yang support di api ini silahkan <a href="http://api.fanyi.baidu.com/api/trans/product/apidoc#languageList">klik disini</a>
###### -Selamat Mencoba-
