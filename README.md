# MakerWearBlockly
A visual programming interface based on [Blockly](https://developers.google.com/blockly/) that allows children to program their Programmable MakerWear modules to control other modules in a new way!

## Running and uploading the generated code on Windows:

0. install [node](https://nodejs.org/en/) (which comes with npm)
1. globally install electron: `npm install -g electron`. you should be able to run the electron app at this point by navigating to the MakerWearBlockly folder in your command line and then running `npm start`.
2. install [Arduino](https://www.arduino.cc/en/Main/Software)
3. add your Arduino's hardware\tools\avr\bin folder to your `PATH` environment variable. you should be able to run `avrdude` from now on in your command line.
4. install cygwin - we need it to build the generated .ino files with a Makefile. So make sure that you add "make" under dev as one of the tools to be installed.
5. add cygwin's bin folder to your `PATH` environment variable. Test to see if you're able to run `make` from the command line
7. open the [Makefile](https://github.com/myjeeed/MakerWearBlockly/blob/master/output/Makefile%20-%20windows) and change the following variables:
  * create a symbolic link to your Arduino folder and then set `ARDUINO_DIR` to point to the Arduino folder's shortcut. **Make sure that you're using a relative path** and NOT an absolute path (e.g. /cygdrive/c/...)
  * `AVR_TOOLS_DIR` should point (using a relative path) to the symbolic link that you created and then **/hardware/tools/avr** after it.
  * `ARDMK_DIR` should point (using absolute path) to MakerWearBlockly/ArduinoMakefile
8. open the [upload.bat](https://github.com/myjeeed/MakerWearBlockly/blob/master/upload.bat) file and change following:
  * `"C:\Program Files (x86)\Arduino\hardware\tools\avr\etc\avrdude.conf"` to the absolute path pointing to the `avrdude.conf` file.
  * change `-PCOM3` to `-PCOM#` (based on the serial port that is connected to the module that needs to be programmed.

OS X:

setting up upload.sh and the Makefile.


Local Node packages:
- node-cmd
- 
