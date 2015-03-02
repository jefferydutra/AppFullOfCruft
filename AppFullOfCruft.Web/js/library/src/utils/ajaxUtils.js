/**
 * Created by Jeff on 28/02/2015.
 */
function getValidationError(error){
  error.property = error.property
                  ? error.property
                  :  'SummaryMessage';
  error.message = error.message
                  ? error.message
                  : '';
  return error;
}

module.exports = {
  getValidationErrorsFromJqXhr: function(response){
    var parsed = JSON.parse(response.responseText);
    var validationErrors = parsed.map(getValidationError);
    return validationErrors;
  }
};