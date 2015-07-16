'use strict';
function ContentComponent(element) {
  this.element_ = element;
  this.init();
}

ContentComponent.prototype.Constant_ = {
  CHN: '中文',
  EN: 'ENGLISH'
};
ContentComponent.prototype.CssClasses_ = {};

ContentComponent.prototype.changeText_ = function (event) {
  return this.element_.innerHTML = this.element_.innerHTML === this.Constant_.CHN ? this.Constant_.EN : this.Constant_.CHN;
};

ContentComponent.prototype.init = function () {
  if (this.element_) {
    this.element_.addEventListener('click', this.changeText_.bind(this));
  }
};

componentHandler.register({
  constructor: ContentComponent,
  classAsString: 'ContentComponent',
  cssClass: 'buttonComponent'
});

module.exports = ContentComponent;
