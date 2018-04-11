/* 登录组件 */
import React ,{ Component }from 'react';
import promise from 'es6-promise';
import {Link} from 'react-router-dom';
import 'isomorphic-fetch';
promise.polyfill();


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name1:'登录-Login.jsx'
        }
    }

    render() {
        return (
            <div>
                <h1>我是 {this.state.name1} 页面</h1>
                <Link to="/demo" >登录超级链接</Link>
            </div>
        )
    }

}
export default Login;
