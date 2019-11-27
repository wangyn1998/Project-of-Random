import React,{useState,useEffect} from 'react';
import ReactDOM from "react-dom";
function Content(props) {
    return(
        <div className="pop" style={{width:'380px',height:'410px',backgroundColor:'#ffffff',marginLeft:'280px'}}>
            {/* <button onClick={props.closeModel}>关闭</button> */}
            <div style={{width:'380px',height:'80px',float:'left'}}>
                <h2 style={{float:'left',marginLeft:'20PX',marginTop:'27px'}}>创建人:</h2>
                <input className="pop" type='text' style={{float:'left',width:'200px',height:'40px',marginTop:'20px',marginLeft:'20PX'}}/>
            </div>
           <div style={{width:'380px',height:'280px',float:'left'}}>
                 <h2 style={{float:'left',marginLeft:'20PX'}}>话题内容:</h2>
                 <input  className="pop" type='text' style={{width:'340px',height:'200px',marginTop:'20px',marginLeft:'20PX'}}/>
           </div>
           <button onClick={props.closeModel} style={{float:'right',marginRight:'20px',width:'50px',height:'30px',backgroundColor:'#61b3ed',color:'#ffffff',borderWidth:'1px',borderColor:'#eee'}}>保存</button> 
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