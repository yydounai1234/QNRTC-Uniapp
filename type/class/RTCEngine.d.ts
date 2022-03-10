import { QNScreenPermissionResultCallback } from '../RTCPreset';
import { QNRTCConfiguration, QNMicrophoneAudioTrackConfig, QNCustomAudioTrackConfig, QNCameraVideoTrackConfig, QNScreenVideoTrackConfig, QNCustomVideoTrackConfig } from '../interface/RTCInterface';
import { RTCClient as QNRTCClient } from './RTCClient';
import { QNCameraVideoTrack } from './RTCCameraVideoTrack';
import { QNMicrophoneAudioTrack } from './RTCMicrophoneAudioTrack';
import { QNScreenVideoTrack } from './RTCScreenVideoTrack';
import { QNTrack } from './RTCTrack';
import { QNRTCEngineEvent } from '../RTCEvent';
/**
 * RTCEngine 是 SDK 的入口
 * @remarks 提供了 SDK 配置，创建本地音视频轨道，创建房间对象等一系列方法
 */
export declare class RTCEngine {
    /**
     * 监听对应的事件，支持多次调用同一事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    static on<event extends keyof QNRTCEngineEvent>(name: event, listener: QNRTCEngineEvent[event]): void;
    /**
     * 取消监听对应的事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    static off<event extends keyof QNRTCEngineEvent>(name: event, listener: QNRTCEngineEvent[event]): void;
    /**
     * 请求录屏权限
     * @remarks 只支持安卓，创建 QNScreenVideoTrack 前安卓需要调用此接口获取对应权限
     * @param callback 请求录屏权限后回调
     */
    static requestPermission(callback: QNScreenPermissionResultCallback): void;
    /**
     * 请判断屏幕录制功能是否可用
     * @remarks 建议创建 QNScreenVideoTrack 前先调用次接口确认是否支持录屏
     * @returns 可用 1 不可用 0
     */
    static isScreenCaptureSupported(): number;
    /**
     * 初始化 SDK
     * @remarks 必须在使用其它接口前调用
     * @param config 初始化配置项
     */
    static configRTC(config: QNRTCConfiguration): void;
    /**
     * 反初始化操作
     * @remarks 在确认不再使用实时音视频后调用此接口释放其占用的资源，此后如果再使用需要再次调用 configRTC 方法
     */
    static deinit(): void;
    /**
     * 创建 QNRTCClient 对象
     * @remarks 全局只可存在一个
     * @returns RTC 管理对象
     */
    static createClient(): QNRTCClient;
    /**
     * 创建麦克风音频轨
     * @remarks 默认 tag 为 ""
     * @param config 采集音频的配置，可指定音频质量等级与开关通讯模式
     * @returns Track 实例
     */
    static createMicrophoneAudioTrack(config: QNMicrophoneAudioTrackConfig): QNMicrophoneAudioTrack;
    /**
     * 创建摄像头视频轨
     * @remarks 默认 tag 为 ""
     * @param config 摄像头 Track 的配置，可设置视频的采集配置、编码配置等
     * @returns QNCameraVideoTrack 实例
     */
    static createCameraVideoTrack(config: QNCameraVideoTrackConfig): QNCameraVideoTrack;
    /**
     * 创建屏幕录制轨
     * @remarks 默认 tag 为 ""
     * @param config 屏幕录制 Track 的配置，可设置视频的编码配置与开关大小流功能
     * @returns QNScreenVideoTrack 实例
     */
    static createScreenVideoTrack(config: QNScreenVideoTrackConfig): QNScreenVideoTrack;
    /**
     * 创建自定义音频轨
     * @remakrs 默认 tag 为 ""，暂不支持自定义轨
     * @internal
     * @param config 采集音频的配置，可指定音频质量等级
     * @returns Track 实例
     */
    static createCustomAudioTrack(config: QNCustomAudioTrackConfig): QNTrack;
    /**
     * 创建自定义视频采集轨
     * @remarks 默认 tag 为 ""，暂不支持自定义轨
     * @internal
     * @param config 自定义视频采集 Track 的配置，可设置视频的编码配置与开关大小流功能
     * @returns Track 实例
     */
    static createCustomVideoTrack(config: QNCustomVideoTrackConfig): QNTrack;
    /**
     * 音频路由切换
     * @remarks 设置是否将音频路由切换到扬声器，默认音频路由为扬声器
     * @param audioRouteToSpeakerphone 初始化配置项
     */
    static setAudioRouteToSpeakerphone(audioRouteToSpeakerphone: boolean): void;
    /**
     * 设置是否开启本地日志保存
     */
    static enableFileLogging(): void;
}