#!/usr/bin/bash

coment=$1

git add *
git commit -m "$coment"
git branch -M main
git remote add origin https://github.com/gazevedo9962/Blog.git
git push -u origin main
