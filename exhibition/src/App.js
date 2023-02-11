import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
 