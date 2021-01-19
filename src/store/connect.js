import React,{Component} from 'react';
import store from './index';

export function connect(mapStateToProps){
	return function (ReactComponent){
		return class ConnectComponent extends Component{
			constructor(){
				super();
				this.state = mapStateToProps(store.getState());
			}
			componentDidMount(){
				this.unSub = store.subscribe(()=>{
					this.setState(mapStateToProps(store.getState()));
				});
			}
			componentWillUnmount(){
				this.unSub();
			}
			render(){
				const dispatch = store.dispatch;
				return <ReactComponent dispatch={dispatch} {...this.state} />
			}
		}
	}
}