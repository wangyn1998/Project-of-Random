import React,{useState,useEffect} from 'react';
import ReactDOM from "react-dom";
function Content(props) {
    return(
        <div style={{width:'380px',height:'410px',backgroundColor:'#ffffff',marginLeft:'280px',borderWidth:'1px',border:'2px solid grey'}}>
            {/* <button onClick={props.closeModel}>关闭</button> */}
            <div style={{fontSize:'28px',coloe:'black',marginLeft:'30px',paddingTop:'10px'}}>内容:</div>
            <input type='text' style={{width:'320px',height:'220px',marginLeft:'30px',marginTop:'10px'}}/>
            <div style={{marginLeft:'30px',marginTop:'10px'}}>
                <span style={{fontSize:'28px',coloe:'black'}}>分数: &nbsp;</span>
                <input type='text'  style={{width:'245px',height:'30px'}}/>
            </div>
            <div className={'cover'} style={{margin:'20px 115px'}}>
                
                <button onClick={props.closeModel} style={{backgroundColor:'#eeeeee',border:'1px solid white',padding:'5px 10px',color:'black'}}>关闭</button>
                <button style={{backgroundColor:'#61b3ed',border:'1px solid white',padding:'5px 10px',color:'white',marginLeft:'40px'}}>保存</button>

            </div>
        </div>

    )
}

function Model(props){
    const appRoot = document.getElementById('app-root');
    const modelRoot = document.getElementById('model-root');
    const [el,changEl] = useState(document.createElement('div'));
    var popLayer = document.getElementById('popLayer');
    popLayer.style.width =  "1040px";
    popLayer.style.height = "450px";

    popLayer.style.display = "block";
    //初始化工作
    useEffect(()=>{

        modelRoot.appendChild(el);

    },[])
    //清理工作
    useEffect(()=>{
        return ()=>{
            modelRoot.innerHTML="";
            popLayer.style.display = "none";

        }
    })
    return ReactDOM.createPortal((
        <Content closeModel={props.closeModel}/>
    ), el);
}

export default Model;