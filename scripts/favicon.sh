#!/bin/bash

inkscape -z -e ../public/launcher-icon-1x.png -w 48 -h 48 images/launcher.svg

inkscape -z -e ../public/launcher-icon-2x.png -w 96 -h 96 images/launcher.svg

inkscape -z -e ../public/launcher-icon-4x.png -w 192 -h 192 images/launcher.svg

convert ../public/launcher-icon-4x.png -define icon:auto-resize=64,48,32,16 ../public/favicon.ico
