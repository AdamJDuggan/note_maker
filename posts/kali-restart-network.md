---
title: Restart network manager in kali
keywords: Kali Linux Network Manager
---

`sudo service NetworkManager stop
sudo rm /etc/NetworkManager/system-connections/*
sudo service NetworkManager start
sudo ifdown th0 && sudo ifup eth0`
