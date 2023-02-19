import React from "react";

function SpotImg({spotnum}){
    console.log(spotnum)
    let spotMatch = {
        // 비프
        0: `https://a.travel-assets.com/findyours-php/viewfinder/images/res40/246000/246834-Busan.jpg`,
        // 감천문화
        1: `https://a.cdn-hotels.com/gdcs/production37/d1169/1dcbfef5-2070-48ce-8d62-3e0fffa21797.jpg?impolicy=fcrop&w=800&h=533&q=medium`,
        // 광안리
        2: `https://gagogago.com/wp-content/uploads/%EA%B4%91%EC%95%88%EB%A6%AC.png`,
        // 국립해양
        3: `https://www.yeongdo.go.kr/CmsMultiFile/view.do?multifileId=MF00000325&idx=25679&q=50`,
        // 다대포
        4: `https://www.busan.com/nas/wcms/wcms_data/photos/2019/08/20/2019082020071658044_l.png`,
        // 달맞이
        5: `https://t1.daumcdn.net/news/202005/11/moneyweek/20200511134432528wkmd.jpg`,
        // 동백섬
        6: `https://www.visitbusan.net/uploadImgs/files/cntnts/20191225173712086_oen`,
        // 렛츠런 파크
        7: `https://www.visitbusan.net/uploadImgs/files/cntnts/20191227163229549_ttiel`,
        // 마린시티
        8: `https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2277293754EF5D4805`,
        // 민락수변
        9: `https://blog.kakaocdn.net/dn/cQvd91/btrIyxhTR2Z/KpsHDQl6D1oVKmiG3Fk4aK/img.jpg`
    } 

    // 일치하는 이미지 찾아주기
    let spotimg = '';
    for(let key in spotMatch){
        //둘 타입이 다름 어디가 정수형이지?
        if(Number(key) === spotnum){
            spotimg += spotMatch[key]
        }
    }
    console.log(spotimg)
    return (
        <div>
            <div className="imgBox">
                <img src={spotimg}/>
            </div>
        </div>
    )
}

export default SpotImg;