const fs = require('fs');
const sys = require('util')
const exec = require('child_process').exec;
const cmd = require('node-cmd');

var inputs;
var outputs;


  /**
   * Populate the currently selected pane with content generated from the blocks.
   */
  function renderContent() {
    var content = document.getElementById('content_blocks');
    // Initialize the pane.
    if (content.id == 'content_blocks') {
      // If the workspace was changed by the XML tab, Firefox will have performed
      // an incomplete rendering due to Blockly being invisible.  Rerender.
      Blockly.mainWorkspace.render();
    }
  }

  /**
   * Compute the absolute coordinates and dimensions of an HTML element.
   * @param {!Element} element Element to match.
   * @return {!Object} Contains height, width, x, and y properties.
   * @private
   */
  function getBBox_(element) {
    var height = element.offsetHeight;
    var width = element.offsetWidth;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    return {
      height: height,
      width: width,
      x: x,
      y: y
    };
  }

  var workspace;

  /**
   * Initialize Blockly.  Called on page load.
   */
  function init() {
    //window.onbeforeunload = function() {
    //  return 'Leaving this page will result in the loss of your work.';
    //};

    inputs = [0, 0, 0];
    outputs = [0, 0, 0];


    var container = document.getElementById('content_area');

    // var onresize = function(e) {
      var bBox = getBBox_(container);

    var el = document.getElementById('content_blocks');
    el.style.top = bBox.y + 'px';
    el.style.left = bBox.x + 'px';
    // Height and width need to be set, read back, then set again to
    // compensate for scrollbars.
    el.style.height = bBox.height + 'px';
    el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
    el.style.width = bBox.width + 'px';
    el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';

    // };
    // window.addEventListener('resize', onresize, false);

    var toolbox = document.getElementById('toolbox');
    workspace = Blockly.inject(document.getElementById('content_blocks'),
        {grid:
            {spacing: 25,
             length: 0,
             colour: '#fff',
             snap: true},
         media: '../Blockly/media/',
         toolbox: toolbox}); //Tree structure of categories and blocks available to the user.

    Blockly.mainWorkspace.addChangeListener(onAddedMWBlocks);

    auto_save_and_restore_blocks();

     // Show the selected pane.
     document.getElementById('content_blocks').style.visibility = 'visible';

     renderContent();



     Blockly.mainWorkspace.setVisible(true);

    //  Blockly.fireUiEvent(window, 'resize');

    document.getElementById('content_blocks').style.left = 0;
    document.getElementById('content_blocks').style.top = 55;
    
 }

/**
 * Backup code blocks to localStorage.
 */
function backup_blocks() {
  if ('localStorage' in window) {
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    window.localStorage.setItem('arduino', Blockly.Xml.domToText(xml));
  }
}

/**
 * Restore code blocks from localStorage.
 */
function restore_blocks() {
  if ('localStorage' in window && window.localStorage.arduino) {
    var xml = Blockly.Xml.textToDom(window.localStorage.arduino);
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
  }
}


/*
 * auto save and restore blocks
 */
function auto_save_and_restore_blocks() {
  // Restore saved blocks in a separate thread so that subsequent
  // initialization is not affected from a failed load.
  window.setTimeout(restore_blocks, 0);
  // Hook a save function onto unload.
  bindEvent(window, 'unload', backup_blocks);

  // Init load event.
  var loadInput = document.getElementById('load');
  //loadInput.addEventListener('change', load, false);
}

/**
 * Bind an event to a function call.
 * @param {!Element} element Element upon which to listen.
 * @param {string} name Event name to listen to (e.g. 'mousedown').
 * @param {!Function} func Function to call when event is triggered.
 *     W3 browsers will call the function with the event object as a parameter,
 *     MSIE will not.
 */
function bindEvent(element, name, func) {
  if (element.addEventListener) {  // W3C
    element.addEventListener(name, func, false);
  } else if (element.attachEvent) {  // IE
    element.attachEvent('on' + name, func);
  }
}

//loading examples via ajax
var ajax;
function createAJAX() {
  if (window.ActiveXObject) { //IE
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e2) {
        return null;
      }
    }
  } else if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else {
    return null;
  }
}

function onSuccess() {
  if (ajax.readyState == 4) {
    if (ajax.status == 200) {
      try {
      var xml = Blockly.Xml.textToDom(ajax.responseText);
      } catch (e) {
        alert('Error parsing XML:\n' + e);
        return;
      }
      var count = Blockly.mainWorkspace.getAllBlocks().length;
      if (count && confirm('Replace existing blocks?\n"Cancel" will merge.')) {
        Blockly.mainWorkspace.clear();
      }
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
    } else {
      alert("Server error");
    }
  }
}

function load_by_url(uri) {
  ajax = createAJAX();
  if (!ajax) {
　　   alert ('Not compatible with XMLHttpRequest');
　　   return 0;
　  }
  if (ajax.overrideMimeType) {
    ajax.overrideMimeType('text/xml');
  }

　　ajax.onreadystatechange = onSuccess;
　　ajax.open ("GET", uri, true);
　　ajax.send ("");
}

function uploadClick() {
    //code now has the string value for the code. We can write this as an Arduino file.
    var code = Blockly.Arduino.workspaceToCode();

    fs.writeFile("output/output.ino", code, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("generated output.ino and saved");
    });

    //on mac:
    //cmd.run('./upload.sh');

    //on windows:
    cmd.get('upload.bat',
      function(data){
          console.log('uploading:\n\n',data);
      }
    );

}

///Majeed Oct 28th: added a function to add a new block to the toolbox

function addMotionSensor() {
    var parser = new DOMParser();

    var newNode = "<block type=\"motion_intensity\"></block>";
    var xmlNode = parser.parseFromString(newNode, "text/xml");

    toolbox.getElementsByTagName("category")[0].appendChild(xmlNode.childNodes[0]);
    Blockly.getMainWorkspace().updateToolbox(toolbox);
}

///Majeed Oct 28th: added an event listener to see what block has been added to the workspace
function onAddedMWBlocks(event) {
    if(event.type == Blockly.Events.CREATE) {
        blockType = event.xml.getAttribute("type");

        if(blockType.indexOf("mw_sense") >= 0) //if contains string
        {
          blockName = event.xml.children[0].childNodes[0].textContent;
          blockPosition = event.xml.children[1].childNodes[0].textContent;

          checkInputToSet(blockPosition, blockName);
        }
        else if(blockType.indexOf("mw_action") >= 0) //if contains string
        {
          blockName = event.xml.children[0].childNodes[0].textContent;
          blockPosition = event.xml.children[1].childNodes[0].textContent;

          checkOutputToSet(blockPosition, blockName);
        }
    }

    if(event.type == Blockly.Events.DELETE) {
      blockType = event.oldXml.getAttribute("type");

      if(blockType.indexOf("mw_sense") >= 0) //if contains string
      {
        blockName = event.oldXml.children[0].childNodes[0].textContent;
        blockPosition = event.oldXml.children[1].childNodes[0].textContent;

        checkInputToClear(blockPosition);
      }
      else if(blockType.indexOf("mw_action") >= 0) //if contains string
      {
        blockName = event.oldXml.children[0].childNodes[0].textContent;
        blockPosition = event.oldXml.children[1].childNodes[0].textContent;

        checkOutputToClear(blockPosition);
      }
    }
}

//helper functions
function setInputHex(name, number) {
   var image = document.getElementById("hex_in" + number);
   image.setAttribute("src", "icons/Sensor/" + name + ".png");
 }

function setOutputHex(name, number) {
  var image = document.getElementById("hex_out" + number);
  image.setAttribute("src", "icons/Action/" + name + ".png");
}

function clearInput(number) {
  var image = document.getElementById("hex_in" + number);
  image.setAttribute("src", "icons/Connections/empty-hex.png");
}

function clearOutput(number) {
  var image = document.getElementById("hex_out" + number);
  image.setAttribute("src", "icons/Connections/empty-hex.png");
}

//helper functions
function checkInputToSet(input_port, block_name) {
  if(input_port == "A0")
  {
    if(inputs[0] == 0)
    {
      setInputHex(block_name, 1);
      inputs[0] = 1;
    }
  }
  else if(input_port == "A1")
  {
    if(inputs[1] == 0)
    {
      setInputHex(block_name, 2);
      inputs[1] = 1;
    }
  }
  else if(input_port == "A2")
  {
    if(inputs[2] == 0)
    {
      setInputHex(block_name, 3);
      inputs[2] = 1;
    }
  }
}

function checkOutputToSet(output_port, block_name) {
  if(output_port == "3")
  {
    if(outputs[0] == 0)
    {
      setOutputHex(block_name, 1);
      outputs[0] = 1;
    }
  }
  else if(output_port == "5")
  {
    if(outputs[1] == 0)
    {
      setOutputHex(block_name, 2);
      outputs[1] = 1;
    }
  }
  else if(output_port == "6")
  {
    if(outputs[2] == 0)
    {
      setOutputHex(block_name, 3);
      outputs[2] = 1;
    }
  }
}

function checkInputToClear(input_port) {
  if(input_port == "A0")
  {
      clearInput(1);
      inputs[0] = 0;
  }
  else if(input_port == "A1")
  {
    clearInput(2);
    inputs[1] = 0;
  }
  else if(input_port == "A2")
  {
    clearInput(3);
    inputs[2] = 0;
  }
}

function checkOutputToClear(output_port) {
  if(output_port == "3")
  {
    clearOutput(1);
    outputs[0] = 0;
  }
  else if(output_port == "5")
  {
    clearOutput(2);
    outputs[1] = 0;
  }
  else if(output_port == "6")
  {
    clearOutput(3);
    outputs[2] = 0;
  }
}
