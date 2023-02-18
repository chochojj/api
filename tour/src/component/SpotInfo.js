import React from "react";

//props를 props가 아니라 속성이름 여러개로 한번에 전달할 때 중괄호로 꼭 묶어줘야함 
function SpotInfo({filtered}){
    // console.log(filtered)
    let visitorAge = {
        teens:filtered.teens,
        twenties:filtered.agetwenties,
        thirties:filtered.agethirties,
        forties:filtered.ageforties,
        fifties:filtered.agefifties,
        sixties:filtered.agesixties
    };
    let detailReason = {
        유통:filtered.distribution,
        의료:filtered.medical,
        교육:filtered.edu,
        의류:filtered.clothing,
        미용:filtered.beauty,
        스포츠:filtered.sports,
        식료품:filtered.grocery,
        여행:filtered.travel,
        가전:filtered.electronic,
        가정생활:filtered.service,
        주유:filtered.oiling,
        자동차:filtered.car,
        온라인거래:filtered.online
    };
    // console.log(detailReason)
    //detailReason 객체에서 값을 정수화해줌
    //Number은 문자열 전체가 숫자일 때 소수점까지 숫자타입으로 바꿔줌
    //parseInt()는 문자열로 된 부분에서 숫자(정수)만 뽑아서 변환해줌
    for(let props in visitorAge){
        visitorAge[props] = Number(visitorAge[props])
    }
    for(let props in detailReason){
        detailReason[props] = Number(detailReason[props])
    }
    console.log(visitorAge)
    console.log(detailReason)
    
    return (
        <div>
            <div className="visitor">
                
            </div>
            <div className="visitReason">

            </div>
        </div>
    )
}


export default SpotInfo;

