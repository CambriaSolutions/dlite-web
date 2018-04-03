'use strict';

class Validator {
  constructor(props, requestedValidations, allMessage) {
    this.props = props;
    this.requestedValidations = requestedValidations || [];
    this.allMessage = allMessage;
  }

  isValid() {
    let allErrors = Object.keys(this.rules).reduce((errors, name) => {
      let error = this.rules[name](this.props);
      if (error) { errors = errors.concat(error) };
      return errors;
    }, []);

    return !allErrors.length;
  }

  validate(name) {
    if (this.shouldIgnore(name)) { return ''; }
    if (name === 'all') { return this.validateAll(); }
    if (!this.rules[name]) { return ''; }
    let errors = this.rules[name](this.props);
    return errors.join('');
  }

  all() {
    if (this.shouldIgnore('all')) { return ''; }

    let allErrors = Object.keys(this.rules).reduce((errors, name) => {
      let error = this[name]();
      if (error) { errors.push(error) };
      return errors;
    }, []);
    console.log(allErrors)
    let errorMessage = '';
    if (allErrors.length > 1) {
      let errorKeyThis = 'errorMessages.' + this.allMessage;
      let errorKeyThat = 'errorMessages.errorPreventContinuing';
      errorMessage = this.allMessage ? errorKeyThis : errorKeyThat;
    } else if (allErrors.length === 1) {
      errorMessage = allErrors[0];
    }

    return errorMessage;
  }

  shouldIgnore(name) {
    let exists = this.requestedValidations.some((item) => {
      return item === name || item === 'all';
    });
    return !exists;
  }
}

const validatorGenerator = (rules) => {
  class FormValidator extends Validator {}
  FormValidator.prototype.rules = rules;
  Object.keys(rules).forEach((name) => {
    FormValidator.prototype[name] = function() {
      return this.validate(name);
    };
  });

  return FormValidator;
};

export default validatorGenerator;
