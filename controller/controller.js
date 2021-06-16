const translate = require('google-baidu-translate-api')

const translateText = (req, res) => {
	const teks = req.query.teks
	const kode = req.query.kode


	if (teks && kode) {

		translate.baidu(`${teks}`, `${kode}`).then(response => {
			const bahasa = response.from
			const bahasaTujuan = response.to
			const teks = response.src
			const terjemah = response.dist
			const target = response.targets
			res.status(200).json({
				status: true,
				pesan: "sukses",
				data: {
					bahasa,
					bahasaTujuan,
					teks,
					terjemah,
					target
				}
			})
		}).catch(err => {
			res.status(400).json({
				status: false,
				pesan: "Terjadi Kesalahan, Lihat Dokumentasi",
				err
			})
		})


	} else {
		res.status(400).send("query string yang anda masukan salah")
	}
}


module.exports = translateText
