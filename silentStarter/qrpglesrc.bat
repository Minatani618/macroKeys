
@echo off
 
if not "%~0"=="%~dp0.\%~nx0" (
     start /min cmd /c,"%~dp0.\%~nx0" %*
     exit
)

"C:\Users\ec000376\Documents\macroKeys\nodejsKicker\qrpglesrc.bat"