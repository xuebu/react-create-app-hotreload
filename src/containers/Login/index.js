/* 组织角色 统一导出供其他组件调用 */


import * as actions from './action';
import reducer from './reducer.js';
import views from './view/Login';
export {actions,reducer,view};

/* 其他组件引用方法 */
// import {actions,reducer,views as Todolist}  from '../todolist'