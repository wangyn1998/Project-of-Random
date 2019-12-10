import React, { Component } from 'react'
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
let path={};
export default class PostImg extends Component {
    constructor(props){
        super(props);
        this.state = {
            files: []
            
        };
   }
      onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
        console.log(files[0].url)
        window.localStorage.setItem('img', JSON.stringify(files[0].url));
        path = {
            pathname:'/post',
            state:files[0].url
        };   
      }
      
    //   post=(files)=>{
    //        path = {
    //         pathname:'/post',
    //         state:files[0].url
    //     };
    //   }
      render() {
        const { files } = this.state;
        return (
          <WingBlank>
            <SegmentedControl
          
            />
            <ImagePicker
              files={files}
              onChange={this.onChange}
            //   onClick={this.post}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={files.length < 7}
            />
            <Link to={path}><button>提交</button></Link>
            
          </WingBlank>
        );
      }
}
