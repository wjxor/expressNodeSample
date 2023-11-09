var express = require('express');
var router = express.Router();


// 모든 게시글정보 조회 REST API 라우팅 메소드
// 호출유형 : GET
// 호출주소 : http://localhost:3000/api/article/list
// 반환유형 : 지정된 반환형식
router.get('/list', async(req, res)=>{
    

    // STEP2) DB 게시글 테이블에서 모든 게시글 정보를 조회해온다.
    var articleData = [
        {


            articleIdx:1,
            title:"게시글 제목입니다.",
            contents:"게시글 내용입니다.",
            viewCnt:100,
            display:"Y",
            registDate:Date.now()
        },
        {


            articleIdx:2,
            title:"게시글 제목입니다.",
            contents:"게시글 내용입니다.",
            viewCnt:200,
            display:"Y",
            registDate:Date.now()
        },
        {


            articleIdx:3,
            title:"게시글 제목입니다.",
            contents:"게시글 내용입니다.",
            viewCnt:300,
            display:"Y",
            registDate:Date.now()
        }
    ];
    


    // STEP3) 프론트엔드로 전달할 반환형식을 정의하고 해당 형식에 값을 바인딩해서 클라이언트 JSON데이터 전달한다.
    var resultData = {
        code:200,
        data:articleData,
        result:"ok"
    };

    res.json(resultData);
});


// 단일 게시글 신규등록처리 REST API 라우팅 메소드
// 호출유형 : post
// 호출주소 : http://localhost:3000/api/article/create
// 반환유형 : 지정된 반환형식
router.post('/create', async(req, res)=>{
    // STEP1: 프론트엔드에서 전달해오는 신규 게시글 입력정보를 추출한다.
    var title = req.body.title;
    var contents = req.body.contents;
    var registUserId = req.body.userid;


    // STEP2: DB 게시글 테이블 저장할 JSON데이터 구조수립 및 프론트 데이터 바인딩
    var article = {
        articleIdx:11,
        title,
        contents,
        viewCnt:1100,
        display:"Y",
        registDate:Date.now(),
        registUserId
    };

    // DB에 상기 데이터를 저장처리후 저장된 데이터를 반환받는다.
    var regitedArticle = article;

    // STEP3) 프론트엔드로 전달할 반환형식을 정의하고 해당 형식에 값을 바인딩해서 클라이언트 JSON데이터 전달한다.
    var resultData = {
        code:200,
        data:regitedArticle,
        result:"ok"
    };

    res.json(resultData);
});


// 단일 게시글 정보 수정처리 REST API 라우팅 메소드
// 호출유형 : post
// 호출주소 : http://localhost:3000/api/article/modify/1
// 반환유형 : 지정된 반환형식
// router.post();


// 단일 게시글 정보 삭제처리 REST API 라우팅 메소드
// 호출유형 : delete
// 호출주소 : http://localhost:3000/api/article/1
// 반환유형 : 지정된 반환형식
// router.delete();


// 단일 게시글정보 조회 REST API 라우팅 메소드
// 파라메터 와일드카드방식을 사용하는 라우팅 메소드는 해당 라우터파일의 맨 마지막 위치로 이동시킨다.
// 호출유형 : GET
// 호출주소 : http://localhost:3000/api/article/1 파라메터방식
// 호출주소 : http://localhost:3000/api/article?idx=1 쿼리스트링방식
// 반환유형 : 지정된 반환형식
router.get('/:aidx', async(req, res)=> {

    // STEP1) URL파라메터 방식으로 전달되는 게시글 고유번호를 추출하자.
    var articleIdx = req.params.aidx;

    // STEP2) DB 게시글 테이블에서 해당 글번호 단일 게시글 정보를 조회해온다.
    var articleData = {
        articleIdx:1,
        title:"게시글 제목입니다.",
        contents:"게시글 내용입니다.",
        viewCnt:100,
        display:"Y",
        registDate:Date.now()
    };

    // STEP3) 프론트엔드로 전달할 반환형식을 정의하고 해당 형식에 값을 바인딩해서 클라이언트 JSON데이터 전달한다.
    var resultData = {
        code:200,
        data:articleData,
        result:"ok"
    };

    res.json(resultData);

});

module.exports = router;