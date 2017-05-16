function dataget() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var myValue = Browser.inputBox("Enter a number"); 
  sheet.getRange("A1").setValue("Number entered:");
  var b1Range = sheet.getRange("B1");
  b1Range.setValue(myValue);
  var valueToShow = b1Range.getValue() + 1;
  Browser.msgBox("The value you entered plus one is: " + valueToShow);

}

function sheetname() {
  return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName();
}

//SpreadSheet = エクセルファイル
//Sheet       = シート
function collectInformation() {
  //対象のスプレッドシートを取得
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //全部のシート
  //var sheets = ss.getSheets();
  //対象のシートを取得
  var sheet = ss.getSheetByName('Overview');
  var HolidaySheet = ss.getSheetByName('PH Holidays');
  var tmp = HolidaySheet.getRange('A:A').getValues();
  tmp.shift();
  var Holidays = tmp.filter(String);

  Browser.msgBox(Holidays);
  //入力されているデータサイズ　(B列に入力されている)
  var dataLength = sheet.getRange('B:B').getValues().shift().filter(String).length;
  
  //Browser.msgBox(sheet.getRange(1,2,sheet.getLastRow(),2).getLastRow());

//  Browser.msgBox(sheet.getLastRow())
//  Browser.msgBox(sheet.getRange(sheet.getLastRow(), 8).getValue());

//  Browser.msgBox(sheet.getRange(238, 2).getValue());
  
  //SpreadSheet取得
  //Browser.msgBox(SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName());
  //データを取得
  //日付と時間を獲得
}
