import React from "react";
import styled from 'styled-components';

const InfoDiv = styled.div`
    .infowrap{
        width: 800px;
        height: 120px;
        padding: 10px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
    }
    .info{
        width: 49%;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: 3px dashed #E5D1FA;
    }
    .info:first-child{
        background-color: white;
        margin-right: 1%;
    }
    .info:last-child{
        background-color: white;
        margin-left: 1%;
    }
    .question {
        margin-bottom: 20px;
        font-weight: bold;
    }
    .info div > span {
        margin: 0 8px;
    }
`


//props를 props가 아니라 속성이름 여러개로 한번에 전달할 때 중괄호로 꼭 묶어줘야함 
function SpotInfo({filtered}){
    // console.log(filtered)
    let visitorAge = {
        10 :filtered.teens,
        20 :filtered.agetwenties,
        30 :filtered.agethirties,
        40 :filtered.ageforties,
        50 :filtered.agefifties,
        60 :filtered.agesixties
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
    // console.log(visitorAge)
    // console.log(detailReason)
    
    //데이터 내림차순으로 정렬하기 
    let sortAge = Object.values(visitorAge)
    sortAge.sort((a,b)=> b - a)
    // console.log(sortAge)
    let sortReason = Object.values(detailReason)
    sortReason.sort((a,b)=> b - a)
    // console.log(sortReason)


    //객체 값 중에 0 인 경우 속성 값 삭제
    for(let key in detailReason){
        if(detailReason[key] === 0){
            delete detailReason[key]
            // console.log(detailReason)
        }
    }
    
    //정렬된 데이터로 객체 값 조회하는 함수 만들기
    //객체에서 value로 key 찾기
    function getKeyByValue(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
    }

    return (
        <InfoDiv>
            <div className="infowrap">
                <div className="info">
                    <span className="question">가장 부산을 많이 방문하는 연령대</span>
                    <div>
                        <span className="first">
                        😍 1위 : {getKeyByValue(visitorAge, sortAge[0])}대
                        </span>
                        <span className="second">
                        🥰 2위 : {getKeyByValue(visitorAge, sortAge[1])}대
                        </span>
                        <span className="third">
                        😘 3위 : {getKeyByValue(visitorAge, sortAge[2])}대
                        </span>
                    </div>
                </div>
                <div className="info">
                    <span className="question">어떤 이유로 부산을 많이 방문할까요?</span>
                    <div>
                        {!(getKeyByValue(detailReason, sortReason[0]))?
                        <span>😥 이유를 찾지 못했어요 </span>:
                        <div>
                            <span className="first">
                            😍 1위 : {getKeyByValue(detailReason, sortReason[0])}
                            </span>
                            <span className="second">
                            🥰 2위 : {!getKeyByValue(detailReason, sortReason[1]) ? `X`: getKeyByValue(detailReason, sortReason[1])}
                            </span>
                            <span className="third">
                            😘 3위 : {!getKeyByValue(detailReason, sortReason[2]) ? `X`: getKeyByValue(detailReason, sortReason[2])}
                            </span>
                        </div>

                        }
                    </div>
                    
                </div>
            </div>
        </InfoDiv>
    )
}


export default SpotInfo;

