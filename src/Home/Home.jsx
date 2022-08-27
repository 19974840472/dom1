import React, {useState} from 'react'
import './Home.css'

export default function Home() {
    // study状态
    let [studyList,setStudyList]=useState([
        // {
        //     str:'java',
        //     isShow:false
        // }
    ])
    //learning状态
    let [learningList,setLearningList]=useState([])
    // complete状态
    let [complete,setComplete]=useState([])

    //添加任务
    let addStudyList=()=>{
        setStudyList([...studyList,{str: ''}])
    }
    //修改任务
    let changeStudyList=(e,index)=>{
        studyList.forEach((item,i)=>{
            if (index===i){
                item.str=e.target.value
            }
        })
        setStudyList([...studyList])
    }
    //learning 边框显示
    let [borderShow,setBorderShow]=useState(false)
    //complete 边框显示
    let [borderShow2,setBorderShow2]=useState(false)
    //拖动任务下标
    let [dropIndex,setDropIndex]=useState(0)

    //确定拖动的是那个任务
    let ondragstart=(e,index)=>{
        setDropIndex(index)
    }

    //任务拖到learning
    let dropLearning=()=>{
        setBorderShow(true)
        setLearningList([...learningList,studyList[dropIndex]])
        let arr=studyList.filter((item,index)=>{
            return index!=dropIndex
        })
        setStudyList([...arr])
    }
    // 任务拖到complete
    let dropLearning2=()=>{
        setBorderShow2(true)
        setComplete([...complete,studyList[dropIndex]])
        let arr=studyList.filter((item,index)=>{
            return index!=dropIndex
        })
        setStudyList([...arr])
    }

    let onDragOver=(e)=>{
        e.preventDefault();
    }
    //learning区操作
    //鼠标移入
    let onmouseenter=(index)=>{
        learningList.forEach((item,i)=>{
            if (index===i){
                item.isShow=true
            }
        })
        setLearningList([...learningList])
    }
    //鼠标移除
    let onmouseleave=(index)=>{
        learningList.forEach((item,i)=>{
            if (index===i){
                item.isShow=false
            }
        })
        setLearningList([...learningList])
    }
    //点击删除
    let removeLearning=(i)=>{
        let arr=learningList.filter((item,index)=>{
            return index!=i
        })
        setLearningList([...arr])
    }

    // complete操作
    let onmouseenter2=(index)=>{
        complete.forEach((item,i)=>{
            if (index===i){
                item.isShow=true
            }
        })
        setComplete([...complete])
    }
    let onmouseleave2=(index)=>{
        complete.forEach((item,i)=>{
            if (index===i){
                item.isShow=false
            }
        })
        setComplete([...complete])
    }
    let removeLearning2=(i)=>{
        let arr=complete.filter((item,index)=>{
            return index!=i
        })
        setComplete([...arr])
    }

    return (
        <div className='homeStyle'>
            <div>
                <div>prepare to study</div>
                <div>
                    <ul>
                        {
                            studyList.map((item,index)=>{
                                return (
                                    <li key={index} draggable="true" onDragStart={(e)=>ondragstart(e,index)}>
                                        <input type="text" value={item.str}
                                               onChange={(e)=>changeStudyList(e,index)}/>
                                    </li>)
                            })
                        }
                    </ul>
                    <button onClick={addStudyList}>+</button>
                </div>
            </div>
            <div>
                <div>Learning....</div>
                <div className={borderShow?'borderRed':''} onDrop={dropLearning} onDragOver={onDragOver}>
                    <ul>
                        {
                            learningList.map((item,index)=>{
                                return (
                                    <li key={index}
                                        onMouseEnter={()=>onmouseenter(index)}
                                        onMouseLeave={()=>onmouseleave(index)}>
                                        <p>{item.str} {item.isShow?<button onClick={()=>removeLearning(index)}>X</button>:''}</p>
                                    </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
            <div>
                <div>Complete</div>
                <div className={borderShow2?'borderGreen':''} onDrop={dropLearning2} onDragOver={onDragOver}>
                    <ul>
                        {
                            complete.map((item,index)=>{
                                return (
                                    <li key={index}
                                        onMouseEnter={()=>onmouseenter2(index)}
                                        onMouseLeave={()=>onmouseleave2(index)}>
                                        <p>{item.str} {item.isShow?<button onClick={()=>removeLearning2(index)}>X</button>:''}</p>
                                    </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}