import React, { useState } from 'react'

const Counter = () => {
  
    const [number , setNumber] = useState(0); // 상태 초기값 0
   
    const increase = () => {
        setNumber(number + 1 )
    }

    // 인자 1개
   const alretMsg = (msg) => {
    alert(`${msg}~현재 숫자는 ${number}입니다`)
   }

   // 인자 2개
   const consoleMsg = (e, msg) => {
    console.log(e.target);
    console.log(`${msg}~현재 숫자는 ${number}입니다`);
    
   }

   // e.target => 부모로 부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소.
   //e.currentTarget => 이벤트 핸들러가 있는 요소
   const handleEvent = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    
   }
    return (
    <div>
        <h1>Counter</h1>
        <h2>{number}</h2>

        {/** 함수에 인자가 없는 경우 : 함수 이름만 전달! */}
        <button onClick={increase}></button>

        {/** 함수에 인자 보내기 */}
        <button onClick={() => {alretMsg('hello')}}></button>
        <button onClick={(e) => {consoleMsg(e,"hello")}}>console 출력</button>

        {/** e.target vs e.currentTarget */}
        <button onClick={handleEvent}>
            <span>handle Event</span>         
        </button>

    </div>
  )
}

export default Counter 