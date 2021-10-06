var express = require('express');
var router = express.Router();

const BUCKET = require("../models/bucket");
/**
 * RESTFul
 * 클라이언트에서 요청을 할때
 * 할일을 프로토콜 method로 분리하기
 * 		CReate(insert) : POST로 요청하고
 * 		READ(Select) : GET요청을 하고s
 * 		UPDATE: put 요청
 * 		DELETE: delete 요청
 * 
 * 자원의 명확한 지정
 * 		localhost:3000/book/delete=12345 보통 요청을 하는데
 * 		localhost:3000/book/12345/delete : RESTFul에서 할일, 
 * 		자원을 명확하게 설정하기
 * 
 * RESTFul 요청을 처리하기 위해서는
 * 표준 HTML 코드만으로는 요청 불가
 * 		표준 HTML에서는 POST와 GET 지원을 하지만
 * 		put과 delete는 지원 안함
 * 		put과 delete를 사용하기 위해서는 Ajax(fetch)와 같은
 * 		별도의 도구를 사용해야 한다
 * 
 * React와 API 연동을 할때는 RESTFul 4가지 method를 사용하여 서버를 구축한다
 * 
 * POST, PUT: 데이터를 body에 담아서 전송
 * GET, Delete : 단순히 URL 요청만 하거나 pathVarriable 방식으로
 * 		데이터를 전송하여 처리를 수행한다
 * 
 * client에서 요청을 할때
 * 같은 URL을 통하여 요청을 하여도 method가 다르면 서로 다른 역할을 
 * 수행할 수 있기 때문에 서버 코딩을 하는데 다소 부담이 덜 할 수 있다
 * 	 GET localhost:3000/book/delete 를 수행하면
 *    - 도서정보에서 삭제된 데이터를 나에게 보여달라
 * 	  router.get("/book/delete")로 서버 설정하고
 *   Delete localhost:3000/book/delete/1 를 수행하면
 *    - 도서정보에서 어떤 ID값이 1인 데이터를 삭제하라고 요청가능
 * 	  router.delete("/book/delete")
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
router.post("/bucket", async (req, res) => {
	const body = req.body;
	const result = await BUCKET.create(body)
	console.log("데이터 추가하기")
	console.log(body)
	res.json({result: "OK"})
})

router.put("/bucket", async (res, req) => {
	const body = req.body
	const doc = await BUCKET.findOne({ b_id: body.b_id })
	console.log(doc)
	await doc.overwrite(body)
	await doc.save()
	
	await console.log("데이터 업데이트 하기")
	await console.table(body)
})

// localhost:3000/api/get
router.get('/get', (req, res) => {
	console.log("전체리스트 요청하기")
	 res.json(buckets);
});

// localhost:5000/api/1/get
router.get("/get/:id", async (res, req) => {
	console.log("개별데이터 요청하기")
	res.json(retData[0])
})
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