/* 登录组件 */
import React ,{ Component }from 'react';
import {Link} from 'react-router-dom';

import './style.css';

class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name1:'DEMO.jsx'
        }
    }

    render() {
        return (
            <div>
                <h1>我是 {this.state.name1} 页面</h1>
                <Link to="/login" >demo的超级链接</Link>
            </div>
        )
    }

}
export default Demo;
