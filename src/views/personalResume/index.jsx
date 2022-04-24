import './index.less'
import familyIcon from '../../assets/icons/family.png'
function personalResume() {
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
    </div>
}

export default personalResume