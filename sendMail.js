import nodemailer from 'nodemailer';
const templatehtml = `
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head>
  <title>Robust Designs</title>
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta content="yes" name="apple-mobile-web-app-capable">
  <meta name="x-apple-disable-message-reformatting">
  <meta content="black" name="apple-mobile-web-app-status-bar-style">
  <meta content="telephone=no" name="format-detection">

  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->

<!--[if (gte mso 9)|(IE)]>
<xml>
<o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->

<style type="text/css">
@media screen {
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v12/zhcz-_WihjSQC0oHJ9TCYBsxEYwM7FgeyaSgU71cLG0.woff) format('woff');
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: bold;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v12/q2OIMsAtXEkOulLQVdSl024H_cQCpNmkmj7HsMzmiiM.woff) format('woff');
  }
  @font-face {
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 500;
    src: local('Gotham Medium'), local('Gotham-Medium'), url(https://robust.email/documentation/assets/fonts/Gotham-Medium.woff) format('woff');
  }
  @font-face {
    font-family: 'Geomanist';
    font-style: normal;
    font-weight: 600;
    src: local('Geomanist Bold'), local('Geomanist-Bold'), url(https://robust.email/documentation/assets/fonts/geomanist-bold-webfont.woff) format('woff');
  }
  @font-face {
    font-family: 'Geomanist';
    font-style: normal;
    font-weight: 400;
    src: local('Geomanist Regular'), local('Geomanist-Regular'), url(https://robust.email/documentation/assets/fonts/geomanist-regular-webfont.woff) format('woff');
  }
  @font-face {
    font-family: 'Europa';
    font-style: normal;
    font-weight: 400;
    src: local('Europa Regular'), local('Europa-Regular'), url(https://robust.email/documentation/assets/fonts/Europa-Regular.woff) format('woff');
  }
  @font-face {
    font-family: 'Europa';
    font-style: normal;
    font-weight: 300;
    src: local('Europa Light'), local('Europa-Light'), url(https://robust.email/documentation/assets/fonts/Europa-Light.woff) format('woff');
  }
  @font-face {
    font-family: 'Europa';
    font-style: normal;
    font-weight: 600;
    src: local('Europa Bold'), local('Europa-Bold'), url(https://robust.email/documentation/assets/fonts/Europa-Bold.woff) format('woff');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/cJZKeOuBrn4kERxqtaUH3T8E0i7KZn-EPnyo3HZu7kw.woff) format('woff');
  }
  @font-face {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    src: local('Cabin'), local('Cabin-Regular'), url(https://fonts.gstatic.com/s/cabin/v14/u-4x0qWljRw-Pd8w__s.woff) format('woff');
  }
  @font-face {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 500;
    src: local('Cabin Medium'), local('Cabin-Medium'), url(https://fonts.gstatic.com/s/cabin/v14/u-480qWljRw-PdfD3Ohluy8.woff) format('woff');
  }
  @font-face {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 600;
    src: local('Cabin SemiBold'), local('Cabin-SemiBold'), url(https://fonts.gstatic.com/s/cabin/v14/u-480qWljRw-Pdfv2-hluy8.woff) format('woff');
  }
  @font-face {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 700;
    src: local('Cabin Bold'), local('Cabin-Bold'), url(https://fonts.gstatic.com/s/cabin/v14/u-480qWljRw-PdeL2uhluy8.woff) format('woff');
  }
  @font-face {
  font-family: 'Soleil';
  font-style: normal;
  font-weight: 400;
  src: local('Soleil Regular'), local('Soleil-Regular'), url(https://robust.email/documentation/assets/fonts/Soleil-Regular.woff) format('woff');
  }
  @font-face {
  font-family: 'Museo Sans';
  font-style: normal;
  font-weight: 500;
  src: local('MuseoSans 500'), local('MuseoSans-500'), url(https://robust.email/documentation/assets/fonts/MuseoSans_500.woff) format('woff');
  }
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/playfairdisplay/v19/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKeiunDXbtU.woff) format('woff');
  }
  @font-face {
    font-family: 'PT Sans Caption';
    font-style: normal;
    font-weight: 400;
    src: local('PT Sans Caption'), local('PTSans-Caption'), url(https://fonts.gstatic.com/s/ptsanscaption/v12/0FlMVP6Hrxmt7-fsUFhlFXNIlpcaeg_3.woff) format('woff');
  }
  @font-face {
    font-family: 'PT Sans Caption';
    font-style: normal;
    font-weight: 700;
    src: local('PT Sans Caption Bold'), local('PTSans-CaptionBold'), url(https://fonts.gstatic.com/s/ptsanscaption/v12/0FlJVP6Hrxmt7-fsUFhlFXNIlpcSwSrkTA-p.woff) format('woff');
  }
}

.ReadMsgBody {width: 100%; background-color: #f2f2f2;}
.ExternalClass {width: 100%; background-color: #f2f2f2;}
body { background-color: #f2f2f2; -webkit-font-smoothing: antialiased; }
table { border-collapse:collapse !important; mso-table-lspace:0pt; mso-table-rspace:0pt; }
img{-ms-interpolation-mode:bicubic;}
p {margin-bottom:0; margin:0}
body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
}

@media screen and (min-width: 601px) {
  .mainCont, 
  *[lang="x-main"] {
    width: 600px !important;
    table-layout: fixed;
  }
  .contenttable, 
  *[lang="x-content"] {
    width: 600px !important;
    table-layout: fixed;
  }
}

@media only screen and (max-width: 480px), (max-device-width: 480px) {
  body[yahoo] .center {
    text-align: center !important;
  }
  
  .two-to-three {
    width: 100%;
    max-width: 300px !important;
  }
  .two-to-two8e {
    width: 100%;
    max-width: 280px !important;
  }
  .textCenter,
  td[lang=x-textCenter] {
    text-align: center !important;
  }
  .hide,
  *[lang=x-hide] {
    height: 0px !important;
    width: 0px !important;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    line-height: 0px;
    display: none !important;
    mso-hide:all;
  }

}

font {
  font-family: 'Museo Sans', 'Montserrat', 'Open Sans', 'Segoe UI','Segoe UI Web Regular','Segoe UI Symbol','Helvetica Neue', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif;
  -webkit-text-size-adjust:100% !important;
  -ms-text-size-adjust:100% !important;
  text-size-adjust:100% !important;
}

</style>
 <link rel="stylesheet" href="/stylesheets/colorpicker.css"><link rel="stylesheet" href="/stylesheets/editable.css"><link rel="stylesheet" href="/stylesheets/fonticons/fonticons.css"></head>
 <body bgcolor="#f2f2f2" yahoo="fix" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="background-color: rgb(242, 242, 242); font-family: &quot;Museo Sans&quot;, Montserrat, &quot;Noto Sans&quot;, &quot;Open Sans&quot;, &quot;Segoe UI&quot;, &quot;Segoe UI Web Regular&quot;, &quot;Segoe UI Symbol&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif; margin: 40px 0px; padding: 0px; -webkit-font-smoothing: antialiased; text-size-adjust: 100%;">

<div editable="preheader" style="display:none !important;height:0px;line-height:0px;mso-hide:all;visibility:hidden;opacity:0;">He's a lumberjack and he's okay, he sleeps all night and he works all day!</div>

<div class="center" style="background-color:#f2f2f2;width:100%;">
<!--[if gte mso 9]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill type="tile" color="#f2f2f2"/>
</v:background>
<![endif]-->
<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" style="border-collapse:collapse !important;min-width:100% !important;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
<tbody>
<tr>
<td align="center" bgcolor="f2f2f2" valign="top" style="background-color:#f2f2f2;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
<!--BackgroundColor Fix Start-->

<table align="center" border="0" cellpadding="0" cellspacing="0" class="contenttable" lang="x-content" width="600" style="max-width: 500px; width: 100%; text-size-adjust: 100%; border-collapse: collapse !important; position: relative;" cloneordelete="">
<tbody>
<tr>
<td align="center" summary="hide" style="color: rgb(119, 119, 119); font-size: 13px; font-weight: 600; line-height: 18px; padding: 30px 0px 20px; text-size-adjust: 100%;" editable="">
<font color="777777" size="2" style="font-weight:600;text-size-adjust:100% !important;-webkit-text-size-adjust:100% !important;-ms-text-size-adjust:100% !important;font-family:'Museo Sans', 'Montserrat', 'Open Sans', 'Segoe UI','Segoe UI Web Regular','Segoe UI Symbol','Helvetica Neue', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif;">Having trouble viewing? <a href="robustview" style="text-decoration:none;color:blueviolet;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">View&nbsp;this&nbsp;email&nbsp;in&nbsp;your&nbsp;<span style="border-bottom-width:2px;border-bottom-style:solid;border-bottom-color:blueviolet;">browser.</span></a></font>
</td>
</tr>
</tbody>
</table>

<!--[if !mso]><!-->
<table bgcolor="333333" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(51, 51, 51); max-width: 600px; min-width: 280px; table-layout: fixed; border-top-left-radius: 5px; border-top-right-radius: 5px; overflow: hidden;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='333333' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td align="center" valign="top" background="https://robust.email/files/template_6/images/bg-02.jpg" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; vertical-align: top; font-size: 0px; text-align: right; background-image: url('https://i.ibb.co/tCN3YPg/bg-02.jpg'); background-repeat: no-repeat;">

<div style="width:100%;max-width:300px;display:inline-block;vertical-align:top;direction:ltr;">
<table border="0" cellpadding="0" cellspacing="0" align="left">
<tbody>
<tr>
<td align="left" lang="x-textCenter" style="padding: 20px 0px 20px 30px; line-height: 100%;" editable="">
<a href="#" style="text-decoration: none;">
<img src="https://blog.codepen.io/wp-content/uploads/2012/06/codepen-wordmark-display-inside-black@10x.png" width="150" height="27" border="0" style="width: 150px; height: 27px; max-width: 150px; min-width: 150px; display: inline-block; border: none;" alt="">
</a>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if (gte mso 9)|(IE)]>
</td>
<td align='center' width='300' valign='top' style='padding-top:0px;padding-bottom:0px;padding-right:0px;padding-left:0px;vertical-align:top;'>
<![endif]-->
<div style="width:100%;max-width:300px;display:inline-block;vertical-align:top;direction:ltr;">
<table border="0" cellpadding="0" cellspacing="0" align="right">
<tbody>
<tr>
<td align="right" height="98" style="padding: 0px 15px 0px 0px; font-family: &quot;PT Sans Caption&quot;, &quot;Open Sans&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif; font-weight: 700; font-size: 14px; color: rgb(255, 255, 255); line-height: 16px;" editable="">
<font size="2" color="ffffff" style="font-family: 'PT Sans Caption', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-weight: 700; font-size: 14px;">
<a href="#" style="text-decoration: none; color: #ffffff;">Store</a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="#" style="text-decoration: none; color: #ffffff;">About</a>
</font>
</td>
<td align="left" valign="middle" width="105" height="98" background="https://robust.email/files/template_6/images/Rectangle_5.png" style="padding: 0px 0px 0px 15px; font-family: &quot;PT Sans Caption&quot;, &quot;Open Sans&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif; font-weight: 700; font-size: 14px; color: rgb(255, 255, 255); line-height: 16px; background-repeat: no-repeat; background-image: url(&quot;https://robust.email/files/template_6/images/Rectangle_5.png&quot;); background-position: right center; vertical-align: middle;" editable="">
<font size="2" color="ffffff" style="font-family: 'PT Sans Caption', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-weight: 700; font-size: 14px;">
<a href="#" style="text-decoration: none; color: #ffffff;">Explore</a>&nbsp;&nbsp;<img src="https://robust.email/files/template_6/images/Arrow-1-w.png" width="7" height="12" border="0" align="absmiddle" style="width: 7px; height: 12px; max-width: 7px; min-width: 7px; display: inline-block; border: none;" alt="">
</font>
</td>
</tr>
</tbody>
</table>
</div>

</td>
</tr>
</tbody>
</table>

<!--[if !mso]><!-->
<table bgcolor="fffffd" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(255, 255, 253); max-width: 600px; min-width: 280px; table-layout: fixed; position: relative;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='fffffd' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td align="center" bgcolor="444444" valign="top" background="https://robust.email/files/template_6/images/jake-blucker-tMzCrBkM99Y-unsplash.jpg" style="background-color: #444444; padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; vertical-align: top; font-size: 0px; background-image: url('https://robust.email/files/template_6/images/jake-blucker-tMzCrBkM99Y-unsplash.jpg'); background-repeat: no-repeat;">
<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:365px;">
<v:fill type="tile" src="https://robust.email/files/template_6/images/jake-blucker-tMzCrBkM99Y-unsplash.jpg" color="#333333" />
<v:textbox inset="0,0,0,0">
<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 600px;'>
<![endif]-->
<!--[if !mso]><!-->
<table border="0" width="100%" lang="x-content" cellpadding="0" cellspacing="0" align="center" class="contenttable" style="table-layout: fixed; border-collapse: collapse; max-width: 600px;" cloneordelete="">
<!--<![endif]-->
<tbody>
<tr>
<td valign="middle" height="260" align="left" style="padding: 20px 30px; line-height: 64px; font-family: Europa, &quot;Open Sans&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif; font-weight: bold; letter-spacing: -4px; font-size: 72px;" editable="">
<font size="6" color="ffffff" style="font-family: 'Europa', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-weight: bold; letter-spacing: -4px; font-size: 72px">
The wide open <br>
road + you.
</font>
</td>
</tr>
<tr>
<td align="center" valign="bottom" style="padding: 0px; line-height: 100%;" editable="">
<img src="https://robust.email/files/template_6/images/Tilted-divider_01.png" width="600" height="65" style="width: 100%; height: 65px; max-width: 600px; min-width: 280px; display: block; border: none;" border="0" alt="">
</td>
</tr>
</tbody>
</table>
<!--[if gte mso 9]>
</v:textbox>
</v:rect>
<![endif]-->
</td>
</tr>
</tbody>
</table>

<!--[if !mso]><!-->
<table bgcolor="fffffd" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(255, 255, 253); max-width: 600px; min-width: 280px; table-layout: fixed; position: relative;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='fffffd' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td valign="middle" align="center" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; line-height: 100%;">
<img src="https://robust.email/files/template_6/images/simple-icons_gumroad.png" width="24" height="24" border="0" style="width: 24px; height: 24px; max-width: 24px; min-width: 24px; display: block; border: none;" alt="">
</td>
</tr>
<tr>
<td align="center" style="padding: 20px 20px 0px; font-family: Cabin, &quot;Open Sans&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif; font-size: 14px; line-height: 18px; color: rgb(0, 0, 0); font-weight: 600; letter-spacing: 3px;" editable="">
<font size="2" color="000000" style="font-family: 'Cabin', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 14px; font-weight: 600; letter-spacing: 3px;">
THE WAIT IS OVER
</font>
</td>
</tr>
<tr>
<td align="center" style="padding: 0px 20px 10px; line-height: 64px; font-family: &quot;Playfair Display&quot;, Georgia, &quot;Arial Black&quot;, &quot;Times New Roman&quot;, serif; font-size: 48px; color: rgb(0, 0, 0); font-weight: 700; letter-spacing: -3px;" editable="">
<font size="6" color="000000" style="font-family: 'Playfair Display', Georgia, Arial Black, Times New Roman, serif; font-size: 48px; font-weight: 700; letter-spacing: -3px;">
3 Reasons to buy a Tesla
</font>
</td>
</tr>
<tr>
<td align="center" style="padding: 0px 20px 20px; color: rgb(0, 0, 0); line-height: 22px; font-family: Soleil, &quot;Open Sans&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif; font-size: 18px;" editable="">
<font size="4" color="000000" style="font-family: 'Soleil', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 18px;">
All new roaster is full of surprises
</font>
</td>
</tr>
<tr>
<td align="center" style="padding-top: 0px; padding-bottom: 10px; padding-left: 0px; padding-right: 0px; line-height: 100%;">
<table border="0" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td align="center" bgcolor="EB5757" width="200" height="50" style="width: 200px; height: 50px; background-color: #EB5757; padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; font-size: 18px; color: #ffffff; font-family: 'Geomanist', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-weight: 600; border-radius: 25px" editable="">
<a href="#" style="text-decoration: none; color: #ffffff">
<font size="4" color="ffffff" style="font-family: 'Geomanist', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-weight: 600;">
Try it out
</font>
</a>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

<!--[if !mso]><!-->
<table bgcolor="444444" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(68, 68, 68); max-width: 600px; min-width: 280px; table-layout: fixed;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='444444' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td align="center" valign="top" background="https://robust.email/files/template_6/images/DZW0K08B0Pw.jpg" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; background-position: center top; background-repeat: no-repeat; background-image: url('https://robust.email/files/template_6/images/DZW0K08B0Pw.jpg');">
<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:290px;">
<v:fill type="tile" src="https://robust.email/files/template_6/images/DZW0K08B0Pw.jpg" color="#444444" />
<v:textbox inset="0,0,0,0">
<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 600px;'>
<![endif]-->
<!--[if !mso]><!-->
<table border="0" width="100%" lang="x-content" cellpadding="0" cellspacing="0" align="center" class="contenttable" style="table-layout: fixed; border-collapse: collapse; max-width: 600px;" cloneordelete="">
<!--<![endif]-->
<tbody>
<tr>
<td align="center" valign="middle" style="padding: 0px; line-height: 100%;" editable="">
<img src="https://robust.email/files/template_6/images/Tilted-divider_02.png" width="600" height="65" style="width: 100%; height: 65px; max-width: 600px; min-width: 280px; display: block; border: none;" border="0" alt="">
</td>
</tr>
<tr>
<td align="center" height="160" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; height: 160px; line-height: 160px; font-size: 1px; color: transparent;">
&nbsp;
</td>
</tr>
<tr>
<td align="center" valign="middle" style="padding: 0px; line-height: 100%;" editable="">
<img src="https://robust.email/files/template_6/images/Tilted-divider_01.png" width="600" height="65" style="width: 100%; height: 65px; max-width: 600px; min-width: 280px; display: block; border: none;" border="0" alt="">
</td>
</tr>
</tbody>
</table>
<!--[if gte mso 9]>
</v:textbox>
</v:rect>
<![endif]-->
</td>
</tr>
</tbody>
</table>

<!--[if !mso]><!-->
<table bgcolor="fffffd" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(255, 255, 253); max-width: 600px; min-width: 280px; table-layout: fixed; position: relative;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='fffffd' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td valign="middle" align="center" bgcolor="ffffff" background="https://robust.email/files/template_6/images/Line-1-b.png" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; background-repeat: no-repeat; background-position: center;">
<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:59px;">
<v:fill type="tile" src="https://robust.email/files/template_6/images/Line-1-b.png" color="#ffffff" />
<v:textbox inset="0,0,0,0">
<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td align="center" bgcolor="fffffd" style="padding-top: 0px; padding-bottom: 0px; padding-left: 10px; padding-right: 10px; color: #EB5757; font-size: 58px; font-family: 'Geomanist', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; letter-spacing: -3px; font-weight: 600;" editable="">
<font size="6" color="EB5757" style="font-family: 'Geomanist', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 58px; letter-spacing: -3px; font-weight: 600;">
01
</font>
</td>
</tr>
</tbody>
</table>
<!--[if gte mso 9]>
</v:textbox>
</v:rect>
<![endif]-->
</td>
</tr>
<tr>
<td align="center" style="padding-top: 10px; padding-bottom: 20px; padding-left: 20px; padding-right: 20px;">
<!--[if (gte mso 9)|(IE)]>
<table border='0' width="390" cellpadding='0' cellspacing='0' align='center' style="width: 390px;">
<![endif]-->
<!--[if !mso]><!-->
<table border="0" width="390" cellpadding="0" cellspacing="0" align="center" style="width: 100%; max-width: 390px;">
<!--<![endif]-->
<tbody>
<tr>
<td align="left" style="padding: 0px 0px 10px; line-height: 64px; font-family: &quot;Playfair Display&quot;, Georgia, &quot;Arial Black&quot;, &quot;Times New Roman&quot;, serif; font-size: 48px; color: rgb(0, 0, 0); font-weight: 700; letter-spacing: -3px;" editable="">
<font size="6" color="000000" style="font-family: 'Playfair Display', Georgia, Arial Black, Times New Roman, serif; font-size: 48px; font-weight: 700; letter-spacing: -3px;">
It runs on electric
</font>
</td>
</tr>
<tr>
<td align="left" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; color: #000000; font-family: 'Europa', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 16px; font-weight: 600; line-height: 20px;" editable="">
<a href="#" style="text-decoration: none; color: #000000;">
<font size="3" color="000000" style="font-family: 'Europa', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 16px; font-weight: 600;">
Give me some numbers&nbsp;&nbsp;<img src="https://robust.email/files/template_6/images/Arrow-2.png" width="16" height="16" border="0" align="absmiddle" style="width: 16px; height: 16px; max-width: 16px; min-width: 16px; display: inline-block; border: none;" alt="">
</font>
</a>
</td>
</tr>
<tr>
<td align="left" style="padding: 20px 0px 0px; line-height: 20px; color: rgb(0, 0, 0); font-size: 14px; font-family: Soleil, &quot;Open Sans&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif;" editable="">
<font size="2" color="000000" style="font-family: 'Soleil', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 14px;">
Designed to outperform any other electric car on the planet.  As safe as sitting in a bunker and as reliable as a Toyota.
</font>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<!--[if !mso]><!-->
<table bgcolor="444444" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(68, 68, 68); max-width: 600px; min-width: 280px; table-layout: fixed; position: relative;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='444444' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td align="center" valign="top" background="https://robust.email/files/template_6/images/4xM5cytsdMo.jpg" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; background-position: center top; background-repeat: no-repeat; background-image: url('https://robust.email/files/template_6/images/4xM5cytsdMo.jpg');">
<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:290px;">
<v:fill type="tile" src="https://robust.email/files/template_6/images/4xM5cytsdMo.jpg" color="#444444" />
<v:textbox inset="0,0,0,0">
<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 600px;'>
<![endif]-->
<!--[if !mso]><!-->
<table border="0" width="100%" lang="x-content" cellpadding="0" cellspacing="0" align="center" class="contenttable" style="table-layout: fixed; border-collapse: collapse; max-width: 600px;" cloneordelete="">
<!--<![endif]-->
<tbody>
<tr>
<td align="center" valign="middle" style="padding: 0px; line-height: 100%;" editable="">
<img src="https://robust.email/files/template_6/images/Tilted-divider_02.png" width="600" height="65" style="width: 100%; height: 65px; max-width: 600px; min-width: 280px; display: block; border: none;" border="0" alt="">
</td>
</tr>
<tr>
<td align="center" height="160" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; height: 160px; line-height: 160px; font-size: 1px; color: transparent;">
&nbsp;
</td>
</tr>
<tr>
<td align="center" valign="middle" style="padding: 0px; line-height: 100%;" editable="">
<img src="https://robust.email/files/template_6/images/Tilted-divider_04.png" width="600" height="65" style="width: 100%; height: 65px; max-width: 600px; min-width: 280px; display: block; border: none;" border="0" alt="">
</td>
</tr>
</tbody>
</table>
<!--[if gte mso 9]>
</v:textbox>
</v:rect>
<![endif]-->
</td>
</tr>
</tbody>
</table>

<!--[if !mso]><!-->
<table bgcolor="EB5757" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(235, 87, 87); max-width: 600px; min-width: 280px; table-layout: fixed; position: relative;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='EB5757' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td valign="middle" align="center" bgcolor="EB5757" background="https://robust.email/files/template_6/images/Line-1-w.png" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; background-repeat: no-repeat; background-position: center;">
<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:59px;">
<v:fill type="tile" src="https://robust.email/files/template_6/images/Line-1-w.png" color="#EB5757" />
<v:textbox inset="0,0,0,0">
<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td align="center" bgcolor="EB5757" style="padding: 0px 10px; color: rgb(255, 255, 255); font-size: 58px; font-family: Geomanist, &quot;Open Sans&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif; letter-spacing: -3px; font-weight: 600;" editable="">
<font size="6" color="ffffff" style="font-family: 'Geomanist', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 58px; letter-spacing: -3px; font-weight: 600;">
02
</font>
</td>
</tr>
</tbody>
</table>
<!--[if gte mso 9]>
</v:textbox>
</v:rect>
<![endif]-->
</td>
</tr>
<tr>
<td align="center" style="padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 20px;">
<!--[if (gte mso 9)|(IE)]>
<table border='0' width="430" cellpadding='0' cellspacing='0' align='center' style="width: 430px;">
<![endif]-->
<!--[if !mso]><!-->
<table border="0" width="430" cellpadding="0" cellspacing="0" align="center" style="width: 100%; max-width: 430px;">
<!--<![endif]-->
<tbody>
<tr>
<td align="left" style="padding: 0px; line-height: 64px; font-family: &quot;Playfair Display&quot;, Georgia, &quot;Arial Black&quot;, &quot;Times New Roman&quot;, serif; font-size: 48px; color: rgb(255, 255, 255); font-weight: 700; letter-spacing: -3px;" editable="">
<font size="6" color="ffffff" style="font-family: 'Playfair Display', Georgia, Arial Black, Times New Roman, serif; font-size: 48px; font-weight: 700; letter-spacing: -3px;">
The fancy new cockpit
</font>
</td>
</tr>
<tr>
<td align="left" style="padding: 20px 0px 0px; line-height: 20px; color: rgb(255, 255, 255); font-size: 14px; font-family: Soleil, &quot;Open Sans&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif;" editable="">
<font size="2" color="ffffff" style="font-family: 'Soleil', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 14px;">
You will look back to this moment in future and regret not buying a Tesla. We’re not forcing you to buy one, but if you don’t, your safety is not guaranteed.
</font>
</td>
</tr>
<tr>
<td align="left" style="padding-top: 20px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px;">
<table border="0" cellpadding="0" cellspacing="0" align="left">
<tbody>
<tr>
<td align="center" bgcolor="000000" style="background-color: rgb(0, 0, 0); padding: 6px 15px; font-size: 16px; font-weight: 600; color: rgb(255, 255, 255); line-height: 22px; font-family: Europa, &quot;Open Sans&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif; border-radius: 10px;" editable="">
<a href="#" style="text-decoration: none; color: #ffffff;">
<font size="3" color="ffffff" style="font-family: 'Europa', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 16px; font-weight: 600;">
Give me some numbers&nbsp;&nbsp;<img src="https://robust.email/files/template_6/images/Arrow-2-w.png" width="16" height="16" border="0" align="absmiddle" style="width: 16px; height: 16px; max-width: 16px; min-width: 16px; direction: inline-block; border: none; vertical-align: -10%" alt="">
</font>
</a>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>


<!--[if !mso]><!-->
<table bgcolor="444444" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(68, 68, 68); max-width: 600px; min-width: 280px; table-layout: fixed; position: relative;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='444444' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td align="center" valign="top" background="https://robust.email/files/template_6/images/jwyO3NhPZKQ.jpg" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; background-position: center top; background-repeat: no-repeat; background-image: url('https://robust.email/files/template_6/images/jwyO3NhPZKQ.jpg');">
<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:290px;">
<v:fill type="tile" src="https://robust.email/files/template_6/images/jwyO3NhPZKQ.jpg" color="#444444" />
<v:textbox inset="0,0,0,0">
<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 600px;'>
<![endif]-->
<!--[if !mso]><!-->
<table border="0" width="100%" lang="x-content" cellpadding="0" cellspacing="0" align="center" class="contenttable" style="table-layout: fixed; border-collapse: collapse; max-width: 600px;" cloneordelete="">
<!--<![endif]-->
<tbody>
<tr>
<td align="center" valign="middle" style="padding: 0px; line-height: 100%;" editable="">
<img src="https://robust.email/files/template_6/images/Tilted-divider_03.png" width="600" height="65" style="width: 100%; height: 65px; max-width: 600px; min-width: 280px; display: block; border: none;" border="0" alt="">
</td>
</tr>
<tr>
<td align="center" height="160" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; height: 160px; line-height: 160px; font-size: 1px; color: transparent;">
&nbsp;
</td>
</tr>
<tr>
<td align="center" valign="middle" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; line-height: 100%;" editable="">
<img src="https://robust.email/files/template_6/images/Tilted-divider_01.png" width="600" height="65" style="width: 100%; height: 65px; max-width: 600px; min-width: 280px; display: block; border: none;" border="0" alt="">
</td>
</tr>
</tbody>
</table>
<!--[if gte mso 9]>
</v:textbox>
</v:rect>
<![endif]-->
</td>
</tr>
</tbody>
</table>

<!--[if !mso]><!-->
<table bgcolor="fffffd" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(255, 255, 253); max-width: 600px; min-width: 280px; table-layout: fixed; position: relative;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='fffffd' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td valign="middle" align="center" bgcolor="ffffff" background="https://robust.email/files/template_6/images/Line-1-b.png" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; background-repeat: no-repeat; background-position: center;">
<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:59px;">
<v:fill type="tile" src="https://robust.email/files/template_6/images/Line-1-b.png" color="#ffffff" />
<v:textbox inset="0,0,0,0">
<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td align="center" bgcolor="fffffd" style="padding: 0px 10px; color: rgb(235, 87, 87); font-size: 58px; font-family: Geomanist, &quot;Open Sans&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif; letter-spacing: -3px; font-weight: 600;" editable="">
<font size="6" color="EB5757" style="font-family: 'Geomanist', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 58px; letter-spacing: -3px; font-weight: 600;">
03
</font>
</td>
</tr>
</tbody>
</table>
<!--[if gte mso 9]>
</v:textbox>
</v:rect>
<![endif]-->
</td>
</tr>
<tr>
<td align="center" style="padding-top: 10px; padding-bottom: 20px; padding-left: 20px; padding-right: 20px;">
<!--[if (gte mso 9)|(IE)]>
<table border='0' width="390" cellpadding='0' cellspacing='0' align='center' style="width: 390px;">
<![endif]-->
<!--[if !mso]><!-->
<table border="0" width="390" cellpadding="0" cellspacing="0" align="center" style="width: 100%; max-width: 390px;">
<!--<![endif]-->
<tbody>
<tr>
<td align="center" style="padding-top: 0px; padding-bottom: 10px; padding-left: 0px; padding-right: 0px; line-height: 48px; font-family: 'Playfair Display', Georgia, Arial Black, Times New Roman, serif; font-size: 36px; color: #000000; font-weight: 700; letter-spacing: -3px;" editable="">
<font size="6" color="000000" style="font-family: 'Playfair Display', Georgia, Arial Black, Times New Roman, serif; font-size: 36px; font-weight: 700; letter-spacing: -3px;">
Get the full option varient with easy payments of <span style="color: #EB5757;">425$</span> at <span style="color: #EB5757;">2.4%pr</span> for 18 months.
</font>
</td>
</tr>
<tr>
<td align="center" style="padding-top: 20px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px;">
<table border="0" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td align="center" bgcolor="EB5757" style="background-color: #EB5757; padding-top: 6px; padding-bottom: 6px; padding-left: 15px; padding-right: 15px; font-size: 16px; font-weight: 600; color: #ffffff; line-height: 22px; font-family: 'Europa', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; border-radius: 10px;" editable="">
<a href="#" style="text-decoration: none; color: #ffffff;">
<font size="3" color="ffffff" style="font-family: 'Europa', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 16px; font-weight: 600;">
Register to get max PR&nbsp;&nbsp;<img src="https://robust.email/files/template_6/images/Arrow-2-w.png" width="16" height="16" border="0" align="absmiddle" style="width: 16px; height: 16px; max-width: 16px; min-width: 16px; direction: inline-block; border: none; vertical-align: -10%" alt="">
</font>
</a>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<!--[if !mso]><!-->
<table bgcolor="444444" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(68, 68, 68); max-width: 600px; min-width: 280px; table-layout: fixed; position: relative;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='444444' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td align="center" valign="bottom" background="https://robust.email/files/template_6/images/qqwC1K7od0E.jpg" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; background-position: center bottom; background-repeat: no-repeat; background-image: url('https://robust.email/files/template_6/images/qqwC1K7od0E.jpg');">
<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:225px;">
<v:fill type="tile" src="https://robust.email/files/template_6/images/qqwC1K7od0E.jpg" color="#444444" />
<v:textbox inset="0,0,0,0">
<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 600px;'>
<![endif]-->
<!--[if !mso]><!-->
<table border="0" width="100%" lang="x-content" cellpadding="0" cellspacing="0" align="center" class="contenttable" style="table-layout: fixed; border-collapse: collapse; max-width: 600px;" cloneordelete="">
<!--<![endif]-->
<tbody>
<tr>
<td align="center" valign="middle" style="padding: 0px; line-height: 100%;" editable="">
<img src="https://robust.email/files/template_6/images/Tilted-divider_02.png" width="600" height="65" style="width: 100%; height: 65px; max-width: 600px; min-width: 280px; display: block; border: none;" border="0" alt="">
</td>
</tr>
<tr>
<td align="center" height="160" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; height: 160px; line-height: 160px; font-size: 1px; color: transparent;">
&nbsp;
</td>
</tr>
</tbody>
</table>
<!--[if gte mso 9]>
</v:textbox>
</v:rect>
<![endif]-->
</td>
</tr>
</tbody>
</table>

<!--[if !mso]><!-->
<table bgcolor="122626" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(18, 38, 38); max-width: 600px; min-width: 280px; table-layout: fixed;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='122626' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td valign="middle" align="center" style="padding: 20px 0px 0px; line-height: 100%;" editable="">
<img src="https://robust.email/files/template_6/images/mdi_offline_bolt.png" width="32" height="32" border="0" style="width: 32px; height: 32px; max-width: 32px; min-width: 32px; display: block; border: none;" alt="">
</td>
</tr>
<tr>
<td align="center" style="padding: 10px 20px 20px; line-height: 30px; font-size: 24px; color: rgb(255, 255, 255); font-family: Europa, &quot;Open Sans&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif; font-weight: 600;" editable="">
<font size="5" color="ffffff" style="font-family: 'Europa', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-weight: 600; font-size: 24px;">
Introducing the Electrify App
</font>
</td>
</tr>
<tr>
<td align="center" style="padding-top: 0px; padding-bottom: 0px; padding-left: 20px; padding-right: 20px;">
<table border="0" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td valign="top" align="center" style="padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;vertical-align:top;font-size:0px;text-align:center;">

<div style="width:100%;max-width:170px;display:inline-block;vertical-align:top;direction:ltr;">
<table border="0" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td align="center" style="padding-top: 0px; padding-bottom: 30px; padding-left: 10px; padding-right: 10px;">
<table border="0" bgcolor="ffffff" width="150" cellpadding="0" cellspacing="0" align="center" style="background-color: #ffffff; border-radius: 10px; overflow: hidden;">
<tbody>
<tr>
<td align="right" height="50" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 10px; color: #000000; line-height: 22px; font-family: 'Europa', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 18px; font-weight: 600;" editable="">
<a href="#" style="text-decoration: none; color: #000000;">
<font size="4" color="000000" style="font-family: 'Europa', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 18px; font-weight: 600;">
Appstore
</font>
</a>
</td>
<td align="left" height="50" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 10px; line-height: 100%;">
<img src="https://robust.email/files/template_6/images/appstore-icon.png" width="26" height="26" border="0" style="width: 26px; height: 26px; max-width: 26px; min-width: 26px; display: block; border: none;" alt="">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if (gte mso 9)|(IE)]>
</td>
<td align='center' width='160' valign='top' style='padding-top:0px;padding-bottom:0px;padding-right:0px;padding-left:20px;vertical-align:top;'>
<![endif]-->
<div style="width:100%;max-width:170px;display:inline-block;vertical-align:top;direction:ltr;">
<table border="0" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td align="center" style="padding-top: 0px; padding-bottom: 30px; padding-left: 10px; padding-right: 10px;">
<table border="0" bgcolor="ffffff" width="150" cellpadding="0" cellspacing="0" align="center" style="background-color: #ffffff; border-radius: 10px; overflow: hidden;">
<tbody>
<tr>
<td align="right" height="50" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 10px; color: #000000; line-height: 22px; font-family: 'Europa', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 18px; font-weight: 600;" editable="">
<a href="#" style="text-decoration: none; color: #000000;">
<font size="4" color="000000" style="font-family: 'Europa', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 18px; font-weight: 600;">
Playstore
</font>
</a>
</td>
<td align="left" height="50" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 10px; line-height: 100%;">
<img src="https://robust.email/files/template_6/images/playstore-icon.png" width="26" height="26" border="0" style="width: 26px; height: 26px; max-width: 26px; min-width: 26px; display: block; border: none;" alt="">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>

</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td align="center" style="padding-top: 0px; padding-bottom: 0px; padding-left: 30px; padding-right: 30px;">
<table border="0" width="100%" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td align="center" bgcolor="EB5757" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; background-color: #EB5757; font-size: 1px; color: transparent; height: 5px; line-height: 5px;" height="5">
&nbsp;
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<!--[if !mso]><!-->
<table bgcolor="122626" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(18, 38, 38); max-width: 600px; min-width: 280px; table-layout: fixed; position: relative;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='122626' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td align="center" style="padding-top: 0px; padding-bottom: 0px; padding-left: 30px; padding-right: 30px;">
<table border="0" width="100%" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td valign="top" align="center" style="padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;vertical-align:top;font-size:0px;text-align:center;">

<div class="two-to-two8e" style="width:100%;max-width:310px;display:inline-block;vertical-align:top;direction:ltr;">
<table border="0" width="100%" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td align="left" lang="x-textCenter" editable="social" style="padding: 20px 0px 0px; line-height: 100%; font-size: 20px; color: rgb(51, 51, 51); font-family: &quot;Museo Sans&quot;, Muli, &quot;Opens Sans&quot;, helvetica, arial, sans-serif; text-size-adjust: 100%;">
<font size="5" color="333333" style="font-family:'Museo Sans', 'Muli', 'Opens Sans', helvetica, arial, sans-serif;-webkit-text-size-adjust:100% !important;-ms-text-size-adjust:100% !important;text-size-adjust:100% !important;">
<a href="#" style="text-decoration:none;color:#333333;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;"><img src="https://robust.email/files/template_6/images/facebook-gra.png" width="30" height="30" border="0" alt="Fa" style="width:30px;max-width:30px;min-width:30px;height:30px;display:inline-block;border-style:none;-ms-interpolation-mode:bicubic;"></a>&nbsp;&nbsp;<a href="#" style="text-decoration:none;color:#333333;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;"><img src="https://robust.email/files/template_6/images/twitter-gra.png" width="30" height="30" border="0" alt="Tw" style="width:30px;max-width:30px;min-width:30px;height:30px;display:inline-block;border-style:none;-ms-interpolation-mode:bicubic;"></a>&nbsp;&nbsp;<a href="#" style="text-decoration:none;color:#333333;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;"><img src="https://robust.email/files/template_6/images/pinterest-gra.png" width="30" height="30" border="0" alt="Pi" style="width:30px;max-width:30px;min-width:30px;height:30px;display:inline-block;border-style:none;-ms-interpolation-mode:bicubic;"></a> &nbsp;<a href="#" style="text-decoration:none;color:#333333;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;"><img src="https://robust.email/files/template_6/images/linkedin-gra.png" width="30" height="30" border="0" alt="Li" style="width:30px;max-width:30px;min-width:30px;height:30px;display:inline-block;border-style:none;-ms-interpolation-mode:bicubic;"></a>&nbsp;&nbsp;<a href="#" style="text-decoration:none;color:#333333;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;"><img src="https://robust.email/files/template_6/images/instagram-gra.png" width="30" height="30" border="0" alt="In" style="width:30px;max-width:30px;min-width:30px;height:30px;display:inline-block;border-style:none;-ms-interpolation-mode:bicubic;"></a>&nbsp;&nbsp;<a href="#" style="text-decoration:none;color:#333333;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;"><img src="https://robust.email/files/template_6/images/youtube-gra.png" width="30" height="30" border="0" alt="Yu" style="width:30px;max-width:30px;min-width:30px;height:30px;display:inline-block;border-style:none;-ms-interpolation-mode:bicubic;"></a>&nbsp;&nbsp;<a href="#" style="text-decoration:none;color:#333333;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;"><img src="https://robust.email/files/template_6/images/ello.png" width="30" height="30" border="0" alt="El" style="-ms-interpolation-mode:bicubic;"></a>
</font>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if (gte mso 9)|(IE)]>
</td>
<td align='center' width='230' valign='top' style='padding-top:0px;padding-bottom:0px;padding-right:0px;padding-left:0px;vertical-align:top;'>
<![endif]-->
<div class="two-to-two8e" style="width:100%;max-width:230px;display:inline-block;vertical-align:top;direction:ltr;">
<table border="0" width="100%" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td align="right" class="textCenter" lang="x-textCenter" style="padding-top: 25px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; line-height: 18px; color: #b4b4b4; font-family: 'PT Sans Caption', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-weight: 600; font-size: 14px;" editable="">
<font size="2" color="b4b4b4" style="font-family: 'PT Sans Caption', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-weight: 600; font-size: 14px">
<a href="#" style="text-decoration: none; color: #ffffff;">Term</a>&nbsp;&nbsp;&nbsp;
<a href="#" style="text-decoration: none; color: #ffffff;">Privacy</a>&nbsp;&nbsp;&nbsp;
<a href="#" style="text-decoration: none; color: #ffffff;">Design</a>
</font>
</td>
</tr>
</tbody>
</table>
</div>

</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td align="center" style="padding-top: 20px; padding-bottom: 0px; padding-left: 30px; padding-right: 30px;">
<table border="0" width="100%" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td align="center" bgcolor="333333" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; background-color: #333333; font-size: 1px; color: transparent; height: 2px; line-height: 2px;" height="2">
&nbsp;
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td align="left" style="padding: 20px 30px 30px; font-family: &quot;PT Sans&quot;, &quot;Open Sans&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif; color: rgb(255, 255, 255); line-height: 18px; font-size: 14px;" editable="">
<font size="2" color="ffffff" style="font-family: 'PT Sans', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 14px;">
This is a random disclaimer thingy telling you to not do things that are not cool like driving your car onto oncoming traffic all of a sudden or stripping your tesla to win drag races.
<br><br>
<a href="#" style="color: #6372F1;">This random link</a> will hopefully cover all the bonker things that you can do with an electric car but you should not. Oh and yes, you can <a href="#" style="color: #6372F1;">unsubscribe</a> or <a href="#" style="color: #6372F1;">update</a>.
<br><br>
 P. Sherman 42 Wallaby Way, Sydney.
<br><br>
© Copyright Corona Virus 2020 - All Rights Reserved.
</font>
</td>
</tr>
</tbody>
</table>


<table align="center" border="0" cellpadding="0" cellspacing="0" class="contenttable" lang="x-content" width="600" style="border-collapse:collapse !important;max-width:500px;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;" cloneordelete="">
<tbody>
<tr>
<td align="center" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; font-size: 1px; color: transparent; height: 20px; line-height: 20px;" height="20">
&nbsp;
</td>
</tr>
</tbody>
</table>

<!--Gmail Font Size Fix Start-->
<div style="display:none;white-space:nowrap;font-style:normal;font-variant:normal;font-weight:normal;font-size:15px;font-family:courier;line-height:normal;color:#eaeaea;">
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
</div>
<!--Gmail Font Size Fix End-->
<!--BackgroundColor Fix End-->



</div>


</body></html>
`
const htmlT = `
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"0cfd141a14","applicationID":"886818","transactionName":"cV0IR0JbVFtUS0xaRFteAlZCG1xYUkwOXV9GQUlQX1lIW1RNBg==","queueTime":0,"applicationTime":34,"agent":"js-agent.newrelic.com/nr-686.min.js"}</script>
<script type="text/javascript">window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var o=n[t]={exports:{}};e[t][0].call(o.exports,function(n){var o=e[t][1][n];return r(o?o:n)},o,o.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<t.length;o++)r(t[o]);return r}({QJf3ax:[function(e,n){function t(e){function n(n,t,a){e&&e(n,t,a),a||(a={});for(var u=c(n),f=u.length,s=i(a,o,r),p=0;f>p;p++)u[p].apply(s,t);return s}function a(e,n){f[e]=c(e).concat(n)}function c(e){return f[e]||[]}function u(){return t(n)}var f={};return{on:a,emit:n,create:u,listeners:c,_events:f}}function r(){return{}}var o="nr@context",i=e("gos");n.exports=t()},{gos:"7eSDFh"}],ee:[function(e,n){n.exports=e("QJf3ax")},{}],3:[function(e,n){function t(e){return function(){r(e,[(new Date).getTime()].concat(i(arguments)))}}var r=e("handle"),o=e(1),i=e(2);"undefined"==typeof window.newrelic&&(newrelic=window.NREUM);var a=["setPageViewName","addPageAction","setCustomAttribute","finished","addToTrace","inlineHit","noticeError"];o(a,function(e,n){window.NREUM[n]=t("api-"+n)}),n.exports=window.NREUM},{1:12,2:13,handle:"D5DuLP"}],gos:[function(e,n){n.exports=e("7eSDFh")},{}],"7eSDFh":[function(e,n){function t(e,n,t){if(r.call(e,n))return e[n];var o=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:o,writable:!0,enumerable:!1}),o}catch(i){}return e[n]=o,o}var r=Object.prototype.hasOwnProperty;n.exports=t},{}],D5DuLP:[function(e,n){function t(e,n,t){return r.listeners(e).length?r.emit(e,n,t):void(r.q&&(r.q[e]||(r.q[e]=[]),r.q[e].push(n)))}var r=e("ee").create();n.exports=t,t.ee=r,r.q={}},{ee:"QJf3ax"}],handle:[function(e,n){n.exports=e("D5DuLP")},{}],XL7HBI:[function(e,n){function t(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:i(e,o,function(){return r++})}var r=1,o="nr@id",i=e("gos");n.exports=t},{gos:"7eSDFh"}],id:[function(e,n){n.exports=e("XL7HBI")},{}],G9z0Bl:[function(e,n){function t(){var e=d.info=NREUM.info,n=f.getElementsByTagName("script")[0];if(e&&e.licenseKey&&e.applicationID&&n){c(p,function(n,t){n in e||(e[n]=t)});var t="https"===s.split(":")[0]||e.sslForHttp;d.proto=t?"https://":"http://",a("mark",["onload",i()]);var r=f.createElement("script");r.src=d.proto+e.agent,n.parentNode.insertBefore(r,n)}}function r(){"complete"===f.readyState&&o()}function o(){a("mark",["domContent",i()])}function i(){return(new Date).getTime()}var a=e("handle"),c=e(1),u=window,f=u.document;e(2);var s=(""+location).split("?")[0],p={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-686.min.js"},d=n.exports={offset:i(),origin:s,features:{}};f.addEventListener?(f.addEventListener("DOMContentLoaded",o,!1),u.addEventListener("load",t,!1)):(f.attachEvent("onreadystatechange",r),u.attachEvent("onload",t)),a("mark",["firstbyte",i()])},{1:12,2:3,handle:"D5DuLP"}],loader:[function(e,n){n.exports=e("G9z0Bl")},{}],12:[function(e,n){function t(e,n){var t=[],o="",i=0;for(o in e)r.call(e,o)&&(t[i]=n(o,e[o]),i+=1);return t}var r=Object.prototype.hasOwnProperty;n.exports=t},{}],13:[function(e,n){function t(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,o=t-n||0,i=Array(0>o?0:o);++r<o;)i[r]=e[n+r];return i}n.exports=t},{}]},{},["G9z0Bl"]);</script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Minty-Multipurpose Responsive Email Template</title>
      <style type="text/css">
         /* Client-specific Styles */
         #outlook a {padding:0;} /* Force Outlook to provide a "view in browser" menu link. */
         body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;}
         /* Prevent Webkit and Windows Mobile platforms from changing default font sizes, while not breaking desktop design. */
         .ExternalClass {width:100%;} /* Force Hotmail to display emails at full width */
         .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing.  More on that: http://www.emailonacid.com/forum/viewthread/43/ */
         #backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
         img {outline:none; text-decoration:none;border:none; -ms-interpolation-mode: bicubic;}
         a img {border:none;}
         .image_fix {display:block;}
         p {margin: 0px 0px !important;}
         
         table td {border-collapse: collapse;}
         table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
         /*a {color: #e95353;text-decoration: none;text-decoration:none!important;}*/
         /*STYLES*/
         table[class=full] { width: 100%; clear: both; }
         
         /*################################################*/
         /*IPAD STYLES*/
         /*################################################*/
         @media only screen and (max-width: 640px) {
         a[href^="tel"], a[href^="sms"] {
         text-decoration: none;
         color: #ffffff; /* or whatever your want */
         pointer-events: none;
         cursor: default;
         }
         .mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
         text-decoration: default;
         color: #ffffff !important;
         pointer-events: auto;
         cursor: default;
         }
         table[class=devicewidth] {width: 440px!important;text-align:center!important;}
         table[class=devicewidthinner] {width: 420px!important;text-align:center!important;}
         table[class="sthide"]{display: none!important;}
         img[class="bigimage"]{width: 420px!important;height:219px!important;}
         img[class="col2img"]{width: 420px!important;height:258px!important;}
         img[class="image-banner"]{width: 440px!important;height:106px!important;}
         td[class="menu"]{text-align:center !important; padding: 0 0 10px 0 !important;}
         td[class="logo"]{padding:10px 0 5px 0!important;margin: 0 auto !important;}
         img[class="logo"]{padding:0!important;margin: 0 auto !important;}

         }
         /*##############################################*/
         /*IPHONE STYLES*/
         /*##############################################*/
         @media only screen and (max-width: 480px) {
         a[href^="tel"], a[href^="sms"] {
         text-decoration: none;
         color: #ffffff; /* or whatever your want */
         pointer-events: none;
         cursor: default;
         }
         .mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
         text-decoration: default;
         color: #ffffff !important; 
         pointer-events: auto;
         cursor: default;
         }
         table[class=devicewidth] {width: 280px!important;text-align:center!important;}
         table[class=devicewidthinner] {width: 260px!important;text-align:center!important;}
         table[class="sthide"]{display: none!important;}
         img[class="bigimage"]{width: 260px!important;height:136px!important;}
         img[class="col2img"]{width: 260px!important;height:160px!important;}
         img[class="image-banner"]{width: 280px!important;height:68px!important;}
         
         }
      </style>

      
   
<style type="text/css">

</style>
</head>
<body>
<div class="block">
   <!-- Start of preheader -->
   <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="preheader">
      <tbody>
         <tr>
            <td width="100%">
               <table width="580" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth">
                  <tbody>
                     <!-- Spacing -->
                     <tr>
                        <td width="100%" height="5"></td>
                     </tr>
                     <!-- Spacing -->
                     <tr>
                        <td align="right" valign="middle" style="font-family: Helvetica, arial, sans-serif; font-size: 10px;color: #999999" st-content="preheader">
                           If you cannot read this email, please  <a class="hlite" href="#" style="text-decoration: none; color: #0db9ea">click here</a> 
                        </td>
                     </tr>
                     <!-- Spacing -->
                     <tr>
                        <td width="100%" height="5"></td>
                     </tr>
                     <!-- Spacing -->
                  </tbody>
               </table>
            </td>
         </tr>
      </tbody>
   </table>
   <!-- End of preheader -->
</div>
<div class="block">
   <!-- start of header -->
   <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="header">
      <tbody>
         <tr>
            <td>
               <table width="580" bgcolor="#0db9ea" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth" hlitebg="edit" shadow="edit">
                  <tbody>
                     <tr>
                        <td>
                           <!-- logo -->
                           <table width="280" cellpadding="0" cellspacing="0" border="0" align="left" class="devicewidth">
                              <tbody>
                                 <tr>
                                    <td valign="middle" width="270" style="padding: 10px 0 10px 20px;" class="logo">
                                       <div class="imgpop">
                                          <a href="#"><img src="https://litmus-builder.s3.amazonaws.com/1426191332805" alt="logo" border="0" style="display:block; border:none; outline:none; text-decoration:none;" st-image="edit" class="logo"></a>
                                       </div>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                           <!-- End of logo -->
                           <!-- menu -->
                           <table width="280" cellpadding="0" cellspacing="0" border="0" align="right" class="devicewidth">
                              <tbody>
                                 <tr>
                                    <td width="270" valign="middle" style="font-family: Helvetica, Arial, sans-serif;font-size: 14px; color: #ffffff;line-height: 24px; padding: 10px 0;" align="right" class="menu" st-content="menu">
                                       <a href="#" style="text-decoration: none; color: #ffffff;">HOME</a>
                                       &nbsp;|&nbsp;
                                       <a href="#" style="text-decoration: none; color: #ffffff;">ABOUT</a>
                                       &nbsp;|&nbsp;
                                       <a href="#" style="text-decoration: none; color: #ffffff;">SHOP</a>
                                    </td>
                                    <td width="20"></td>
                                 </tr>
                              </tbody>
                           </table>
                           <!-- End of Menu -->
                        </td>
                     </tr>
                  </tbody>
               </table>
            </td>
         </tr>
      </tbody>
   </table>
   <!-- end of header -->
</div><div class="block">
   <!-- image + text -->
   <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="bigimage">
      <tbody>
         <tr>
            <td>
               <table bgcolor="#ffffff" width="580" align="center" cellspacing="0" cellpadding="0" border="0" class="devicewidth" modulebg="edit">
                  <tbody>
                     <tr>
                        <td width="100%" height="20"></td>
                     </tr>
                     <tr>
                        <td>
                           <table width="540" align="center" cellspacing="0" cellpadding="0" border="0" class="devicewidthinner">
                              <tbody>
                                 <tr>
                                    <!-- start of image -->
                                    <td align="center">
                                       <a target="_blank" href="#"><img width="540" border="0" height="282" alt="" style="display:block; border:none; outline:none; text-decoration:none;" src="https://litmus-builder.s3.amazonaws.com/1426191333796" class="bigimage"></a>
                                    </td>
                                 </tr>
                                 <!-- end of image -->
                                 <!-- Spacing -->
                                 <tr>
                                    <td width="100%" height="20"></td>
                                 </tr>
                                 <!-- Spacing -->
                                 <!-- title -->
                                 <tr>
                                    <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #333333; text-align:left;line-height: 20px;" st-title="rightimage-title">
                                       LOREM IPSUM
                                    </td>
                                 </tr>
                                 <!-- end of title -->
                                 <!-- Spacing -->
                                 <tr>
                                    <td width="100%" height="20"></td>
                                 </tr>
                                 <!-- Spacing -->
                                 <!-- content -->
                                 <tr>
                                    <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #95a5a6; text-align:left;line-height: 24px;" st-content="rightimage-paragraph">
                                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </td>
                                 </tr>
                                 <!-- end of content -->
                                 <!-- Spacing -->
                                 <tr>
                                    <td width="100%" height="10"></td>
                                 </tr>
                                 <!-- button -->
                                 <tr>
                                    <td>
                                       <table height="30" align="left" valign="middle" border="0" cellpadding="0" cellspacing="0" class="tablet-button" st-button="edit">
                                                                  <tbody>
                                                                     <tr>
                                                                        <td width="auto" align="center" valign="middle" height="30" style=" background-color:#0db9ea; border-top-left-radius:4px; border-bottom-left-radius:4px;border-top-right-radius:4px; border-bottom-right-radius:4px; background-clip: padding-box;font-size:13px; font-family:Helvetica, arial, sans-serif; text-align:center;  color:#ffffff; font-weight: 300; padding-left:18px; padding-right:18px;">
                                                                        
                                                                           <span style="color: #ffffff; font-weight: 300;">
                                                                              <a style="color: #ffffff; text-align:center;text-decoration: none;" href="#">Read More</a>
                                                                           </span>
                                                                        </td>
                                                                     </tr>
                                                                  </tbody>
                                                               </table>
                                    </td>
                                 </tr>
                                 <!-- /button -->
                                 <!-- Spacing -->
                                 <tr>
                                    <td width="100%" height="20"></td>
                                 </tr>
                                 <!-- Spacing -->
                              </tbody>
                           </table>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </td>
         </tr>
      </tbody>
   </table>
</div>

<div class="block">
   <!-- start textbox-with-title -->
   <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="fulltext">
      <tbody>
         <tr>
            <td>
               <table bgcolor="#ffffff" width="580" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth" modulebg="edit">
                  <tbody>
                     <!-- Spacing -->
                     <tr>
                        <td width="100%" height="30"></td>
                     </tr>
                     <!-- Spacing -->
                     <tr>
                        <td>
                           <table width="540" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner">
                              <tbody>
                                 <!-- Title -->
                                 <tr>
                                    <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #333333; text-align:center;line-height: 20px;" st-title="fulltext-title">
                                       NICE HEADING HERE
                                    </td>
                                 </tr>
                                 <!-- End of Title -->
                                 <!-- spacing -->
                                 <tr>
                                    <td height="5"></td>
                                 </tr>
                                 <!-- End of spacing -->
                                 <!-- content -->
                                 <tr>
                                    <td style="font-family: Helvetica, arial, sans-serif; font-size: 14px; color: #95a5a6; text-align:center;line-height: 30px;" st-content="fulltext-paragraph">
                                       Lorem ipsum dolor sit amet
                                    </td>
                                 </tr>
                                 <!-- End of content -->
                                 <!-- Spacing -->
                                 <tr>
                                    <td width="100%" height="10"></td>
                                 </tr>
                                 <!-- Spacing -->
                                 <!-- button -->
                                 <tr>
                                    <td>

                                       <table height="36" align="center" valign="middle" border="0" cellpadding="0" cellspacing="0" class="tablet-button" st-button="edit">
                                                                  <tbody>
                                                                     <tr>
                                                                        <td width="auto" align="center" valign="middle" height="36" style=" background-color:#0db9ea; border-top-left-radius:4px; border-bottom-left-radius:4px;border-top-right-radius:4px; border-bottom-right-radius:4px; background-clip: padding-box;font-size:13px; font-family:Helvetica, arial, sans-serif; text-align:center;  color:#ffffff; font-weight: 300; padding-left:25px; padding-right:25px;">
                                                                        
                                                                           <span style="color: #ffffff; font-weight: 300;">
                                                                              <a style="color: #ffffff; text-align:center;text-decoration: none;" href="#">Download</a>
                                                                           </span>
                                                                        </td>
                                                                     </tr>
                                                                  </tbody>
                                                               </table>


                                       
                                    </td>
                                 </tr>
                                 <!-- /button -->
                                 <!-- Spacing -->
                                 <tr>
                                    <td width="100%" height="30"></td>
                                 </tr>
                                 <!-- Spacing -->
                              </tbody>
                           </table>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </td>
         </tr>
      </tbody>
   </table>
   <!-- end of textbox-with-title -->
</div>
<div class="block">
   <!-- start of left image -->
   <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="leftimage">
      <tbody>
         <tr>
            <td>
               <table bgcolor="#ffffff" width="580" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth" modulebg="edit">
                  <tbody>
                     <!-- Spacing -->
                     <tr>
                        <td height="20"></td>
                     </tr>
                     <!-- Spacing -->
                     <tr>
                        <td>
                           <table width="540" align="center" border="0" cellpadding="0" cellspacing="0" class="devicewidthinner">
                              <tbody>
                                 <tr>
                                    <td>
                                       <!-- start of text content table -->
                                       <table width="200" align="left" border="0" cellpadding="0" cellspacing="0" class="devicewidthinner">
                                          <tbody>
                                             <!-- image -->
                                             <tr>
                                                <td width="200" height="180" align="center">
                                                   <img src="https://litmus-builder.s3.amazonaws.com/1426191334688" alt="" border="0" width="180" height="180" style="display:block; border:none; outline:none; text-decoration:none;">
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <!-- mobile spacing -->
                                       <table align="left" border="0" cellpadding="0" cellspacing="0" class="mobilespacing">
                                          <tbody>
                                             <tr>
                                                <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <!-- mobile spacing -->
                                       <!-- start of right column -->
                                       <table width="330" align="right" border="0" cellpadding="0" cellspacing="0" class="devicewidthinner">
                                          <tbody>
                                             <!-- title -->
                                             <tr>
                                                <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #333333; text-align:left;line-height: 20px;" st-title="leftimage-title">
                                                   LOREM IPSUM
                                                </td>
                                             </tr>
                                             <!-- end of title -->
                                             <!-- Spacing -->
                                             <tr>
                                                <td width="100%" height="20"></td>
                                             </tr>
                                             <!-- Spacing -->
                                             <!-- content -->
                                             <tr>
                                                <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #95a5a6; text-align:left;line-height: 24px;" st-content="leftimage-paragraph">
                                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                                </td>
                                             </tr>
                                             <!-- end of content -->
                                             <!-- Spacing -->
                                             <tr>
                                                <td width="100%" height="10"></td>
                                             </tr>
                                             <!-- button -->
                                             <tr>
                                                <td>
                                                   <table height="30" align="left" valign="middle" border="0" cellpadding="0" cellspacing="0" class="tablet-button" st-button="edit">
                                                                  <tbody>
                                                                     <tr>
                                                                        <td width="auto" align="center" valign="middle" height="30" style=" background-color:#0db9ea; border-top-left-radius:4px; border-bottom-left-radius:4px;border-top-right-radius:4px; border-bottom-right-radius:4px; background-clip: padding-box;font-size:13px; font-family:Helvetica, arial, sans-serif; text-align:center;  color:#ffffff; font-weight: 300; padding-left:18px; padding-right:18px;">
                                                                        
                                                                           <span style="color: #ffffff; font-weight: 300;">
                                                                              <a style="color: #ffffff; text-align:center;text-decoration: none;" href="#">Read More</a>
                                                                           </span>
                                                                        </td>
                                                                     </tr>
                                                                  </tbody>
                                                               </table>
                                                </td>
                                             </tr>
                                             <!-- /button -->
                                          </tbody>
                                       </table>
                                       <!-- end of right column -->
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </td>
                     </tr>
                     <!-- Spacing -->
                     <tr>
                        <td height="20"></td>
                     </tr>
                     <!-- Spacing -->
                  </tbody>
               </table>
            </td>
         </tr>
      </tbody>
   </table>
   <!-- end of left image -->
</div>
<div class="block">
   <!-- start of left image -->
   <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="rightimage">
      <tbody>
         <tr>
            <td>
               <table bgcolor="#ffffff" width="580" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth" modulebg="edit">
                  <tbody>
                     <!-- Spacing -->
                     <tr>
                        <td height="20"></td>
                     </tr>
                     <!-- Spacing -->
                     <tr>
                        <td>
                           <table width="540" align="center" border="0" cellpadding="0" cellspacing="0" class="devicewidthinner">
                              <tbody>
                                 <tr>
                                    <td>
                                       <!-- start of text content table -->
                                       <table width="200" align="right" border="0" cellpadding="0" cellspacing="0" class="devicewidthinner">
                                          <tbody>
                                             <!-- image -->
                                             <tr>
                                                <td width="200" height="180" align="center">
                                                   <img src="https://litmus-builder.s3.amazonaws.com/1426191333498" alt="" border="0" width="180" height="180" style="display:block; border:none; outline:none; text-decoration:none;">
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <!-- mobile spacing -->
                                       <table align="left" border="0" cellpadding="0" cellspacing="0" class="mobilespacing">
                                          <tbody>
                                             <tr>
                                                <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <!-- mobile spacing -->
                                       <!-- start of right column -->
                                       <table width="330" align="left" border="0" cellpadding="0" cellspacing="0" class="devicewidthinner">
                                          <tbody>
                                             <!-- title -->
                                             <tr>
                                                <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #333333; text-align:left;line-height: 20px;" st-title="rightimage-title">
                                                   LOREM IPSUM
                                                </td>
                                             </tr>
                                             <!-- end of title -->
                                             <!-- Spacing -->
                                             <tr>
                                                <td width="100%" height="20"></td>
                                             </tr>
                                             <!-- Spacing -->
                                             <!-- content -->
                                             <tr>
                                                <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #95a5a6; text-align:left;line-height: 24px;" st-content="rightimage-paragraph">
                                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                                </td>
                                             </tr>
                                             <!-- end of content -->
                                             <!-- Spacing -->
                                             <tr>
                                                <td width="100%" height="10"></td>
                                             </tr>
                                             <!-- button -->
                                             <tr>
                                                <td>
                                                   <table height="30" align="left" valign="middle" border="0" cellpadding="0" cellspacing="0" class="tablet-button" st-button="edit">
                                                                  <tbody>
                                                                     <tr>
                                                                        <td width="auto" align="center" valign="middle" height="30" style=" background-color:#0db9ea; border-top-left-radius:4px; border-bottom-left-radius:4px;border-top-right-radius:4px; border-bottom-right-radius:4px; background-clip: padding-box;font-size:13px; font-family:Helvetica, arial, sans-serif; text-align:center;  color:#ffffff; font-weight: 300; padding-left:18px; padding-right:18px;">
                                                                        
                                                                           <span style="color: #ffffff; font-weight: 300;">
                                                                              <a style="color: #ffffff; text-align:center;text-decoration: none;" href="#">Read More</a>
                                                                           </span>
                                                                        </td>
                                                                     </tr>
                                                                  </tbody>
                                                               </table>
                                                </td>
                                             </tr>
                                             <!-- /button -->
                                          </tbody>
                                       </table>
                                       <!-- end of right column -->
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </td>
                     </tr>
                     <!-- Spacing -->
                     <tr>
                        <td height="20"></td>
                     </tr>
                     <!-- Spacing -->
                  </tbody>
               </table>
            </td>
         </tr>
      </tbody>
   </table>
   <!-- end of left image -->
</div>
<div class="block">
   <!-- fulltext -->
   <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="fulltext">
      <tbody>
         <tr>
            <td>
               <table bgcolor="#ffffff" width="580" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth" modulebg="edit">
                  <tbody>
                     <!-- Spacing -->
                     <tr>
                        <td width="100%" height="30"></td>
                     </tr>
                     <!-- Spacing -->
                     <tr>
                        <td>
                           <table width="540" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner">
                              <tbody>
                                 <!-- Title -->
                                 <tr>
                                    <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #333333; text-align:center;line-height: 20px;" st-title="fulltext-title">
                                       NICE HEADING HERE
                                    </td>
                                 </tr>
                                 <!-- End of Title -->
                                 <!-- spacing -->
                                 <tr>
                                    <td height="5"></td>
                                 </tr>
                                 <!-- End of spacing -->
                                 <!-- content -->
                                 <tr>
                                    <td style="font-family: Helvetica, arial, sans-serif; font-size: 14px; color: #95a5a6; text-align:center;line-height: 30px;" st-content="fulltext-paragraph">
                                       Lorem ipsum dolor sit amet
                                    </td>
                                 </tr>
                                 <!-- End of content -->
                                 <!-- Spacing -->
                                 <tr>
                                    <td width="100%" height="30"></td>
                                 </tr>
                                 <!-- Spacing -->
                              </tbody>
                           </table>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </td>
         </tr>
      </tbody>
   </table>
   <!-- end of fulltext -->
</div>



<div class="block">
   <!-- Start of 2-columns -->
   <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="2columns">
      <tbody>
         <tr>
            <td>
               <table bgcolor="#ffffff" width="580" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth" modulebg="edit">
                  <tbody>
                     <tr>
                        <td width="100%" height="20"></td>
                     </tr>
                     <tr>
                        <td>
                           <table width="540" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth">
                              <tbody>
                                 <tr>
                                    <td>
                                       <table width="260" align="left" border="0" cellpadding="0" cellspacing="0" class="devicewidth">
                                          <tbody>
                                             <!-- image -->
                                             <tr>
                                                <td width="260" height="140" align="center" class="devicewidth">
                                                   <img src="https://litmus-builder.s3.amazonaws.com/1426191334956" alt="" border="0" width="260" height="140" style="display:block; border:none; outline:none; text-decoration:none;" class="col2img">
                                                </td>
                                             </tr>
                                             <!-- Spacing -->
                                             <tr>
                                                <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                             </tr>
                                             <!-- Spacing -->
                                             <tr>
                                                <td>
                                                   <!-- start of text content table -->
                                                   <table width="260" align="center" border="0" cellpadding="0" cellspacing="0" class="devicewidthinner">
                                                      <tbody>
                                                         <!-- title -->
                                                         <tr>
                                                            <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #333333; text-align:left;line-height: 20px;" st-title="2col-title1">
                                                               LOREM IPSUM
                                                            </td>
                                                         </tr>
                                                         <!-- end of title -->
                                                         <!-- Spacing -->
                                                         <tr>
                                                            <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                         </tr>
                                                         <!-- /Spacing -->
                                                         <!-- content -->
                                                         <tr>
                                                            <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #95a5a6; text-align:left;line-height: 20px;" st-content="2col-para1">
                                                               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempam et justo duo dolores et ea rebum.
                                                            </td>
                                                         </tr>
                                                         <!-- end of content -->
                                                         <!-- Spacing -->
                                                         <tr>
                                                            <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                         </tr>
                                                         <!-- /Spacing -->
                                                         <!-- button -->
                                                         <tr>
                                                            <td>
                                                               <table height="30" align="left" valign="middle" border="0" cellpadding="0" cellspacing="0" class="tablet-button" st-button="edit">
                                                                  <tbody>
                                                                     <tr>
                                                                        <td width="auto" align="center" valign="middle" height="30" style=" background-color:#0db9ea; border-top-left-radius:4px; border-bottom-left-radius:4px;border-top-right-radius:4px; border-bottom-right-radius:4px; background-clip: padding-box;font-size:13px; font-family:Helvetica, arial, sans-serif; text-align:center;  color:#ffffff; font-weight: 300; padding-left:18px; padding-right:18px;">
                                                                        
                                                                           <span style="color: #ffffff; font-weight: 300;">
                                                                              <a style="color: #ffffff; text-align:center;text-decoration: none;" href="#">Read More</a>
                                                                           </span>
                                                                        </td>
                                                                     </tr>
                                                                  </tbody>
                                                               </table>
                                                            </td>
                                                         </tr>
                                                         <!-- /button -->
                                                      </tbody>
                                                   </table>
                                                </td>
                                             </tr>
                                             <!-- end of text content table -->
                                          </tbody>
                                       </table>
                                       <!-- end of left column -->
                                       <!-- spacing for mobile devices-->
                                       <table align="left" border="0" cellpadding="0" cellspacing="0" class="mobilespacing">
                                          <tbody>
                                             <tr>
                                                <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <!-- end of for mobile devices-->
                                       <!-- start of right column -->
                                       <table width="260" align="right" border="0" cellpadding="0" cellspacing="0" class="devicewidth">
                                          <tbody>
                                             <!-- image -->
                                             <tr>
                                                <td width="260" height="140" align="center" class="devicewidth">
                                                   <img src="https://litmus-builder.s3.amazonaws.com/1426191333193" alt="" border="0" width="260" height="140" style="display:block; border:none; outline:none; text-decoration:none;" class="col2img">
                                                </td>
                                             </tr>
                                             <!-- Spacing -->
                                             <tr>
                                                <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                             </tr>
                                             <!-- Spacing -->
                                             <tr>
                                                <td>
                                                   <!-- start of text content table -->
                                                   <table width="260" align="center" border="0" cellpadding="0" cellspacing="0" class="devicewidthinner">
                                                      <tbody>
                                                         <!-- title -->
                                                         <tr>
                                                            <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #333333; text-align:left;line-height: 20px;" st-title="2col-title2">
                                                               LOREM IPSUM
                                                            </td>
                                                         </tr>
                                                         <!-- end of title -->
                                                         <!-- Spacing -->
                                                         <tr>
                                                            <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                         </tr>
                                                         <!-- /Spacing -->
                                                         <!-- content -->
                                                         <tr>
                                                            <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #95a5a6; text-align:left;line-height: 20px;" st-content="2col-para2">
                                                               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempam et justo duo dolores et ea rebum.
                                                            </td>
                                                         </tr>
                                                         <!-- end of content -->
                                                         <!-- Spacing -->
                                                         <tr>
                                                            <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                         </tr>
                                                         <!-- /Spacing -->
                                                         <!-- button -->
                                                         <tr>
                                                            <td>
                                                               <table height="30" align="left" valign="middle" border="0" cellpadding="0" cellspacing="0" class="tablet-button" st-button="edit">
                                                                  <tbody>
                                                                     <tr>
                                                                        <td width="auto" align="center" valign="middle" height="30" style=" background-color:#0db9ea; border-top-left-radius:4px; border-bottom-left-radius:4px;border-top-right-radius:4px; border-bottom-right-radius:4px; background-clip: padding-box;font-size:13px; font-family:Helvetica, arial, sans-serif; text-align:center;  color:#ffffff; font-weight: 300; padding-left:18px; padding-right:18px;">
                                                                        
                                                                           <span style="color: #ffffff; font-weight: 300;">
                                                                              <a style="color: #ffffff; text-align:center;text-decoration: none;" href="#">Read More</a>
                                                                           </span>
                                                                        </td>
                                                                     </tr>
                                                                  </tbody>
                                                               </table>
                                                            </td>
                                                         </tr>
                                                         <!-- /button -->
                                                      </tbody>
                                                   </table>
                                                </td>
                                             </tr>
                                             <!-- end of text content table -->
                                          </tbody>
                                       </table>
                                       <!-- end of right column -->
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </td>
                     </tr>
                     <tr>
                        <td width="100%" height="20"></td>
                     </tr>
                  </tbody>
               </table>
            </td>
         </tr>
      </tbody>
   </table>
   <!-- End of 2-columns -->   
</div>
<div class="block">
   <!-- 3-columns -->  
   <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="3columns">
      <tbody>
         <tr>
            <td>
               <table bgcolor="#ffffff" width="580" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth" modulebg="edit">
                  <tbody>
                     <tr>
                        <td width="100%" height="20"></td>
                     </tr>
                     <tr>
                        <td>
                           <table width="540" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth">
                              <tbody>
                                 <tr>
                                    <td>
                                       <!-- col 1 -->
                                       <table width="170" align="left" border="0" cellpadding="0" cellspacing="0" class="devicewidth">
                                          <tbody>
                                             <!-- image 2 -->
                                             <tr>
                                                <td width="170" height="128" align="center" class="devicewidth">
                                                   <img src="https://litmus-builder.s3.amazonaws.com/1426191334369" alt="" border="0" width="170" height="128" style="display:block; border:none; outline:none; text-decoration:none;" class="col3img">
                                                </td>
                                             </tr>
                                             <!-- end of image2 -->
                                             <tr>
                                                <td>
                                                   <!-- start of text content table -->  
                                                   <table width="170" align="center" border="0" cellpadding="0" cellspacing="0" class="devicewidthinner">
                                                      <tbody>
                                                         <!-- Spacing -->
                                                         <tr>
                                                            <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                         </tr>
                                                         <!-- Spacing -->
                                                         <!-- title2 -->
                                                         <tr>
                                                            <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #333333; text-align:left;line-height: 20px;" st-title="3col-title1">
                                                               Lorem Ipsum
                                                            </td>
                                                         </tr>
                                                         <!-- end of title2 -->
                                                         <!-- Spacing -->
                                                         <tr>
                                                            <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                         </tr>
                                                         <!-- Spacing -->
                                                         <!-- content2 -->
                                                         <tr>
                                                            <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #95a5a6; text-align:left;line-height: 20px;" st-content="3col-para1">
                                                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                            </td>
                                                         </tr>
                                                         <!-- end of content2 -->
                                                         <!-- Spacing -->
                                                         <tr>
                                                            <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                         </tr>
                                                         <!-- Spacing -->
                                                         <!-- button -->
                                                         <tr>
                                                            <td>
                                                               <table height="30" align="left" valign="middle" border="0" cellpadding="0" cellspacing="0" class="tablet-button" st-button="edit">
                                                                  <tbody>
                                                                     <tr>
                                                                        <td width="auto" align="center" valign="middle" height="30" style=" background-color:#0db9ea; border-top-left-radius:4px; border-bottom-left-radius:4px; border-top-right-radius:4px; border-bottom-right-radius:4px;background-clip: padding-box;font-size:13px; font-family:Helvetica, arial, sans-serif; text-align:center;  color:#ffffff; font-weight: 300; padding-left:18px; padding-right:18px;">
                                                                        
                                                                           <span style="color: #ffffff; font-weight: 300;">
                                                                              <a style="color: #ffffff; text-align:center;text-decoration: none;" href="#">Read More</a>
                                                                           </span>
                                                                        </td>
                                                                     </tr>
                                                                  </tbody>
                                                               </table>
                                                            </td>
                                                         </tr>
                                                         <!-- /button -->
                                                      </tbody>
                                                   </table>
                                                </td>
                                             </tr>
                                             <!-- end of text content table -->
                                          </tbody>
                                       </table>
                                       <!-- spacing -->
                                       <table width="15" align="left" border="0" cellpadding="0" cellspacing="0" class="removeMobile">
                                          <tbody>
                                             <tr>
                                                <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <!-- end of spacing -->
                                       <!-- col 2 -->
                                       <table width="170" align="left" border="0" cellpadding="0" cellspacing="0" class="devicewidth">
                                          <tbody>
                                             <!-- image 2 -->
                                             <tr>
                                                <td width="170" height="128" align="center" class="devicewidth">
                                                   <img src="https://litmus-builder.s3.amazonaws.com/1426191334369" alt="" border="0" width="170" height="128" style="display:block; border:none; outline:none; text-decoration:none;" class="col3img">
                                                </td>
                                             </tr>
                                             <!-- end of image2 -->
                                             <tr>
                                                <td>
                                                   <!-- start of text content table -->  
                                                   <table width="170" align="center" border="0" cellpadding="0" cellspacing="0" class="devicewidthinner">
                                                      <tbody>
                                                         <!-- Spacing -->
                                                         <tr>
                                                            <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                         </tr>
                                                         <!-- Spacing -->
                                                         <!-- title2 -->
                                                         <tr>
                                                            <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #333333; text-align:left;line-height: 20px;" st-title="3col-title2">
                                                               Lorem Ipsum
                                                            </td>
                                                         </tr>
                                                         <!-- end of title2 -->
                                                         <!-- Spacing -->
                                                         <tr>
                                                            <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                         </tr>
                                                         <!-- Spacing -->
                                                         <!-- content2 -->
                                                         <tr>
                                                            <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #95a5a6; text-align:left;line-height: 20px;" st-content="3col-para2">
                                                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                            </td>
                                                         </tr>
                                                         <!-- end of content2 -->
                                                         <!-- Spacing -->
                                                         <tr>
                                                            <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                         </tr>
                                                         <!-- /Spacing -->
                                                         <!-- button -->
                                                         <tr>
                                                            <td>
                                                               <table height="30" align="left" valign="middle" border="0" cellpadding="0" cellspacing="0" class="tablet-button" st-button="edit">
                                                                  <tbody>
                                                                     <tr>
                                                                        <td width="auto" align="center" valign="middle" height="30" style=" background-color:#0db9ea; border-top-left-radius:4px; border-bottom-left-radius:4px; border-top-right-radius:4px; border-bottom-right-radius:4px;background-clip: padding-box;font-size:13px; font-family:Helvetica, arial, sans-serif; text-align:center;  color:#ffffff; font-weight: 300; padding-left:18px; padding-right:18px;">
                                                                        
                                                                           <span style="color: #ffffff; font-weight: 300;">
                                                                              <a style="color: #ffffff; text-align:center;text-decoration: none;" href="#">Read More</a>
                                                                           </span>
                                                                        </td>
                                                                     </tr>
                                                                  </tbody>
                                                               </table>
                                                            </td>
                                                         </tr>
                                                         <!-- /button -->
                                                      </tbody>
                                                   </table>
                                                </td>
                                             </tr>
                                             <!-- end of text content table -->
                                          </tbody>
                                       </table>
                                       <!-- end of col 2 -->
                                       <!-- spacing -->
                                       <table width="1" align="left" border="0" cellpadding="0" cellspacing="0" class="removeMobile">
                                          <tbody>
                                             <tr>
                                                <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <!-- end of spacing -->
                                       <!-- col 3 -->
                                       <table width="170" align="right" border="0" cellpadding="0" cellspacing="0" class="devicewidth">
                                          <tbody>
                                             <!-- image3 -->
                                             <tr>
                                                <td width="170" height="128" align="center" class="devicewidth">
                                                   <img src="https://litmus-builder.s3.amazonaws.com/1426191334369" alt="" width="170" height="128" border="0" style="display:block; border:none; outline:none; text-decoration:none;" class="col3img">
                                                </td>
                                             </tr>
                                             <!-- end of image3 -->
                                             <tr>
                                                <td>
                                                   <!-- start of text content table -->  
                                                   <table width="170" align="center" border="0" cellpadding="0" cellspacing="0" class="devicewidthinner">
                                                      <tbody>
                                                         <!-- Spacing -->
                                                         <tr>
                                                            <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                         </tr>
                                                         <!-- Spacing -->
                                                         <!-- title -->
                                                         <tr>
                                                            <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #333333; text-align:left;line-height: 20px;" st-title="3col-title3">
                                                               Lorem Ipsum
                                                            </td>
                                                         </tr>
                                                         <!-- end of title -->
                                                         <!-- Spacing -->
                                                         <tr>
                                                            <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                         </tr>
                                                         <!-- Spacing -->
                                                         <!-- content -->
                                                         <tr>
                                                            <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #95a5a6; text-align:left;line-height: 20px;" st-content="3col-para1">
                                                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                            </td>
                                                         </tr>
                                                         <!-- end of content -->
                                                         <!-- Spacing -->
                                                         <tr>
                                                            <td width="100%" height="15" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                         </tr>
                                                         <!-- Spacing -->
                                                         <!-- button -->
                                                         <tr>
                                                            <td>
                                                               <table height="30" align="left" valign="middle" border="0" cellpadding="0" cellspacing="0" class="tablet-button" st-button="edit">
                                                                  <tbody>
                                                                     <tr>
                                                                        <td width="auto" align="center" valign="middle" height="30" style=" background-color:#0db9ea; border-top-left-radius:4px; border-bottom-left-radius:4px;border-top-right-radius:4px; border-bottom-right-radius:4px; background-clip: padding-box;font-size:13px; font-family:Helvetica, arial, sans-serif; text-align:center;  color:#ffffff; font-weight: 300; padding-left:18px; padding-right:18px;">
                                                                        
                                                                           <span style="color: #ffffff; font-weight: 300;">
                                                                              <a style="color: #ffffff; text-align:center;text-decoration: none;" href="#">Read More</a>
                                                                           </span>
                                                                        </td>
                                                                     </tr>
                                                                  </tbody>
                                                               </table>
                                                            </td>
                                                         </tr>
                                                         <!-- /button -->
                                                      </tbody>
                                                   </table>
                                                </td>
                                             </tr>
                                             <!-- end of text content table -->
                                          </tbody>
                                       </table>
                                    </td>
                                    <!-- spacing -->
                                    <!-- end of spacing -->
                                 </tr>
                              </tbody>
                           </table>
                        </td>
                     </tr>
                     <tr>
                        <td width="100%" height="20"></td>
                     </tr>
                  </tbody>
               </table>
            </td>
         </tr>
      </tbody>
   </table>
   <!-- end of 3-columns --> 
</div>

<div class="block">
   <!-- Full + text -->
   <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="fullimage">
      <tbody>
         <tr>
            <td>
               <table bgcolor="#ffffff" width="580" align="center" cellspacing="0" cellpadding="0" border="0" class="devicewidth" modulebg="edit">
                  <tbody>
                     <tr>
                        <td width="100%" height="20"></td>
                     </tr>
                     <tr>
                        <td>
                           <table width="540" align="center" cellspacing="0" cellpadding="0" border="0" class="devicewidthinner">
                              <tbody>
                                 <!-- title -->
                                 <tr>
                                    <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #333333; text-align:left;line-height: 20px;" st-title="rightimage-title">
                                       LOREM IPSUM
                                    </td>
                                 </tr>
                                 <!-- end of title -->
                                 <!-- Spacing -->
                                 <tr>
                                    <td width="100%" height="10"></td>
                                 </tr>
                                 <!-- Spacing -->
                                 <!-- content -->
                                 <tr>
                                    <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #666666; text-align:left;line-height: 24px;" st-content="rightimage-paragraph">
                                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </td>
                                 </tr>
                                 <!-- end of content -->
                                 <!-- Spacing -->
                                 <tr>
                                    <td width="100%" height="10"></td>
                                 </tr>
                                 <!-- button -->
                                 <tr>
                                    <td>
                                       <table height="30" align="left" valign="middle" border="0" cellpadding="0" cellspacing="0" class="tablet-button" st-button="edit">
                                                                  <tbody>
                                                                     <tr>
                                                                        <td width="auto" align="center" valign="middle" height="30" style=" background-color:#0db9ea; border-top-left-radius:4px; border-bottom-left-radius:4px;border-top-right-radius:4px; border-bottom-right-radius:4px; background-clip: padding-box;font-size:13px; font-family:Helvetica, arial, sans-serif; text-align:center;  color:#ffffff; font-weight: 300; padding-left:18px; padding-right:18px;">
                                                                        
                                                                           <span style="color: #ffffff; font-weight: 300;">
                                                                              <a style="color: #ffffff; text-align:center;text-decoration: none;" href="#">Read More</a>
                                                                           </span>
                                                                        </td>
                                                                     </tr>
                                                                  </tbody>
                                                               </table>
                                    </td>
                                 </tr>
                                 <!-- /button -->
                                 <!-- Spacing -->
                                 <tr>
                                    <td width="100%" height="20"></td>
                                 </tr>
                                 <!-- Spacing -->
                              </tbody>
                           </table>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </td>
         </tr>
      </tbody>
   </table>
</div>
<div class="block">
   <!-- Start of preheader -->
   <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="postfooter">
      <tbody>
         <tr>
            <td width="100%">
               <table width="580" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth">
                  <tbody>
                     <!-- Spacing -->
                     <tr>
                        <td width="100%" height="5"></td>
                     </tr>
                     <!-- Spacing -->
                     <tr>
                        <td align="center" valign="middle" style="font-family: Helvetica, arial, sans-serif; font-size: 10px;color: #999999" st-content="preheader">
                           If you don't want to receive updates. please  <a class="hlite" href="#" style="text-decoration: none; color: #0db9ea">unsubscribe</a> 
                        </td>
                     </tr>
                     <!-- Spacing -->
                     <tr>
                        <td width="100%" height="5"></td>
                     </tr>
                     <!-- Spacing -->
                  </tbody>
               </table>
            </td>
         </tr>
      </tbody>
   </table>
   <!-- End of preheader -->
</div>
`
const htmlT2 = `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="x-apple-disable-message-reformatting">
	<title></title>
	<!--[if mso]>
	<noscript>
		<xml>
			<o:OfficeDocumentSettings>
				<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		</xml>
	</noscript>
	<![endif]-->
	<style>
		table, td, div, h1, p {font-family: Inter, sans-serif;}
	</style>
</head>
<body style="margin:0;padding:0;">
	<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
		<tr>
			<td align="center" style="padding:0;">
				<table role="presentation" style="width:672px;border-collapse:collapse;border-spacing:0;text-align:left;">
					<tr>
						<td align="center" style="padding:0;">
              <img src="https://res.cloudinary.com/casava/image/upload/v1627572446/casava-welcome-male_e6bn0j.jpg" />
<!-- 							<img src="https://res.cloudinary.com/casava/image/upload/v1627572346/casava-welcome-female_z8zbhz.png" /> -->
						</td>
					</tr>
					<tr>
						<td style="padding:36px 30px 42px 30px;">
							<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
								<tr>
									<td style="padding:0 0 36px 0;color:#153643;">
										<p style="margin:0 0 12px 0;font-size:16px;line-height:32px;font-family:Inter,sans-serif;">
                      Dear Madison, <br><br>
                      Welcome to Casava! We’re so excited you’ve chosen us to protect your income against unforeseen job loss.<br><br>
                      You have now started your one-month free premium and your first payment date is 15th June, 2021. Please log into your account using the details below:<br><br></p>
									</td>
								</tr>
                <tr>
                  <table style="width: 100%;background:#F5F5F4;">
                    <tr>
                      <td style="padding:40px 40px 32px;background:url('https://res.cloudinary.com/casava/image/upload/v1627572343/background-twirl_bqbpot.png') no-repeat;background-size: cover;border-radius: 16px;">
                        <p style="padding:16px;background:#ffffff;border-radius:8px;margin-bottom:16px;color:#333333">
                          <img style="vertical-align: text-bottom;padding-right: 5px" width="24" height="24" src="https://res.cloudinary.com/casava/image/upload/v1627572555/mail_tlusay.png" />
                          <span style="color:#999999;line-height:24px">Email</span>: Jane@casava.co</p>
                        <p style="padding:16px;background:#ffffff;border-radius:8px;margin-bottom:16px;color:#333333">
                          <img style="vertical-align: text-bottom;padding-right: 5px" width="24" height="24" src="https://res.cloudinary.com/casava/image/upload/v1627572578/lock_dkwsp3.png" />
                          <span style="color:#999999;line-height:24px">Temporary Password</span>: h&hdf^%hgd</p>
                        <p style="text-align:center;color: #999999">
                          <small>Please ensure you change this default password</small>
                        </p>
                      <td>
                    </tr>
                  </table>
                </tr>
                <tr>
                  <td style="padding:40px 36px 0;color:#153643;">
                    <p style="margin:0 40px 12px 0;font-size:16px;line-height:32px;font-family:Inter,sans-serif;">
                      Once you sign in, you will be asked to create a new password. You can also review your Income Protection Policy <a style="color:#FB0E7D;text-decoration:none" href="mailto:hello@casava.co">here</a> at any time. If you do have a claim or you have questions for us, don’t hesitate to reach out on <a style="color:#FB0E7D;text-decoration:none" href="mailto:hello@casava.co">hello@casava.co.</a> 
                      <br><br>You are Awesome!
                    </p>
                  </td>
                </tr>
								<tr>
									<td style="padding:0;text-align:center">
                    <button style="height:64px;border-radius:8px;background-color:#FB0E7D;border:none;width:400px; color:#ffffff;font-weight: 700;text-align:center;font-size:18px; cursor:pointer;margin:40px auto 0;">Primary</button>
									</td>
								</tr>
                <tr>
									<td style="padding:50px 40px;line-height: 24px;color:#575A65">
                    Bode Pedro <br>
                    Founder, Casava
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr style="border-color: transparent; padding-top: 30px">
						<td style="">
							<table role="presentation" style="width:672px;border-collapse:collapse;border-spacing:0;text-align:left; margin: 0 auto;">
								<tr>
									<td style="padding:0;width:50%;" align="center">
										<table role="presentation" style="padding: 32px;width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#F5F5F4;">
											<tr>
												<td style="padding:30px 0; line-height: 24px; color: #999999">
                          <p style="text-align:center;font-size:12px; max-width: 480px;margin: 0 auto;">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br><br>

Velit officia consequat duis enim velit mollit <a style="color:#FB0E7D;text-decoration:none" href="mailto:hello@casava.co">hello@casava.co<a></p>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
          <tr>
						<td>
							<table role="presentation" style="width:672px;margin: 0 auto;border-collapse:collapse;border:0;border-spacing:0;font-family:Inter,sans-serif;">
                <tr>
                  <td style="padding:30px;width:50%;" align="center">
										<table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                      <tr>
                        <td style="padding:0 0 0 20px;width:38px;">
                          <a href="http://www.twitter.com/" style="text-align: centecolor:#ffffff;height: 32px;width: 32px;border-radius:8px;background:#F5F5F4;display:inline-block"><img src="https://res.cloudinary.com/casava/image/upload/v1627575183/insta_j6d4an.png" alt="Instagram" width="12" height="12" style="height:auto;display:block;margin: 0 auto;padding-top: 10px;" /></a>
                        </td>
                        <td style="padding:0 0 0 20px;width:38px;">
                          <a href="http://www.facebook.com/" style="text-align: center;color:#ffffff;height: 32px;width: 32px;border-radius:8px;background:#F5F5F4;display:inline-block"><img src="https://res.cloudinary.com/casava/image/upload/v1627572345/twitter_hetdhi.png" alt="Twitter" width="12" height="12" style="height:auto;display:block;margin: 0 auto;height:auto;display:block;padding-top: 10px;" /></a>
                        </td>
                        <td style="padding:0 0 0 20px;width:38px;">
                          <a href="http://www.twitter.com/" style="text-align: center;color:#ffffff;height: 32px;width: 32px;border-radius:8px;background:#F5F5F4;display:inline-block"><img src="https://res.cloudinary.com/casava/image/upload/v1627575183/Vector_ob7vwk.png" alt="Linkedin" width="12" height="12" style="height:auto;display:block;height:auto;display:block;margin: 0 auto;padding-top: 10px;" /></a>
                        </td>
                        <td style="padding:0 0 0 20px;width:38px;">
                          <a style="height: 32px;width: 32px;border-radius:8px;background:#F5F5F4;display:inline-block;text-align: center" href="http://www.facebook.com/"><img style="margin: 0 auto;height:auto;padding-top: 10px;display:block;" src="https://res.cloudinary.com/casava/image/upload/v1627575183/facebook-logo_cghfze.png" alt="Facebook" width="12" height="12" /></a>
                        </td>
                      </tr>
										</table>
                    <p style="line-height:24px; color:#999999; margin-top: 40px;font-size: 12px">
                      ©2021 Casava inc. All Rights Reserved | 2972 Westheimer Rd. Illinois.<br> Don't want to receive these emails anymore? <a style="color:#FB0E7D;text-decoration: none;" href="">Unsubscribe</a>       
                    </p>
									</td>
                </tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
`
export const sendMail = async (req, res, next) => {
   const { STMP_USER, STMP_PASS } = process.env;
   console.log(STMP_PASS);
   let transporter = nodemailer.createTransport({
      service:"gmail",
      host: process.env.STMP_HOST,
      port: process.env.STMP_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
         user: STMP_USER,//process.env.STMP_USER, // generated ethereal user
         pass: STMP_PASS// process.env.STMP_PASS, // generated ethereal password
      },
   });
   let info = await transporter.sendMail({
      from: process.env.STMP_USER, // sender address
      to: req.body.email, // list of receivers
      subject: "Hello ✔", // Subject line
      html: htmlT2, // html body
   });
   console.log("Message sent: %s", info.messageId);
   res.status(200).json({ message: "The mail is sended" })
}
