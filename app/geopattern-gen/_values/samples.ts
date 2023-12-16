import { GeometricPatterSampleType } from "../_types/_types";



export const geometricSamples: GeometricPatterSampleType[] = [
    {
        title: '不機嫌なライオン',
        bgColor: '#F6AD55',
        circles: [
            { lineLength: 100, angle: 57.3, reverse: false, drawTrajectory: false, drawNeedle: true, color: '#000000' },
            { lineLength: 82, angle: 16.2, reverse: true, drawTrajectory: false, drawNeedle: true, color: '#000000' },
            { lineLength: 78, angle: 155.7, reverse: false, drawTrajectory: true, drawNeedle: true, color: '#000000' },
        ]
    },
    {
        title: '回転三角',
        bgColor: '#000000',
        circles: [
            { lineLength: 120, angle: 120.1, reverse: false, drawTrajectory: false, drawNeedle: false, color: '#000000' },
            { lineLength: 10, angle: 121, reverse: false, drawTrajectory: false, drawNeedle: false, color: '#000000' },
            { lineLength: 120, angle: 119, reverse: false, drawTrajectory: true, drawNeedle: false, color: '#a500e0' },
        ]
    },
    {
        title: 'バネ工場',
        bgColor: '#ededed',
        circles: [
            { lineLength: 100, angle: 0.4, reverse: false, drawTrajectory: false, drawNeedle: true, color: '#000000' },
            { lineLength: 10, angle: 44, reverse: false, drawTrajectory: false, drawNeedle: true, color: '#000000' },
            { lineLength: 100, angle: 0.1, reverse: false, drawTrajectory: true, drawNeedle: true, color: '#000000' },
            { lineLength: 100, angle: 0.1, reverse: true, drawTrajectory: true, drawNeedle: true, color: '#454545' },
        ]
    },
    {
        title: 'カラフル4層',
        bgColor: '#f5f5f5',
        circles: [
            { lineLength: 150, angle: 0.5, reverse: false, drawTrajectory: false, drawNeedle: false, color: '#ffffff' },
            { lineLength: 100, angle: 179.7, reverse: false, drawTrajectory: true, drawNeedle: true, color: '#ff3300' },
            { lineLength: 30, angle: 0, reverse: false, drawTrajectory: true, drawNeedle: true, color: '#ffc800' },
            { lineLength: 30, angle: 0, reverse: false, drawTrajectory: true, drawNeedle: true, color: '#00ff2a' },
            { lineLength: 30, angle: 0, reverse: false, drawTrajectory: true, drawNeedle: true, color: '#006eff' },
        ]
    },
    {
        title: '3Dドーナッツ',
        bgColor: '#fffae0',
        circles: [
            { lineLength: 180, angle: 12.1, reverse: false, drawTrajectory: false, drawNeedle: true, color: '#000000' },
            { lineLength: 80, angle: 3.1, reverse: false, drawTrajectory: true, drawNeedle: true, color: '#3d1e00' },
        ]
    },
    {
        title: 'ロボット生成',
        bgColor: '#ffffff',
        circles: [
            { lineLength: 50, angle: 179.9, reverse: false, drawTrajectory: true, drawNeedle: true, color: '#292929' },
            { lineLength: 10, angle: 179.9, reverse: true, drawTrajectory: true, drawNeedle: true, color: '#000000' },
            { lineLength: 188, angle: 0.1, reverse: false, drawTrajectory: true, drawNeedle: true, color: '#c20000' },
        ]
    },
    {
        title: 'ひまわり',
        bgColor: '#007bff',
        circles: [
            { lineLength: 40, angle: 1.1, reverse: false, drawTrajectory: false, drawNeedle: true, color: '#b38300' },
            { lineLength: 100, angle: 15, reverse: true, drawTrajectory: true, drawNeedle: true, color: '#cda842' },
            { lineLength: 100, angle: 9.9, reverse: false, drawTrajectory: true, drawNeedle: true, color: '#ffd500' },
        ]
    },
];
