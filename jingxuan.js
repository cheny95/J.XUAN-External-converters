const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const fzLocal = {
    WSZ01_on_off_action: {
        cluster: '65029',
        type: ['attributeReport'],
        convert: (model, msg, publish, options, meta) => {
            const clickMapping = {0: 'release', 1: 'single', 2: 'double', 3: 'hold'};
            return {action: `${clickMapping[msg.data[1]]}`};
        },
    },
};

module.exports = [
    // 人体传感器
    // 人传配对方式：长按重置键，网关发现后，每隔一秒按一次重置键
    {
        zigbeeModel: ['wall pir'],
        model: 'PRZ01',
        vendor: 'J.XUAN',
        description: 'Human body movement sensor',
        fromZigbee: [fz.ias_occupancy_alarm_1_with_timeout, fz.battery],
        toZigbee: [],
        exposes: [e.occupancy(), e.battery_low(), e.battery()],
    },
    // 无线开关
    {
        zigbeeModel: ['JD-SWITCH\u000002'],
        model: 'WSZ01',
        vendor: 'J.XUAN',
        description: 'Wireless switch',
        supports: "action, battery, linkquality",
        fromZigbee: [fzLocal.WSZ01_on_off_action,fz.battery],
        toZigbee: [],
        exposes: [e.action(['release', 'single', 'double', 'hold']), e.battery()],
    },
    // 插座
    {
        zigbeeModel: ['00090bdc'],
        model: 'SPZ01',
        vendor: 'J.XUAN',
        description: 'plug',
        fromZigbee: [fz.on_off, fz.electrical_measurement, fz.metering],
        exposes: [e.switch(), e.power(), e.power_outage_memory().withAccess(ea.STATE_SET), e.energy()],
        toZigbee: [tz.on_off, tz.SPZ01_power_outage_memory],
        configure: async (device, coordinatorEndpoint, logger) => {
            const endpoint = device.getEndpoint(1);
            await reporting.bind(endpoint, coordinatorEndpoint, ['genOnOff', 'haElectricalMeasurement']);
        },
    },
]