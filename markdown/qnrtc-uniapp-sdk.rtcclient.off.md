<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [qnrtc-uniapp-sdk](./qnrtc-uniapp-sdk.md) &gt; [RTCClient](./qnrtc-uniapp-sdk.rtcclient.md) &gt; [off](./qnrtc-uniapp-sdk.rtcclient.off.md)

## RTCClient.off() method

取消监听对应的事件

<b>Signature:</b>

```typescript
off<event extends keyof QNRTCClinetEvent>(name: event, listener: QNRTCClinetEvent[event]): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  name | event | 事件名 |
|  listener | [QNRTCClinetEvent](./qnrtc-uniapp-sdk.qnrtcclinetevent.md)<!-- -->\[event\] | 事件句柄 |

<b>Returns:</b>

void
