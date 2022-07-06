# J.XUAN-External-converters
京鱼座智能家居套装外部转换器

### 食用方法一：
1. 先将设备在zigbee2mqtt中配对
2. 将jingxuan.js放入home assistant目录，放入后完整路径为：/config/zigbee2mqtt/jingxuan.js
3. 然后在zigbee2mqtt-设置-外部转换器，加你刚才放入的转换器文件名。如jingxuan.js，添加成功够重新启动该加载项
4. 等待启动完成后，稍事休息，既可看到用转换器处理后暴露出来的方法和状态
5. 如果等待了一段时间无法触发新特性，可以尝试删除该设备重新配对

### 食用方法二：
1. 先将设备在zigbee2mqtt中配对
2. 将jingxuan.js放入home assistant目录，放入后完整路径为：/config/zigbee2mqtt/jingxuan.js
3. 然后在homeassistant-配置-加载项-Zigbee2MQTT-配置-右上角三个点点击-以YAML编辑，找到external_converters字段，在下面填入
```yaml
external_converters:
  - jingxuan.js
```
添加成功够重新启动该加载项
4. 配置修改后，重新启动该加载项
5. 等待启动完成后，稍事休息，既可看到用转换器处理后暴露出来的方法和状态
6. 如果等待了一段时间无法触发新特性，可以尝试删除该设备重新配对


### 交流
- QQ群：198841186

- 微信群：(添加该机器人，发送“进群”会自动发送邀请链接）

![xiaomi miot weixin group](https://user-images.githubusercontent.com/4549099/161735971-0540ce1c-eb49-4aff-8cb3-3bdad15e22f7.png)