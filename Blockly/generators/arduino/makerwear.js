//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

/**
 * Visual Blocks Language
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

goog.provide('Blockly.Arduino.makerwear');
goog.require('Blockly.Arduino');

var debug_mode = true;
var debug_activated = false;

var debug_function_snippet = `
void DEBUG_FUNCTION(char block_id[]) {
	Serial.println(block_id);
	while (Serial.read() != 'n');
}
`
//TODO:
//TODO: send variables/values via serial port for monitoring
;

function addDebugMode(mode, block_id) {
	if(debug_mode) {
		if(!debug_activated) {
			Blockly.Arduino.setups_['serial_port'] = 'Serial.begin(9600);';
			Blockly.Arduino.definitions_['debug_functions'] = debug_function_snippet;

			debug_activated = true;
		}

		if(mode == "STEP")
			return 'DEBUG_FUNCTION("' + block_id + '");\n';
		else if(mode == "ACTIVATE")
			return '';
	}
}

//general block to analog read from an input
Blockly.Arduino['mw_read_input'] = function(block) {
  var dropdown_adc_channel = block.getFieldValue('adc_channel');

	var code = '';
	code += addDebugMode("ACTIVATE");
	code += '(int)(analogRead('+dropdown_adc_channel+')*0.09765625)';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//general block to analog write into a output
Blockly.Arduino['mw_write_output'] = function(block) {
  var pwm_value = Blockly.Arduino.valueToCode(block, 'pwm_value', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pwm_channel = block.getFieldValue('pwm_channel');

	var code = '';
	code += addDebugMode("STEP", block.id);
  code += 'analogWrite('+dropdown_pwm_channel+', (int)('+pwm_value+'*2.55));\n';


  return code;
};


//specific block for sensing movement inputs
Blockly.Arduino['mw_sense_movement'] = function(block) {
  var dropdown_adc_channel = block.getFieldValue('input_number');

	var code = '';
	code += addDebugMode("ACTIVATE");
	code += '(int)(analogRead('+dropdown_adc_channel+')*0.09765625)';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//specific block for sensing environmental inputs
Blockly.Arduino['mw_sense_environment'] = function(block) {
  var dropdown_adc_channel = block.getFieldValue('input_number');

	var code = '';
	code += addDebugMode("ACTIVATE");
	code += '(int)(analogRead('+dropdown_adc_channel+')*0.09765625)';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//specific block for sensing physiological inputs
Blockly.Arduino['mw_sense_physiology'] = function(block) {
  var dropdown_adc_channel = block.getFieldValue('input_number');

	var code = '';
	code += addDebugMode("ACTIVATE");
	code += '(int)(analogRead('+dropdown_adc_channel+')*0.09765625)';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//specific block for action actuator output
Blockly.Arduino['mw_action_actuator'] = function(block) {
  var pwm_value = Blockly.Arduino.valueToCode(block, 'pwm_value', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pwm_channel = block.getFieldValue('output_number');

	var code = '';
	code += addDebugMode("STEP", block.id);
  code += 'analogWrite('+dropdown_pwm_channel+', (int)('+pwm_value+'*2.55));\n';

  return code;
};

//specific block for action display output
Blockly.Arduino['mw_action_display'] = function(block) {
  var pwm_value = Blockly.Arduino.valueToCode(block, 'pwm_value', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pwm_channel = block.getFieldValue('output_number');

	var code = '';
	code += addDebugMode("STEP", block.id);
  code += 'analogWrite('+dropdown_pwm_channel+', (int)('+pwm_value+'*2.55));\n';

  return code;
};

//specific block for action sound output
Blockly.Arduino['mw_action_sound'] = function(block) {
  var pwm_value = Blockly.Arduino.valueToCode(block, 'pwm_value', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pwm_channel = block.getFieldValue('output_number');

	var code = '';
	code += addDebugMode("STEP", block.id);
  code += 'analogWrite('+dropdown_pwm_channel+', (int)('+pwm_value+'*2.55));\n';

  return code;
};
