import { useState, useEffect } from 'react';
import SpotInfo from './component/SpotInfo';
import SpotImg from './component/SpotImg';
import axios from "axios";
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
// import './App.css';

const GlobalStyle = createGlobalStyle`
  *{
    list-style: none;
    text-decoration: none;
    font-family: "NanumLt";
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding : 0;
    box-sizing: border-box;
    display : flex;
    justify-content: center;
    align-items: center;
    background-image: url(https://i.quotev.com/ge5wtqhdapeq.jpg);
    background-size: cover;
    /* backdrop-filter: blur(1px); */
  }

  .App {
    text-align: center;
    background-color: rgb(236, 242, 255, 0.5);
    backdrop-filter: blur(2px);
    padding: 20px 25px;
    border-radius: 20px;
  }
`
const SelectDiv = styled.div`
  *{
    display: flex;
  }
  .header {
    margin: 15px 0 30px 0;
  }
  h1{
    margin: 0;
    padding: 0;
    width: 500px;
    font-size: 22px;
  }
  select{
    margin: 0;
    padding: 0;
    width: 300px;
  }
`

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

    if(loading) return <div>Loading...</div>;
    if(error)   return <div>Error...</div>;
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
      <GlobalStyle />
      <SelectDiv>
        <div className='header'>
          <h1>{Selected}</h1>
          <select onChange={handleSelect} value={Selected}>
            {selectList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </SelectDiv>
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



