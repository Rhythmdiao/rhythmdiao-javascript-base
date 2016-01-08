function LanguageComponent(element) {
  this.element_ = element;
  this.init();
}

LanguageComponent.prototype.Constant_ = {
  CHN: '中文',
  EN: 'ENGLISH'
};

LanguageComponent.prototype.CssClasses_ = {};

LanguageComponent.prototype.changeText_ = function (event) {
  return this.element_.innerHTML = this.element_.innerHTML === this.Constant_.CHN ? this.Constant_.EN : this.Constant_.CHN;
};

LanguageComponent.prototype.init = function () {
  if (this.element_) {
    this.element_.addEventListener('click', this.changeText_.bind(this));
  }
};

componentHandler.register({
  constructor: LanguageComponent,
  classAsString: 'LanguageComponent',
  cssClass: 'buttonComponent'
});
