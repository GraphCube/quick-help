/* OPEN A NEW PRINT WINDOW */
function printWindow(a,b) {
    window.open("handlers/"+b+".cfm?VTXAID="+a, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=50, left=50, width=850, height=350");
}

/* OPEN A NEW DYNAMIC WINDOW */
function myWindow(a) {
    window.open(a, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=50, left=50, width=850, height=450");
}

/* OPEN A NEW DYNAMIC WINDOW */
function dynWindow(a,b,c) {
    window.open(a, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=50, left=50, width="+b+", height="+c);
}

/* OPEN A NEW WINDOW AND FILL IT WITH A DIV */

function prDiv(jX) {
    var myWindow = window.open("printDYN.cfm", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=50, left=50, width=850, height=450");
    var headstr = "<html><head><title>Card Print Version</title><style type='text/css'>@font-face {font-family: 'MyriadProCondBold';src: url('fonts/myriadwebcond-webfont.eot');src: url('fonts/myriadwebcond-webfont.eot?#iefix') format('embedded-opentype'),url('fonts/myriadwebcond-webfont.woff') format('woff');src: local('☯'),url('fonts/MyriadWebCond.ttf') format('truetype');font-weight: normal;font-style: normal;}.GC1 {font-family:Tahoma,Verdana, Geneva, Helvetica, Arial, sans-serif;}@font-face {font-family:Myriad;src: url('fonts/MyriadWeb.ttf');}.Myriad{font-family:Myriad;}BODY {font-family:Tahoma, Geneva,sans-serif;font-size:14px;margin-left:0px;padding-left:0px;width:100%;} @font-face {font-family: 'CalibreBold';src: url('fonts/Calibre-Bold.otf');src: url('fonts/Calibre-Bold.otf') format('embedded-opentype'),url('fonts/Calibre-Bold.otf') format('otf');src: local('☯'), url('fonts/Calibre-Bold.otf') format('truetype');font-weight:bold;font-style:normal;} @font-face {font-family: 'CalibreNormal';src: url('fonts/Calibre-Light.otf');src: url('fonts/Calibre-Light.otf') format('embedded-opentype'),url('fonts/Calibre-Light.otf') format('otf');src: local('☯'), url('fonts/Calibre-Light.otf') format('truetype');font-weight: normal;font-style: normal;} .Calibre {font-family:CalibreNormal;letter-spacing:0.22px;} .CalibreB {font-family:CalibreBold;letter-spacing:0.22px;} .btnGR {background-color:#E9E9E9;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;border:1px solid #A8A8A8;display:inline-block;cursor:not-allowed;color:#333333;font-family:arial;font-weight:bold;padding:4px;text-decoration:none;margin-bottom:0px;text-align:center;} .f09 {font-size:9px;} .f10 {font-size:10px;} .f11 {font-size:11px;} .f12 {font-size:12px;} .f13 {font-size:13px;} .f14 {font-size:14px;} .f15 {font-size:15px;} .f16 {font-size:16px;} .f17 {font-size:17px;} .f18 {font-size:18px;} .f19 {font-size:19px;} .f20 {font-size:20px;} .borderBL8 {border-bottom-left-radius:8px;-moz-border-bottom-left-radius:8px;-webkit-border-bottom-left-radius:8px;} .borderBL4 {border-bottom-left-radius:5px;-moz-border-bottom-left-radius:5px;-webkit-border-bottom-left-radius:5px;} .borderBL6 {border-bottom-left-radius:6px;-moz-border-bottom-left-radius:6px;-webkit-border-bottom-left-radius:6px;} .borderBR6 {border-bottom-right-radius:6px;-moz-border-bottom-right-radius:6px;-webkit-border-bottom-right-radius:6px;} .borderBL12 {border-bottom-left-radius:12px;-moz-border-bottom-left-radius:12px;-webkit-border-bottom-left-radius:12px;} .borderBL16 {border-bottom-left-radius:16px;-moz-border-bottom-left-radius:16px;-webkit-border-bottom-left-radius:16px;} .borderTL8 {border-top-left-radius:8px;-moz-border-top-left-radius:8px;-webkit-border-top-left-radius:8px;} .borderTL6 {border-top-left-radius:6px;-moz-border-top-left-radius:6px;-webkit-border-top-left-radius:6px;} .borderTR6 {border-top-right-radius:6px;-moz-border-top-right-radius:6px;-webkit-border-top-right-radius:6px;} .borderTL4 {border-top-left-radius:5px;-moz-border-top-left-radius:5px;-webkit-border-top-left-radius:5px;}</style></head><body>";
var footstr = "</body></html>";
	myWindow.document.write(headstr+jX+footstr);
}

function prDivX(jX) {
    var myWindow = window.open("printDYN.cfm", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=50, left=50, width=850, height=450");
    var headstr = "<html><head><title>Card Print Version</title><link href='normal.css' rel='stylesheet' type='text/css'></head><body style='margin:5px;'><style>.noPrint{display:none;}</style>";
var footstr = "<br><br><input type='button' value=' Print ' onClick='javascript:print()'></body></html>";
	myWindow.document.write(headstr+jX+footstr);
}

function prDivW(jX) {
    var myWindow = window.open("printDYN.cfm", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=50, left=50, width=850, height=450");var headstr = "<cfprocessingdirective pageencoding='utf-8'><cfheader name='Content-Disposition' value='inline; filename=contracts-devisions.doc' charset='utf-8'><cfcontent type='application/msword; charset=utf-8'><html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'><link href='normal.css' rel='stylesheet' type='text/css'><style>.noPrint{display:none;}</style>";
var footstr = "<br><br><input type='button' value=' Print ' onClick='javascript:print()'></body></html></cfcontent>";
	myWindow.document.write(headstr+jX+footstr);
}