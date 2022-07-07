from custom_components.xiaomi_gateway3.core.converters.devices import *


# 京鱼座智能家居套装

class ZJingDongButtonConv(ZMapConv):
    zigbee = "manufacturer_specific"
    zattr = 1
    map = {0: RELEASE, 1: SINGLE, 2: DOUBLE, 3: HOLD}


DEVICES = [
{
    "JD-SWITCH": ["JingDong", "WSZ01 button", "WSZ01"],
    "spec": [
        ZJingDongButtonConv("action", "sensor"),
        ZBatteryConv("battery", "sensor"),
    ],
},
{
    "00090bdc": ["JingDong", "SPZ01 plug", "SPZ01"],
    "spec": [
        ZSwitch,
        ZPowerConv('power', 'sensor'),
        ZEnergyConv("energy", "sensor", multiply=0.01),
    ],
},
{
    "door sensor": ["JingDong", "DSZ01 contact", "DSZ01"],
    "spec": [
        ZIASZoneConv("contact", "binary_sensor"),
        ZBatteryConv("battery", "sensor"),
    ],
},
{
    # 人传配对方式：长按重置键，多模发现后，每隔一秒按一次重置键
    "wall pir": ["JingDong", "PRZ01 motion", "PRZ01"],
    "spec": [
        ZIASZoneConv("motion", "binary_sensor"),
        ZBatteryConv("battery", "sensor"),
    ],
},
] + DEVICES
