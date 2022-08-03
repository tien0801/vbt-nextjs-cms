#!/bin/bash

echo " "
echo "Checking source code"
echo "**************************"

echo "=================== CHECK SOURCE AN VIET CMS ==================="
yarn check:ts
if [ $? -ne 0 ]; then
    echo "=================== CHECK SOURCE AN VIET CMS ERROR ==================="
    exit
fi

echo "=================== ESLINT AN VIET CMS SOURCE ==================="
yarn es:run
if [ $? -ne 0 ]; then
    echo "=================== ESLINT AN VIET CMS SOURCE ERROR ==================="
    exit
fi

echo "=================== BUILD AN VIET CMS SOURCE ==================="
yarn build:production
if [ $? -ne 0 ]; then
    echo "=================== BUILD AN VIET CMS SOURCE ERROR ==================="
    exit
fi


echo "=================== SOURCE CODE CLEAN SUCCESSFULLY ==================="