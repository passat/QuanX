/***********************************

> 应用名称：百度文库
> 脚本功能：解锁VIP文档阅读权限
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 更新时间：2022-10-19
> 通知频道：https://t.me/ddgksf2021
> 投稿助手：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com 
> 特别说明：本脚本仅供学习交流使用，禁止转载、售卖
            
            
[rewrite_local]

# ～ 百度文库☆解锁VIP文档阅读权限（2022-10-17）@ddgksf2013
^https:\/\/appwk\.baidu\.com\/naapi\/user\/getinfo url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/baidulibrary.js

[mitm]

hostname=appwk.baidu.com

***********************************/

let ddgksf2013 = JSON.parse($response.body);
ddgksf2013.data.vip.base_vip_info={"uid":12345678,"type":2,"start_time":1622222200,"end_time":4622222200,"is_vip":1,"remain_day":999,"pro_total":5,"normal_total":5};
$done({ body: JSON.stringify(ddgksf2013) });
