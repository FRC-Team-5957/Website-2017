cd C:\
SETLOCAL EnableDelayedExpansion
  SET IMCONV="%PROGRAMFILES%\ImageMagick\Convert"
  
  %IMCONV% -size 128x128 xc:white test.gif
set /p path2=Enter file path from root:
mogrify -path %path2% -format jpg -resize 1921x1080 -quality 92 *.jpg
mogrify -path %path2%\min -resize 360x202 *.jpg
pause