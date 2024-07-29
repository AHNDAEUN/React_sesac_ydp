import './Button.css';

// props.children 
//: 부모 컴포넌트에서 자식 컴포넌트 호출 시 태그 사이에 문자열
// 문자열, 숫자 JSX, 배열 등 다양한 형태

const Button = (props) =>{

    console.log('Button props >>', props);
    const {link, childen} = props;
    return (

        <>

        <a href={link}>

             <Button className= "Button">{childen}</Button>
        
        </a>

        </>
    )
};

export default Button;