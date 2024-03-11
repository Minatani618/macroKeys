
@echo off
 
if not "%~0"=="%~dp0.\%~nx0" (
     start /min cmd /c,"%~dp0.\%~nx0" %*
     exit
)

node "C:\Users\ec000376\Documents\macroKeys\customKeys\customMain.js" 7