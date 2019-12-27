import {
    createStore
} from 'redux'

let initState = {
    list: [],
    //复制
    klList: []
}

function der(state = initState, action) {
    state = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        //设置数据
        case "SET-LIST":
            state.list = action.list
            //克隆
            state.klList = state.list
            return state
            //排序功能
        case "SOTE-LIST":
            switch (action.id) {
                case 0:
                    break;
                case 1:
                    state.list = state.list.sort((a, b) => {
                        return a.jiage - b.jiage
                    })
                    break;
                case 2:
                    state.list = state.list.sort((a, b) => {
                        return b.jiage - a.jiage
                    })
                    break;
                case 3:
                    state.list = state.list.sort((a, b) => {
                        return a.danjia - b.danjia
                    })
                    break;
                case 4:
                    state.list = state.list.sort((a, b) => {
                        return b.mianji - a.mianji
                    })
                    break;

                default:
                    break;
            }
            return state
            //区域筛选
        case "SET-QUYU":
            state.list = state.klList
            state.list = state.klList.filter(val => val.quyu === action.value)
            return state
            //地铁筛选    
        case "SET-DITIE":
            state.list = state.klList
            state.list = state.klList.filter(val => val.ditie === action.value)
            return state
        case "SET-JIAGE":
            switch (action.id) {
                case 0:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.jiage < 100)
                    break;
                case 1:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.jiage > 100 && val.jiage < 200)
                    break;
                case 2:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.jiage > 200 && val.jiage < 300)
                    break;
                case 3:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.jiage > 300 && val.jiage < 400)
                    break;
                case 4:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.jiage > 400 && val.jiage < 500)
                    break;
                case 5:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.jiage > 500 && val.jiage < 600)
                    break;
                case 6:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.jiage > 600 && val.jiage < 700)
                    break;
                case 7:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.jiage > 700)
                    break;

                default:
                    break;
            }
            return state
        case "SET-FANG":
            switch (action.id) {
                case 0:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.fangxing==="一室")
                    break;
                case 1:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.fangxing==="二室")
                    break;
                case 2:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.fangxing==="三室")
                    break;
                case 3:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.fangxing==="四室")
                    break;
                case 4:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.fangxing==="五室")
                    break;
                case 5:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.fangxing==="六室")
                    break;
                case 6:
                    state.list = state.klList
                    state.list = state.klList.filter(val => val.fangxing==="七室")
                    break;
                default:
                    break;
            }
                return state    

            
        default:
            return state
    }
}

const store = createStore(der)

export default store