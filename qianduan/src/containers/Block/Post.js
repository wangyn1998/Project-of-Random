import React, { Component } from 'react'
import { NavBar, Icon ,List, TextareaItem,Grid} from 'antd-mobile';

const data1=['iconfont icon-tupian','iconfont icon-aite','iconfont icon-jinghao','iconfont icon-smile'].map((item)=>({
    icon:item
}))
export default class Post extends Component {
    render() {
        return (
            <div>
                 <NavBar
                    mode="light"
                    leftContent={[
                        <i className='iconfont icon-guanbi' style={{color:'black'}}/>
                    ]}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                         <button style={{borderRadius:'9px',backgroundColor:'blue',width:'50%',height:'70%'}}>发布</button>
                    ]}
                    style={{border:'1px solid #BBBBBB'}}
                    >发帖</NavBar>
               <List>
                <TextareaItem
                    placeholder="分享你的游记和心情..."
                    clear
                    rows={10}
                />
                </List>
                <div className='post1Grid' style={{position:'absolute',bottom:'0'}}>
                    <Grid data={data1}
                    columnNum={4}
                    renderItem={dataItem => {
                        return <i className={dataItem.icon}/>
                    }}
                    />
                </div>
            </div>
        )
    }
}
