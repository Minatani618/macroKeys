cd C:\Users\ec000376\Desktop\programs\AS400_forDevSrcCodes
start getCode.bat
cd C:\Users\ec000376\Desktop\programs\AS400macro

node setClip.mjs "get USRYLIB/QRPGLESRC.AB0010 C:\Users\ec000376\Desktop\programs\AS400_forDevSrcCodes\AB0010.rpg"
node getCode.js
node paste.js
code C:\Users\ec000376\Desktop\programs\AS400_forDevSrcCodes