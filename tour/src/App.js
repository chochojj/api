import { useState, useEffect } from 'react';
import SpotInfo from './component/SpotInfo';
import axios from "axios";
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {

  //API로 데이터 받아오기
  const tourUrl = "http://apis.data.go.kr/6260000/BusanTourStaticService2/getVisitorStatInfo2?serviceKey=RXyAPFaCISN5tDC6Sqz8jNjmdqrFGRcsFoBCK4ytBIOCM1OoL6IwXAKS91e18KG%2FR%2BqPyHfhj7HDcELQjq2ibQ%3D%3D&resultType=json";
  const serviceKey = process.env.REACT_APP_API_KEY;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [Selected, setSelected] = useState("지역을 선택해주세요");


    const fetchData = async () => {
      try {
        setError(null); 
        setData(null);  
        setLoading(true); 

        const response = await axios.get(tourUrl,{
          params: {
            //serviceKey,
            numOfRows: 10,
            pageNo:1
          }
          //여기에 암호화한 인증키 넣어주기 (해결해야하는 과제1)
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
      <SpotInfo 
        filtered={filtered[0]}

      />
    </div>
  );
}

export default App;




//선택이 안된 초기 화면을 따로 주고싶은데 어떻게 하지? => 일단 삼항연산자 해봤는데 안됨