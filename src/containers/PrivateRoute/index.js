import { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import PropTypes from 'prop-types'
import toastr from 'toastr'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import { LoadingIndicator } from 'components'

export class PrivateRoute extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isLoading: true, //是否正在权限审核中
            isAuthed: false  //是否通过权限审核
        }
    }

    static PropTypes = {
        component: PropTypes.any.isRequired,
        funcCode: PropTypes.string.isRequired
    }

    checkAuth = async () => {
        let isAuthed = false
        const { isLogin, funcCode } = this.props;

        if(isLogin){
            //设定状态为正在审核中
            this.setState(state=>({...state,isLoading:true}))
        }

        if(!isAuthed) {
            //提示没有权限登录
            toastr.warning('无权使用,请先登录系统')
        }

        //更新状态 1.权限审核结束 2.权限审核结果
        this.setState(state => ({...state,isAuthed:isAuthed,isLoading:false}))
    }

    componentWillMount = async () => {
        await this.checkAuth()
    }

    componentWillReceiveProps = async (nextProps) => {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            await this.checkAuth()
        }
    }

    render () {
        const { component: Component, ...res } = this.props
        const { isLoading, isAuthed } = this.state

        return (
            isLoading === ture
                ? <LoadingIndicator />
                : <Route {...rest} render={props =>{
                    isAuthed
                      ? <Component {...props} />
                      : <Redirect to={{ pathname: '/login',state: { from: props.location } }} />
                }} />
        )
    }
}

const mapStateToProps = state => ({
    //登入系统后会于 redux中标记登入状态
    isLogin: get(state, 'auth.isLogin')  
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(PrivateRoute)