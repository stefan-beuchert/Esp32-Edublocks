git pull

export ESPTOOL_PORT=/dev/ttyUSB0

cd esp32-micropython
cd panel
yarn
yarn run build
cd ..
cd ..
cd edublocks-micropython
yarn
yarn run build
cd ..
cd  esp32-micropython
yarn
yarn run mount-sys-linux
yarn run bundle
yarn run umount-sys-linux
sudo yarn run flash-micropython
sudo yarn run flash-sys
