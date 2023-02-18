import { useState, useEffect } from 'react';
import SpotList from './component/SpotList';
import axios from "axios";
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


// 전체 api
// const url = `https://apis.data.go.kr/1360000/TourStnInfoService1/getTourStnVilageFcst1?serviceKey=RXyAPFaCISN5tDC6Sqz8jNjmdqrFGRcsFoBCK4ytBIOCM1OoL6IwXAKS91e18KG%2FR%2BqPyHfhj7HDcELQjq2ibQ%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&CURRENT_DATE=2021122010&HOUR=24&COURSE_ID=1`


function App() {

//서비스키 암호화 왜 안되냐고
//분명 성공했는데 다른 코드 손보고 돌아오니까 어딜 잘못손봤는지 오류남
//커밋 똑바로 할걸ㅠㅠ
  const tourUrl = "http://apis.data.go.kr/6260000/BusanTourStaticService2/getVisitorStatInfo2?serviceKey=RXyAPFaCISN5tDC6Sqz8jNjmdqrFGRcsFoBCK4ytBIOCM1OoL6IwXAKS91e18KG%2FR%2BqPyHfhj7HDcELQjq2ibQ%3D%3D&resultType=json";
  const serviceKey = process.env.REACT_APP_API_KEY;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    const fetchData = async () => {
      try {
        setError(null);
        setData(null);
        setLoading(true);

        const response = await axios.get(tourUrl,{
          
          numOfRows: 10,
          pageNo:1
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

    if(loading) return <div>Loading...</div>;
    if(error)   return <div>Error...</div>;
    if(!data)   return null;
    console.log(data)
  
  return (
    <div className="App">
      <div>
    
      </div>
      <SpotList/>
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
 