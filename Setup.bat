@echo off

rem 
rem 
rem 
rem 
rem 
rem 

rem 
rem Copy shurtcut to desktop
rem 
copy CareAware.lnk C:\WINDOWS\Desktop\CareAware.lnk

rem 
rem Install calendar ctrl
rem 
regsvr32 /s Csccal2.ocx

rem 
rem Install registry access ctrl
rem 
regsvr32 /s Regeditl.ocx

rem 
rem Setup registry entries
rem 
regedit /s Co.Reg

pause

exit

