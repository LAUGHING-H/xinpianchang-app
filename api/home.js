//获取首页Tab选项数据
export const getTopTabBerData = async () => {
	let [err, res] = await uni.request({
		url: 'https://apis.netstart.cn/xpc/home/config',
	});

	return res.data
}
