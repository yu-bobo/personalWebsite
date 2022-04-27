import './index.less'
import familyIcon from '../../assets/icons/family.png'
import educationIcon from '../../assets/icons/education.png'
import positionIcon from '../../assets/icons/position.png'
import point1Icon from '../../assets/icons/point1.png'
import point2Icon from '../../assets/icons/point2.png'
import React, { useState } from "react"
function PersonalResume() {
    const workStatus = {
        '0': '入职',
        '1': '转正',
        '2': '离职',
    }
    let [positonChangeList, setPositonChangeList] = useState([{
        level: '入',
        time: '2019-11-12',
        companyName: '南通启智网络有限公司',
        positionName: '前端开发工程师',
        status: '0'
    }, {
        level: '转',
        time: '2020-03-12',
        companyName: '南通启智网络有限公司',
        positionName: '前端开发工程师',
        status: '1'
    }, {
        level: '离',
        time: '2020-09-20',
        companyName: '南通启智网络有限公司',
        positionName: '前端开发工程师',
        status: '2'
    }])
    const potionDiv = positonChangeList.map((item, index) => {
        return <div className="step_content" key={index}>
            <div className="step_item">
                <span className="position_level">{item.level}</span>
                <div className="bar">
                    <p className="image"><img src={item.status === '2' ? point2Icon : point1Icon}></img></p>
                    <p className={['line', index === 0 && 'first-line'].join(' ')}></p>
                </div>
                <span className="time">{item.time}</span>
                <div className={['org_position_box', item.status === '2' && 'leave_box'].join(' ')}>
                    <span className="org_name">{item.companyName} —— </span>
                    <span className="position">{item.positionName}</span>
                    <span className={['type', item.status === '2' && 'leave'].join(' ')} > —— {workStatus[item.status]}</span>
                </div>
            </div>
        </div>
    })
    return <div className='container'>
        <div id="personal_info" className="table-box">
            <div className="title">
                <i className="title_icon">
                    <img src={familyIcon}></img></i>
                <span className="title_span">个人信息</span>
            </div>
            <table className="personal_table">
                <tr>
                    <td><div><span className="item_name">姓名</span><span className="item_value">xxx</span></div></td>
                    <td><div><span className="item_name">性别</span><span className="item_value">xxx</span></div></td>
                    <td><div><span className="item_name">爱好</span><span className="item_value">xxx</span></div></td>
                </tr>
                <tr>
                    <td><div><span className="item_name">出生日期</span><span className="item_value">xxx</span></div></td>
                    <td><div><span className="item_name">年龄</span><span className="item_value">xxx</span></div></td>
                    <td><div><span className="item_name">状态</span><span className="item_value">xxx</span></div></td>
                </tr>
                <tr>
                    <td><div><span className="item_name">证件类型</span><span className="item_value">xxx</span></div></td>
                    <td><div><span className="item_name">证件号码</span><span className="item_value">xxx</span></div></td>
                    <td><div><span className="item_name">婚育状况</span><span className="item_value">xxx</span></div></td>
                </tr>
                <tr>
                    <td><div><span className="item_name">手机号码</span><span className="item_value">xxx</span></div></td>
                    <td><div><span className="item_name">紧急联系人</span><span className="item_value">xxx</span></div></td>
                    <td><div><span className="item_name">紧急联系人电话</span><span className="item_value">xxx</span></div></td>
                </tr>
                <tr>
                    <td><div><span className="item_name">户籍所在地</span><span className="item_value">xxx</span></div></td>
                    <td><div><span className="item_name">户口性质</span><span className="item_value">xxx</span></div></td>
                    <td><div><span className="item_name">籍贯</span><span className="item_value">xxx</span></div></td>
                </tr>
                <tr>
                    <td><div><span className="item_name">民族</span><span className="item_value">xxx</span></div></td>
                    <td><div><span className="item_name">家庭住址</span><span className="item_value">xxx</span></div></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div id="education_experience" className="table-box">
            <div className="title"><i className="title_icon"><img src={educationIcon}></img></i><span
                className="title_span">教育经历</span></div>
            <table className="base_table">
                <tr>
                    <td className="td-index"><span>NO.</span></td>
                    <td className="td-time"><span>入学时间</span></td>
                    <td className="td-time"><span>毕业（肄业）时间</span></td>
                    <td className="min-1"><span>阶段</span></td>
                    <td className="min-2"><span>院校</span></td>
                    <td className="min-2"><span>所学专业</span></td>
                </tr>
                <tr>
                    <td><span>1</span></td>
                    <td><span>xxxx</span></td>
                    <td><span>xxxx</span></td>
                    <td><span>xxxx</span></td>
                    <td><span>xxxx</span></td>
                    <td><span>xxxx</span></td>
                </tr>
            </table>
        </div>
        <div id="position_change" className="table-box">
            <div className="title"><i className="title_icon"><img src={positionIcon}></img></i><span
                className="title_span">任职变化</span></div>
            {potionDiv}
        </div>
    </div>
}

export default PersonalResume