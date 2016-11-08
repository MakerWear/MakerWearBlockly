//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

goog.provide('Blockly.Blocks.makerwear');
goog.require('Blockly.Blocks');


Blockly.Blocks['mw_read_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read input")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "adc_channel");
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('read an input');
  }
};

Blockly.Blocks['mw_write_output'] = {
  init: function() {
    this.appendValueInput("pwm_value")
        .setCheck("Number")
        .appendField("write");
    this.appendDummyInput()
        .appendField("to output")
        .appendField(new Blockly.FieldDropdown([["1", "3"], ["2", "5"], ["3", "6"]]), "pwm_channel");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('');
  }
};

//MakerWear Specific Modules
//Sensors
Blockly.Blocks['mw_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("icons/Sensor/Button.png", 35, 35, "*"))
        .appendField("button")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number")
        .appendField("pressed");
    this.setOutput(true, ["Boolean", "Number"]);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mw_impact_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("icons/Sensor/ImpactSensor.png", 35, 35, "*"))
        .appendField("impact")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number")
        .appendField("detected?");
    this.setOutput(true, ["Boolean", "Number"]);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mw_tilt_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("icons/Sensor/TiltSensor.png", 35, 35, "*"))
        .appendField("is sensor")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number")
        .appendField("tilted?");
    this.setOutput(true, ["Boolean", "Number"]);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mw_distance_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("icons/Sensor/DistanceSensor.png", 35, 35, "*"))
        .appendField("sensed distance")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number");
    this.setOutput(true, "Number");
    this.setTooltip('motion intensity read from the Motion Detector sensor module.');
  }
};

Blockly.Blocks['mw_motion_detector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("icons/Sensor/MotionDetector.png", 35, 35, "*"))
        .appendField("motion intensity")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number");
    this.setOutput(true, "Number");
    this.setTooltip('motion intensity read from the Motion Detector sensor module.');
  }
};

Blockly.Blocks['mw_receiver'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("icons/Sensor/Receiver.png", 35, 35, "*"))
        .appendField("received value")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number");
    this.setOutput(true, "Number");
    this.setTooltip('motion intensity read from the Motion Detector sensor module.');
  }
};

Blockly.Blocks['mw_heart_beat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("icons/Sensor/HeartBeatDetector.png", 35, 35, "*"))
        .appendField("detect heartbeat")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number");
    this.setOutput(true, "Number");
    this.setTooltip('motion intensity read from the Motion Detector sensor module.');
  }
};

Blockly.Blocks['mw_color_detector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("icons/Sensor/ColorDetector.png", 35, 35, "*"))
        .appendField("color detected")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number");
    this.setOutput(true, "Color");
    this.setTooltip('motion intensity read from the Motion Detector sensor module.');
  }
};

Blockly.Blocks['mw_light_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("icons/Sensor/LightSensor.png", 35, 35, "*"))
        .appendField("light intensity")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number");
    this.setOutput(true, "Number");
    this.setTooltip('motion intensity read from the Motion Detector sensor module.');
  }
};

Blockly.Blocks['mw_temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("icons/Sensor/TemperatureSensor.png", 35, 35, "*"))
        .appendField("sensed temperature")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number");
    this.setOutput(true, "Number");
    this.setTooltip('motion intensity read from the Motion Detector sensor module.');
  }
};

Blockly.Blocks['mw_sound_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("icons/Sensor/SoundSensor.png", 35, 35, "*"))
        .appendField("sensed sound")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number");
    this.setOutput(true, "Number");
    this.setTooltip('motion intensity read from the Motion Detector sensor module.');
  }
};

Blockly.Blocks['mw_sunlight_detector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("icons/Sensor/SunLightDetector.png", 35, 35, "*"))
        .appendField("sunlight detected")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number");
    this.setOutput(true, "Number");
    this.setTooltip('motion intensity read from the Motion Detector sensor module.');
  }
};


Blockly.Blocks['mw_sunlight_detector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("icons/Sensor/SunLightDetector.png", 35, 35, "*"))
        .appendField("sunlight detected")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number");
    this.setOutput(true, "Number");
    this.setTooltip('motion intensity read from the Motion Detector sensor module.');
  }
};

//
// Blockly.Blocks['mw_sensor'] = {
//   init: function() {
//       var PROPERTIES =
//           [['Motion Detector', 'MotionDetector'],
//            ['Sound Sensor', 'SoundSensor']];
//
//     var thisBlock = this;
//     var img = "MotionDetector";
//
//     var x = this.appendDummyInput();
//         x.appendField(new Blockly.FieldImage("icons/Sensor/" + img + ".png", 35, 35, "*"), "icon");
//
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldDropdown(PROPERTIES, function(option) {
//             thisBlock.updateShape_(option, x);}))
//         .appendField("sunlight detected")
//         .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number");
//     this.setOutput(true, "Number");
//     this.setTooltip('motion intensity read from the Motion Detector sensor module.');
//     },
//     updateShape_: function(option, field) {
//         // this.appendField(new Blockly.FieldImage("icons/Sensor/" + option + ".png", 35, 35, "*"));
//         console.log(option);
//         // childBlock = null;
//         // childBlock = parentBlock.appendField(new Blockly.FieldImage("icons/Sensor/" + option + ".png", 35, 35, "*"));
//
//         field.removeField("icon");
//         field.appendField(new Blockly.FieldImage("icons/Sensor/" + option + ".png", 35, 35, "*"), "icon");
//     }
//

//v2
  Blockly.Blocks['mw_sensor'] = {
    init: function() {
        var PROPERTIES =
            [['Motion Detector', 'MotionDetector'],
             ['Sound Sensor', 'SoundSensor']];

      var thisBlock = this;

      var dummy = this.appendDummyInput();
          dummy.appendField(new Blockly.FieldImage("icons/Sensor/MotionDetector.png", 35, 35, "*"), "icon");
          dummy.appendField(new Blockly.FieldDropdown(PROPERTIES, function(option) {
              inputNumber = thisBlock.getFieldValue("input_number");
              thisBlock.updateShape_(option, dummy, PROPERTIES, thisBlock, inputNumber);}), "sensor_name");
          dummy.appendField("sunlight detected", "text");
          dummy.appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number");

      this.setOutput(true, "Number");
      this.setTooltip('motion intensity read from the Motion Detector sensor module.');
      },
      updateShape_: function(option, field, p, b, inpNum) {
          // this.appendField(new Blockly.FieldImage("icons/Sensor/" + option + ".png", 35, 35, "*"));
          console.log(option);
          // childBlock = null;
          // childBlock = parentBlock.appendField(new Blockly.FieldImage("icons/Sensor/" + option + ".png", 35, 35, "*"));

          var inp = b.getField("input_number").getValue();

          field.removeField("icon");
          field.removeField("sensor_name");
          field.removeField("text");
          field.removeField("input_number");

          field.appendField(new Blockly.FieldImage("icons/Sensor/" + option + ".png", 35, 35, "*"), "icon");
          var sensor_name = field.appendField(new Blockly.FieldDropdown(p, function(option) {
              b.updateShape_(option, field, p, b);}), "sensor_name");
          //sensor_name.setFieldValue(option);
          field.appendField("sunlight detected", "text");
          var input_number = field.appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]]), "input_number");
          //input_number.setFieldValue(inpNum);
          b.getField("sensor_name").setValue(option);
          b.getField("input_number").setValue(inp);

      }

    // /**
    // * Create XML to represent the output type.
    // * @return {Element} XML storage element.
    // * @this Blockly.Block
    // */
    // mutationToDom: function() {
    //     var container = document.createElement('mutation');
    //     container.setAttribute('op', this.getFieldValue('OP'));
    //     return container;
    // },
    // /**
    // * Parse XML to restore the output type.
    // * @param {!Element} xmlElement XML storage element.
    // * @this Blockly.Block
    // */
    // domToMutation: function(xmlElement) {
    //     this.updateType_(xmlElement.getAttribute('op'));
    // }
};


//Actions


//Modifiers
//Power
//Misc


// Blockly.Blocks['grove_led'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("LED")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/e/e0/LED1.jpg/400px-LED1.jpg", 64, 64))
//         .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
//         .appendField("stat")
//         .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('green LED');
//   }
// };
//
// Blockly.Blocks['grove_button'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Button',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("Button")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/9/93/Button1.jpg/400px-Button1.jpg", 64, 64))
//         .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
//     this.setOutput(true, 'Boolean');
//     this.setTooltip('Basic digital input');
//   }
// };
//
// Blockly.Blocks['grove_rotary_angle'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Potentiometer',
//   init: function() {
//     this.setColour(10);
//     this.appendDummyInput()
//         .appendField("Rotary Angle")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/5/59/Potentiometer1.jpg/400px-Potentiometer1.jpg", 64, 64))
//         .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
//     this.setOutput(true, 'Number');
//     this.setTooltip('Analog output between 0 and Vcc');
//   }
// };
//
// Blockly.Blocks['grove_tilt_switch'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Tilt_switch',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("Tilt Switch")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/9/95/Tilt1.jpg/400px-Tilt1.jpg", 64, 64))
//         .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
//     this.setOutput(true, 'Boolean');
//     this.setTooltip('When the switch is level it is open, and when tilted, the switch closes.');
//   }
// };
//
// Blockly.Blocks['grove_piezo_buzzer'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b#Grove_.E2.80.93_Buzzer',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("Piezo Buzzer")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/e/ed/Buzzer1.jpg/400px-Buzzer1.jpg", 64, 64))
//         .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
//         .appendField("stat")
//         .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('Emit a tone when the output is high');
//   }
// };
//
// Blockly.Blocks['grove_relay'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Relay',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("Relay")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/0/04/Twig-Relay1.jpg/400px-Twig-Relay1.jpg", 64, 64))
//         .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
//         .appendField("stat")
//         .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('capable of switching a much higher voltages and currents. The maximum voltage and current that can be controlled by this module upto 250V at 10 amps.');
//   }
// };
//
// Blockly.Blocks['grove_temporature_sensor'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/Project_Seven_-_Temperature',
//   init: function() {
//     this.setColour(10);
//     this.appendDummyInput()
//         .appendField("Temporature Sensor")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/b/b0/Temperature1.jpg/400px-Temperature1.jpg", 64, 64))
//         .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN")
//     this.setOutput(true, 'Number');
//     this.setTooltip('return number of ambient temperature in ℃');
//   }
// };
//
// Blockly.Blocks['grove_serial_lcd_print'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Serial_LCD',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("Serial LCD")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/6/6a/LCD1.jpg/400px-LCD1.jpg", 64, 64))
//         .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
//     this.appendValueInput("TEXT", 'String')
//         .setCheck('String')
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("print line1");
//     this.appendValueInput("TEXT2", 'String')
//         .setCheck('String')
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("print line2")
//     this.appendValueInput("DELAY_TIME", 'Number')
//         .setCheck('Number')
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("Delay");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('print text on an 16 character by 2 line LCD.');
//   }
// };
//
// //grove lcd power on/off
// Blockly.Blocks['grove_serial_lcd_power'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("Serial LCD")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/6/6a/LCD1.jpg/400px-LCD1.jpg", 64, 64))
//         .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
//     this.appendDummyInput()
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("Power")
//         .appendField(new Blockly.FieldDropdown([["ON", "ON"], ["OFF", "OFF"]]), "STAT");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('Turn LCD power on/off');
//   }
// };
//
// //scroll left/right/no scroll/blink/noblink
// Blockly.Blocks['grove_serial_lcd_effect'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("Serial LCD")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/6/6a/LCD1.jpg/400px-LCD1.jpg", 64, 64))
//         .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
//     this.appendDummyInput()
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("Effect")
//         .appendField(new Blockly.FieldDropdown([["Scroll Left", "LEFT"], ["Scroll Right", "RIGHT"], ["Scroll Auto", "AUTO"]]), "STAT");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('Turn LCD power on/off');
//   }
// };
//
// Blockly.Blocks['grove_sound_sensor'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Sound_Sensor',
//   init: function() {
//     this.setColour(10);
//     this.appendDummyInput()
//         .appendField("Sound Sensor")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/e/e3/Twig-Sound-sensor.jpg/400px-Twig-Sound-sensor.jpg", 64, 64))
//         .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN")
//     this.setOutput(true, 'Number');
//     this.setTooltip('Detect the sound strength of the environment');
//   }
// };
//
// Blockly.Blocks['grove_pir_motion_sensor'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_PIR_Motion_Sensor',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("PIR Motion Sensor")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/f/fd/Twig-PIR_Motion_Sensor.jpg/400px-Twig-PIR_Motion_Sensor.jpg", 64, 64))
//         .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
//     this.setOutput(true, 'Number');
//     this.setTooltip('When anyone moves in it\'s detecting range, the sensor outputs HIGH.');
//   }
// };
//
// Blockly.Blocks['grove_line_finder'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Line_Finder',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("Line Finder")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/8/82/Grovelinefinder1.jpg/400px-Grovelinefinder1.jpg", 64, 64))
// 	      .appendField("PIN#")
// 	      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
//     this.setOutput(true, 'Boolean');
//     this.setTooltip('Output digital signal so the robot can reliably follow a black line on a white background');
//   }
// };
//
// Blockly.Blocks['grove_ultrasonic_ranger'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Ultrasonic_Ranger',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
// 	      .appendField("Ultrasonic Ranger")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/b/b0/Twig_-_Ultrasonic_Ranger2.jpg/200px-Twig_-_Ultrasonic_Ranger2.jpg", 64, 64))
// 	      .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
//         .appendField("unit")
//         .appendField(new Blockly.FieldDropdown([["cm", "cm"],  ["inch", "inch"]]), "UNIT");
//     this.setOutput(true, 'Number');
//     this.setTooltip('Non-contact distance measurement module');
//   }
// };
//
// Blockly.Blocks['grove_motor_shield'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/Motor_Shield',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("Motor")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/4/4d/Smotoshield2.jpg/400px-Smotoshield2.jpg", 64, 64))
//         .appendField(new Blockly.FieldDropdown([["Stop", "stop"], ["Forward", "forward"], ["Right", "right"], ["Left", "left"], ["Backward", "backward"]]), "DIRECTION");
//     /*this.appendValueInput("SPEED", 'Number')
//         .setCheck('Number')
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("Speed");*/
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('Drive two brushed DC motors');
//   }
// };
//
// Blockly.Blocks['grove_thumb_joystick'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Thumb_Joystick',
//   init: function() {
//     this.setColour(10);
//     this.appendDummyInput()
// 	.appendField("Thumb Joystick")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/e/e0/Twig_-_Thumb_Joystick_v0.9b.jpg/200px-Twig_-_Thumb_Joystick_v0.9b.jpg", 64, 64))
// 	.appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN")
//         .appendField("axis")
//         .appendField(new Blockly.FieldDropdown([["x", "x"],  ["y", "y"]]), "AXIS");
//     this.setOutput(true, 'Number');
// this.setTooltip('output two analog values(200~800) representing two directions');
//   }
// };
//
// Blockly.Blocks['grove_rgb_led'] = {
//   helpUrl: 'http://www.seeedstudio.com/wiki/index.php?title=Twig_-_Chainable_RGB_LED',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//   .appendField("Chainable RGB LED")
//         .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/depot/images/product/chanbalelednb1.jpg", 64, 64))
//   .appendField("PIN#")
//         .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
//     this.appendDummyInput("COLOR0")
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("Color 1")
//         .appendField(new Blockly.FieldColour("#00ff00"), "RGB0");
//     this.setMutator(new Blockly.Mutator(['grove_rgb_led_item']));
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('256 color LED, currently Chainable feature is not support');
//     this.itemCount_ = 1;
//   },
//   mutationToDom: function() {
//     var container = document.createElement('mutation');
//     container.setAttribute('items', this.itemCount_);
//     for (var x = 0; x < this.itemCount_; x++) {
//       var colour_rgb = this.getFieldValue('RGB0');
//       //alert(colour_rgb);
//       container.setAttribute('RGB' + x, colour_rgb);
//     }
//     return container;
//   },
//   domToMutation: function(xmlElement) {
//     for (var x = 0; x < this.itemCount_; x++) {
//       this.removeInput('COLOR' + x);
//     }
//     this.itemCount_ = window.parseInt(xmlElement.getAttribute('items'), 10);
//     for (var x = 0; x < this.itemCount_; x++) {
//       var color = window.parseInt(xmlElement.getAttribute('RGB'+x), "#00ff00");
//       var input = this.appendDummyInput('COLOR' + x);
//       //if (x == 0) {
//         input.setAlign(Blockly.ALIGN_RIGHT)
//              .appendField("Color "+(x+1))
//              .appendField(new Blockly.FieldColour(color), "RGB" + x);
//       //}
//     }
//     if (this.itemCount_ == 0) {
//       this.appendDummyInput('COLOR0')
//           .setAlign(Blockly.ALIGN_RIGHT)
//           .appendField("Color 1")
//           .appendField(new Blockly.FieldColour("#00ff00"), "RGB0");
//     }
//   },
//   decompose: function(workspace) {
//     var containerBlock = Blockly.Block.obtain(workspace,
//                                               'grove_rgb_led_container');
//     containerBlock.initSvg();
//     var connection = containerBlock.getInput('STACK').connection;
//     for (var x = 0; x < this.itemCount_; x++) {
//       var itemBlock = Blockly.Block.obtain(workspace, 'grove_rgb_led_item');
//       itemBlock.initSvg();
//       connection.connect(itemBlock.previousConnection);
//       connection = itemBlock.nextConnection;
//     }
//     return containerBlock;
//   },
//   compose: function(containerBlock) {
//     // Disconnect all input blocks and remove all inputs.
//     if (this.itemCount_ == 0) {
//       this.removeInput('COLOR0');
//     } else {
//       for (var x = this.itemCount_ - 1; x >= 0; x--) {
//         //console.log("cnt:"+x);
//         this.removeInput('COLOR' + x);
//       }
//     }
//     /*var top;
//     if(this.itemCount_ > 0){
//       top = this.itemCount_-1;
//     } else {
//       top = 0;
//     }
//     console.log("top:"+top);*/
//     this.itemCount_ = 0;
//     // Rebuild the block's inputs.
//     var itemBlock = containerBlock.getInputTargetBlock('STACK');
//     while (itemBlock) {
//       var colour_rgb = this.getFieldValue('RGB' + this.itemCount_);
//       if(colour_rgb==null){
//           colour_rgb = "00ff00";
//       }
//       //console.log("blk:"+this.itemCount_);
//       /*if(top>this.itemCount_){
//         this.removeInput('COLOR' + this.itemCount_);
//       }*/
//       var input = this.appendDummyInput('COLOR' + this.itemCount_);
//       //if (this.itemCount_ == 0) {
//         input.setAlign(Blockly.ALIGN_RIGHT)
//              .appendField("Color " + (this.itemCount_+1))
//              .appendField(new Blockly.FieldColour(colour_rgb), "RGB" + this.itemCount_);
//       //}
//       // Reconnect any child blocks.
//       if (itemBlock.valueConnection_) {
//         input.connection.connect(itemBlock.valueConnection_);
//       }
//       this.itemCount_++;
//       itemBlock = itemBlock.nextConnection &&
//           itemBlock.nextConnection.targetBlock();
//     }
//     if (this.itemCount_ == 0) {
//       this.appendDummyInput('COLOR0')
//           .setAlign(Blockly.ALIGN_RIGHT)
//           .appendField("Color 1")
//           .appendField(new Blockly.FieldColour("#00ff00"), "RGB0");
//     }
//   }
//   /*saveConnections: function(containerBlock) {
//     // Store a pointer to any connected child blocks.
//     var itemBlock = containerBlock.getInputTargetBlock('STACK');
//     var x = 0;
//     while (itemBlock) {
//       var input = this.getInput('COLOR' + x);
//       itemBlock.valueConnection_ = input && input.connection.targetConnection;
//       x++;
//       itemBlock = itemBlock.nextConnection &&
//           itemBlock.nextConnection.targetBlock();
//     }
//   }*/
// };
//
// Blockly.Blocks['grove_rgb_led_container'] = {
//   // Container.
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("Container");
//     this.appendStatementInput('STACK');
//     this.setTooltip("Add, remove items to reconfigure this chain");
//     this.contextMenu = false;
//   }
// };
//
// Blockly.Blocks['grove_rgb_led_item'] = {
//   // Add items.
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//         .appendField("Item");
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//     this.setTooltip("Add an item to the chain");
//     this.contextMenu = false;
//   }
// };
//
// Blockly.Blocks['grove_bluetooth_slave'] = {
//   category: 'Network',
//   helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Serial_Bluetooth',
//   init: function() {
//     this.setColour(190);
//     this.appendDummyInput()
//       .appendField("Bluetooth Slave")
//       .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/File:Twigbt00.jpg", 64, 64))
//       .appendField("PIN#")
//       .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
//     this.appendDummyInput()
//       .setAlign(Blockly.ALIGN_RIGHT)
//       .appendField("Name")
//       .appendField(new Blockly.FieldTextInput('blocklyduino'), 'NAME');
//     this.appendDummyInput()
//       .setAlign(Blockly.ALIGN_RIGHT)
//       .appendField("Pincode")
//       .appendField(new Blockly.FieldTextInput('0000'), 'PINCODE');
//     this.appendStatementInput("RCV")
//       .setAlign(Blockly.ALIGN_RIGHT)
//       .appendField("Receive");
//     this.appendStatementInput("SNT")
//       .setAlign(Blockly.ALIGN_RIGHT)
//       .appendField("Send");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip('Bluetooth V2.0+EDR slave. Support single slave per board');
//   }
// };
