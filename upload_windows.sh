#!/bin/bash
cd output
Make
C:\Program Files (x86)\Arduino\hardware\tools\avr/bin/avrdude -CC:\Program Files (x86)\Arduino\hardware\tools\avr/etc/avrdude.conf -v -patmega328p -carduino -PCOM3 -b115200 -D -Uflash:w:build-uno/output.hex:i
