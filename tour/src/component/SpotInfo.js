import React from "react";

//props를 props가 아니라 속성이름 여러개로 한번에 전달할 때 중괄호로 꼭 묶어줘야함 
function SpotInfo({filtered}){
    console.log(filtered)
    const detail = {
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
    }
    console.log(detail)
    return (
        <div>
            <div>

            </div>
            
        </div>
    )
}


export default SpotInfo;


// {
//     유통:{filtered.distribution}
//         의료:{filtered.medical}
//         요식/유흥:{filtered.entertainment}
//         교육:{filtered.edu}
//         의류:{filtered.clothing}
//         미용:{filtered.beauty}
//         스포츠/문화/레저:{filtered.sports}
//         음/식료품:{filtered.grocery}
//         여행/교통:{filtered.travel}
//         가전/가구:{filtered.electronic}
//         가정생활/서비스:{filtered.service}
//         주유:{filtered.oiling}
//         자동차:{filtered.car}
//         온라인거래:{filtered.online}
// }