'use strict';
function ContentComponent(element) {
  // Example private variable. Uses underscore notation to denote private
  // variable.
  this.element_ = element;

  // Other private variables can go here as needed... For example:

  // Initialize instance.
  this.init();
}

/**
 * Store constants in one place so they can be updated easily.
 * @enum {string | number}
 * @private
 */
ContentComponent.prototype.Constant_ = {
  /**
   * Name should be descriptive so no comment needed.
   */
};

/**
 * Store strings for class names defined by this component that are used in
 * JavaScript. This allows us to simply change it in one place should we
 * decide to modify at a later date.
 * @enum {string}
 * @private
 */
ContentComponent.prototype.CssClasses_ = {
  /**
   * Class names should use camelCase and be prefixed with the word "material"
   * to minimize conflict with 3rd party systems.
   */
};

/**
 * Example of a private function, note the underscore and 2 blank lines
 * between function definition and previous lines of code.
 * @param {Event} event The event that fired.
 * @private
 */

ContentComponent.prototype.changeText = function (event) {
  return this.element_.innerHTML = this.element_.innerHTML === '中文' ? 'English' : '中文';
};

/**
 * Initialize element.
 */
ContentComponent.prototype.init = function () {
  // In this example we will add an event listener to the element.
  if (this.element_) {
    this.element_.addEventListener('click', this.changeText.bind(this));
  }
};

// The component registers itself. It can assume componentHandler is
// available in the global scope.
componentHandler.register({
  constructor: ContentComponent,
  classAsString: 'ContentComponent',
  cssClass: 'buttonComponent'
});

module.exports = ContentComponent;
