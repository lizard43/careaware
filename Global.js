var ToolBar_Supported = ToolBar_Supported ;
if (ToolBar_Supported != null && ToolBar_Supported == true)
{
	//To Turn on/off Instrumentation set DoInstrumentation = true/false.
	DoInstrumentation= false;

	// Customize default MS menu color - bgColor, fontColor, mouseoverColor
	setDefaultMSMenuColor("#000000", "white", "red");

	// Customize toolbar background color
	setToolbarBGColor("white");

	// display default ICP Banner
	//setICPBanner("/shared/toolbar/images/banner.gif","/isapi/gomscom.asp?target=/","microsoft.com Home") ;
	
	// display MSCOM Banner
	setMSBanner("Co.jpg","http://www.Consulting.com/","Consulting Home") ;

	// display ADS
	//setAds("/shared/toolbar/images/ADS/ad.gif","","") ;

	//***** Add Standard Microsoft.com menus *****
	//ProductsMenu		
}
