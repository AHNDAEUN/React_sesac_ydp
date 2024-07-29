//render() 함수 필수
// return에 실제로 보여주고 싶은 html 요소를 작성
import React from 'react';
// 여기서 React는 Component를 import하기 위해 필요
// 상속 받기 때문

//** 이렇게도 가능하다
//import {Component} from 'react';

class ClassComponent extends React.Component {

 // class ClassComponent extends Component {}
 // 클래스 인스턴스 속성, 키워드 업이 정의 (let const var)
 // 클래스 메서드 내 어디서든 this. 키워드로 접근할 수 있다. 
    student= '홍길동'


    // 클래스형 컴포넌트는 render 함수 필수!
    render() {

        const teacher = 'Ade'; // render 메서드 내부의 지역변수
        const {name} =this.props;
        console.log('props:', this.props); //name: SeSAC 6기

        return(

            <>
            
                <h1> Hello, {teacher}</h1>
                <h1>Hi {this.student}</h1>
                <p> 여기는 CALSS Component</p>
                {/* props 사용할 때 */}
                <p>
                    {/* 이름은 <b>{this.props.name}</b> */}
                </p>

                <p>이름은<b>{name}</b></p>
            </>
        )
    }

}


export default ClassComponent;


// ** props 작성법

// 부모가 자식한테 줄거임 (반대x(금쪽이), 형제x)
//1. 부모 쪽에 <Funtion 작명= {줄 내용}>

//2 자식 쪽에 Funtion (props) {
// <h1>props.작명</h1>
//}