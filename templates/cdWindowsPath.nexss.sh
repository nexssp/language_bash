cdw() { cd "$(wslpath "$1")"; }

# Use like 
# $Folder = C:\myfolder
# cdw $folder - will works on bas as its translate to /mnt/c/myfolder ..