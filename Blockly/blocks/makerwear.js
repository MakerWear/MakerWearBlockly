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

 // Updated by Majeed on Oct, Nov 2016
 // Updated Blockly version to the latest Blockly (based on Google's github code)
 // Added MakerWear related blocks

goog.provide('Blockly.Blocks.makerwear');
goog.require('Blockly.Blocks');

//general block to analog read from an input
Blockly.Blocks['mw_read_input'] = {
  init: function() {
    var thisBlock = this;

    this.appendDummyInput()
        .appendField("read input")
        .appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]], function(option) {
            thisBlock.updatePosition(option);}), "adc_channel");
    this.setOutput(true, null);
    this.setColour(320);
    this.setTooltip('TODO');
  },
  updatePosition: function(option) {
    console.log(option);
  }
};

//general block to analog write into a output
Blockly.Blocks['mw_write_output'] = {
  init: function() {
    var thisBlock = this;

    this.appendValueInput("pwm_value")
        .setCheck("Number")
        .appendField("write");
    this.appendDummyInput()
        .appendField("to output")
        .appendField(new Blockly.FieldDropdown([["1", "3"], ["2", "5"], ["3", "6"], ["Built-in LED", "13"]], function(option) {
            thisBlock.updatePosition(option);}), "pwm_channel");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('TODO');
  },
  updatePosition: function(option) {
    console.log(option);
  }
};



//specific block for sensing movement inputs
Blockly.Blocks['mw_sense_movement'] = {
  init: function() {
      var PROPERTIES =
          [['Tilt Sensor', 'TiltSensor'],
           ['Impact Sensor', 'ImpactSensor'],
           ['Motion Detector', 'MotionDetector'],
           ['Distance Sensor', 'DistanceSensor'],
           ['Button', 'Button']];

    var thisBlock = this;

    var fieldGroup = this.appendDummyInput();
        fieldGroup.appendField(new Blockly.FieldImage("icons/Sensor/TiltSensor.png", 35, 35, "*"), "icon");
        fieldGroup.appendField(new Blockly.FieldDropdown(PROPERTIES, function(option) {
            thisBlock.updateShape(option, fieldGroup, thisBlock, PROPERTIES);}), "sensor_name");
        fieldGroup.appendField("sensor value", "text");
        fieldGroup.appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]], function(option) {
            thisBlock.updatePosition(option, thisBlock);}), "input_number");

    this.setOutput(true, "Number");
    this.setTooltip('TODO.');
    this.setColour(320);
    },
    updateShape: function(option, field, block, PROPERTIES) {
        // console.log(option);

        //store current values of the DropDown menus
        var input_number = block.getField("input_number").getValue();

        field.removeField("icon");
        field.removeField("sensor_name");
        field.removeField("text");
        field.removeField("input_number");

        field.appendField(new Blockly.FieldImage("icons/Sensor/" + option + ".png", 35, 35, "*"), "icon");
        field.appendField(new Blockly.FieldDropdown(PROPERTIES, function(option) {
            block.updateShape(option, field, block, PROPERTIES);}), "sensor_name");

        //TODO: update the text based on the module
        field.appendField("sensor value", "text");
        field.appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]], function(option) {
            block.updatePosition(option, block);}), "input_number");

        //set the values of the DropDown menus
        block.getField("sensor_name").setValue(option);
        block.getField("input_number").setValue(input_number);

        checkInputToClear(input_number);
        checkInputToSet(input_number, option);
    },
    updatePosition: function(option, block) {
      // console.log(option);
      var blockName = block.getField("sensor_name").getValue();
      var prevPort = block.getField("input_number").getValue();

      checkInputToClear(prevPort);
      checkInputToSet(option, blockName);
    }
};


//specific block for sensing environmental inputs
Blockly.Blocks['mw_sense_environment'] = {
  init: function() {
      var PROPERTIES =
          [['Light Sensor', 'LightSensor'],
           ['Temperature Sensor', 'TemperatureSensor'],
           ['SunLight Detector', 'SunLightDetector'],
           ['Sound Sensor', 'SoundSensor'],
           ['Color Detector', 'ColorDetector']];

    var thisBlock = this;

    var fieldGroup = this.appendDummyInput();
        fieldGroup.appendField(new Blockly.FieldImage("icons/Sensor/LightSensor.png", 35, 35, "*"), "icon");
        fieldGroup.appendField(new Blockly.FieldDropdown(PROPERTIES, function(option) {
            thisBlock.updateShape(option, fieldGroup, thisBlock, PROPERTIES);}), "sensor_name");
        fieldGroup.appendField("sensor value", "text");
        fieldGroup.appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]], function(option) {
            thisBlock.updatePosition(option, thisBlock);}), "input_number");

    this.setOutput(true, "Number");
    this.setTooltip('TODO');
    this.setColour(320);
    },
    updateShape: function(option, field, block, PROPERTIES) {
        // console.log(option);

        //store current values of the DropDown menus
        var input_number = block.getField("input_number").getValue();

        field.removeField("icon");
        field.removeField("sensor_name");
        field.removeField("text");
        field.removeField("input_number");

        field.appendField(new Blockly.FieldImage("icons/Sensor/" + option + ".png", 35, 35, "*"), "icon");
        field.appendField(new Blockly.FieldDropdown(PROPERTIES, function(option) {
            block.updateShape(option, field, block, PROPERTIES);}), "sensor_name");

        //TODO: update the text based on the module
        field.appendField("sensor value", "text");
        field.appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]], function(option) {
            block.updatePosition(option, block);}), "input_number");

        //set the values of the DropDown menus
        block.getField("sensor_name").setValue(option);
        block.getField("input_number").setValue(input_number);

        checkInputToClear(input_number);
        checkInputToSet(input_number, option);
    },
    updatePosition: function(option, block) {
      // console.log(option);

      var blockName = block.getField("sensor_name").getValue();
      var prevPort = block.getField("input_number").getValue();

      checkInputToClear(prevPort);
      checkInputToSet(option, blockName);
    }
};

//specific block for sensing physiological inputs
Blockly.Blocks['mw_sense_physiology'] = {
  init: function() {
      var PROPERTIES =
          [['HeartBeat Detector', 'HeartBeatDetector'],
           ];

    var thisBlock = this;

    var fieldGroup = this.appendDummyInput();
        fieldGroup.appendField(new Blockly.FieldImage("icons/Sensor/HeartBeatDetector.png", 35, 35, "*"), "icon");
        fieldGroup.appendField(new Blockly.FieldDropdown(PROPERTIES, function(option) {
            thisBlock.updateShape(option, fieldGroup, thisBlock, PROPERTIES);}), "sensor_name");
        fieldGroup.appendField("sensor value", "text");
        fieldGroup.appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]], function(option) {
            thisBlock.updatePosition(option, thisBlock);}), "input_number");

    this.setOutput(true, "Number");
    this.setTooltip('TODO');
    this.setColour(320);
    },
    updateShape: function(option, field, block, PROPERTIES) {
        // console.log(option);

        //store current values of the DropDown menus
        var input_number = block.getField("input_number").getValue();

        field.removeField("icon");
        field.removeField("sensor_name");
        field.removeField("text");
        field.removeField("input_number");

        field.appendField(new Blockly.FieldImage("icons/Sensor/" + option + ".png", 35, 35, "*"), "icon");
        field.appendField(new Blockly.FieldDropdown(PROPERTIES, function(option) {
            block.updateShape(option, field, block, PROPERTIES);}), "sensor_name");

        //TODO: update the text based on the module
        field.appendField("sensor value", "text");
        field.appendField(new Blockly.FieldDropdown([["1", "A0"], ["2", "A1"], ["3", "A2"]], function(option) {
            block.updatePosition(option, block);}), "input_number");

        //set the values of the DropDown menus
        block.getField("sensor_name").setValue(option);
        block.getField("input_number").setValue(input_number);

        checkInputToClear(input_number);
        checkInputToSet(input_number, option);
    },
    updatePosition: function(option, block) {
      // console.log(option);
      var blockName = block.getField("sensor_name").getValue();
      var prevPort = block.getField("input_number").getValue();

      checkInputToClear(prevPort);
      checkInputToSet(option, blockName);
    }
};

//specific block for action actuator output
Blockly.Blocks['mw_action_actuator'] = {
  init: function() {
      var PROPERTIES =
          [['Spinner', 'Spinner'],
           ['Rotator', 'Rotator'],
           ['Vibration', 'Vibration']
          ];

    var thisBlock = this;

    var fieldGroup = this.appendDummyInput();
        fieldGroup.appendField(new Blockly.FieldImage("icons/Action/Spinner.png", 35, 35, "*"), "icon");
        fieldGroup.appendField(new Blockly.FieldDropdown(PROPERTIES, function(option) {
            thisBlock.updateShape(option, fieldGroup, thisBlock, PROPERTIES);}), "action_name");

    this.appendValueInput("pwm_value")
        .setCheck("Number")
        .appendField("write");

    this.appendDummyInput()
        .appendField("to output")
        .appendField(new Blockly.FieldDropdown([["1", "3"], ["2", "5"], ["3", "6"]], function(option) {
            thisBlock.updatePosition(option, thisBlock);}), "output_number");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('TODO');
    },
    updateShape: function(option, field, block, PROPERTIES) {
        // console.log(option);

        //store current values of the DropDown menus
        var output_number = block.getField("output_number").getValue();

        field.removeField("icon");
        field.removeField("action_name");

        field.appendField(new Blockly.FieldImage("icons/Action/" + option + ".png", 35, 35, "*"), "icon");
        field.appendField(new Blockly.FieldDropdown(PROPERTIES, function(option) {
            block.updateShape(option, field, block, PROPERTIES);}), "action_name");

        //set the values of the DropDown menus
        block.getField("action_name").setValue(option);

        checkOutputToClear(output_number);
        checkOutputToSet(output_number, option);
    },
    updatePosition: function(option, block) {
      // console.log(option);

      var blockName = block.getField("action_name").getValue();
      var prevPort = block.getField("output_number").getValue();

      checkOutputToClear(prevPort);
      checkOutputToSet(option, blockName);
    }
};

//specific block for action actuator output
Blockly.Blocks['mw_action_display'] = {
  init: function() {
      var PROPERTIES =
          [['Light', 'Light'],
           ['MultiColorLight', 'MultiColorLight'],
           ['Number', 'Number'],
           ['LightBar', 'LightBar']
          ];

    var thisBlock = this;

    var fieldGroup = this.appendDummyInput();
        fieldGroup.appendField(new Blockly.FieldImage("icons/Action/Light.png", 35, 35, "*"), "icon");
        fieldGroup.appendField(new Blockly.FieldDropdown(PROPERTIES, function(option) {
            thisBlock.updateShape(option, fieldGroup, thisBlock, PROPERTIES);}), "action_name");

    this.appendValueInput("pwm_value")
        .setCheck("Number")
        .appendField("write");

    this.appendDummyInput()
        .appendField("to output")
        .appendField(new Blockly.FieldDropdown([["1", "3"], ["2", "5"], ["3", "6"]], function(option) {
            thisBlock.updatePosition(option, thisBlock);}), "output_number");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('TODO');
    },
    updateShape: function(option, field, block, PROPERTIES) {
        // console.log(option);

        //store current values of the DropDown menus
        var output_number = block.getField("output_number").getValue();

        field.removeField("icon");
        field.removeField("action_name");

        field.appendField(new Blockly.FieldImage("icons/Action/" + option + ".png", 35, 35, "*"), "icon");
        field.appendField(new Blockly.FieldDropdown(PROPERTIES, function(option) {
            block.updateShape(option, field, block, PROPERTIES);}), "action_name");

        //set the values of the DropDown menus
        block.getField("action_name").setValue(option);

        checkOutputToClear(output_number);
        checkOutputToSet(output_number, option);
    },
    updatePosition: function(option, block) {
      // console.log(option);

      var blockName = block.getField("action_name").getValue();
      var prevPort = block.getField("output_number").getValue();

      checkOutputToClear(prevPort);
      checkOutputToSet(option, blockName);
    }
};

//specific block for action actuator output
Blockly.Blocks['mw_action_sound'] = {
  init: function() {
      var PROPERTIES =
          [['Sound Maker', 'SoundMaker']
          ];

    var thisBlock = this;

    var fieldGroup = this.appendDummyInput();
        fieldGroup.appendField(new Blockly.FieldImage("icons/Action/SoundMaker.png", 35, 35, "*"), "icon");
        fieldGroup.appendField(new Blockly.FieldDropdown(PROPERTIES, function(option) {
            thisBlock.updateShape(option, fieldGroup, thisBlock, PROPERTIES);}), "action_name");

    this.appendValueInput("pwm_value")
        .setCheck("Number")
        .appendField("write");

    this.appendDummyInput()
        .appendField("to output")
        .appendField(new Blockly.FieldDropdown([["1", "3"], ["2", "5"], ["3", "6"]], function(option) {
            thisBlock.updatePosition(option, thisBlock);}), "output_number");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('TODO');
    },
    updateShape: function(option, field, block, PROPERTIES) {
        // console.log(option);

        //store current values of the DropDown menus
        var output_number = block.getField("output_number").getValue();

        field.removeField("icon");
        field.removeField("action_name");

        field.appendField(new Blockly.FieldImage("icons/Action/" + option + ".png", 35, 35, "*"), "icon");
        field.appendField(new Blockly.FieldDropdown(PROPERTIES, function(option) {
            block.updateShape(option, field, block, PROPERTIES);}), "action_name");

        //set the values of the DropDown menus
        block.getField("action_name").setValue(option);

        checkOutputToClear(output_number);
        checkOutputToSet(output_number, option);
    },
    updatePosition: function(option, block) {
      // console.log(option);

      var blockName = block.getField("action_name").getValue();
      var prevPort = block.getField("output_number").getValue();

      checkOutputToClear(prevPort);
      checkOutputToSet(option, blockName);
    }
};
