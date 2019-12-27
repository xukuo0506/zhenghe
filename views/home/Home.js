import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
 class Home extends Component {
     componentDidMount(){
         axios.get('/list').then(res=>{
             console.log(res.data);
             //调用dispatch 储存数据
             this.props.setlist(res.data)
         })
     }
     state={
         //价格筛选项目
         jiageArr:[
             {
                 text:"100万以下",
                 id:0
             },
             {
                text:"100万-200万",
                id:1
            },
            {
                text:"200万-300万",
                id:2
            },
            {
                text:"300万-400万",
                id:3
            },
            {
                text:"400万-500万",
                id:4
            },
            {
                text:"500万-600万",
                id:5
            },
            {
                text:"600万-700万",
                id:6
            },
            {
                text:"700万以上",
                id:7
            }
         ],
         //房型筛选项目
         fangxingarr:[
             {
                text:"一居",
                id:0
             },
             {
                text:"二居",
                id:1
             },
             {
                text:"三居",
                id:2
             },
             {
                text:"四居",
                id:3
             },
             {
                text:"五居",
                id:4
             },
             {
                text:"6居",
                id:5
             },
             {
                text:"7居",
                id:6
             },
         ],
         //筛选项目数据
         btnstetxt:[
             {
            text:"区域",
            fx:"↓",
            id:0,
            flag:false
        },{
            text:"价格",
            fx:"↓",
            id:1,
            flag:false
        },{
            text:"房型",
            fx:"↓",
            id:2,
            flag:false
        },{
            text:"更多",
            fx:"↓",
            id:3,
            flag:false
        },{
            text:"排序",
            fx:"↓",
            id:4,
            flag:false
        }  
    ],
    //遮罩框显示开关
    gengduo:false,
    jiage:false,
    quyu:false,
    fangxing:false,
    paixu:false,
    //排序标题数组
    sotelist:[
        {
            id:0,
            text: "默认排序",
        },
        {
            id:1,
            text: "总价从高到底",
        },
        {
            id:2,
            text:"总价从低到高",
        },
        {
            id:3,
            text: "单价从高到底",
        },
        {
            id:4,
            text:"面积从大到小"
        },
       
        
       
        
    ],
    //排序默认下标
    soteindex:0,
    //区域默认下标
    quyuindex:0,
    //价格默认下标
    jiageindex:0,
    huoxingindex:0,
     }
     //价格筛选
     chengjia=(id)=>{
       this.props.chengge(id);
       this.setState({
        jiageindex:id
       })
     }
     //房型筛选
     chengju=(id)=>{
        this.props.fangxingchang(id);
        console.log(id);
        
        this.setState({
            huoxingindex:id
           })
     }
     //二级联动
     chengquyu=(id)=>{
        this.setState({
            quyuindex:id
        })
     }
     //排序逻辑
     sotecheng=(id)=>{
        this.props.sotedaxiao(id);
        this.setState({
            soteindex:id
        })
     }
     //遮罩框显示逻辑
     chengs=(id)=>{ 
         let arr=[...this.state.btnstetxt];
         if(arr[id].flag){
            arr[id].flag=false;
            arr[id].fx="↓"
         }else{
            arr[id].flag=true;
            arr[id].fx="↑"
         }
         this.setState({
            btnstetxt:arr
         })
         switch (id) {
             case 0:
                 if(this.state.quyu){
                     this.setState({
                        quyu:false
                     })
                 }else{
                    this.setState({
                        quyu:true
                     })
                 }
                 break;
                 case 1:
                    if(this.state.jiage){
                        this.setState({
                            jiage:false
                        })
                    }else{
                       this.setState({
                         jiage:true
                        })
                    }
                    break;      case 2:
                    if(this.state.fangxing){
                        this.setState({
                            fangxing:false
                        })
                    }else{
                       this.setState({
                        fangxing:true
                        })
                    }
                    break;      case 3:
                    if(this.state.gengduo){
                        this.setState({
                            gengduo:false
                        })
                    }else{
                       this.setState({
                        gengduo:true
                        })
                    }
                    break;      case 4:
                    if(this.state.paixu){
                        this.setState({
                            paixu:false
                        })
                    }else{
                       this.setState({
                        paixu:true
                        })
                    }
                    break;
         
             default:
                 break;
         }
     }
    //区域二级
     quyuerji=(value)=>{
        this.props.quyuset(value)
     }
      //地铁二级
     ditieerji=(value)=>{
        this.props.ditieset(value)
     }

  render() {
      console.log(this.state.huoxingindex);
      
      //地铁数组
      let ditieArr=[]
      this.props.kelong.map((val,index)=>{
          if(ditieArr.indexOf(val.ditie)===-1){
            ditieArr.push(val.ditie)
          }
      })
      //区域数组
      let quyuArr=[]
      this.props.kelong.map((val,index)=>{
          if(quyuArr.indexOf(val.quyu)===-1){
            quyuArr.push(val.quyu)
          }
      })
      console.log(ditieArr);
      console.log(quyuArr);
      
      
    return (
      <div className="wrapper">
          {/* 头部功能区 */}
          <div className="header">
              <div className="input">
                 <input type="text" placeholder="请输入楼盘或区域"/>
              </div>
              <div className="btns">
                  {/* 筛选按钮区 */}
                {
                    this.state.btnstetxt.map((val,index)=>{
                    return <div className={val.flag?"btn btncolor":"btn"} key={index} onClick={()=>this.chengs(val.id)}>{val.text+val.fx}</div>
                    })
                }
              </div>
          </div>
          {/* 占位盒子 */}
          <div className="zan"></div>
          {/* 数据渲染区 */}
          <div className="main">
              <div className="inner">
                {
                    // 非空判断
                   this.props.list.length>1? this.props.list.map((val,index)=>{
                    return <div key={index} className="inner-item">
                        <img src={val.img} alt=""/>
                        <div className="text">
                            <h3>
                                <span className="mianji">面积：{val.mianji}m</span>
                                <span className="jiage">总价：{val.jiage}万</span>
                                <span className="quyu">区域：{val.quyu}</span>
                            </h3>
                            <p>
                                <span className="fangxing">房型：{val.fangxing}</span>
                                <span className="ditie">地铁：{val.ditie}</span>
                                <span className="louceng">楼层：{val.louceng}</span>
                            </p>
                        </div>
                        </div>
                    }):"没有满足条件！"
                }
              </div>
                {
                    this.state.gengduo?<div className="gengduo-back  back">
                       
                    </div>:null
                }
                {/* 价格排序 */}
                 {
                    this.state.jiage?<div className="jiage-back  back">
                        <div className="jiage">
                            {
                                this.state.jiageArr.map((val,index)=>{
                                return <div className={this.state.jiageindex===val.id?"jiage-item  active":"jiage-item"} key={index} onClick={()=>this.chengjia(val.id)}>{val.text}</div>
                                })
                            }
                        </div>
                    </div>:null
                }
                 {
                    this.state.fangxing?<div className="fangxing-back  back">
                        <div className="fangxingc">
                            {
                                this.state.fangxingarr.map((val,index)=>{
                                    return <div className={this.state.huoxingindex===val.id?"jiage-item  active":"jiage-item"} key={index} onClick={()=>this.chengju(val.id)}>{val.text}</div>
                                })
                            }
                        </div>
                    </div>:null
                }
                {/* 区域---------------------- */}
                 {
                    this.state.quyu?<div className="quyu-back  back">
                        <div className="quyu">
                            <div className="typr1">
                                <p className={this.state.quyuindex==0?"active":""} onClick={()=>this.chengquyu(0)}>区域</p>
                                <p className={this.state.quyuindex==1?"active":""} onClick={()=>this.chengquyu(1)}>地铁</p>
                            </div>
                            <div className="type2">
                                {
                                    this.state.quyuindex===0? quyuArr.map((val,index)=>{
                                    return <p key={index} onClick={()=>this.quyuerji(val)}>{val}</p>
                                    })  :  ditieArr.map((val,index)=>{
                                    return <p key={index} onClick={()=>this.ditieerji(val)}>{val}</p>
                                    })
                                }
                            </div>
                        </div>
                    </div>:null
                }
                {/* 排序弹框------------------ */}
                 {
                    this.state.paixu?<div className="paixu-back  back">
                         <div className="sote">
                            {
                                this.state.sotelist.map((val,index)=>{
                                return <p 
                                key={index} 
                                className={this.state.soteindex===index?"active":""} 
                                onClick={()=>this.sotecheng(val.id)}>{val.text}</p>
                                })
                            }
                            </div>
                    </div>:null
                }
          </div>
          
         
      </div>
    )
  }
}

const mapStateToProps =state => {
    return {
        //总数据
        list: state.list,
        kelong:state.klList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //存入总数据
        setlist: (list) => {
            dispatch({type:'SET-LIST',list})
        },
        //总价从大到小
        sotedaxiao:(id)=>{
            dispatch({type:'SOTE-LIST',id})
        },
        //区域筛选
        quyuset:(value)=>{
            dispatch({type:'SET-QUYU',value})
        },
        //地铁筛选
        ditieset:(value)=>{
            dispatch({type:'SET-DITIE',value})
        },
        //价格筛选
        chengge:(id)=>{
            dispatch({type:'SET-JIAGE',id})
        },
        //户型筛选
        fangxingchang:(id)=>{
            dispatch({type:'SET-FANG',id})
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)