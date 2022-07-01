function createElement(type, config, ...children) {
	//创建虚拟dom
	//config中暂未考虑到react保留字段key，ref等
	return {
		type,
		props:{
			...config,
			children:children.map(child=>typeof child==='string'?createTextNode(child):child)
		},
	}
}

//为了统一数据类型，添加的此方法
function createTextNode(text) {
	return {
		type:'TEXT',
		props:{
			children:[],
			nodeValue:text
		}
	}
}

export default { createElement };