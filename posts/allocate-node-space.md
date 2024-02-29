---
title: Allocate and persist extra space for Node.js in Linux
keywords: Node.js Linix
---

`sudo service NetworkManager stop
sudo rm /etc/NetworkManager/system-connections/*
sudo service NetworkManager start
sudo ifdown th0 && sudo ifup eth0`