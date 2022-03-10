<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [qnrtc-uniapp-sdk](./qnrtc-uniapp-sdk.md) &gt; [QNTrack](./qnrtc-uniapp-sdk.qntrack.md) &gt; [on](./qnrtc-uniapp-sdk.qntrack.on.md)

## QNTrack.on() method

监听对应的事件，支持多次调用同一事件

<b>Signature:</b>

```typescript
on<event extends keyof QNRTCTrackEvent>(name: event, listener: QNRTCTrackEvent[event]): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  name | event | 事件名 |
|  listener | [QNRTCTrackEvent](./qnrtc-uniapp-sdk.qnrtctrackevent.md)<!-- -->\[event\] | 事件句柄 |

<b>Returns:</b>

void
