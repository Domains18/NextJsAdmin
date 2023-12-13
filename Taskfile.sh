#!/usr/bin/zsh/bash

# task file.sh

app_dir="./app"


for folder in "$app_dir"/*; do
  if [ -d "$folder" ]; then
    touch "$folder/$(basename "$folder").module.css"
  fi

done
