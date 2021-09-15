var express = require('express');
var router = express.Router();

/**
 * 
 */
const retData = [
  	{
		b_id: "0001",
		b_title: "어려워",
		b_start_date: "2021-09-15 00:00:00",
		b_end_date: "",
		b_end_check: false,
		b_cancel: false,
	},
	  	{
		b_id: "0002",
		b_title: "어려워",
		b_start_date: "2021-09-15 00:00:00",
		b_end_date: "",
		b_end_check: false,
		b_cancel: false,
	},
]
/**
 * POST 로 받는 데이터는 주로 from에 담긴 데이터이다
 * API server에서는 fetch()를 통해 데이터를 전달 받을때도
 * 사용한다
 * request의 body에 담겨서 전다로디기 때문에
 * req.body에서 데이터를 추출하면 된다
 */
router.post("/insert", (req, res) => {
	const body = req.body;
	console.log(body)
	res.send("끝")
})

router.get('/getlist', (req, res) => {
	res.json(retData)
});

router.get('/update/:id/:title', (req,res) =>{
	const id = req.params.id
	const title = req.params.title
	console.log(id, title)
	// res.status(200).end("끝")
	// http status code 2xx
	/**
	 * 2xx: 정상처리되고 데이터를 보낼 준비중이니 기다려
	 * 3xx: 조금전의 보내준 결과와 변함이 없으니 그대로 써라 or redirect
	 * 4xx: 보낸 요청에 문제가 있다
	 * 	404: nt found
	 * 	401, 403 :권한 없음
	 * 	405:method 문제
	 * 5xx: 
	 */
	res.send("끝")
	
})
router.put('/update', (res, req) => {
	
})

router.delete('/cancel/:id', (req,res)=> {
	const id = req.params.id
	console.log(id)
	res.json({ title: "끝" })
})


module.exports = router;