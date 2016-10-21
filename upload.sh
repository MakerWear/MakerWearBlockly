#!/bin/bash
cd output
Make
/Applications/Arduino.app/Contents/Java/hardware/tools/avr/bin/avrdude -C/Applications/Arduino.app/Contents/Java/hardware/tools/avr/etc/avrdude.conf -v -patmega328p -carduino -P/dev/cu.usbmodem1421 -b115200 -D -U flash:w:build-uno/output.hex
