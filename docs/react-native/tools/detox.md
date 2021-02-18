# Detox instructions

[DETOX Documentation](https://github.com/wix/Detox)

```bash
detox build  --configuration ios
```

```bash
detox test  --configuration ios
```

```bash
detox test --loglevel verbose --configuration ios --debug-synchronization 1000
```

```bash
detox build  --configuration android
```

```bash
detox test  --configuration android
```

Open Xcode 10, File > Project Settings > Build System. Change build place to:

<img src="../../image/iosBuildDetox.png" alt="info" title="info" align="left"  />
