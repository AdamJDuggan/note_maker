---
title: Restart NetworkManager in Kali
keywords: Kali Linux NetworkManager
---

```
sudo service NetworkManager stop
sudo rm /etc/NetworkManager/system-connections/*
sudo service NetworkManager start
sudo ifdown th0 && sudo ifup eth0
```
