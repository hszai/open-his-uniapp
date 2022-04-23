/** *
 * 构造树的数据结构
 * @param data 要构造的数据源
 * @param id 字段ID  默认为id
 * @param parentId 父节点字端  默认为parentId
 * @param children 子节点的字段 默认为children
 * @param rootId 根节点的ID  默认为0
 */
export function handleTree(data, id, parentId, children, rootId) {
	id = id || 'id'
	parentId = parentId || 'parentId'
	children = children || 'children'
	rootId = rootId || 0
	// 对源数据进行深度克隆
	const cloneData = JSON.parse(JSON.stringify(data))
	// 循环所有的项目
	const treeData = cloneData.filter(father => {
		const branchArr = cloneData.filter(child => {
			return father[id] === child[parentId]
		})
		branchArr.length > 0 ? father.children = branchArr : ''
		// 返回上一层
		return father[parentId] === rootId
	})
	return treeData !== '' ? treeData : data
}
