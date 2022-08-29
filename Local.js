var ToolBar_Supported = ToolBar_Supported ;
if (ToolBar_Supported != null && ToolBar_Supported == true)
{
	//To Turn on/off Frame support, set Frame_Supported = true/false.
	Frame_Supported = false;

	//***** Add ICP menus *****
	
	//Blank
	addICPMenu("blank", "           ", "","");
	
	// CLEAR FORM
	addICPMenu("Reset Form", "  Radiology Report  ", "","RadiologyReport.htm");
		
	// Preferences
	addICPMenu("Preferences", "  Preferences  ", "","Preferences.htm");
		
	//HELP
	addICPMenu("HelpMenu", " Help ", "","help.htm");
	addICPSubMenu("HelpMenu"," Help...","help.htm");
	addICPSubMenu("HelpMenu"," About...","about.htm");

}