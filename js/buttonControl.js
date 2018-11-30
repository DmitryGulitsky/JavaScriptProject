'use strict';

class ButtonControl {
  constructor(){

  }
  render(){
    const buttonNameArray = ['Left', 'Forward', 'Right', 'Back', 'Shoot', 'Menu'];

    const createButtonItems = (i) => {
      let button = $(`<div id="${i}" class="control" style="
      
      ">${i}</div>`);

      $(`#canvasContainer`).append(button);

      const overButton = () => {
        $(`#${i}`).animate({'opacity': `0.5`}, 300);
      };
      const outButton = () => {
        $(`#${i}`).animate({'opacity': `0.8`}, 300)
      };

      $(`#${i}`)
        .mousedown(overButton)
        .mouseup(outButton);
    };
    $.map(buttonNameArray, createButtonItems);

    $(`#Forward`)
      .css({"bottom":"10%"})
      .css({"left":"5%"})
      .html('&#8593;')
      .bind( "mouseup touchend", () => {keyLogger.keyStatus.up = false;})
      .bind( "mousedown touchstart", () => {keyLogger.keyStatus.up = true;});

    $(`#Back`)
      .css({"bottom":"1%"})
      .css({"left":"5%"})
      .html('&#8595;')
      .bind( "mouseup touchend", () => {keyLogger.keyStatus.down = false;})
      .bind( "mousedown touchstart", () => {keyLogger.keyStatus.down = true;});

    $(`#Left`)
      .css({"bottom":"5%"})
      .css({"left":"1%"})
      .html('&#8592;')
      .bind( "mouseup touchend", () => {keyLogger.keyStatus.left = false;})
      .bind( "mousedown touchstart", () => {keyLogger.keyStatus.left = true;});

    $(`#Right`)
      .css({"bottom":"5%"})
      .css({"left":"9%"})
      .html('&#8594;')
      .bind( "mouseup touchend", () => {keyLogger.keyStatus.right = false;})
      .bind( "mousedown touchstart", () => {keyLogger.keyStatus.right = true;});

    $(`#Shoot`)
      .css({"bottom":"5%"})
      .css({"right":"1%"})
      .html('&#10031;')
      .bind( "mouseup touchend", () => {keyLogger.keyStatus.fire = false;})
      .bind( "mousedown touchstart", () => {keyLogger.keyStatus.fire = true;});

    $(`#Menu`)
      .css({"top":"5%"})
      .css({"left":"1%"})
      .css({"width":"100px"})
      .bind( "mousedown touchstart", () => switchToRules());
  }
}

const buttonControl = new ButtonControl();
