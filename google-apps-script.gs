function doPost(e) {
  try {
    var params = JSON.parse(e.postData.contents);
    var docId = params.docId;
    var imageUrl = params.imageUrl;
    var placeholder = params.placeholder; // O texto <<img>>

    var doc = DocumentApp.openById(docId);
    var body = doc.getBody();
    var foundElement = body.findText(placeholder);

    if (foundElement) {
      var element = foundElement.getElement();
      var imageBlob = UrlFetchApp.fetch(imageUrl).getBlob();
      
      // Insere a imagem
      var parent = element.getParent();
      var index = parent.getChildIndex(element);
      parent.insertInlineImage(index, imageBlob);
      
      // Apaga o texto <<img>>
      element.asText().deleteText(foundElement.getStartOffset(), foundElement.getEndOffsetInclusive());
    }
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success'})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: err.message})).setMimeType(ContentService.MimeType.JSON);
  }
}