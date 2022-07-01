function render(vnode,dom) {
	//vnode ==> node
	const node = createNode(vnode);
	
	dom.appendChild(node);
}
//创建父节点
function createNode(vnode) {
	let {type,props} = vnode;
	let node;
	if(type==='TEXT'){
		node = document.createTextNode('');
	}else if(typeof type==='function'){
		node = createFCNode(vnode);
	} else{
		node = document.createElement(type);
	}
	const {children,...restProps} = props;
	createChildNode(node,children);
	updateNode(node,restProps);
	return node;
}

//更新节点属性
//还需要考虑style等属性
function updateNode(node,restProps) {
	Object.keys(restProps).forEach(key=>{
		node[key] = restProps[key];
	})
}

//循环创建子节点
function createChildNode(node,children) {
	Array.from(children).forEach(child=>{
		render(child,node);
	})
}

//创建方法组件
function createFCNode(vnode) {
	let {type,props} = vnode;
	const _vnode = type(props);
	return createNode(_vnode);
}

export default { render };