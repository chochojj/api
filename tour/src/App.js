import { useState, useEffect } from 'react';
import SpotInfo from './component/SpotInfo';
import SpotImg from './component/SpotImg';
import axios from "axios";
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {

  //API로 데이터 받아오기
  // const tourUrl = "http://apis.data.go.kr/6260000/BusanTourStaticService2/getVisitorStatInfo2?&resultType=json";
  //인증키 변수 안먹을때 사용
  const tourUrl = "http://apis.data.go.kr/6260000/BusanTourStaticService2/getVisitorStatInfo2?serviceKey=RXyAPFaCISN5tDC6Sqz8jNjmdqrFGRcsFoBCK4ytBIOCM1OoL6IwXAKS91e18KG%2FR%2BqPyHfhj7HDcELQjq2ibQ%3D%3D&resultType=json";
  const serviceKey = process.env.REACT_APP_API_KEY;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [Selected, setSelected] = useState("BIFF광장·용두산공원,보수동책방골목");


    const fetchData = async () => {
      try {
        setError(null); 
        setData(null);  
        setLoading(true); 

        const response = await axios.get(tourUrl,{
          params: {
            // serviceKey,
            numOfRows: 10,
            pageNo:1
          }

        });

        setData(response.data);
      } catch(e) {
        setError(e);
      }
      setLoading(false);
    };

    useEffect(() => {
      fetchData();
    }, []);

    if(loading) return <div className="App">Loading...</div>;
    if(error)   return <div className="App">Error...</div>;
    if(!data)   return null;

    //받아온 데이터 중에 진짜 사용할 데이터 추출
    const spotData = data.getVisitorStatInfo.body.items.item
    // console.log(spotData)
    //사용하고 있는 데이터의 인덱스를 추출 => 나중에 인덱스로 이미지 조회할거임
    let filterIndex = 0;
    for(let i = 0 ; i < spotData.length; i++){
      if(spotData[i].spot === Selected){
        filterIndex = i
      }
    }
    // console.log(filterIndex)

    //장소 선택
    const selectList = spotData.map((el)=> el.spot);
    const handleSelect = (e) => {
      setSelected(e.target.value);
    };

    // console.log(Selected)

    //선택된 장소의 전체 정보 불러오기
    const filtered = spotData.filter((el)=> el.spot === Selected);
    // console.log(filtered)
    
  return (
    <div className="App">
      <div>
        <select onChange={handleSelect} value={Selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <SpotImg 
        spotnum={filterIndex}
      />
      <SpotInfo 
        filtered={filtered[0]}
      />
    </div>
  );
}

export default App;




// import React from "react";
// import axios from "axios";
// import Traffic from "./Traffic";
 
 
// class App extends React.Component{
 
//   state = {
//     isLoading:true,
//     data:[],
    
//   };
 
 
//   getTraffic(){
   
//     const url = `http://data.ex.co.kr/openapi/trafficapi/nationalTrafficVolumn?key=발급받은API키입력8&type=json&sumDate=20211101&exDivCode=00`;
//     console.log(url);
//     axios.get(url).then((Response) =>{
//       const data = Response.data.list;
//       console.log(data);
 
//       this.setState({
//         isLoading:false,
//         data:data
//       });
//     });
//   }
//   componentDidMount(){
//     this.getTraffic();
//   }
//   render(){
//     const {isLoading, data} = this.state;
 
//     return(
//       <section className="container">
//         {isLoading ? (
//           <div className="loader">
//             <span className="loader_text">Loading...</span>
//           </div>
//         ):(
//           <div className="trafficInfo">
//             {data.map((d,cnt)=>{
//             return(<Traffic
//               sumDate={data[cnt].sumDate}
//               exDivCode={data[cnt].exDivCode}
//               tcsType={data[cnt].tcsType}
//               carType={data[cnt].carType}
//               trafficVolumn={data[cnt].trafficVolumn}/>)
//             })}
//           </div>
//         )}
//       </section>
//     )
//   }
// }
// export default App;



// Traffic.js
// import React from "react";
 
// function Traffic({
//     exDivCode,
//     tcsType,
//     carType,
//     sumDate,
//     trafficVolumn
// }){
//     return(
//         <div className="traffic">
//             <h3>일자별 교통량 현황</h3>
//             <div className="date">측정일시:{sumDate}</div>
//             <div className="exDivCode">집계주체구분:{exDivCode}</div>
//             <div className="tcsType">하이패스/일반구분:{tcsType}</div>
//             <div className="carType">차종구분:{carType}</div>
//             <div className="trafficVolum">수량:{trafficVolumn}</div>
//         </div>
//     );
// }
// export default Traffic;

//부산 전시 목록 open api
// http://apis.data.go.kr/6260000/BusanCultureExhibitService/getBusanCultureExhibit?serviceKey=RXyAPFaCISN5tDC6Sqz8jNjmdqrFGRcsFoBCK4ytBIOCM1OoL6IwXAKS91e18KG%2FR%2BqPyHfhj7HDcELQjq2ibQ%3D%3D&numOfRows=10&pageNo=1
 