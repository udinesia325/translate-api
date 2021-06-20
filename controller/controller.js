const translate = require('google-baidu-translate-api')

const translateText = async (req, res) => {
	const teks = req.query.teks
	const kode = req.query.kode


	if (teks && kode) {
		try {

			const response = await translate.baidu(`${teks}`, `${kode}`)
			const bahasa = response.from
			const bahasaTujuan = response.to
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
					target,

				}
			});

		} catch (err) {

			res.send("erorli")
		}




	} else {
		res.status(400).send("query string yang anda masukan salah")
	}
}


module.exports = translateText
