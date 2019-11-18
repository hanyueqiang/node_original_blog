#!/bin/sh

cd D:\projects\nodejs\blog-1\logs
cp access.log $(data +%Y-%m-%d).access.log
echo "" > access.log