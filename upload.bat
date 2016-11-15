#!/bin/bash
cd output
Make
avrdude -C "C:\Program Files (x86)\Arduino\hardware\tools\avr\etc\avrdude.conf" -v -patmega328p -carduino -PCOM4 -b57600 -D -Uflash:w:build-atmega328bb/output.hex:i
